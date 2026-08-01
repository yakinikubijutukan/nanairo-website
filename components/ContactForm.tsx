"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD_CLASS =
  "peer w-full border-b border-sumi/20 bg-transparent py-3 font-body text-base text-sumi placeholder-transparent outline-none transition-colors duration-300 focus:border-transparent";

const LABEL_CLASS =
  "pointer-events-none absolute left-0 top-3 font-body text-base text-stone transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:tracking-widest2 peer-focus:text-sumi peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-widest2";

function Field({
  id,
  label,
  type = "text",
  required = true,
  as = "input",
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
}) {
  return (
    <div className="group relative">
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={4}
          placeholder={label}
          className={`${FIELD_CLASS} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder={label}
          className={FIELD_CLASS}
        />
      )}
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-thread transition-transform duration-500 ease-premium peer-focus:scale-x-100" />
    </div>
  );
}

export default function ContactForm({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const f = dict.contact.form;
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = { ...Object.fromEntries(new FormData(form).entries()), locale };

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
  };

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <p className="font-serif text-3xl italic text-sumi">{f.successTitle}</p>
        <p className="mx-auto mt-4 max-w-sm font-body text-sm text-stone">{f.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Field id="name" label={f.name} />
        <Field id="company" label={f.company} />
        <Field id="country" label={f.country} />
        <Field id="category" label={f.category} />
      </div>
      <Field id="email" label={f.email} type="email" />
      <Field id="message" label={f.message} as="textarea" />

      <div className="flex items-center gap-6 pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-3 rounded-full bg-sumi px-8 py-4 font-body text-sm tracking-wide text-washi transition-opacity duration-300 hover:opacity-90 disabled:opacity-50"
        >
          {status === "submitting" ? f.sending : f.send}
        </button>
        {status === "error" ? (
          <span className="font-body text-sm text-thread-rust">{f.error}</span>
        ) : null}
      </div>
    </form>
  );
}
