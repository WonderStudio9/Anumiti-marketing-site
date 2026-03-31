import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Section } from "@/components/marketing/section";
import { CTAButton } from "@/components/marketing/cta-button";
import { FAQSection } from "@/components/marketing/faq-section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { generatePageMetadata } from "@/lib/seo";
import { CTA_URLS } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Contact Anumiti — Let's Talk",
  description:
    "Get in touch with the Anumiti team. Sales inquiries, partnerships, support, or press — we respond within 1 business day.",
  path: "/contact",
});

const CONTACT_FAQS = [
  {
    question: "Can I schedule a live demo of KAVACH or NETRA?",
    answer:
      "Absolutely. Select 'Sales' as the inquiry type and mention the product you are interested in. We will schedule a 30-minute personalized demo at a time that works for you.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "We respond to all inquiries within 1 business day. Sales and partnership inquiries typically receive a response within 4 hours during IST business hours (10 AM - 7 PM).",
  },
  {
    question: "Do you offer enterprise pricing or custom contracts?",
    answer:
      "Yes. For organizations processing high volumes or requiring on-premise deployment, custom SLAs, or dedicated infrastructure, please reach out via the Sales inquiry type. We will tailor a plan to your requirements.",
  },
  {
    question: "I am a journalist or analyst. How do I reach the press team?",
    answer:
      "Select 'Press' as the inquiry type and include your publication name and deadline. Our communications team will respond with priority. For urgent press queries, email press@anumiti.com directly.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      </div>

      {/* Hero */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal">
            Get in Touch
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Whether you need a demo, want to explore a partnership, or just have a
            question — we are here to help.
          </p>
        </div>
      </Section>

      {/* Two-column: Form + Info */}
      <Section background="gray">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form — takes more space */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h2 className="mb-6 text-xl font-bold text-navy">Send us a message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info Panel */}
          <div className="lg:col-span-2">
            <div className="sticky top-32 space-y-8">
              {/* Email */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Mail className="h-5 w-5 text-teal-700" />
                  </div>
                  <h3 className="text-base font-bold text-navy">Email</h3>
                </div>
                <a
                  href="mailto:hello@anumiti.com"
                  className="text-sm text-teal hover:underline"
                >
                  hello@anumiti.com
                </a>
                <p className="mt-1 text-xs text-gray-500">
                  For general inquiries and sales
                </p>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <MapPin className="h-5 w-5 text-teal-700" />
                  </div>
                  <h3 className="text-base font-bold text-navy">Location</h3>
                </div>
                <p className="text-sm text-gray-700">Bangalore, India</p>
                <p className="mt-1 text-xs text-gray-500">
                  Remote-first team, headquartered in Bangalore
                </p>
              </div>

              {/* Response Time */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Clock className="h-5 w-5 text-teal-700" />
                  </div>
                  <h3 className="text-base font-bold text-navy">Response Time</h3>
                </div>
                <p className="text-sm text-gray-700">Within 1 business day</p>
                <p className="mt-1 text-xs text-gray-500">
                  Sales inquiries typically within 4 hours (IST business hours)
                </p>
              </div>

              {/* Quick Links */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-base font-bold text-navy">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href={CTA_URLS.docs} className="text-teal hover:underline">
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="text-teal hover:underline">
                      Pricing Plans
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-teal hover:underline">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white" id="faq">
        <FAQSection title="Contact FAQ" faqs={CONTACT_FAQS} />
      </Section>

      {/* CTA */}
      <Section background="navy">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Prefer to explore on your own?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Sign up free and try KAVACH or NETRA right away. No sales call required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href={CTA_URLS.signup} variant="primary" size="lg">
              Start Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
            <CTAButton
              href={CTA_URLS.docs}
              variant="secondary"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Read the Docs
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
