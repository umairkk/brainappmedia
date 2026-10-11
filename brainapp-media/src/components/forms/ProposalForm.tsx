"use client";

import clsx from "clsx";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { serviceGroups } from "@/data/navigation";

const serviceOptions = serviceGroups.flatMap((g) =>
  g.links.map((l) => ({ value: l.href, label: l.title })),
);

const budgetOptions = [
  "Not sure yet",
  "Under $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Monthly management (under $1,500/mo)",
  "Monthly management ($1,500 – $5,000/mo)",
  "Monthly management ($5,000+/mo)",
];

const timeframeOptions = [
  "Not sure yet",
  "As soon as possible",
  "Within 1–2 months",
  "Within 3–6 months",
  "Exploring for later",
];

type FormState = "idle" | "invalid" | "validated" | "error";

export function ProposalForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setState("invalid");
      setMessage("Please complete the required fields marked below.");
      return;
    }

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    const services = data.getAll("services");

    if (services.length === 0) {
      setState("invalid");
      setMessage("Select at least one service, or choose “Not sure yet” if you are exploring options.");
      return;
    }

    // No backend endpoint is configured for this deployment.
    void payload;
    setState("validated");
    setMessage(
      "Your information passed validation. Online delivery is not connected yet—your team can wire this form to email or a CRM. Save your answers locally or revisit this page after submission is enabled.",
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-body shadow-sm transition focus:border-electric focus:ring-2 focus:ring-electric/20";

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx("space-y-5", compact && "space-y-4")}
      noValidate
    >
      <div className={clsx("grid gap-5", compact ? "md:grid-cols-1" : "md:grid-cols-2")}>
        <label className="block text-sm font-medium text-navy">
          Full name *
          <input name="fullName" required className={clsx(fieldClass, "mt-1")} autoComplete="name" />
        </label>
        <label className="block text-sm font-medium text-navy">
          Business name *
          <input name="businessName" required className={clsx(fieldClass, "mt-1")} />
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
        <label className="block text-sm font-medium text-navy">
          Phone <span className="font-normal text-body/60">(optional)</span>
          <input name="phone" type="tel" className={clsx(fieldClass, "mt-1")} autoComplete="tel" />
        </label>
        <label className={clsx("block text-sm font-medium text-navy", !compact && "md:col-span-2")}>
          Website <span className="font-normal text-body/60">(optional)</span>
          <input name="website" type="url" className={clsx(fieldClass, "mt-1")} placeholder="https://" />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-navy">
          Services interested in * <span className="font-normal text-body/60">(select all that apply)</span>
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <label className="flex items-center gap-2 text-sm text-body">
            <input type="checkbox" name="services" value="not-sure" className="rounded border-navy/30" />
            Not sure yet
          </label>
          {serviceOptions.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-body">
              <input type="checkbox" name="services" value={opt.value} className="rounded border-navy/30" />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-medium text-navy">
        Main business goal *
        <textarea
          name="goal"
          required
          rows={compact ? 3 : 4}
          className={clsx(fieldClass, "mt-1 resize-y")}
          placeholder="Example: increase qualified leads from paid search in our service area."
        />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Estimated project or monthly budget *
          <select name="budget" required className={clsx(fieldClass, "mt-1")} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-navy">
          Desired starting timeframe *
          <select name="timeframe" required className={clsx(fieldClass, "mt-1")} defaultValue="">
            <option value="" disabled>
              Select timeframe
            </option>
            {timeframeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-navy">
        Project details *
        <textarea
          name="details"
          required
          rows={compact ? 4 : 5}
          className={clsx(fieldClass, "mt-1 resize-y")}
          placeholder="Share context about your business, current marketing, and what success looks like."
        />
      </label>

      <p className="text-xs text-body/70 leading-relaxed">
        Ad platform spend (Google, Meta, Microsoft, etc.) is separate from management and creative fees
        unless your proposal explicitly includes a media budget line item.
      </p>

      {message && (
        <div
          role="status"
          className={clsx(
            "rounded-lg border px-4 py-3 text-sm leading-relaxed",
            state === "validated"
              ? "border-brand/40 bg-brand/10 text-navy"
              : "border-amber-300 bg-amber-50 text-body",
          )}
        >
          {message}
        </div>
      )}

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Submit proposal request
      </Button>
    </form>
  );
}
