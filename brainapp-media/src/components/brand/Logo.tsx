import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  variant?: "default" | "on-dark";
  size?: "header" | "footer" | "hero" | "default";
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  header: "h-7 w-auto max-w-[128px] sm:h-8 sm:max-w-[148px] lg:h-9 lg:max-w-[168px]",
  footer: "h-9 w-auto max-w-[160px] md:h-10 md:max-w-[180px]",
  hero: "h-11 w-auto max-w-[200px] md:h-12 md:max-w-[220px]",
  default: "h-9 w-auto max-w-[168px] md:h-10 md:max-w-[188px]",
};

export function Logo({
  variant = "default",
  size = "default",
  className,
  priority,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx("inline-flex shrink-0 items-center", className)}
      aria-label="BrainApp Media home"
    >
      <span
        className={clsx(
          "relative block leading-none",
          variant === "on-dark" && "rounded-lg bg-white px-2 py-1 shadow-sm",
        )}
      >
        <Image
          src="/brainapp-logo.png"
          alt="BrainApp Media"
          width={500}
          height={500}
          priority={priority}
          className={clsx("object-contain object-left", sizeClasses[size])}
        />
      </span>
    </Link>
  );
}
