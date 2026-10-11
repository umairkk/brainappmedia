"use client";

import Link from "next/link";
import { serviceGroups } from "@/data/navigation";

const items = serviceGroups.flatMap((g) => g.links);

export function ServiceMarquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-navy/10 bg-navy py-4 text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent" />
      <div className="flex w-max animate-marquee gap-8 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4">
        {doubled.map((item, i) => (
          <Link
            key={`${item.href}-${i}`}
            href={item.href}
            className="pointer-events-auto flex shrink-0 items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-brand"
          >
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
