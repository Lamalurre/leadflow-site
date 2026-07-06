"use client";

import { useState } from "react";

// TODO: replace with real contact email
const CONTACT_EMAIL = "hello@example.com";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      businessType: (form.elements.namedItem("businessType") as HTMLInputElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          Ready to stop losing leads to slow replies?
        </h2>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-6 inline-block rounded-full border border-ink/20 px-7 py-3.5 text-base font-medium text-ink transition hover:border-ink/40 hover:bg-ink/5"
        >
          Book a free call
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-5 rounded-2xl border border-border bg-ivory-card p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-bronze"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-bronze"
            />
          </div>
        </div>
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium">
            Business type
          </label>
          <input
            id="businessType"
            name="businessType"
            type="text"
            placeholder="e.g. residential cleaning, HVAC, marketing agency"
            className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-bronze"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-bronze"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-bronze px-7 py-3.5 text-base font-medium text-white transition hover:bg-bronze-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        {status === "success" && (
          <p className="text-center text-sm text-bronze-dark">
            Thanks — your message has been sent. We&apos;ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-700">
            Something went wrong. Please try again or email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        )}
      </form>
    </section>
  );
}
