import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center px-4 py-24 text-center lg:px-6">
      <p className="text-sm font-bold uppercase tracking-wider text-brand">404</p>
      <h1 className="mt-3 text-4xl font-bold text-navy">Page not found</h1>
      <p className="mt-4 max-w-md text-body/80">
        The page you requested does not exist or may have moved. Try the links below or return home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to home</Button>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-lg border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:border-electric hover:text-electric"
        >
          Browse services
        </Link>
      </div>
    </section>
  );
}
