import Link from "next/link";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

const variants = {
  primary:
    "bg-brand text-navy hover:bg-[#e6ac00] shadow-sm shadow-brand/30 hover:shadow-brand/40",
  secondary:
    "bg-white text-navy border border-navy/15 hover:border-brand hover:text-navy",
  ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10",
  teal: "bg-brand text-navy hover:bg-[#e6ac00] font-bold",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]",
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
