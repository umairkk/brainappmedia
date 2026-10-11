"use client";

import clsx from "clsx";
import { useId, useState } from "react";

export type AccordionItem = { question: string; answer: string };

export function Accordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={clsx("divide-y divide-navy/10 rounded-xl border border-navy/10 bg-white", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy transition-colors hover:text-electric"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                {item.question}
                <span
                  className={clsx(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-light-bg text-electric transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={clsx(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-body/85 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
