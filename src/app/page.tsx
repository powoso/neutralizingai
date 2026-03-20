"use client";

import { useState } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────
const DOMAIN_NAME = "neutralizing.ai";
const SEDO_PORTFOLIO_URL =
  "https://sedo.com/search/?showportfolio=3B-biwdAidcIlKUgkazpFZN9p8-xl4K2wzh-qXXx";
const BUY_NOW_URL = SEDO_PORTFOLIO_URL;
const MAKE_OFFER_URL = SEDO_PORTFOLIO_URL;
const PORTFOLIO_URL = SEDO_PORTFOLIO_URL;
const CONTACT_EMAIL = "";

// ─── Use-case data ───────────────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: ShieldIcon,
    title: "AI Safety & Guardrails",
    description:
      "Build the platform that keeps AI systems aligned, auditable, and under control.",
  },
  {
    icon: RadarIcon,
    title: "Cyber Defense",
    description:
      "Power a next-gen threat detection and neutralization engine for enterprise security.",
  },
  {
    icon: ScanIcon,
    title: "Fraud Detection",
    description:
      "Launch an AI-driven platform that identifies and neutralizes financial fraud in real time.",
  },
  {
    icon: FilterIcon,
    title: "Misinformation Defense",
    description:
      "Create a tool that detects and neutralizes disinformation across digital channels.",
  },
  {
    icon: LockIcon,
    title: "Security Automation",
    description:
      "Automate incident response, threat hunting, and vulnerability neutralization at scale.",
  },
  {
    icon: ScaleIcon,
    title: "Model Risk Management",
    description:
      "Manage, monitor, and neutralize risks across AI/ML models in production environments.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-950/30 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-b from-blue-950/20 via-transparent to-transparent rounded-full blur-3xl" />
        <GridPattern />
      </div>

      <div className="relative z-10">
        <Nav />
        <Hero />
        <UseCases />
        <WhyThisDomain />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}

// ─── Grid background ─────────────────────────────────────────────────────────
function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03]">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050510]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono text-sm tracking-wider text-white/70 font-medium">
          {DOMAIN_NAME}
        </span>
        <a
          href={BUY_NOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-sm font-medium rounded-full bg-white/[0.07] border border-white/10 text-white/80 hover:bg-white/[0.12] hover:text-white hover:border-white/20 transition-all duration-300"
        >
          Acquire This Domain
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-glow" />
          <span className="text-xs font-medium tracking-wide text-indigo-300/80 uppercase">
            Premium Domain — Available Now
          </span>
        </div>

        {/* Domain name */}
        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-8">
          <span className="shimmer-text">neutralizing</span>
          <span className="text-indigo-400">.ai</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          A commanding, brandable domain for the next frontier of{" "}
          <span className="text-white/60">AI defense</span>,{" "}
          <span className="text-white/60">safety</span>, and{" "}
          <span className="text-white/60">security</span> platforms.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={BUY_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 rounded-full bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
          >
            <span className="relative z-10">Buy Now on Sedo</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href={MAKE_OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-white/10 text-white/70 font-medium text-sm hover:border-white/25 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
          >
            Make an Offer
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up-delay-4 mt-20 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            Explore potential
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ─── Use Cases ───────────────────────────────────────────────────────────────
function UseCases() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-indigo-400/60 mb-4">
            Versatile by design
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
            One domain. Infinite applications.
          </h2>
          <p className="mt-4 text-white/30 max-w-lg mx-auto">
            {DOMAIN_NAME} is positioned at the intersection of AI and security
            — a space growing faster than almost any other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {USE_CASES.map((uc, i) => (
            <UseCaseCard key={i} {...uc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500"
    >
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/5 to-transparent transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/10 flex items-center justify-center mb-4 group-hover:border-indigo-500/20 transition-colors duration-300">
          <Icon className="w-5 h-5 text-indigo-400/70 group-hover:text-indigo-400 transition-colors duration-300" />
        </div>
        <h3 className="text-sm font-semibold text-white/80 mb-2 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

// ─── Why This Domain ─────────────────────────────────────────────────────────
function WhyThisDomain() {
  const points = [
    {
      label: "Memorable",
      value: "Instantly conveys action and authority in the AI space.",
    },
    {
      label: "Brandable",
      value: "Works as a company name, product name, or platform identity.",
    },
    {
      label: ".ai TLD",
      value:
        "The most sought-after extension for artificial intelligence ventures.",
    },
    {
      label: "Broad appeal",
      value:
        "Applicable across defense, safety, compliance, security, and more.",
    },
    {
      label: "SEO strength",
      value: "A keyword-rich domain that ranks for high-intent AI searches.",
    },
    {
      label: "Investment grade",
      value: "Premium .ai domains appreciate as the AI market accelerates.",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-indigo-400/60 mb-4">
            Strategic value
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
            Why {DOMAIN_NAME}?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <div
              key={i}
              className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400/60 mb-1.5 group-hover:text-indigo-400/80 transition-colors duration-300">
                {p.label}
              </p>
              <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                {p.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative p-12 sm:p-16 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-indigo-950/20 to-transparent overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-600/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              <span className="text-white/90">Own </span>
              <span className="text-indigo-400">{DOMAIN_NAME}</span>
            </h2>
            <p className="text-white/35 mb-10 max-w-md mx-auto">
              Secure this premium AI domain before someone else does. Available
              exclusively through Sedo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={BUY_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35 text-sm"
              >
                <span className="relative z-10">Buy Now on Sedo</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href={MAKE_OFFER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full border border-white/10 text-white/70 font-medium text-sm hover:border-white/25 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
              >
                Make an Offer
              </a>
            </div>

            {CONTACT_EMAIL && (
              <p className="mt-8 text-xs text-white/20">
                Or email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-indigo-400/50 hover:text-indigo-400/80 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-white/20">
          {DOMAIN_NAME}
        </span>
        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/20 hover:text-white/40 transition-colors duration-300"
        >
          View Full Domain Portfolio →
        </a>
      </div>
    </footer>
  );
}

// ─── Icons (inline SVG components) ───────────────────────────────────────────
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function RadarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="2" x2="12" y2="12" />
    </svg>
  );
}

function ScanIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="8" x2="12" y2="12" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z" />
      <path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}
