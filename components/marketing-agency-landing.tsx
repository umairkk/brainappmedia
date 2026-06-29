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
  Headphones,
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
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const navItems = ["Home", "Services", "Portfolio", "Pricing", "About", "Contact"];

const trustBadges = ["Google Ads", "Meta Ads", "SEO", "Shopify", "WordPress"];

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}> = [
  {
    title: "Google Ads Management",
    description:
      "High-intent search, Performance Max, YouTube, and retargeting campaigns built to convert Pakistan and global traffic.",
    icon: MousePointerClick,
    accent: "from-cyan-400/25 to-blue-500/10",
  },
  {
    title: "Meta Ads Management",
    description:
      "Full-funnel Facebook and Instagram campaigns with creative testing, audience strategy, and ROAS-first optimization.",
    icon: Megaphone,
    accent: "from-fuchsia-400/25 to-cyan-400/10",
  },
  {
    title: "SEO Services",
    description:
      "Technical SEO, local rankings, content systems, and authority building designed for durable organic growth.",
    icon: Search,
    accent: "from-emerald-400/25 to-cyan-400/10",
  },
  {
    title: "Social Media Marketing",
    description:
      "Premium social calendars, brand storytelling, and conversion-led content for stronger trust and recall.",
    icon: Users,
    accent: "from-violet-400/25 to-blue-500/10",
  },
  {
    title: "Ecommerce Marketing",
    description:
      "Shopify and WooCommerce growth engines covering acquisition, retention, catalog strategy, and conversion rates.",
    icon: ShoppingBag,
    accent: "from-orange-400/25 to-fuchsia-500/10",
  },
  {
    title: "Website Design & Development",
    description:
      "Fast, polished landing pages and websites that give visitors a reason to trust, click, call, and buy.",
    icon: Code2,
    accent: "from-sky-400/25 to-indigo-500/10",
  },
  {
    title: "Lead Generation Campaigns",
    description:
      "Qualified inquiries for real estate, clinics, education, B2B, and service businesses with CRM-ready funnels.",
    icon: Target,
    accent: "from-rose-400/25 to-blue-500/10",
  },
  {
    title: "Marketing Automation",
    description:
      "WhatsApp, email, CRM, and nurture automations that turn missed follow-ups into measurable revenue.",
    icon: Bot,
    accent: "from-lime-300/25 to-cyan-400/10",
  },
];

const whyChoose = [
  {
    title: "Pakistan-based team",
    description: "Local market insight across Karachi, Lahore, Islamabad, and emerging ecommerce hubs.",
    icon: MapPin,
  },
  {
    title: "Transparent reporting",
    description: "Clear dashboards, call notes, and spend visibility so every rupee is accountable.",
    icon: BarChart3,
  },
  {
    title: "ROI-focused strategy",
    description: "Campaigns are planned around profit, lead quality, CAC, and lifetime value.",
    icon: CircleDollarSign,
  },
  {
    title: "Dedicated account manager",
    description: "One senior growth partner coordinates strategy, creative, tracking, and execution.",
    icon: Headphones,
  },
  {
    title: "Fast communication",
    description: "Responsive Slack, WhatsApp, and email workflows for quick decisions and approvals.",
    icon: Zap,
  },
  {
    title: "Local and international markets",
    description: "Experience scaling Pakistani businesses and serving clients outside Pakistan.",
    icon: Globe2,
  },
];

const stats = [
  { label: "Campaigns Managed", target: 150, suffix: "+", icon: Gauge },
  { label: "Businesses Helped", target: 50, suffix: "+", icon: BriefcaseBusiness },
  { label: "Average ROAS", target: 3.5, suffix: "x", decimals: 1, icon: TrendingUp },
  { label: "Years Experience", target: 8, suffix: "+", icon: BadgeCheck },
];

const caseStudies = [
  {
    segment: "Ecommerce Growth",
    title: "Ecommerce brand increased sales by 220%",
    description:
      "Rebuilt Meta and Google Shopping campaigns, improved product feed quality, and launched retargeting flows.",
    result: "220% sales lift",
    metric: "4.1x ROAS",
    icon: ShoppingBag,
  },
  {
    segment: "Real Estate Leads",
    title: "Real estate campaign generated qualified leads",
    description:
      "Designed location-based lead funnels with WhatsApp routing, call tracking, and lead scoring for sales teams.",
    result: "Qualified lead flow",
    metric: "31% lower CPL",
    icon: Building2,
  },
  {
    segment: "Local Services",
    title: "Local service business reduced cost per lead",
    description:
      "Refined search intent, added landing page proof, and automated follow-ups for faster conversion.",
    result: "Lower cost per lead",
    metric: "46% CPL drop",
    icon: Phone,
  },
];

const processSteps = [
  {
    title: "Free Audit",
    description: "We inspect accounts, tracking, landing pages, and quick-win revenue leaks.",
  },
  {
    title: "Strategy Planning",
    description: "You receive a channel roadmap with budget, offers, creative angles, and KPIs.",
  },
  {
    title: "Campaign Setup",
    description: "Tracking, pixels, conversion events, campaigns, creatives, and dashboards go live.",
  },
  {
    title: "Optimization",
    description: "We test audiences, keywords, ads, landing pages, and offers to improve ROI.",
  },
  {
    title: "Reporting & Scaling",
    description: "Weekly insights show what worked, what changed, and where growth scales next.",
  },
];

const pricingPlans = [
  {
    name: "Starter Package",
    audience: "For small businesses",
    highlight: false,
    description: "Launch a professional acquisition channel with proper tracking and monthly improvements.",
    features: [
      "Google or Meta Ads setup",
      "Basic reporting dashboard",
      "Monthly optimization",
      "Conversion tracking guidance",
      "Creative and copy recommendations",
    ],
  },
  {
    name: "Growth Package",
    audience: "For growing businesses",
    highlight: true,
    description: "A stronger growth system for brands ready to combine paid media, SEO, and landing page insight.",
    features: [
      "Google + Meta Ads",
      "SEO basics",
      "Landing page recommendations",
      "Weekly reporting",
      "Audience and creative testing",
    ],
  },
  {
    name: "Premium Package",
    audience: "For ecommerce and serious growth",
    highlight: false,
    description: "A complete performance engine for teams that need multi-channel growth and senior strategy.",
    features: [
      "Full funnel strategy",
      "Google, Meta, SEO, automation",
      "CRO recommendations",
      "Dedicated manager",
      "Scaling roadmap and forecasting",
    ],
  },
];

const testimonials = [
  {
    quote:
      "BrainApp Media helped us move from random boosting to a real acquisition system. Our Shopify sales became predictable within the first campaign cycle.",
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
      "We wanted an agency that understood the Pakistani customer but could present our brand professionally. The team delivered both.",
    name: "Sana Javed",
    role: "Owner, Karachi Home Services",
  },
];

const footerServices = [
  "Google Ads",
  "Meta Ads",
  "SEO",
  "Ecommerce Marketing",
  "Website Development",
  "Automation",
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function navHref(item: string) {
  return item === "Home" ? "#home" : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
}

function LogoMark() {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="BrainApp Media home">
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-lg shadow-cyan-500/20">
        <span className="absolute inset-0 brand-gradient opacity-90 transition-transform duration-500 group-hover:scale-110" />
        <Sparkles className="relative h-5 w-5 text-white" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-base font-black tracking-tight text-white">BrainApp</span>
        <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
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
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const styles = {
    primary:
      "brand-gradient text-white shadow-[0_18px_45px_rgba(37,99,235,0.35)] hover:shadow-[0_24px_70px_rgba(34,211,238,0.35)]",
    secondary:
      "border border-white/15 bg-white/10 text-white backdrop-blur-xl hover:border-cyan-200/45 hover:bg-white/15",
    ghost: "text-cyan-100 hover:bg-white/10",
  };

  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl">
      <div className="premium-container flex h-20 items-center justify-between">
        <LogoMark />

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={navHref(item)}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:hello@brainappmedia.com"
            className="text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          >
            hello@brainappmedia.com
          </a>
          <CtaButton href="#contact">Get Free Audit</CtaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="premium-container mb-4 rounded-[1.5rem] border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-slate-950/40 lg:hidden"
        >
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={navHref(item)}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white brand-gradient shadow-[0_18px_45px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Audit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
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
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
}

function DashboardMockup() {
  const bars = [62, 82, 54, 74, 92, 68, 88];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/20 blur-3xl" />
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
        <div className="mesh-gradient soft-grid rounded-[1.5rem] p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200/80">
                Growth Command Center
              </p>
              <h3 className="mt-2 text-xl font-black text-white">Pakistan Campaign Dashboard</h3>
            </div>
            <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
              Live ROI
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Revenue", "Rs 8.4M", "+38%"],
              ["Leads", "1,284", "+52%"],
              ["ROAS", "4.6x", "+19%"],
            ].map(([label, value, change]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                <p className="text-xs font-semibold text-slate-400">{label}</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="text-sm font-bold text-emerald-300">{change}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Sales & Leads</p>
                  <p className="text-xs text-slate-400">Last 90 days</p>
                </div>
                <LineChart className="h-5 w-5 text-cyan-200" />
              </div>
              <svg viewBox="0 0 420 210" className="h-56 w-full">
                <defs>
                  <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="chartStroke" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="55%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
                {[45, 85, 125, 165].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    x2="420"
                    y1={y}
                    y2={y}
                    stroke="rgba(148,163,184,0.16)"
                    strokeDasharray="6 8"
                  />
                ))}
                <path
                  d="M 0 172 C 42 150, 58 126, 92 132 C 135 140, 142 78, 178 86 C 222 96, 220 48, 260 62 C 300 74, 316 112, 350 76 C 378 46, 394 38, 420 32 L 420 210 L 0 210 Z"
                  fill="url(#chartFill)"
                />
                <path
                  className="dashboard-line"
                  d="M 0 172 C 42 150, 58 126, 92 132 C 135 140, 142 78, 178 86 C 222 96, 220 48, 260 62 C 300 74, 316 112, 350 76 C 378 46, 394 38, 420 32"
                  fill="none"
                  stroke="url(#chartStroke)"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
              </svg>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-bold text-white">Channel Mix</p>
                  <PieChart className="h-5 w-5 text-fuchsia-200" />
                </div>
                <div className="space-y-3">
                  {[
                    ["Google Ads", "46%", "bg-cyan-300"],
                    ["Meta Ads", "34%", "bg-fuchsia-300"],
                    ["SEO", "20%", "bg-emerald-300"],
                  ].map(([label, width, color]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-xs font-semibold text-slate-300">
                        <span>{label}</span>
                        <span>{width}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className={`h-full rounded-full ${color}`} style={{ width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-4">
                <p className="text-sm font-bold text-white">Weekly Spend Efficiency</p>
                <div className="mt-4 flex h-28 items-end gap-2">
                  {bars.map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.06 }}
                      className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-300"
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
      duration: 1.9,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [decimals, isInView, target, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="premium-container relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            Performance marketing for ambitious brands
          </div>
          <h1 className="text-balance text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Grow Your Business Online With{" "}
            <span className="text-gradient">Pakistan&apos;s Performance Marketing Experts</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            We help ecommerce stores, local businesses, and service brands generate leads, sales,
            and measurable growth through Google Ads, Meta Ads, SEO, and automation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#contact" className="sm:px-7 sm:py-4">
              Get Free Audit
            </CtaButton>
            <CtaButton href="#services" variant="secondary" className="sm:px-7 sm:py-4">
              View Services
            </CtaButton>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-slate-400">
              Trusted channel expertise for campaigns that need scale
            </p>
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur-xl"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="premium-container">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to turn traffic into revenue"
          description="From first click to closed sale, our growth systems connect strategy, paid media, SEO, creative, tracking, websites, and automation into one accountable engine."
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
                className="group glass-panel relative overflow-hidden rounded-[1.75rem] p-6"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${service.accent} opacity-80 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-100 shadow-lg shadow-cyan-950/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                </div>
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
    <section id="about" className="relative py-20 lg:py-28">
      <div className="premium-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeading
          eyebrow="Why choose us"
          title="A senior growth team with local context and global standards"
          description="Pakistani businesses need marketing that respects price sensitivity, trust barriers, WhatsApp-first buying behavior, and international-quality brand presentation. That is the balance we build for."
          align="left"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={sectionVariants}
                className="glass-panel rounded-[1.5rem] p-5 transition-colors hover:border-cyan-200/35"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16">
      <div className="premium-container">
        <div className="glass-panel counter-glow grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-slate-950/70 p-7 sm:p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 lg:py-28">
      <div className="premium-container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case studies shaped around profit, lead quality, and scale"
          description="A snapshot of the kind of growth systems we build for ecommerce, real estate, and local service clients across Pakistan."
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
                whileHover={{ y: -8 }}
                className="group glass-panel overflow-hidden rounded-[2rem]"
              >
                <div className="relative h-52 overflow-hidden mesh-gradient soft-grid p-6">
                  <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">
                    {study.segment}
                  </div>
                  <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-3xl brand-gradient text-white shadow-2xl shadow-cyan-950/30">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="absolute bottom-6 right-6 rounded-2xl border border-emerald-200/20 bg-emerald-300/10 px-4 py-3 text-right">
                    <p className="text-xs font-semibold text-emerald-100">Result</p>
                    <p className="font-black text-white">{study.metric}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                    {study.result}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white">{study.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{study.description}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-100 transition-colors group-hover:text-white"
                  >
                    Discuss a similar project <ArrowRight className="h-4 w-4" />
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
    <section className="py-20 lg:py-28">
      <div className="premium-container">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from free audit to scalable growth"
          description="Every engagement follows a focused operating rhythm, so strategy turns into execution and execution turns into visible numbers."
        />

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-blue-500 to-fuchsia-400 lg:left-1/2 lg:block" />
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                className={`relative grid gap-5 lg:grid-cols-2 ${
                  index % 2 === 0 ? "" : "lg:[&>div:first-child]:col-start-2"
                }`}
              >
                <div className="glass-panel relative rounded-[1.5rem] p-6">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient text-lg font-black text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                        Step {index + 1}
                      </p>
                      <h3 className="text-xl font-black text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="leading-7 text-slate-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="absolute inset-x-0 top-1/2 h-80 -translate-y-1/2 bg-blue-600/10 blur-3xl" />
      <div className="premium-container relative">
        <SectionHeading
          eyebrow="Pricing"
          title="Packages designed around your current growth stage"
          description="Start lean, build momentum, or scale with a complete performance stack. Final retainers are scoped after your free audit, so budget aligns with goals and complexity."
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
              className={`relative rounded-[2rem] p-1 ${
                plan.highlight
                  ? "brand-gradient shadow-[0_28px_90px_rgba(37,99,235,0.34)]"
                  : "bg-white/10"
              }`}
            >
              <div className="glass-panel flex h-full flex-col rounded-[1.75rem] p-7">
                {plan.highlight ? (
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-cyan-300/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">
                    <Star className="h-4 w-4 fill-cyan-100" />
                    Most popular
                  </div>
                ) : null}
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                  {plan.audience}
                </p>
                <h3 className="mt-3 text-3xl font-black text-white">{plan.name}</h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-slate-300">{plan.description}</p>
                <div className="my-7 h-px bg-white/10" />
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm font-semibold text-slate-200">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-300/15 text-emerald-200">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <CtaButton href="#contact" className="mt-8 w-full">
                  Book Free Consultation
                </CtaButton>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="premium-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Pakistani founders, owners, and growth teams"
          description="Realistic outcomes come from better tracking, sharper offers, faster communication, and weekly optimization discipline."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.name}
              variants={sectionVariants}
              className="glass-panel rounded-[2rem] p-7"
            >
              <div className="mb-6 flex gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-amber-300" />
                ))}
              </div>
              <blockquote className="text-base leading-8 text-slate-200">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient text-sm font-black text-white">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-black text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="premium-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Get a free audit and know exactly where growth is leaking"
            description="Send your details and we will review your ads, website, offer, tracking, and follow-up process. You get practical next steps before committing to anything."
            align="left"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
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
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="glass-panel group flex items-center gap-4 rounded-[1.5rem] p-5 transition-colors hover:border-cyan-200/35"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-black text-white transition-colors group-hover:text-cyan-100">
                      {item.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <motion.form
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="glass-panel rounded-[2rem] p-5 sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-200/60"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-200/60"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="+92 300 0000000"
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-200/60"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-200">
              Business Type
              <select
                name="business-type"
                defaultValue=""
                className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-white outline-none transition-colors focus:border-cyan-200/60"
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
            <label className="grid gap-2 text-sm font-bold text-slate-200 sm:col-span-2">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your current marketing goals, monthly budget, and biggest growth bottleneck."
                className="resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-200/60"
              />
            </label>
          </div>

          <button
            type="button"
            className="brand-gradient mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-black text-white shadow-[0_24px_70px_rgba(37,99,235,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Send Free Audit Request
            <Send className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-xs leading-6 text-slate-400">
            Prefer WhatsApp? Message us directly and mention &quot;Free Audit&quot; for a faster
            response.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="premium-container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr_0.8fr]">
          <div>
            <LogoMark />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              BrainApp Media is a Pakistan-based digital marketing agency helping businesses grow
              through paid media, SEO, ecommerce strategy, websites, and automation.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe2, MessageCircle, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href={index === 0 ? "#home" : index === 1 ? "https://wa.me/923000000000" : "mailto:hello@brainappmedia.com"}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition-colors hover:border-cyan-200/40 hover:text-white"
                  aria-label={index === 0 ? "Website" : index === 1 ? "WhatsApp" : "Email"}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black text-white">Quick links</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={navHref(item)}
                    className="text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm font-semibold text-slate-400 transition-colors hover:text-cyan-100"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-black text-white">Contact info</h3>
            <ul className="mt-5 space-y-4 text-sm font-semibold text-slate-400">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-cyan-200" />
                Pakistan
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-cyan-200" />
                hello@brainappmedia.com
              </li>
              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-cyan-200" />
                +92 300 0000000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 BrainApp Media. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-slate-300">
              Privacy
            </a>
            <a href="#home" className="hover:text-slate-300">
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
    <main className="relative z-10">
      <Header />
      <HeroSection />
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
