"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ImageRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={clsx("relative overflow-hidden rounded-2xl", className)}>
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          className={clsx("h-full w-full object-cover", imageClassName)}
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <motion.div
      className={clsx("relative overflow-hidden rounded-2xl", className)}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0 z-10 bg-brand origin-left"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          className={clsx("h-full w-full object-cover", imageClassName)}
          sizes={sizes}
          priority={priority}
        />
      </motion.div>
    </motion.div>
  );
}
