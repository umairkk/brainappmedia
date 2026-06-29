"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Code2,
  Gauge,
  Globe2,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MousePointerClick,
  Phone,
  PieChart,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const navItems = ["Home", "Services", "Portfolio", "Pricing", "About", "Contact"];
const trustBadges = ["Google Ads", "Meta Ads", "SEO", "Shopify", "WordPress"];

const revenueCards = [
  {
    title: "Stay visible & drive traffic",
    description: "Show up when Pakistani buyers search on Google, social, maps, and AI answers.",
    icon: Search,
  },
  {
    title: "Generate qualified leads",
    description: "Turn visitors into calls, forms, WhatsApp chats, and CRM-ready sales opportunities.",
    icon: Target,
  },
  {
    title: "Make smarter decisions",
    description: "See campaign, landing page, and channel performance in clean executive dashboards.",
    icon: BarChart3,
  },
  {
    title: "Measure predictable revenue",
    description: "Connect spend to pipeline, ROAS, lead quality, and the metrics owners actually care about.",
    icon: CircleDollarSign,
  },
];

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Google Ads Management",
    description:
      "Search, Performance Max, YouTube, retargeting, and landing page testing managed around profit and lead quality.",
    icon: MousePointerClick,
  },
  {
    title: "Meta Ads Management",
    description:
      "Facebook and Instagram funnels with offer testing, creative iterations, audience strategy, and ROAS reporting.",
    icon: Megaphone,
  },
  {
    title: "SEO Services",
    description:
      "Technical SEO, local visibility, content systems, authority growth, and tracking for organic pipeline.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description:
      "Professional social content, calendars, reels direction, and brand positioning for stronger market trust.",
    icon: Users,
  },
  {
    title: "Ecommerce Marketing",
    description:
      "Shopify and WooCommerce acquisition, retention, catalog optimization, and conversion growth systems.",
    icon: ShoppingBag,
  },
  {
    title: "Website Design & Development",
    description:
      "Fast, polished websites and landing pages that communicate credibility and convert paid traffic.",
    icon: Code2,
  },
  {
    title: "Lead Generation Campaigns",
    description:
      "Qualified inquiries for real estate, clinics, education, B2B, and local services with follow-up routing.",
    icon: Phone,
  },
  {
    title: "Marketing Automation",
    description:
      "WhatsApp, email, CRM, and nurture automations that reduce missed follow-ups and improve close rates.",
    icon: Bot,
  },
];

const whyChoose = [
  "Pakistan-based team with local market context",
  "Transparent weekly reporting and clear next steps",
  "ROI-focused strategy tied to revenue, not vanity metrics",
  "Dedicated account manager for campaigns and communication",
  "Fast WhatsApp, Slack, and email collaboration",
  "Experience with Pakistani and international clients",
];

const stats = [
  { label: "Campaigns Managed", target: 150, suffix: "+", icon: Gauge },
  { label: "Businesses Helped", target: 50, suffix: "+", icon: BriefcaseBusiness },
  { label: "Average ROAS", target: 3.5, suffix: "x", decimals: 1, icon: TrendingUp },
  { label: "Years Experience", target: 8, suffix: "+", icon: BadgeCheck },
];

const caseStudies = [
  {
    sector: "Ecommerce",
    title: "Ecommerce brand increased sales by 220%",
    description:
      "Rebuilt Google Shopping and Meta acquisition with better feed quality, offer testing, and abandoned-cart retargeting.",
    metric: "220%",
    metricLabel: "Sales increase",
    icon: ShoppingBag,
  },
  {
    sector: "Real Estate",
    title: "Real estate campaign generated qualified leads",
    description:
      "Created location-specific funnels with WhatsApp routing, call tracking, and lead scoring for consultants.",
    metric: "31%",
    metricLabel: "Lower CPL",
    icon: Building2,
  },
  {
    sector: "Local Services",
    title: "Local service business reduced cost per lead",
    description:
      "Improved keyword intent, landing page proof, reviews, and automated follow-up sequences for faster response.",
    metric: "46%",
    metricLabel: "CPL reduction",
    icon: Phone,
  },
];

const processSteps = [
  "Free Audit",
  "Strategy Planning",
  "Campaign Setup",
  "Optimization",
  "Reporting & Scaling",
];

const pricingPlans = [
  {
    name: "Starter Package",
    audience: "For small businesses",
    description: "Launch one strong acquisition channel with proper tracking and monthly improvements.",
    features: [
      "Google or Meta Ads setup",
      "Basic reporting dashboard",
      "Monthly optimization",
      "Conversion tracking guidance",
    ],
  },
  {
    name: "Growth Package",
    audience: "For growing businesses",
    description: "Build a multi-channel growth system for steady lead flow, sales, and visibility.",
    popular: true,
    features: [
      "Google + Meta Ads",
      "SEO basics",
      "Landing page recommendations",
      "Weekly reporting",
    ],
  },
  {
    name: "Premium Package",
    audience: "For ecommerce and serious growth",
    description: "Connect paid media, SEO, CRO, and automation into a full-funnel revenue engine.",
    features: [
      "Full funnel strategy",
      "Google, Meta, SEO, automation",
      "CRO recommendations",
      "Dedicated manager",
    ],
  },
];

const testimonials = [
  {
    quote:
      "BrainApp Media helped us move from random boosting to a real acquisition system. Our Shopify sales finally became predictable.",
    name: "Ayesha Khan",
    role: "Founder, Lahore Fashion Ecommerce",
  },
  {
    quote:
      "The reporting is clear and the lead quality improved fast. Our real estate consultants now receive inquiries they can actually close.",
    name: "Hamza Malik",
    role: "Director, Islamabad Property Consultants",
  },
  {
    quote:
      "We wanted a team that understood the Pakistani customer but could present our brand professionally. They delivered both.",
    name: "Sana Javed",
    role: "Owner, Karachi Home Services",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

function navHref(item: string) {
  return item === "Home" ? "#home" : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
}

function LogoMark() {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="BrainApp Media home">
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-[#083A74] text-white shadow-[0_16px_34px_rgba(8,58,116,0.22)]">
        <span className="absolute -right-5 -top-5 h-10 w-10 rounded-full bg-[#26B16D]/80 transition-transform duration-500 group-hover:scale-150" />
        <svg
          viewBox="0 0 48 48"
          className="relative h-10 w-10"
          aria-hidden="true"
          role="img"
        >
          <path
            d="M13 32V15h8.7c3.9 0 6.3 2.1 6.3 5.1 0 1.9-.9 3.4-2.5 4.2 2.2.8 3.5 2.4 3.5 4.8 0 3.5-2.8 5.9-7.2 5.9H13Zm4.4-10.1h4c1.5 0 2.4-.8 2.4-2s-.9-1.9-2.4-1.9h-4v3.9Zm0 7.1h4.7c1.7 0 2.7-.8 2.7-2.1s-1-2.1-2.8-2.1h-4.6V29Z"
            fill="currentColor"
          />
          <path
            d="M30 33V17h4v11.1l6.5-6.5 2.6 2.6L32.9 34.4 30 33Z"
            fill="#26B16D"
          />
          <path
            d="M34 18h7v7"
            fill="none"
            stroke="#26B16D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-xl font-black tracking-[-0.04em] text-[#0B1720]">BrainApp</span>
        <span className="block text-xs font-black uppercase tracking-[0.22em] text-[#26B16D]">
          Media
        </span>
      </span>
    </a>
  );
}

function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-[#26B16D] text-white shadow-[0_16px_32px_rgba(38,177,109,0.24)] hover:bg-[#0E9251]",
    secondary:
      "bg-[#207DE9] text-white shadow-[0_16px_32px_rgba(32,125,233,0.22)] hover:bg-[#0C57AD]",
    light: "border border-slate-200 bg-white text-[#207DE9] hover:border-[#207DE9] hover:bg-blue-50",
  };

  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-black transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[min(1180px,calc(100%-2rem))] items-center justify-between">
        <LogoMark />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={navHref(item)}
              className="text-sm font-extrabold text-slate-700 transition-colors hover:text-[#207DE9]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+923000000000"
            className="inline-flex items-center gap-2 text-sm font-black text-slate-800"
          >
            <Phone className="h-4 w-4 text-[#26B16D]" />
            +92 300 0000000
          </a>
          <CtaButton href="#contact">Get My Free Proposal</CtaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-4 grid w-[min(1180px,calc(100%-2rem))] gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={navHref(item)}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-black text-slate-800 hover:bg-blue-50"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#26B16D] px-5 py-3 text-sm font-black text-white"
          >
            Get My Free Proposal
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      ) : null}
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
  inverse?: boolean;
}) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      <div
        className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] ${
          inverse ? "bg-white/10 text-green-200" : "bg-[#EEF6FF] text-[#207DE9]"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2
        className={`text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          inverse ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 sm:text-lg ${inverse ? "text-blue-100" : "text-slate-600"}`}>
        {description}
      </p>
    </motion.div>
  );
}

function AnimatedCounter({
  target,
  suffix,
  decimals = 0,
}: {
  target: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const value = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const display = useTransform(value, (latest) => {
    const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString();
    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(value, target, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [isInView, target, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

function RevenueDashboard() {
  const bars = [48, 78, 62, 86, 74, 96, 82];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.8, delay: 0.1 },
        scale: { duration: 0.8, delay: 0.1 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
      className="relative"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-[#207DE9]/10 blur-3xl" />
      <div className="fx-shadow relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                Revenue Command Center
              </p>
              <h3 className="mt-1 text-xl font-black text-slate-950">Growth dashboard</h3>
            </div>
            <span className="rounded-full bg-[#E9F7F0] px-3 py-1 text-xs font-black text-[#0E9251]">
              Live ROI
            </span>
          </div>
        </div>

        <div className="grid gap-4 p-5">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Revenue", "Rs 8.4M", "+38%"],
              ["Qualified Leads", "1,284", "+52%"],
              ["ROAS", "4.6x", "+19%"],
            ].map(([label, value, change]) => (
              <div key={label} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-slate-500">{label}</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="text-2xl font-black text-slate-950">{value}</p>
                  <p className="text-sm font-black text-green-600">{change}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-3xl bg-[#083A74] p-5 text-white">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black">Pipeline performance</p>
                  <p className="text-xs text-blue-100/80">Last 90 days</p>
                </div>
                  <LineChart className="h-5 w-5 text-[#41D48C]" />
              </div>
              <svg viewBox="0 0 420 205" className="h-52 w-full">
                <defs>
                  <linearGradient id="fxLine" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#41D48C" />
                    <stop offset="50%" stopColor="#207DE9" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                  <linearGradient id="fxFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#26B16D" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#26B16D" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[45, 85, 125, 165].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    x2="420"
                    y1={y}
                    y2={y}
                    stroke="rgba(255,255,255,0.15)"
                    strokeDasharray="6 8"
                  />
                ))}
                <path
                  d="M0 172 C42 150 60 122 96 132 C132 142 148 84 184 90 C224 98 224 52 262 62 C304 74 316 106 352 72 C382 42 396 36 420 30 L420 205 L0 205 Z"
                  fill="url(#fxFill)"
                />
                <path
                  className="dashboard-line"
                  d="M0 172 C42 150 60 122 96 132 C132 142 148 84 184 90 C224 98 224 52 262 62 C304 74 316 106 352 72 C382 42 396 36 420 30"
                  fill="none"
                  stroke="url(#fxLine)"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
              </svg>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-100 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-black text-slate-950">Channel mix</p>
                  <PieChart className="h-5 w-5 text-[#207DE9]" />
                </div>
                {[
                  ["Google Ads", "46%", "bg-[#207DE9]"],
                  ["Meta Ads", "34%", "bg-[#26B16D]"],
                  ["SEO", "20%", "bg-amber-400"],
                ].map(([label, width, color]) => (
                  <div key={label} className="mb-3 last:mb-0">
                    <div className="mb-1 flex justify-between text-xs font-black text-slate-600">
                      <span>{label}</span>
                      <span>{width}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className={`h-full rounded-full ${color}`} style={{ width }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-slate-100 p-5">
                <p className="mb-4 font-black text-slate-950">Weekly efficiency</p>
                <div className="flex h-24 items-end gap-2">
                  {bars.map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.7, delay: 0.45 + index * 0.05 }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-[#207DE9] to-[#26B16D]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="fx-grid relative overflow-hidden bg-[#F4F8FF] pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(32,125,233,0.14),transparent_28rem),radial-gradient(circle_at_85%_12%,rgba(38,177,109,0.16),transparent_22rem)]" />
      <div className="relative mx-auto grid w-[min(1180px,calc(100%-2rem))] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#207DE9] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#26B16D]" />
            Pakistan&apos;s revenue growth partner
          </div>
          <h1 className="text-balance text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Your Revenue Growth Partner for the AI Era in Pakistan
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            For businesses that need to prove revenue impact, not just report clicks. BrainApp
            Media connects expert execution, data, automation, and strategy to drive measurable
            growth through Google Ads, Meta Ads, SEO, and conversion-focused websites.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#contact">Get My Free Proposal</CtaButton>
            <CtaButton href="#services" variant="light">
              View Services
            </CtaButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-800 shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-[#26B16D]" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div>

        <RevenueDashboard />
      </div>
    </section>
  );
}

function RevenueCardsSection() {
  return (
    <section className="-mt-12 relative z-10">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-4 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:grid-cols-2 lg:grid-cols-4">
        {revenueCards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.title}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true }}
              className="group rounded-3xl p-5 transition-colors hover:bg-blue-50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#207DE9] text-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function RevenueShiftSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Revenue marketing"
          title="Move from marketing that reports clicks to marketing that reports revenue"
          description="Traditional marketing optimizes channel metrics. BrainApp Media builds connected revenue marketing systems that show which campaigns generate qualified leads, pipeline, and sales."
          align="left"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {[
            {
              label: "Traditional marketing",
              title: "Reports activity",
              points: ["Clicks and impressions", "Disconnected spreadsheets", "Slow lead follow-up"],
              tone: "border-slate-200 bg-slate-50",
              iconTone: "bg-slate-200 text-slate-700",
            },
            {
              label: "Revenue marketing",
              title: "Reports business impact",
              points: ["Lead quality and ROAS", "CRM-ready dashboards", "Automation and faster response"],
              tone: "border-[#207DE9] bg-[#F4F8FF]",
              iconTone: "bg-[#26B16D] text-white",
            },
          ].map((item) => (
            <motion.article
              key={item.label}
              variants={sectionVariants}
              whileHover={{ y: -8 }}
              className={`rounded-[2rem] border p-6 ${item.tone}`}
            >
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${item.iconTone}`}>
                <BarChart3 className="h-6 w-6" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#0B1720]">{item.title}</h3>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#26B16D]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          eyebrow="Services"
          title="See how each piece of our revenue engine grows your business"
          description="Connected digital marketing strategies work together to drive revenue while clean reporting makes performance easier to understand, optimize, and scale."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={sectionVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-[0_18px_50px_rgba(32,125,233,0.12)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#207DE9] transition-colors group-hover:bg-[#207DE9] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section id="about" className="bg-[#f8fbff] py-20 lg:py-28">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Why choose us"
            title="Built for Pakistani growth teams that need accountable marketing"
            description="We combine local market understanding with the reporting, strategy, and execution standards expected by international clients."
            align="left"
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#contact">Book Free Consultation</CtaButton>
            <CtaButton href="#portfolio" variant="light">
              View Results
            </CtaButton>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {whyChoose.map((item) => (
            <motion.div
              key={item}
              variants={sectionVariants}
              whileHover={{ y: -6 }}
              className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_18px_45px_rgba(32,125,233,0.10)]"
            >
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Check className="h-4 w-4" />
              </span>
              <p className="font-bold leading-7 text-slate-800">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-[#083A74] py-16 text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#26B16D] text-white">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-4xl font-black sm:text-5xl">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-blue-100">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          eyebrow="Portfolio"
          title="Proven results for growth-focused businesses"
          description="Case-study style proof for ecommerce, real estate, and local service brands that need measurable revenue impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <motion.article
                key={study.title}
                variants={sectionVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-[0_22px_60px_rgba(32,125,233,0.13)]"
              >
                <div className="bg-[#f4f8ff] p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#207DE9]">
                      {study.sector}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#207DE9] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-10">
                    <p className="text-6xl font-black tracking-tight text-[#207DE9]">{study.metric}</p>
                    <p className="mt-1 font-black text-slate-700">{study.metricLabel}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-slate-950">{study.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{study.description}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#207DE9]"
                  >
                    Get a similar plan <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#f8fbff] py-20 lg:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          eyebrow="Process"
          title="From audit to scalable revenue engine"
          description="A clear operating rhythm keeps every campaign focused on what changed, why it changed, and how to scale the next opportunity."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-120px" }}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_18px_45px_rgba(32,125,233,0.10)]"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#26B16D] text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-black text-slate-950">{step}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {index === 0
                  ? "We inspect ads, SEO, tracking, website conversion, and follow-up gaps."
                  : index === 1
                    ? "You receive channel priorities, offers, budget guidance, and measurable KPIs."
                    : index === 2
                      ? "Campaigns, dashboards, pixels, creative, and landing page recommendations go live."
                      : index === 3
                        ? "We improve targeting, keywords, ads, landing pages, offers, and conversion paths."
                        : "You get practical reporting plus a scale plan for the next growth stage."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose the right growth package"
          description="Final retainers are scoped after the audit, but these packages show the level of strategy, execution, and reporting available."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={sectionVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`relative rounded-[2rem] border p-7 shadow-sm ${
                plan.popular
                  ? "border-[#207DE9] bg-[#F4F8FF] shadow-[0_24px_70px_rgba(32,125,233,0.16)]"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.popular ? (
                <span className="mb-5 inline-flex rounded-full bg-[#207DE9] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                  Most popular
                </span>
              ) : null}
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#26B16D]">
                {plan.audience}
              </p>
              <h3 className="mt-3 text-3xl font-black text-slate-950">{plan.name}</h3>
              <p className="mt-4 min-h-20 text-sm leading-7 text-slate-600">{plan.description}</p>
              <div className="my-7 h-px bg-slate-200" />
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-bold text-slate-800">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <CtaButton href="#contact" className="mt-8 w-full">
                Book Free Consultation
              </CtaButton>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-[#083A74] py-20 text-white lg:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by Pakistani founders and growth teams"
            description="Owners choose us for clearer reporting, better lead quality, stronger creative direction, and practical revenue strategy."
            align="left"
            inverse
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="grid gap-5"
          >
            {testimonials.map((testimonial) => (
              <motion.figure
                key={testimonial.name}
                variants={sectionVariants}
                whileHover={{ x: 8 }}
                className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-xl"
              >
                <div className="mb-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg font-bold leading-8 text-slate-800">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#207DE9] text-sm font-black text-white">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-black text-slate-950">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactOptions: Array<{
    label: string;
    value: string;
    href: string;
    icon: LucideIcon;
  }> = [
    {
      label: "WhatsApp CTA",
      value: "+92 300 0000000",
      href: "https://wa.me/923000000000",
      icon: MessageCircle,
    },
    {
      label: "Email CTA",
      value: "hello@brainappmedia.com",
      href: "mailto:hello@brainappmedia.com",
      icon: Mail,
    },
    {
      label: "Location",
      value: "Pakistan",
      href: "#contact",
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="bg-[#f8fbff] py-20 lg:py-28">
      <div className="mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Free audit"
            title="Ready to see where your marketing can grow?"
            description="Tell us about your business and we will review your ads, SEO, website, tracking, and follow-up process with practical next steps."
            align="left"
          />
          <div className="mt-8 grid gap-4">
            {contactOptions.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#207DE9] text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    {label}
                  </span>
                  <span className="mt-1 block font-black text-slate-950">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <motion.form
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Name", "text", "Your name"],
              ["Email", "email", "you@company.com"],
              ["Phone", "tel", "+92 300 0000000"],
            ].map(([label, type, placeholder]) => (
              <label key={label} className="grid gap-2 text-sm font-black text-slate-800">
                {label}
                <input
                  type={type}
                  placeholder={placeholder}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-[#207DE9] focus:bg-white"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-black text-slate-800">
              Business Type
              <select
                defaultValue=""
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition-colors focus:border-[#207DE9] focus:bg-white"
              >
                <option value="" disabled>
                  Select business type
                </option>
                <option>Ecommerce store</option>
                <option>Local service business</option>
                <option>Real estate</option>
                <option>Startup or SaaS</option>
                <option>International client</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-black text-slate-800 sm:col-span-2">
              Message
              <textarea
                rows={5}
                placeholder="Tell us about your goals, budget, current channels, and biggest bottleneck."
                className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-[#207DE9] focus:bg-white"
              />
            </label>
          </div>

          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#26B16D] px-6 py-4 text-sm font-black text-white shadow-[0_16px_32px_rgba(38,177,109,0.22)] transition-colors hover:bg-[#0E9251]"
          >
            Send Free Audit Request
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  const serviceLinks = [
    "Google Ads",
    "Meta Ads",
    "SEO",
    "Ecommerce Marketing",
    "Website Development",
    "Automation",
  ];

  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto w-[min(1180px,calc(100%-2rem))]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-white p-3">
              <LogoMark />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              BrainApp Media is a Pakistan-based digital marketing agency helping businesses grow
              with paid media, SEO, websites, ecommerce strategy, and automation.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe2, MessageCircle, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href={
                    index === 0
                      ? "#home"
                      : index === 1
                        ? "https://wa.me/923000000000"
                        : "mailto:hello@brainappmedia.com"
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors hover:bg-[#207DE9] hover:text-white"
                  aria-label={index === 0 ? "Website" : index === 1 ? "WhatsApp" : "Email"}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black">Quick links</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={navHref(item)} className="text-sm font-bold text-slate-300 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black">Services</h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm font-bold text-slate-300 hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black">Contact info</h3>
            <ul className="mt-5 space-y-4 text-sm font-bold text-slate-300">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-green-400" />
                Pakistan
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-green-400" />
                hello@brainappmedia.com
              </li>
              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-green-400" />
                +92 300 0000000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 BrainApp Media. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-white">
              Privacy
            </a>
            <a href="#home" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MarketingAgencyLanding() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <RevenueCardsSection />
      <RevenueShiftSection />
      <ServicesSection />
      <WhyChooseSection />
      <StatsSection />
      <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
