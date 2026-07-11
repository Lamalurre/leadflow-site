import {
  Inbox,
  Tag,
  PenLine,
  CheckCircle2,
  BarChart3,
  Send,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  ListChecks,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

type Variant =
  | "inbox"
  | "customerlead"
  | "autoreply"
  | "summary"
  | "missing"
  | "price"
  | "draft"
  | "approve"
  | "insights";

export type IllustrationData = {
  /** Free text used by customerlead (the lead itself), summary (insight line) and draft (reply preview). */
  text?: string;
  /** Overrides the missing-info checklist items. */
  missing?: string[];
};

const ICONS: Record<Variant, LucideIcon> = {
  inbox: Inbox,
  customerlead: MessageCircle,
  autoreply: ShieldCheck,
  summary: Lightbulb,
  missing: ListChecks,
  price: Tag,
  draft: PenLine,
  approve: CheckCircle2,
  insights: BarChart3,
};

const ACCENTS: Record<
  Variant,
  { text: string; bg: string; glow: string; border: string; rgb: string }
> = {
  inbox: {
    text: "text-navy",
    bg: "bg-navy",
    glow: "0 0 28px -6px rgba(74,108,247,0.55)",
    border: "border-navy/30",
    rgb: "74,108,247",
  },
  customerlead: {
    text: "text-navy",
    bg: "bg-navy",
    glow: "0 0 28px -6px rgba(74,108,247,0.55)",
    border: "border-navy/30",
    rgb: "74,108,247",
  },
  autoreply: {
    text: "text-navy",
    bg: "bg-navy",
    glow: "0 0 28px -6px rgba(74,108,247,0.55)",
    border: "border-navy/30",
    rgb: "74,108,247",
  },
  summary: {
    text: "text-amber",
    bg: "bg-amber",
    glow: "0 0 28px -6px rgba(217,146,42,0.55)",
    border: "border-amber/30",
    rgb: "217,146,42",
  },
  missing: {
    text: "text-amber",
    bg: "bg-amber",
    glow: "0 0 28px -6px rgba(217,146,42,0.55)",
    border: "border-amber/30",
    rgb: "217,146,42",
  },
  price: {
    text: "text-amber",
    bg: "bg-amber",
    glow: "0 0 28px -6px rgba(217,146,42,0.55)",
    border: "border-amber/30",
    rgb: "217,146,42",
  },
  draft: {
    text: "text-navy",
    bg: "bg-navy",
    glow: "0 0 28px -6px rgba(74,108,247,0.55)",
    border: "border-navy/30",
    rgb: "74,108,247",
  },
  approve: {
    text: "text-green",
    bg: "bg-green",
    glow: "0 0 28px -6px rgba(63,163,107,0.55)",
    border: "border-green/30",
    rgb: "63,163,107",
  },
  insights: {
    text: "text-navy",
    bg: "bg-navy",
    glow: "0 0 28px -6px rgba(74,108,247,0.55)",
    border: "border-navy/30",
    rgb: "74,108,247",
  },
};

function GridBackdrop({ rgb }: { rgb: string }) {
  return (
    <div
      className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 opacity-[0.15]"
      style={{
        backgroundImage: `linear-gradient(rgba(${rgb},0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb},0.9) 1px, transparent 1px)`,
        backgroundSize: "14px 14px",
        maskImage:
          "radial-gradient(circle at top right, black, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(circle at top right, black, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}

function InboxBody() {
  const rows = [
    { name: "Anna", w: "62%", urgent: true, price: "4 050 kr" },
    { name: "Elsa", w: "50%", urgent: false, price: "4 675 kr" },
    { name: "Adam", w: "56%", urgent: false, price: "1 750 kr" },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
          Inbox
        </span>
        <span className="rounded-full bg-amber/15 px-2 py-0.5 text-[10px] font-semibold text-amber">
          3 nya
        </span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.name}
            className={`relative overflow-hidden rounded-lg border pl-3 pr-3 py-2.5 ${
              r.urgent
                ? "border-amber/40 bg-amber/[0.07]"
                : "border-border bg-white/[0.02]"
            }`}
          >
            <span
              className={`absolute left-0 top-0 h-full w-0.5 ${
                r.urgent ? "bg-amber" : "bg-white/10"
              }`}
            />
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-ink/50">
                {r.name[0]}
              </span>
              <span className="flex-1 space-y-1.5">
                <span
                  className="block h-2 rounded-full bg-white/15"
                  style={{ width: r.w }}
                />
                <span className="block h-1.5 w-1/3 rounded-full bg-white/8" />
              </span>
              <span
                className={`shrink-0 text-[10px] font-semibold ${
                  r.urgent ? "text-amber" : "text-ink/35"
                }`}
              >
                {r.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomerLeadBody({ data }: { data?: IllustrationData }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
          Inkommande lead
        </span>
      </div>
      <div className="rounded-lg border border-border bg-white/[0.02] p-3">
        <p className="text-[11px] leading-relaxed text-ink/70">
          &quot;{data?.text || "Hej! Vi undrar om ni har möjlighet att hjälpa oss — kan ni höra av er?"}&quot;
        </p>
      </div>
    </div>
  );
}

function AutoreplyBody() {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
          Autosvar
        </span>
        <span className="flex items-center gap-1 rounded-full bg-navy/15 px-2 py-0.5 text-[10px] font-semibold text-navy">
          <ShieldCheck size={11} />
          Skickat direkt
        </span>
      </div>
      <div className="rounded-lg border border-border bg-white/[0.02] p-3">
        <p className="text-[11px] leading-relaxed text-ink/60">
          &quot;Tack för ditt meddelande! Vi återkommer inom kort.&quot;
        </p>
      </div>
      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-ink/40">
        <Send size={11} className="text-navy/60" />
        Skickat automatiskt — alltid samma säkra text
      </div>
    </div>
  );
}

function SummaryBody({ data }: { data?: IllustrationData }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
          Sammanfattning
        </span>
      </div>
      <div className="space-y-2 rounded-lg border border-border bg-white/[0.02] p-3">
        <span className="block h-2 w-[92%] rounded-full bg-white/15" />
        <span className="block h-2 w-[78%] rounded-full bg-white/12" />
        <span className="block h-2 w-[55%] rounded-full bg-white/10" />
      </div>
      <div className="mt-2.5 flex items-start gap-1.5 rounded-lg border border-amber/25 bg-amber/[0.07] px-3 py-2">
        <Lightbulb size={13} className="mt-0.5 shrink-0 text-amber" />
        <span className="text-[11px] leading-snug text-ink/60">
          {data?.text || "Kunden har bett om snabbt svar"}
        </span>
      </div>
    </div>
  );
}

function MissingBody({ data }: { data?: IllustrationData }) {
  const items = data?.missing?.length ? data.missing : ["Datum för jobbet", "Kontaktuppgifter"];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
          Saknad information
        </span>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 rounded-lg border border-amber/25 bg-amber/[0.07] px-3 py-2.5"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
            <span className="text-[11px] text-ink/70">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceBody() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-2">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="var(--color-amber)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="264"
            strokeDashoffset="55"
          />
        </svg>
        <span
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber/30 bg-amber/[0.1] text-amber"
          style={{ boxShadow: ACCENTS.price.glow }}
        >
          <Tag size={24} strokeWidth={1.5} />
        </span>
      </div>
      <div>
        <p className="text-center font-serif text-2xl font-medium text-amber">
          ~4 050 kr
        </p>
        <p className="mt-0.5 text-center text-[11px] text-ink/40">
          beräknat utifrån din prislista
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-amber/30 bg-amber/[0.08] px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
        <span className="text-[11px] font-semibold text-amber">
          Hög prioritet
        </span>
      </div>
    </div>
  );
}

function DraftBody({ data }: { data?: IllustrationData }) {
  const lines = ["94%", "80%", "88%", "42%"];
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-ink/50">
          A
        </span>
        <span className="h-2 w-20 rounded-full bg-white/15" />
        <span className="ml-auto rounded-full bg-navy/15 px-2 py-0.5 text-[10px] font-semibold text-navy">
          Utkast
        </span>
      </div>
      {data?.text ? (
        <div className="rounded-lg border border-border bg-white/[0.02] p-3">
          <p className="text-[11px] leading-relaxed text-ink/70">{data.text}</p>
        </div>
      ) : (
        <div className="space-y-2.5 rounded-lg border border-border bg-white/[0.02] p-3">
          {lines.map((w, i) => (
            <span
              key={i}
              className="block h-2.5 rounded-full bg-white/12"
              style={{ width: w, opacity: 1 - i * 0.12 }}
            />
          ))}
          <span className="mt-1 inline-flex items-center gap-1">
            <span className="h-4 w-0.5 animate-pulse bg-navy" />
            <PenLine size={12} strokeWidth={2} className="text-navy/70" />
          </span>
        </div>
      )}
    </div>
  );
}

function ApproveBody() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-2">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="pulse-glow absolute inset-0 rounded-full border border-green/25" />
        <span className="absolute inset-2 rounded-full border border-green/35" />
        <span
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-green text-white"
          style={{ boxShadow: ACCENTS.approve.glow }}
        >
          <CheckCircle2 size={26} strokeWidth={1.75} />
        </span>
        <Send
          size={14}
          strokeWidth={2}
          className="absolute -right-1 -top-1 rotate-45 text-green/70"
        />
      </div>
      <div className="w-full space-y-1.5 rounded-lg border border-green/25 bg-green/[0.06] px-3 py-2.5">
        <div className="flex items-center gap-1.5 text-[11px] text-ink/60">
          <CheckCircle2 size={12} className="text-green" />
          Pris bekräftat
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-ink/60">
          <CheckCircle2 size={12} className="text-green" />
          Tonen matchar
        </div>
      </div>
    </div>
  );
}

function InsightsBody() {
  const bars = [30, 60, 42, 78, 50, 65];
  return (
    <div className="flex flex-col gap-4 py-1">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
          Svarstid
        </span>
        <span className="flex items-center gap-1 text-[11px] font-semibold text-green">
          <TrendingUp size={12} />
          +18%
        </span>
      </div>
      <div className="flex h-20 items-end justify-between gap-2">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-sm ${
              i === 3 ? "bg-navy" : "bg-white/12"
            }`}
            style={{
              height: `${h}%`,
              boxShadow: i === 3 ? ACCENTS.insights.glow : undefined,
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="h-2 w-16 rounded-full bg-white/10" />
        <span className="text-xs font-medium text-navy">100%</span>
      </div>
    </div>
  );
}

const BODIES: Record<Variant, (props: { data?: IllustrationData }) => React.ReactElement> = {
  inbox: InboxBody,
  customerlead: CustomerLeadBody,
  autoreply: AutoreplyBody,
  summary: SummaryBody,
  missing: MissingBody,
  price: PriceBody,
  draft: DraftBody,
  approve: ApproveBody,
  insights: InsightsBody,
};

export default function StepIllustration({
  variant,
  rotate = 0,
  className = "",
  data,
}: {
  variant: Variant;
  rotate?: number;
  className?: string;
  data?: IllustrationData;
}) {
  const Icon = ICONS[variant];
  const accent = ACCENTS[variant];
  const Body = BODIES[variant];

  return (
    <div className={`relative w-full max-w-sm ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl border ${accent.border} bg-ivory-card p-6 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)]`}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <GridBackdrop rgb={accent.rgb} />
        <div className="relative">
          <Body data={data} />
        </div>
      </div>
      <span
        className={`absolute -top-4 -right-4 flex h-11 w-11 items-center justify-center rounded-full ${accent.bg} text-white ring-4 ring-ivory`}
        style={{ boxShadow: accent.glow, transform: `rotate(${rotate}deg)` }}
      >
        <Icon size={20} strokeWidth={1.75} />
      </span>
    </div>
  );
}
