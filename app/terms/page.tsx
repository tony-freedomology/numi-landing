const sections = [
  {
    title: "1. Agreement to Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your access to and use of Zoe, an SMS-based discipleship companion operated by Freedomology (\"Zoe\", \"we\", \"us\", \"our\").",
      "By using Zoe, you agree to these Terms. If you do not agree, do not use the service."
    ]
  },
  {
    title: "2. Service Description",
    body: [
      "Zoe provides conversational and proactive SMS experiences intended to support spiritual reflection and daily practice.",
      "Zoe is not a replacement for pastoral counsel, licensed mental health care, emergency services, or medical/legal advice."
    ]
  },
  {
    title: "3. Eligibility and Accounts",
    body: [
      "You must be at least 13 years old to use Zoe. If you are under the age of majority in your jurisdiction, you must have parent or guardian permission where required.",
      "You are responsible for maintaining accurate account information and safeguarding your device and message access."
    ]
  },
  {
    title: "4. Messaging, Carrier, and Fees",
    body: [
      "Zoe communicates via SMS. Standard message and data rates from your mobile carrier may apply.",
      "Carriers are not liable for delayed or undelivered messages."
    ]
  },
  {
    title: "5. Acceptable Use",
    body: [
      "You agree not to use Zoe for unlawful, abusive, or harmful conduct, including attempts to exploit, disrupt, or reverse engineer service components.",
      "We may suspend or terminate access for misuse, security risk, or legal compliance."
    ]
  },
  {
    title: "6. AI-Generated Content",
    body: [
      "Zoe responses may be generated with AI and may not always be accurate, complete, or suitable for your circumstances.",
      "You should use judgment and seek qualified human support for critical decisions, crisis situations, or professional guidance needs."
    ]
  },
  {
    title: "7. Church Context and Boundaries",
    body: [
      "If your church provides Zoe, your use may be associated with that church account.",
      "Church-facing features are intended for aggregated insights and operational workflows as described in our Privacy Policy."
    ]
  },
  {
    title: "8. Subscription and Billing",
    body: [
      "Paid features may require subscription billing managed through third-party payment providers.",
      "Unless otherwise stated, subscriptions renew automatically until canceled."
    ]
  },
  {
    title: "9. Intellectual Property",
    body: [
      "Zoe and its software, branding, and service materials are protected by intellectual property laws.",
      "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable right to use Zoe for personal or authorized church use."
    ]
  },
  {
    title: "10. Privacy",
    body: [
      "Your use of Zoe is also governed by our Privacy Policy, which explains data practices, controls, and rights."
    ]
  },
  {
    title: "11. Disclaimer of Warranties",
    body: [
      "Zoe is provided on an \"as is\" and \"as available\" basis, without warranties of any kind, express or implied, to the fullest extent permitted by law."
    ]
  },
  {
    title: "12. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Freedomology and Zoe are not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the service.",
      "Our aggregate liability for claims related to Zoe will not exceed the greater of the amount you paid to Zoe in the prior 12 months or $100."
    ]
  },
  {
    title: "13. Indemnification",
    body: [
      "You agree to indemnify and hold harmless Freedomology and Zoe from claims arising from your misuse of the service or violation of these Terms."
    ]
  },
  {
    title: "14. Changes and Termination",
    body: [
      "We may modify Zoe, these Terms, or discontinue portions of the service.",
      "We may suspend or terminate access for violations, legal reasons, or security protection."
    ]
  },
  {
    title: "15. Governing Law",
    body: [
      "These Terms are governed by applicable U.S. law and the laws of the state designated in your controlling customer agreement, without regard to conflict-of-law rules."
    ]
  },
  {
    title: "16. Contact",
    body: [
      "For legal or terms questions, contact support@zoe.live."
    ]
  }
];

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFA] text-slate-900 relative selection:bg-brand-cyan/20">
      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-brand-cyan/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-jade/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-20 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-jade transition-colors mb-12">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-cyan mb-6">
            Zoe Legal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter-editorial text-slate-900 mb-6 font-bold leading-[1.1]">
            Terms of Service
          </h1>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500 border-l-2 border-slate-200 pl-4">
            <p>Effective: February 27, 2026</p>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <p>Updated: February 27, 2026</p>
          </div>
          <p className="mt-8 text-xl text-slate-600 leading-relaxed font-medium">
            These Terms define how Zoe can be used and where responsibility sits between us and users.
          </p>
        </header>

        {/* Sections */}
        <article className="space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="scroll-mt-24 group">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4 group-hover:text-brand-cyan transition-colors">{section.title}</h2>
              <div className="prose prose-slate prose-lg max-w-none prose-p:leading-relaxed text-slate-700">
                {section.body?.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </article>

        <div className="mt-20 pt-8 border-t border-slate-200">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-jade transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
