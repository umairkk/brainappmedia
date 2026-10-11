"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { industryImages } from "@/data/home-images";

type Industry = { title: string; href: string; description: string };

export function IndustryCardsAnimated({ items }: { items: Industry[] }) {
  const reduce = useReducedMotion();

  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((ind, i) => {
        const img = industryImages[ind.href];
        return (
          <motion.li
            key={ind.href}
            className="list-none"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={ind.href}
              className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:border-brand/40 hover:shadow-lg"
            >
              {img && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-lg font-bold text-white">
                    {ind.title}
                  </span>
                </div>
              )}
              <div className="p-4">
                <p className="text-sm text-body/80">{ind.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-navy transition group-hover:text-brand">
                  Explore industry →
                </span>
              </div>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}
