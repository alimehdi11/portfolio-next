"use client";

import { useState, type FormEvent } from "react";
import { FaCircleCheck, FaPaperPlane } from "react-icons/fa6";
import { budgetRanges, inquiryTypes } from "@/data/portfolio";
import { validateContact, type ContactErrors, type ContactPayload } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-dim">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[0.72rem] text-pink">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as unknown as ContactPayload;

    const v = validateContact(data);
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        throw new Error("Request failed");
      }
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  }

  const a11y = (k: keyof ContactPayload) => ({
    id: k,
    name: k,
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full Name" error={errors.name}>
          <input {...a11y("name")} type="text" autoComplete="name" placeholder="John Smith" className="field" />
        </Field>
        <Field id="email" label="Email Address" error={errors.email}>
          <input {...a11y("email")} type="email" autoComplete="email" placeholder="john@company.com" className="field" />
        </Field>
      </div>

      <Field id="inquiry" label="Inquiry Type">
        <select {...a11y("inquiry")} defaultValue="" className="field">
          <option value="">Select inquiry type</option>
          {inquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="company" label="Company / Project">
          <input {...a11y("company")} type="text" placeholder="Startup or project name" className="field" />
        </Field>
        <Field id="budget" label="Budget Range">
          <select {...a11y("budget")} defaultValue="" className="field">
            <option value="">Select budget</option>
            {budgetRanges.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Project Details" error={errors.message}>
        <textarea
          {...a11y("message")}
          rows={5}
          placeholder="Describe your project, tech requirements, timeline..."
          className="field min-h-[110px] resize-y"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`btn-primary w-full ${status === "sent" ? "!bg-gradient-to-br !from-emerald-500 !to-emerald-600" : ""}`}
      >
        {status === "sending" && "Sending..."}
        {status === "sent" && (
          <>
            <FaCircleCheck /> Message Sent!
          </>
        )}
        {(status === "idle" || status === "error") && (
          <>
            <FaPaperPlane /> Send Message
          </>
        )}
      </button>

      <p role="status" aria-live="polite" className="text-center font-mono text-[0.72rem] text-dim">
        {status === "error"
          ? "Something went wrong — please try again or email me directly."
          : "Secure & confidential — replies within 24 hours."}
      </p>
    </form>
  );
}
