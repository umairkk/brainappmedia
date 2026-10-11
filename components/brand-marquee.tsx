"use client";

import { motion } from "framer-motion";

const brands = [
  "Google",
  "Meta",
  "Microsoft",
  "Apple",
  "Amazon",
  "NVIDIA",
  "OpenAI",
  "Adobe",
];

function BrandMark({ name }: { name: string }) {
  if (name === "Microsoft") {
    return (
      <span className="inline-flex items-center gap-2.5">
        <span className="grid grid-cols-2 gap-0.5" aria-hidden="true">
          <span className="size-2.5 bg-current" />
          <span className="size-2.5 bg-current" />
          <span className="size-2.5 bg-current" />
          <span className="size-2.5 bg-current" />
        </span>
        <span className="text-lg font-medium tracking-tight">{name}</span>
      </span>
    );
  }

  return <span className="text-lg font-medium tracking-tight">{name}</span>;
}

export function BrandMarquee() {
  const track = [...brands, ...brands];

  return (
    <div className="relative border-t border-white/10 bg-[#1a0f2e]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:gap-10 lg:px-10">
        <p className="shrink-0 text-[11px] font-semibold tracking-[0.22em] text-white/45 uppercase">
          Trusted by visionaries at
        </p>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex w-max items-center gap-12 md:gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {track.map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="shrink-0 text-white/70 transition-colors hover:text-white"
                aria-hidden={index >= brands.length}
              >
                <BrandMark name={name} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
