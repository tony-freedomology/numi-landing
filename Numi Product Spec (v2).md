Numi (New Me) — Product \+ Technical Spec (v2)

Note: This is the full product/service spec (not just landing page). It includes the "what it does", theology guardrails, architecture options, and a concrete build plan.

0\) What Numi Is (One Sentence)  
Numi is a church-aligned discipleship companion that helps people practice daily obedience to Jesus through simple rhythms (Scripture, prayer, community, service, confession/repentance, generosity), personalized nudges, and memory-driven follow-ups — delivered over SMS first.

1\) The Core Bet (Differentiation / Moat)  
Numi is not a Bible app and not "ChatGPT but Christian". It's a relationship engine:  
• Persistent relational memory (it remembers your story, prayers, struggles, next steps)  
• Closes loops (intention → action → reflection)  
• Proactive follow-ups (it asks about the thing you mentioned yesterday)

Switching cost becomes: "You'd lose the companion that knows your journey."

2\) The Day-to-Day Experience (What It Actually Does)

A) Onboarding (First 10 Minutes)  
• User texts "START" (or church invites via QR)  
• Picks tone: Encouragement / Challenge / Accountability  
• Picks cadence: Light / Normal / High  
• Sets 2 anchors:  
  \- Morning check-in time  
  \- Evening recap time  
• Answers 3 questions:  
  \- What's your biggest growth edge right now?  
  \- What's your biggest obstacle/temptation?  
  \- Who's your "real life person" (pastor/small group leader/spouse) you want Numi to encourage you to involve?

B) Daily Loop (3 Touchpoints)

1\) Morning (2–3 min)  
• One Scripture (from the church plan/series)  
• One prayer prompt  
• One micro-obedience step  
• One question: "What's one thing you want to surrender to Jesus today?"

2\) Midday (15 sec, optional)  
• Only if within the user's nudge budget  
• "Quick check: did you get your 10 min with John 15?"  
• "Pause: breathe, pray one sentence, re-center."

3\) Evening Recap (2 min)  
• "What did you do today that felt like obedience?"  
• "Where did you drift? Any repentance needed?"  
• "Who do you need to text or reconcile with?"  
• Logs a short "day summary" memory

C) Memory-Driven Follow-Ups (The Magic)  
• User: "Big meeting at 2, nervous"  
• Numi: "Praying. Tell me how it went after."  
• Numi later: "How'd the meeting go?"

D) Event \+ Service Nudges (Church Aligned)  
• "Men's group tonight 7pm — want to go?"  
• "Saturday serve team needs 4 volunteers — want me to sign you up or remind you tomorrow?"

3\) Theology \+ Guardrails (Non-Negotiables)

Numi must never become a digital pastor.

Hard Never Rules:  
• Never claim divine authority or revelation ("God told me…")  
• Never provide authoritative interpretation of Scripture  
• Never do absolution/confession in a way that replaces church practice  
• Never counsel on self-harm/abuse/violence beyond immediate safe handoff \+ resources  
• Never argue theology / denominational debates — defer to the user's church  
• Never encourage isolation from church; it should push toward community

Guardrails Implementation:  
• "Humble companion" persona: "Here's a passage that might be relevant…", "Have you talked to your pastor about this?"  
• Scripture retrieval: Never hallucinate verses; always fetch exact text from a trusted source  
• Sensitive keyword triggers: self-harm, abuse, violence, severe distress → canned safe responses \+ escalation  
• Escalation policy per church (who gets pinged, what data, after-hours rules)  
• Privacy: Pastors see aggregated themes, never individual confessions/prayers by default

4\) Architecture Decision (Fork OpenClaw vs SMS Backend)

Recommendation: Ship V1 as "B+" (backend \+ SMS) but architect for V2 "Church Agent".

Why:  
• Per-user OpenClaw/VPS (fork) is max magic but ops/security cost explodes immediately  
• Pure SMS backend is fastest \+ cheapest \+ good enough to learn  
• Once product-market fit shows up, add one agent per church (not per user) for deeper proactivity

Three Options:

A) Fork OpenClaw Per User  
• Best experience, worst cost \+ complexity  
• Not first move

B) Backend API \+ SMS (V1)  
• Supabase Postgres as the brain  
• Edge functions for inbound/outbound  
• Scheduled touchpoints via pg\_cron/Vercel Cron  
• Memory as explicit rows (user\_memories)

C) Hybrid: One Agent Per Church (V2)  
• One long-running "church brain" per church  
• All user state in Supabase (tenant-safe)  
• Agent holds short-term context \+ generates planned\_messages

5\) Concrete Build Plan (Engineer Can Start Tomorrow)

Core Components:  
• Messaging gateway (Twilio SMS → Edge Function)  
• Supabase tables \+ RLS tenancy  
• Scheduler writes planned\_messages  
• Sender sends \+ logs costs/status  
• Inbound handler routes to "conversation responder"

Minimum Tables:  
• churches, church\_profiles, church\_content  
• users, user\_preferences, user\_state  
• conversations, messages  
• user\_memories  
• planned\_messages  
• escalations

Message Flow:  
• Inbound SMS → numi-sms-inbound  
• Lookup user \+ church  
• Fetch last N messages \+ relevant memories  
• Generate response  
• Write outbound message \+ any new memory items  
• Send via Twilio

Scheduler Flow:  
• Daily cron per church  
• For each user: check nudge budget \+ last activity  
• Create planned\_messages  
• Sender sends and marks status

6\) Business Model \+ Go-to-Market

Model: B2B2C (sell to churches, serve congregation)  
• Pricing by member tier (ex: $99/mo up to 250, $299/mo up to 1,000)  
• Church gets:  
  \- Scalable discipleship touchpoints for every member  
  \- Aggregated insights (themes: anxiety up 30%, prayer topics)

GTM Wedge:  
• Pilot in your own church with staff \+ one trusted small group  
• Then 5–10 pastor friends with free 6-month pilot for testimonials

7\) Risks \+ Mitigations

Risk: Theological controversy  
• Mitigate: Guardrails \+ church alignment \+ focus on universally accepted practices

Risk: Hallucinated Scripture / bad advice  
• Mitigate: Retrieval for Scripture; escalation for high-risk topics; conservative persona

Risk: Privacy  
• Mitigate: Radical transparency; RLS; aggregated analytics only

Risk: Cringe factor  
• Mitigate: Tone controls; short messages; mirror user language; feedback loop

8\) What We Recommend You Decide This Week

Decision 1: V1 Target  
• V1 is SMS backend (B+) for fastest learnings

Decision 2: Church vs Individual  
• Start B2B2C. Numi should be church-aligned by default.

Decision 3: "North Star Magic"  
• Memory-driven follow-ups \+ closed loops are the core. Prioritize those over fancy AI features.

\#\# 5\) Go-to-Market Strategy: B2B (Churches) First

\#\#\# The Core Recommendation  
Sell to churches (B2B), serve their congregations (B2C experience). The individual never pays — the church does.

\#\#\# Why B2B First Wins

\*\*1. Distribution Is Solved\*\*  
Selling direct to consumers means competing for attention against YouVersion, Pray.com, Hallow, and every other faith app — requiring massive marketing spend. But churches have a built-in distribution channel: the pulpit. One pastor says "we're using Numi this semester" and you have 200-2,000 users overnight with zero ad spend.

\*\*2. Willingness to Pay\*\*  
Individual Christians are notoriously price-sensitive with apps (most Bible apps are free). But churches already budget for discipleship tools, curriculum, and software. A church paying $200-500/month for a tool that measurably moves the needle on congregational discipleship is a straightforward budget line item. Far easier than convincing 500 individuals to pay $10/month each.

\*\*3. The Moat Is Deeper\*\*  
A consumer app is generic. A church-aligned agent that knows THIS church's statement of faith, THIS week's sermon, THIS small group's study — that is genuinely differentiated. No competitor can replicate that without doing the same church-by-church alignment work.

\*\*4. Trust Comes Built In\*\*  
The biggest objection to "AI discipleship" is trust: "Who made this? What theology does it follow?" When a user's own pastor endorses it, that objection evaporates instantly. Building that level of trust as a consumer brand takes years.

\#\#\# The Proven Model  
This is the exact playbook that wins in church tech. Planning Center, Subsplash, and Pushpay all sell to churches and serve congregations. The church is the customer; the individual is the user.

\#\#\# Launch Playbook

\*\*Phase 1: Pilot (Months 1-3)\*\*  
\- Partner with 1-3 churches (ideally ones with existing relationships)  
\- Free pilot period to prove the concept  
\- Manual onboarding: personally configure each church's agent with their statement of faith, sermon series, small group curriculum  
\- Success metrics: daily active usage, small group attendance lift, pastor feedback

\*\*Phase 2: Validate \+ Price (Months 3-6)\*\*  
\- Analyze pilot data to determine pricing based on demonstrated value  
\- Tiered pricing by congregation size (e.g., \<200, 200-500, 500-2000, 2000+)  
\- Build self-service onboarding tools to reduce manual setup

\*\*Phase 3: Scale (Months 6-12)\*\*  
\- Church conference circuit (biggest distribution channel in church tech)  
\- Case studies from pilot churches  
\- Referral program (pastors talk to pastors)  
\- Denominational partnerships

\#\#\# Future: Consumer Play (Phase 2+)  
A "personal Numi" for individuals not connected to a church becomes possible later — and actually serves as a funnel INTO churches. "Numi noticed you're in Columbus, OH. Would you like to connect with a local church that uses Numi?" This creates a flywheel: churches attract users, users attract churches.

