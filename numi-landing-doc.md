Numi landing page plan and content

Vision
Numi is an AI discipleship companion designed to keep spiritual formation practical, relational, and grounded in local church life. It delivers daily rhythms, Scripture prompts, and reflective practices without claiming spiritual authority. It stays humble, supports real-world community, and escalates sensitive topics to real people.

Core promise
A companion to keep you moving, not a replacement for your pastor or community.

Target audience
- Jesus-centered seekers who want daily spiritual momentum
- Church members who want help with consistency and rhythms
- Ministry leaders who want scalable, ethical support tools

Message pillars
1) Disciplines made daily
2) Relational and accountable
3) Humble and safe by design
4) Opt-in and data-respecting

Hero copy
Headline
Meet Numi, your AI companion for modern spiritual formation.

Subhead
Numi helps you build daily rhythms, engage Scripture, and stay connected to real people who care about your growth. Not a replacement for the Church. A companion to keep you moving.

Primary CTA
Join the waitlist

Secondary CTA
See how it works

Feature cards copy
1) Guided discipleship, not generic advice
Numi learns your rhythms, your questions, and your growth plan to surface Scripture, practices, and challenges that fit the season you are in.

2) Daily nudges that protect your attention
Short, focused prompts and check-ins that keep formation in view without adding noise.

3) Always-on companion with human escalation
When a topic needs pastoral care, Numi can route you to a real human leader or community support.

Formation steps
Discern
Clarify your discipleship goals, rhythms, and the people walking with you.

Practice
Receive daily micro-practices, Scripture prompts, and reflective check-ins.

Integrate
Track what is working, celebrate growth, and surface next steps.

Integrity guardrails copy block
- Numi is not your pastor and does not replace your local church.
- Numi does not claim divine authority or revelation.
- High-risk or sensitive conversations are escalated to human care.
- You are always in control of your data and opt-in settings.

Waitlist form copy
Title
Be the first to experience Numi

Legal
I agree to receive updates about Numi. Reply STOP to opt out. Msg and data rates may apply.

Footer copy
Numi by Freedomology
Privacy | Terms | Contact

Visual direction
- Modern, contemplative, gradient-heavy aesthetic
- Low noise layout, large typography, spacious sections
- Light glows, soft glass panels, subtle motion
- Use motion for reveal, not distraction

Image and video prompts
Nano Banana image prompt placeholder
Moody devotional scene, soft candlelight, modern worship aesthetic, gentle gradients, shallow depth of field, contemplative atmosphere, warm highlights, subtle film grain.

Gemini video prompt placeholder
Slow cinematic b-roll of journaling and prayer, hands on Bible, sunrise light through a window, soft lens flare, gentle camera drift, ambient room tone.

Technical spec and plan
Landing page stack
- Next.js app router with Tailwind CSS and Framer Motion
- Single page layout, sectioned content blocks
- Waitlist form with email and optional SMS
- Analytics events: page_view, waitlist_submit, waitlist_error, scroll_depth, cta_click

Waitlist wiring
Option A: Supabase
- Table: waitlist_signups with name, email, phone, consent, created_at, source
- API route: POST /api/waitlist
- Store consent flag and timestamp

Option B: Email provider
- Use webhook to Mailchimp, ConvertKit, or Resend audience
- Store a local backup in Supabase for analytics

SMS compliance
- Include explicit opt-in checkbox
- Provide STOP language in form
- Store consent and message in records

OpenClaw plan
Decision point: fork or not
- Fork if Numi requires deep personalization, long-lived memory, scheduled nudges, and custom safety workflows
- Do not fork if Numi is only a marketing front and the core AI assistant can remain in Freedomology core stack

Recommended approach
- Start without a fork for landing and waitlist
- Fork OpenClaw if the product roadmap includes always-on companionship, daily nudges, and multi-system integrations

OpenClaw alignment notes
- Always-on companion pattern: always running assistant on a dedicated Mac mini with opt-in data sources
- Behavior insights across habits, calendar, messages, and life metrics
- Emphasis on neutral observation, not judgment

Audit findings from human-growth-platform
Numi exists as a gated feature flag in the app
- Route /numi is controlled by VITE_ENABLE_NUMI flag
- Numi page is a chat interface with Supabase tables numi.chat_sessions and numi.messages

Supabase numi schema includes additional formation data
- documents, document_chunks, user_memories, app_settings
- plan_templates, user_plan_sessions
- food_logs, mood_logs, activity_logs, weight_logs
- notification_history, notification_preferences, user_stats
- profiles table seeded for Numi users

Supabase functions related to Numi
- numi-sms-inbound, numi-sms-agent, numi-daily-poke
- process-pending-sms and other support functions

Notes for product integration
- The landing page can link directly to app.freedomology.com/numi once the flag is enabled for waitlist users
- Use waitlist data to provision numi.profiles and seed initial chat_sessions

Production landing scaffold
Location
/Users/tony/.openclaw/workspace/numi-landing

Key files
- app/page.tsx contains the full landing page layout and copy
- app/globals.css sets gradients and glass styling
- tailwind.config.ts defines color system

Wiring notes
- Create an API route at app/api/waitlist/route.ts for POST requests
- Post form data to the API route and surface toast or inline success
- Sync to Supabase or email provider from the API route
- Add analytics to CTA clicks and submit results

Suggested next steps
1) Finalize brand tone and visual palette
2) Confirm waitlist destination system
3) Replace placeholders with real imagery and product mockups
4) Add testimonials or short demo clips once ready
5) Enable Numi route for the first cohort
