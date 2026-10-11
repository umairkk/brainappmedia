import Link from "next/link";
import { Suspense } from "react";
import { Logo } from "@/components/brand/Logo";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { companyLinks, industryLinks, serviceGroups } from "@/data/navigation";

export function Footer() {

  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="on-dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              BrainApp Media helps small and medium businesses connect marketing,
              websites, and brand design into practical growth programs—with clear
              communication and reporting you can act on.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-bold uppercase tracking-wider text-brand">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/75 transition hover:text-white"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/get-proposal" className="text-sm text-white/75 hover:text-white">
                  Get a Free Proposal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Industries</h2>
            <ul className="mt-3 space-y-2">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Legal & resources</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/resources" className="text-sm text-white/75 hover:text-white">
                  Resource library
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-white/75 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/75 hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/75 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-white/50">
          ©{" "}
          <Suspense fallback="2025">
            <CopyrightYear />
          </Suspense>{" "}
          BrainApp Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
