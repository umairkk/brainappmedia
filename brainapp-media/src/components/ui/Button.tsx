import Link from "next/link";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

const variants = {
  primary:
    "bg-electric text-white hover:bg-[#1d4ed8] shadow-sm shadow-electric/25",
  secondary:
    "bg-white text-navy border border-navy/15 hover:border-electric hover:text-electric",
  ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10",
  teal: "bg-teal text-navy hover:bg-[#0d9488] text-navy font-semibold",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  href?: string;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  href,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:opacity-50",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
