import { Button } from "@/components/ui/Button";

export function HomeMidCta() {
  return (
    <section className="bg-brand py-14 text-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center lg:flex-row lg:px-6 lg:text-left">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-black md:text-3xl">
            Turn your marketing into a growth engine
          </h2>
          <p className="mt-3 font-medium text-navy/80">
            Connect every click, lead, and sale to a plan you can review—with web, ads, and creative
            coordinated under one scope.
          </p>
        </div>
        <Button
          href="/get-proposal"
          className="shrink-0 !bg-navy !text-white hover:!bg-black"
        >
          Get a Free Proposal
        </Button>
      </div>
    </section>
  );
}
