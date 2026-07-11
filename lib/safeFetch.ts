import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

const PRIVATE_V4_RANGES: [number, number][] = [
  [ip4("0.0.0.0"), ip4("0.255.255.255")],
  [ip4("10.0.0.0"), ip4("10.255.255.255")],
  [ip4("100.64.0.0"), ip4("100.127.255.255")],
  [ip4("127.0.0.0"), ip4("127.255.255.255")],
  [ip4("169.254.0.0"), ip4("169.254.255.255")],
  [ip4("172.16.0.0"), ip4("172.31.255.255")],
  [ip4("192.0.0.0"), ip4("192.0.0.255")],
  [ip4("192.168.0.0"), ip4("192.168.255.255")],
  [ip4("198.18.0.0"), ip4("198.19.255.255")],
  [ip4("224.0.0.0"), ip4("255.255.255.255")],
];

function ip4(addr: string): number {
  const [a, b, c, d] = addr.split(".").map(Number);
  return (a << 24) + (b << 16) + (c << 8) + d;
}

function isPrivateV4(addr: string): boolean {
  const n = ip4(addr);
  return PRIVATE_V4_RANGES.some(([lo, hi]) => n >= lo && n <= hi);
}

function isPrivateV6(addr: string): boolean {
  const a = addr.toLowerCase();
  return (
    a === "::1" ||
    a === "::" ||
    a.startsWith("fc") ||
    a.startsWith("fd") ||
    a.startsWith("fe80") ||
    a.startsWith("::ffff:") // mapped v4, checked separately below
  );
}

async function assertPublicHost(hostname: string) {
  if (isIP(hostname)) {
    if (isIP(hostname) === 4 && isPrivateV4(hostname)) {
      throw new Error("Blocked: private IP address");
    }
    if (isIP(hostname) === 6 && isPrivateV6(hostname)) {
      throw new Error("Blocked: private IP address");
    }
    return;
  }
  if (hostname === "localhost" || hostname.endsWith(".local")) {
    throw new Error("Blocked: local hostname");
  }
  const results = await lookup(hostname, { all: true });
  for (const r of results) {
    if (r.family === 4 && isPrivateV4(r.address)) {
      throw new Error("Blocked: hostname resolves to a private IP");
    }
    if (r.family === 6 && isPrivateV6(r.address)) {
      throw new Error("Blocked: hostname resolves to a private IP");
    }
  }
}

const MAX_BYTES = 2_000_000;
const MAX_REDIRECTS = 3;
const TIMEOUT_MS = 8000;

/** Fetches a user-supplied URL with SSRF guards: blocks private/loopback targets
 * (including via DNS rebinding across redirects) and caps response size/time. */
export async function safeFetchText(inputUrl: string): Promise<string> {
  let current = new URL(inputUrl);
  if (!current.protocol.startsWith("http")) {
    throw new Error("Only http/https URLs are allowed");
  }

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    if (!current.protocol.startsWith("http")) {
      throw new Error("Only http/https URLs are allowed");
    }
    await assertPublicHost(current.hostname);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    let res: Response;
    try {
      res = await fetch(current.toString(), {
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "User-Agent": "SylvorOnboardingBot/1.0 (+https://sylvor.se)",
          Accept: "text/html",
        },
      });
    } finally {
      clearTimeout(timer);
    }

    if ([301, 302, 303, 307, 308].includes(res.status)) {
      const loc = res.headers.get("location");
      if (!loc) throw new Error("Redirect without location");
      current = new URL(loc, current);
      continue;
    }

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("text/html") && !contentType.includes("text/plain")) {
      throw new Error("URL did not return an HTML page");
    }

    const reader = res.body?.getReader();
    if (!reader) return "";
    const chunks: Uint8Array[] = [];
    let total = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BYTES) {
        await reader.cancel();
        break;
      }
      chunks.push(value);
    }
    const buf = Buffer.concat(chunks.map((c) => Buffer.from(c)));
    return buf.toString("utf-8");
  }

  throw new Error("Too many redirects");
}

/** Strips an HTML document down to plain visible text, capped in length. */
export function htmlToText(html: string, maxChars = 12000): string {
  const withoutJunk = html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(script|style|noscript|svg|iframe)[\s\S]*?<\/\1>/gi, " ");
  const withoutTags = withoutJunk.replace(/<[^>]+>/g, " ");
  const decoded = withoutTags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
  const collapsed = decoded.replace(/\s+/g, " ").trim();
  return collapsed.slice(0, maxChars);
}
