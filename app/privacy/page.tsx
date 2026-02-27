const sections = [
  {
    title: "1. Scope",
    body: [
      "This policy applies to Zoe’s websites, SMS experience, church admin features, and support operations where this policy is posted or linked."
    ]
  },
  {
    title: "2. Core Commitments",
    bullets: [
      "Private by default: one-to-one message content is private by default.",
      "Church visibility is aggregated: church dashboards are intended for trend-level analytics, not member-level private transcripts.",
      "Restricted human access: internal access to sensitive data is role-based, time-bounded when possible, and logged.",
      "AI-sharing controls: optional data-sharing for AI improvement is opt-in by default unless you explicitly enable it.",
      "User control: users can request export and deletion rights as described below."
    ]
  },
  {
    title: "3. Information We Collect",
    body: [
      "Information you provide may include phone number, optional name, church affiliation, conversation content, support requests, and privacy requests.",
      "Information generated through use may include outbound messages, delivery events, onboarding responses, memory/context records, and consent or audit records for privacy-sensitive operations.",
      "Account, billing, and security information may include subscription status, payment-provider identifiers, authentication events, and request metadata for abuse prevention and reliability."
    ]
  },
  {
    title: "4. How We Use Information",
    bullets: [
      "Operate Zoe’s conversational SMS experience",
      "Provide daily devotional touchpoints and follow-ups",
      "Personalize responses using prior context and configured memory settings",
      "Run safety workflows, including crisis escalation pathways",
      "Support church-level analytics in aggregate form",
      "Process billing, prevent fraud, and maintain service reliability",
      "Comply with legal obligations and enforce our Terms"
    ]
  },
  {
    title: "5. AI Processing and Model Providers",
    body: [
      "To provide responses, relevant context may be processed by contracted AI providers.",
      "Our objective is to send only data needed for service functionality, configure provider controls to limit secondary use where available, and keep optional AI-improvement sharing disabled by default unless you opt in."
    ]
  },
  {
    title: "6. Church Relationship and Data Boundaries",
    body: [
      "If your church offers Zoe, your account may be associated with that church.",
      "Church leaders may view aggregate trends, while dashboards are not intended to expose private one-to-one conversation transcripts by default.",
      "Any exception workflow should require explicit consent and audit logging."
    ]
  },
  {
    title: "7. When We Share Information",
    body: [
      "We may share information with service providers that host, transmit, process, secure, and support Zoe.",
      "We may disclose information for legal reasons when required by law or lawful process.",
      "We may disclose limited information for safety reasons to help prevent imminent harm where legally permitted.",
      "In a business transfer, data may transfer subject to applicable confidentiality and legal safeguards.",
      "We do not sell personal information for money."
    ]
  },
  {
    title: "8. Consent and Privacy Controls",
    body: [
      "Depending on product availability and role, controls may include memory mode, AI-improvement opt-in/opt-out, human support access, and retention profile settings.",
      "When material consent states change, Zoe maintains consent event records for accountability."
    ]
  },
  {
    title: "9. Data Retention",
    body: [
      "We retain data for as long as reasonably necessary to provide the service, maintain safety/security logs, satisfy legal/accounting obligations, and enforce agreements.",
      "Retention windows vary by data category. Backup deletion may follow delayed overwrite cycles and may not be immediate."
    ]
  },
  {
    title: "10. Security",
    body: [
      "We use layered technical and organizational safeguards, including encryption in transit, role-based access controls, least-privilege principles, authentication protections, and monitoring of sensitive access paths.",
      "No internet service can be guaranteed to be 100% secure."
    ]
  },
  {
    title: "11. Safety and Crisis Workflows",
    body: [
      "Zoe may detect crisis language and trigger safety-oriented workflows.",
      "Where feasible, Zoe follows a consent-first approach, with narrow exceptions for urgent life-safety scenarios."
    ]
  },
  {
    title: "12. Your Rights and Choices",
    body: [
      "Subject to applicable law, you may request access, correction, export, and deletion of personal data, as well as changes to optional consent settings."
    ]
  },
  {
    title: "13. U.S. State Privacy Disclosures",
    body: [
      "Residents of certain U.S. states may have additional rights, including rights to know, delete, correct, and opt out of certain processing categories. Zoe processes verified requests as required by applicable law."
    ]
  },
  {
    title: "14. Children",
    body: [
      "Zoe is not intended for children under 13. If we learn that personal information from a child under 13 was collected without required authorization, we will take steps to delete it as required by law."
    ]
  },
  {
    title: "15. International Processing",
    body: [
      "Data may be processed in the United States and other countries where Zoe or its processors operate. Where required, appropriate safeguards are applied."
    ]
  },
  {
    title: "16. Changes to This Policy",
    body: [
      "We may update this policy from time to time. Material changes will be reflected by an updated effective date and, where appropriate, additional notice."
    ]
  },
  {
    title: "17. Contact",
    body: ["For privacy questions or requests: privacy@zoe.live"]
  }
];

const faqs = [
  {
    question: "Who can see my private messages?",
    answer:
      "Private by default means your one-to-one messages are not intended for open church dashboard viewing. Church-facing views are designed around aggregated trends, not personal transcripts."
  },
  {
    question: "Is my data used to train AI models?",
    answer:
      "Optional AI-improvement sharing should be opt-in. If you do not opt in, the baseline intent is service delivery rather than optional model-improvement sharing."
  },
  {
    question: "Can humans at Zoe read my data?",
    answer:
      "Sensitive access is role-restricted and audit logged. Human access should be limited to operational needs like support, safety, or legal obligations."
  },
  {
    question: "Can I export or delete my data?",
    answer:
      "Yes. Subject to applicable law, users can request access, export, correction, and deletion actions as described in this policy."
  }
];

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500 border-l-2 border-slate-200 pl-4">
            <p>Effective: February 27, 2026</p>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <p>Updated: February 27, 2026</p>
          </div>
          <p className="mt-8 text-xl text-slate-600 leading-relaxed font-medium">
            Zoe is designed as an interactive prayer journal with proactive support. <span className="text-slate-900">Privacy is part of the product, not a footnote.</span>
          </p>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Zoe is operated by Freedomology ("Zoe", "we", "us", "our"). This policy explains what personal information we collect, how we use it, when we share it, and the choices available to users.
          </p>
        </header>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Privacy FAQ</h2>
              <p className="text-slate-600 mb-8 font-medium">Straight answers to the trust questions people ask before they share anything meaningful.</p>

              <div className="grid gap-8">
                {faqs.map((faq) => (
                  <div key={faq.question} className="group">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-cyan transition-colors">{faq.question}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="scroll-mt-24 group">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4 group-hover:text-brand-cyan transition-colors">{section.title}</h2>
              <div className="prose prose-slate prose-lg max-w-none prose-p:leading-relaxed prose-li:leading-relaxed text-slate-700">
                {section.body?.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-lg">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="space-y-3 mt-4 list-none pl-0">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-4 items-start text-lg">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-jade" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </section>

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
