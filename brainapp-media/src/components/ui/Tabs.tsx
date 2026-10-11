"use client";

import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const tablistId = useId();
  const reduce = useReducedMotion();

  const current = items.find((t) => t.id === active) ?? items[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Solutions"
        className="relative flex flex-wrap gap-2 rounded-xl bg-light-bg p-2"
      >
        {items.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            type="button"
            id={`${tablistId}-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`${tablistId}-panel-${tab.id}`}
            className={clsx(
              "relative z-10 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-300",
              active === tab.id ? "text-navy" : "text-body/70 hover:text-navy",
            )}
            onClick={() => setActive(tab.id)}
          >
            {active === tab.id && !reduce && (
              <motion.span
                layoutId={`${tablistId}-pill`}
                className="absolute inset-0 rounded-lg bg-white shadow-sm ring-1 ring-navy/5"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {active === tab.id && reduce && (
              <span className="absolute inset-0 rounded-lg bg-white shadow-sm" />
            )}
            <span className="relative">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="relative mt-8 min-h-[12rem] overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            role="tabpanel"
            id={`${tablistId}-panel-${current.id}`}
            aria-labelledby={`${tablistId}-${current.id}`}
            initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduce ? undefined : { opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {current.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
