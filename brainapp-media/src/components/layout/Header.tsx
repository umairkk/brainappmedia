"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import {
  companyLinks,
  industryLinks,
  serviceGroups,
} from "@/data/navigation";

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "rounded-md px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "text-electric bg-electric/5"
          : "text-body hover:text-electric",
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setIndustriesOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isServicesActive = pathname.startsWith("/services");
  const isIndustriesActive = pathname.startsWith("/industries");

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Logo priority />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={clsx(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isServicesActive || servicesOpen
                  ? "text-electric bg-electric/5"
                  : "text-body hover:text-electric",
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <span className="text-xs" aria-hidden>
                ▾
              </span>
            </button>
            <div
              className={clsx(
                "absolute left-1/2 top-full z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition-all duration-200 origin-top",
                servicesOpen
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none scale-[0.98] opacity-0",
              )}
            >
              <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-xl shadow-navy/10">
                <div className="mb-4 flex items-center justify-between gap-4 border-b border-navy/5 pb-4">
                  <p className="text-sm font-semibold text-navy">
                    Full-service marketing, web, and creative
                  </p>
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-electric hover:underline"
                  >
                    View all services →
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {serviceGroups.map((group) => (
                    <div key={group.title}>
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-brand">
                        {group.title}
                      </p>
                      <ul className="space-y-2">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="group block rounded-lg p-2 transition hover:bg-light-bg"
                            >
                              <span className="block text-sm font-semibold text-navy group-hover:text-electric">
                                {link.title}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-body/65">
                                {link.description}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              type="button"
              className={clsx(
                "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isIndustriesActive || industriesOpen
                  ? "text-electric bg-electric/5"
                  : "text-body hover:text-electric",
              )}
              aria-expanded={industriesOpen}
              onClick={() => setIndustriesOpen((v) => !v)}
            >
              Industries
              <span className="text-xs" aria-hidden>
                ▾
              </span>
            </button>
            <div
              className={clsx(
                "absolute left-0 top-full z-50 w-80 pt-3 transition-all duration-200",
                industriesOpen
                  ? "pointer-events-auto opacity-100 translate-y-0"
                  : "pointer-events-none opacity-0 -translate-y-1",
              )}
            >
              <ul className="rounded-xl border border-navy/10 bg-white p-2 shadow-xl">
                {industryLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2.5 transition hover:bg-light-bg"
                    >
                      <span className="block text-sm font-semibold text-navy">
                        {item.title}
                      </span>
                      <span className="text-xs text-body/65">{item.description}</span>
                    </Link>
                  </li>
                ))}
                <li className="border-t border-navy/5 mt-1 pt-1">
                  <Link
                    href="/industries"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-electric"
                  >
                    All industries →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <NavLink href="/portfolio" active={pathname.startsWith("/portfolio")}>
            Portfolio
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="/resources" active={pathname.startsWith("/resources")}>
            Resources
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Button href="/get-proposal" variant="primary">
            Get a Free Proposal
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy/15 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="text-lg">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4" aria-label="Mobile">
            <div className="space-y-1">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-semibold text-navy"
                aria-expanded={mobileServices === "services"}
                onClick={() =>
                  setMobileServices((v) => (v === "services" ? null : "services"))
                }
              >
                Services
                <span>{mobileServices === "services" ? "−" : "+"}</span>
              </button>
              {mobileServices === "services" && (
                <div className="space-y-4 pb-3 pl-2">
                  {serviceGroups.map((group) => (
                    <div key={group.title}>
                      <p className="px-3 text-xs font-bold uppercase text-brand">
                        {group.title}
                      </p>
                      <ul className="mt-1">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block rounded-md px-3 py-2 text-sm text-body"
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link href="/services" className="block px-3 text-sm font-semibold text-electric">
                    All services
                  </Link>
                </div>
              )}

              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-semibold text-navy"
                aria-expanded={mobileServices === "industries"}
                onClick={() =>
                  setMobileServices((v) =>
                    v === "industries" ? null : "industries",
                  )
                }
              >
                Industries
                <span>{mobileServices === "industries" ? "−" : "+"}</span>
              </button>
              {mobileServices === "industries" && (
                <ul className="pb-3 pl-2">
                  {industryLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-body"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {[
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/resources", label: "Resources" },
                ...companyLinks
                  .filter(
                    (l) =>
                      !["About Us", "Portfolio", "Resources"].includes(l.title),
                  )
                  .map((l) => ({ href: l.href, label: l.title })),
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 font-medium text-body"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3">
                <Button href="/get-proposal" className="w-full">
                  Get a Free Proposal
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
