import { FadeIn } from "@/components/motion/FadeIn";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Button } from "@/components/ui/Button";

export function HomePartnerSection() {
  return (
    <section className="border-y border-navy/10 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
        <FadeIn>
          <ImageReveal
            src="/images/sections/team-marketing.jpg"
            alt="Marketing and creative collaborators reviewing work together"
            className="aspect-[4/3] shadow-lg"
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Partnership</p>
          <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">
            A focused team approach—not a black-box retainer
          </h2>
          <p className="mt-5 leading-relaxed text-body/85">
            You work with people who explain the plan in plain language: what we are building, what
            we need from you, and how we will know if progress is on track. We do not invent office
            locations, headcount, awards, or client results on this site.
          </p>
          <p className="mt-4 leading-relaxed text-body/85">
            Engagements range from one-time launches to ongoing management. Your proposal lists
            milestones, assumptions, and reporting cadence before work begins.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about">About BrainApp Media</Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
