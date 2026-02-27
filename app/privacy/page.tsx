const sections = [
  {
    title: "1. Overview",
    body: [
      "Zoe is an SMS-based discipleship companion. This Privacy Policy explains what we collect, how we use it, who we share it with, and the controls available to users and church partners."
    ]
  },
  {
    title: "2. Core Privacy Commitments",
    bullets: [
      "Private by default: one-to-one conversation content is private by default.",
      "Church-level visibility is aggregated: church dashboards are designed for trend-level insights rather than member-level private conversation transcripts.",
      "Human access is restricted: internal access to sensitive data is limited, role-based, and auditable.",
      "AI improvement/training sharing is opt-in: by default, user content is not shared for optional model-improvement programs.",
      "User control: users can request export or deletion of their data."
    ]
  },
  {
    title: "3. Information We Collect",
    body: [
      "Account and profile data may include phone number, optional name, timezone, preference settings, and church affiliation (if applicable).",
      "Conversation and product data may include inbound/outbound message content, message metadata, memory/context records, and onboarding responses.",
      "Operational and security data may include request identifiers, abuse-prevention telemetry, and audit logs related to sensitive access and consent changes.",
      "Billing data may include subscription state and payment-provider identifiers."
    ]
  },
  {
    title: "4. How We Use Information",
    bullets: [
      "Deliver conversational responses and daily touchpoints",
      "Personalize memory-based follow-ups",
      "Support safety workflows, including crisis detection",
      "Operate church-level aggregated analytics",
      "Run billing, reliability, support, and fraud prevention",
      "Meet legal and security obligations"
    ]
  },
  {
    title: "5. AI Processing",
    body: [
      "To provide Zoe’s responses, relevant conversation context may be sent to contracted AI providers.",
      "Our policy intent is to configure provider settings and contractual terms to limit use to service delivery, minimize data sent to what is necessary, and keep optional AI-improvement sharing opt-in by default."
    ]
  },
  {
    title: "6. Sharing and Disclosure",
    body: [
      "With churches: Church-facing analytics are intended to be aggregate and de-identified. Personal conversation content is not intended for default church dashboard visibility.",
      "With service providers: We use third-party processors for infrastructure, messaging, AI inference, billing, and monitoring under contractual controls.",
      "Legal and safety disclosures: We may disclose limited information when required by law or when necessary to reduce imminent risk of serious harm."
    ]
  },
  {
    title: "7. Consent and User Controls",
    body: [
      "Zoe supports privacy controls that may include memory mode preferences, AI-improvement sharing preference, human support access settings, and retention profile settings.",
      "We maintain consent records and support revocation for optional settings."
    ]
  },
  {
    title: "8. Data Retention and Deletion",
    body: [
      "We retain information only as long as needed for service operation, security, and legal obligations.",
      "Users can request data export, deletion of specific content, and full account deletion.",
      "Backup deletion follows system retention schedules and may not be immediate."
    ]
  },
  {
    title: "9. Security",
    body: [
      "We apply layered safeguards, including encryption in transit, access controls, least-privilege permissions, and auditable logging for sensitive access paths.",
      "No internet service is risk-free, and we cannot guarantee absolute security."
    ]
  },
  {
    title: "10. Safety Workflows",
    body: [
      "Zoe may detect crisis language and trigger safety-oriented responses.",
      "Our operational approach is consent-first whenever possible, with narrow exceptions for urgent life-safety scenarios."
    ]
  },
  {
    title: "11. International Processing",
    body: [
      "Data may be processed in different regions depending on infrastructure and provider locations. Appropriate safeguards are applied where required."
    ]
  },
  {
    title: "12. Children",
    body: [
      "Zoe is not intended for users who are below the minimum age required by applicable law without appropriate authorization."
    ]
  },
  {
    title: "13. Changes to This Policy",
    body: [
      "We may update this policy. Material changes will be reflected by an updated effective date and, where appropriate, additional notice."
    ]
  },
  {
    title: "14. Contact",
    body: ["Privacy requests and questions: privacy@zoe.live"]
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f8fbfa] text-slate-900">
      <section className="border-b border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">Zoe Legal</p>
          <h1 className="mt-3 text-4xl tracking-tighter-editorial md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-600 font-medium">Last updated: February 27, 2026</p>
          <p className="mt-6 text-lg text-slate-700 leading-relaxed">
            Zoe is designed as an interactive prayer journal with proactive support. Privacy is part of the product, not a footnote.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-4xl space-y-8">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2 text-slate-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-jade" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
