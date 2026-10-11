import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy";

  return (
    <Link
      href="/"
      className={clsx("group inline-flex items-center gap-2", className)}
      aria-label="BrainApp Media home"
    >
      <span
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal shadow-sm"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy" fill="currentColor">
          <path d="M12 3a4 4 0 0 0-4 4v1.5H6.5A3.5 3.5 0 0 0 3 12v5.5A3.5 3.5 0 0 0 6.5 21h11A3.5 3.5 0 0 0 21 17.5V12a3.5 3.5 0 0 0-3.5-3.5H16V7a4 4 0 0 0-4-4zm0 2a2 2 0 0 1 2 2v2h-4V7a2 2 0 0 1 2-2z" />
        </svg>
      </span>
      <span className={clsx("flex flex-col leading-none", text)}>
        <span className="text-lg font-bold tracking-tight">
          Brain<span className="text-electric">App</span>
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-80">
          Media
        </span>
      </span>
    </Link>
  );
}
