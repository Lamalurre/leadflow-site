"use client";

import { useState } from "react";
import Reveal from "./motion/Reveal";

const CONTACT_EMAIL = "Hello.leadflow1@outlook.com";

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
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-12">
      <Reveal className="relative">
        <div
          className="absolute inset-0 rounded-2xl border border-navy/20 bg-ivory-card/60"
          style={{ transform: "rotate(-2deg)" }}
          aria-hidden="true"
        />
        <form
          onSubmit={handleSubmit}
          className="relative space-y-5 rounded-2xl border border-border bg-ivory-card p-8 shadow-[0_25px_50px_-25px_rgba(0,0,0,0.7)]"
        >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Namn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-navy"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              E-post
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-navy"
            />
          </div>
        </div>
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium">
            Bransch
          </label>
          <input
            id="businessType"
            name="businessType"
            type="text"
            placeholder="t.ex. bygg, VVS, el, målare"
            className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-navy"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-navy"
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-navy px-7 py-3.5 text-base font-medium text-white shadow-[0_0_25px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark disabled:opacity-60"
        >
          {status === "submitting" ? "Skickar..." : "Skicka meddelande"}
        </button>
        {status === "success" && (
          <p className="text-center text-sm text-green">
            Tack — ditt meddelande har skickats. Vi hör av oss snart.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-700">
            Något gick fel. Försök igen eller mejla oss på{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        )}
        </form>
      </Reveal>
    </section>
  );
}
