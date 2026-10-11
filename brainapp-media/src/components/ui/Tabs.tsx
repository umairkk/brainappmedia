"use client";

import clsx from "clsx";
import { useId, useState } from "react";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const tablistId = useId();

  const current = items.find((t) => t.id === active) ?? items[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Solutions"
        className="flex flex-wrap gap-2 rounded-xl bg-light-bg p-2"
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
              "rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200",
              active === tab.id
                ? "bg-white text-navy shadow-sm"
                : "text-body/70 hover:text-navy",
            )}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${tablistId}-panel-${current.id}`}
        aria-labelledby={`${tablistId}-${current.id}`}
        className="mt-8 rounded-2xl border border-navy/10 bg-white p-6 md:p-10 shadow-sm"
      >
        {current.content}
      </div>
    </div>
  );
}
