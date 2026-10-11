import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  variant?: "default" | "on-dark";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "default", className, priority }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx("inline-flex shrink-0 items-center", className)}
      aria-label="BrainApp Media home"
    >
      <span
        className={clsx(
          "relative block leading-none",
          variant === "on-dark" && "rounded-xl bg-white px-3 py-2 shadow-sm",
        )}
      >
        <Image
          src="/brainapp-logo.png"
          alt="BrainApp Media"
          width={500}
          height={500}
          priority={priority}
          className="h-10 w-auto max-w-[min(100%,220px)] object-contain object-left md:h-11 md:max-w-[240px]"
        />
      </span>
    </Link>
  );
}
