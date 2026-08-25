"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";

const CONTACT_EMAIL = "kenshin@pillarwebagency.com";

type Status = "idle" | "loading" | "success" | "error";

export default function FinalCta() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-bg py-28 md:py-40">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(185,151,95,0.09) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-black uppercase leading-[1] tracking-tight text-ink">
              <SplitText text="Get Found." />
              <br />
              <SplitText text="Get Chosen." delay={0.15} />
            </h2>

            <Reveal delay={0.35} className="mt-10">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group inline-flex items-center gap-3 border-b border-line pb-2 text-lg text-muted transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                {CONTACT_EMAIL}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 border-t border-line pt-10 lg:pt-2">
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  Tell us about your business
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="resize-none border-b border-line bg-transparent py-3 text-lg text-ink outline-none transition-colors placeholder:text-faint focus:border-accent"
                  placeholder="What do you do, and where do you want to be found?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group mt-2 inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.08em] text-bg transition-colors duration-300 hover:bg-accent-soft disabled:opacity-60"
              >
                {status === "loading"
                  ? "Sending…"
                  : status === "success"
                    ? "Message Sent"
                    : "Start a Project"}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>

              {status === "success" && (
                <p className="text-sm text-accent">
                  Thanks — we&rsquo;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-muted">
                  Something went wrong. Email us directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-b border-line bg-transparent py-3 text-lg text-ink outline-none transition-colors placeholder:text-faint focus:border-accent"
      />
    </div>
  );
}
