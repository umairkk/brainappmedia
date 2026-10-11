"use client";

import clsx from "clsx";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "invalid" | "validated";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setState("invalid");
      setMessage("Please complete the required fields.");
      return;
    }
    void Object.fromEntries(new FormData(form).entries());
    setState("validated");
    setMessage(
      "Your message passed validation. Online delivery is not connected yet—your team can wire this form to email or a CRM when contact channels are ready.",
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-body shadow-sm transition focus:border-electric focus:ring-2 focus:ring-electric/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Full name *
          <input name="fullName" required className={clsx(fieldClass, "mt-1")} autoComplete="name" />
        </label>
        <label className="block text-sm font-medium text-navy">
          Email *
          <input
            name="email"
            type="email"
            required
            className={clsx(fieldClass, "mt-1")}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-navy">
        Subject *
        <input name="subject" required className={clsx(fieldClass, "mt-1")} />
      </label>
      <label className="block text-sm font-medium text-navy">
        Message *
        <textarea name="message" required rows={5} className={clsx(fieldClass, "mt-1 resize-y")} />
      </label>

      {message && (
        <div
          role="status"
          className={clsx(
            "rounded-lg border px-4 py-3 text-sm leading-relaxed",
            state === "validated"
              ? "border-teal/40 bg-teal/10 text-navy"
              : "border-amber-300 bg-amber-50 text-body",
          )}
        >
          {message}
        </div>
      )}

      <Button type="submit" variant="primary">
        Send message
      </Button>
    </form>
  );
}
