import {
  Brain,
  ShieldCheck,
  FileSearch,
  ArrowRight,
  IndianRupee,
  Lock,
  Code2,
  Server,
  BookOpen,
} from "lucide-react";
import { Section } from "@/components/marketing/section";
import { CTAButton } from "@/components/marketing/cta-button";
import { FAQSection } from "@/components/marketing/faq-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { generatePageMetadata } from "@/lib/seo";
import { CTA_URLS } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { FloatingOrbs } from "@/components/animations/floating-orbs";
import { AnimatedBeam } from "@/components/animations/animated-beam";
import { AnimatedCounter } from "@/components/animations/animated-counter";

export const metadata = generatePageMetadata({
  title: "About Anumiti — We Infer. We Verify. We Prove.",
  description:
    "Anumiti builds India-first AI infrastructure for compliance and document intelligence. Rooted in Nyaya philosophy, we bring inference-based verification to every Indian business.",
  path: "/about",
});

/* ---- Data ---- */

const MILESTONES = [
  {
    date: "2023 Q4",
    title: "Research begins",
    description:
      "Started deep research into Indian document processing, multilingual OCR, and the compliance landscape for India's emerging data protection framework.",
  },
  {
    date: "2024 Q1",
    title: "DPDP Act passed",
    description:
      "The Digital Personal Data Protection Act 2023 becomes law. The compliance gap in India becomes impossible to ignore.",
  },
  {
    date: "2024 Q2",
    title: "Pivot to Anumiti",
    description:
      "Rebranded and expanded scope. Combined compliance (KAVACH) and document intelligence (NETRA) into a single platform.",
  },
  {
    date: "2024 Q3",
    title: "NETRA alpha launch",
    description:
      "First API supporting 22 Indian languages for document extraction. Early adopters process 10,000+ pages in the first month.",
  },
  {
    date: "2024 Q4",
    title: "KAVACH beta launch",
    description:
      "Consent management and DPDP compliance suite enters beta. WhatsApp consent flows launched for MSMEs.",
  },
  {
    date: "2025 Q1",
    title: "Public launch",
    description:
      "Both products available with free tiers. First paying customers across fintech, legaltech, and CA firms.",
  },
];

const VALUES = [
  {
    icon: IndianRupee,
    title: "India-First",
    description:
      "Every product decision starts with India. 22 languages, DPDP-native, INR pricing, UPI payments, GST invoices.",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    description:
      "We process documents but never store personal data beyond what is needed. Zero-retention mode available on all plans.",
  },
  {
    icon: Code2,
    title: "Developer-Friendly",
    description:
      "Clean REST APIs, SDKs for Node.js and Python, webhook-first architecture, and documentation written by engineers for engineers.",
  },
  {
    icon: Server,
    title: "Affordable Infrastructure",
    description:
      "Compliance should not cost more than the fine. Our pricing starts free and scales predictably so MSMEs can afford to be compliant.",
  },
  {
    icon: BookOpen,
    title: "Open Standards",
    description:
      "We publish our schemas, contribute to open-source Indian document processing, and support interoperability with existing government systems.",
  },
];

const ABOUT_FAQS = [
  {
    question: "What does 'Anumiti' mean?",
    answer:
      "Anumiti (अनुमिति) is a concept from Nyaya philosophy, one of the six classical schools of Indian thought. It means 'knowledge derived through inference' — reaching valid conclusions from observable evidence. This is exactly what our products do: infer structure from documents, verify against authoritative sources, and produce provable audit trails.",
  },
  {
    question: "Are you hiring?",
    answer:
      "We are always looking for talented engineers, ML researchers, and go-to-market professionals who care about building for India. Check our Careers page or reach out at careers@anumiti.com.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      </div>

      {/* Hero */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal">
                About Anumiti
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
                We don&apos;t guess. We infer. We verify. We prove.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
                <span className="font-semibold text-navy">Anumiti (अनुमिति)</span> means{" "}
                <em>knowledge through inference</em> in Nyaya philosophy — one of the six
                classical schools of Indian thought. We apply this principle to compliance and
                document intelligence: observe evidence, infer structure, verify truth, produce
                proof.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Animated Beam separator */}
      <AnimatedBeam />

      {/* The Problem We Solve */}
      <Section background="gray" id="problem" className="py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              What problem does Anumiti solve?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              India faces two converging gaps that affect every business.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-navy">The Compliance Gap</h3>
              <p className="mt-3 text-gray-600">
                63 million businesses must comply with the DPDP Act. Most have no privacy
                infrastructure. Global tools like OneTrust are too expensive and too
                GDPR-centric. Indian MSMEs need affordable, Hindi/regional-language-first
                compliance tools that work on WhatsApp — not enterprise dashboards designed
                for Fortune 500 companies.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <AnimatedCounter value="63M+" label="Businesses affected" className="rounded-lg bg-indigo-50 p-4" />
                <div className="rounded-lg bg-indigo-50 p-4 text-center">
                  <div className="text-2xl font-bold text-indigo">₹250 Cr</div>
                  <div className="mt-2 text-xs text-gray-500">Max fine per breach</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-navy">The Document Intelligence Gap</h3>
              <p className="mt-3 text-gray-600">
                India generates billions of documents annually across 22 official languages.
                GST invoices, PAN cards, court orders, bank statements — all processed
                manually or with tools that fail on Indian scripts, layouts, and formats.
                There is no reliable, affordable API for Indian document extraction and
                verification.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <AnimatedCounter value="22" label="Official languages" className="rounded-lg bg-saffron-50 p-4" />
                <AnimatedCounter value="50+" label="Document types supported" className="rounded-lg bg-saffron-50 p-4" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Our Approach */}
      <Section background="white" id="approach" className="py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              How does Anumiti approach this?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Three pillars rooted in the Nyaya inference model.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Brain,
              title: "Infer",
              description:
                "AI-powered extraction that understands Indian document layouts, languages, and formats. From unstructured scans to structured JSON in milliseconds.",
            },
            {
              icon: ShieldCheck,
              title: "Verify",
              description:
                "Multi-source validation against government databases. GSTIN lookup, PAN verification, Aadhaar-mask compliance checks, and cross-document consistency scoring.",
            },
            {
              icon: FileSearch,
              title: "Prove",
              description:
                "Complete audit trails for every operation. Consent records, processing logs, compliance reports, and evidence packages ready for regulatory review.",
            },
          ].map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15}>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50">
                  <pillar.icon className="h-7 w-7 text-teal" />
                </div>
                <h3 className="text-xl font-bold text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Journey Timeline */}
      <Section background="white" id="journey" className="py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              How did Anumiti come to be?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The journey to India&apos;s AI infrastructure for compliance and document intelligence.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-12 ml-4 border-l-2 border-teal-200 pl-8 md:ml-0 md:pl-0">
          <div className="space-y-12 md:mx-auto md:max-w-2xl">
            {MILESTONES.map((milestone, i) => (
              <ScrollReveal key={milestone.date} delay={i * 0.1}>
                <div className="relative md:pl-10">
                  <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-teal bg-white md:-left-[9px]" />
                  <p className="text-xs font-bold uppercase tracking-wider text-teal">
                    {milestone.date}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-navy">{milestone.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{milestone.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="gray" id="values" className="py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              What do we believe in?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Principles that guide every product decision at Anumiti.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                  <value.icon className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-base font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white" className="py-24 md:py-32">
        <ScrollReveal>
          <FAQSection faqs={ABOUT_FAQS} />
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <FloatingOrbs variant="hero" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Join us in building for India
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Whether you are a customer, a partner, or a future teammate — we would love to
                hear from you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTAButton href={CTA_URLS.signup} variant="primary" size="lg">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
                <CTAButton
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Contact Us
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
