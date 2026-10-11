"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { serviceGroups } from "@/data/navigation";

export function HomeGrowthEngine() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Full service</p>
          <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">
            See how each piece of your program can work together
          </h2>
          <p className="mt-4 text-body/80">
            Connected strategies compound when messaging, tracking, and creative stay aligned.
          </p>
        </div>

        <div className="relative mx-auto mt-14 hidden max-w-lg md:block">
          <div className="relative aspect-square">
            {!reduce && (
              <motion.div
                className="absolute inset-10 rounded-full border-2 border-dashed border-brand/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl bg-navy px-8 py-6 text-center text-white shadow-xl">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">Center</p>
                <p className="mt-1 text-xl font-black">Your business goals</p>
              </div>
            </div>
            {serviceGroups.map((group, i) => {
              const angles = [270, 0, 90, 180];
              const radius = 46;
              const rad = (angles[i] * Math.PI) / 180;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              return (
                <motion.div
                  key={group.title}
                  className="absolute w-[44%] -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={reduce ? false : { opacity: 0, scale: 0.88 }}
                  whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href="/services"
                    className="block rounded-xl border border-navy/10 bg-white p-4 text-center shadow-md transition hover:border-brand hover:shadow-lg"
                  >
                    <p className="text-sm font-black text-navy">{group.title}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="rounded-2xl border border-navy/10 bg-light-bg p-6 transition hover:border-brand/40 hover:shadow-md"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <h3 className="text-sm font-black uppercase tracking-wide text-brand">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-body/85 hover:text-navy hover:underline">
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
