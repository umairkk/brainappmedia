"use client";

import { motion, useReducedMotion } from "framer-motion";

export function TextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text} style={{ perspective: 800 }}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.28em] will-change-transform"
          initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.65,
            delay: delay + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
