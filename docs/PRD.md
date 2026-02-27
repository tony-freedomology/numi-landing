# Zoe — Product Requirements Document (PRD)

Version: 3.0
Updated: 2026-02-26
Author: Tony Allen + Lloyd (AI)
Status: Active — ready for engineering

---

## 1. What Zoe Is (One Sentence)

Zoe is an SMS-based AI faith companion that helps people practice daily devotion to Jesus through personalized rhythms, memory-driven follow-ups, and proactive nudges — sold to churches (B2B) and available to individuals (B2C).

---

## 2. The Core Bet (Why This Wins)

Zoe is NOT a Bible app and NOT "ChatGPT but Christian." It's a relationship engine:

- **Persistent relational memory** — it remembers your story, prayers, struggles, next steps
- **Closes loops** — intention → action → reflection (morning → midday → evening)
- **Proactive follow-ups** — it asks about the thing you mentioned yesterday
- **Church-aligned** — echoes what YOUR pastor preached, not generic devotional content
- **Day-long devotion, not daily devotional** — stays with you all day, not just a 10-minute morning quiet time

The switching cost: "you'd lose the companion that knows your journey."

---

## 3. User Types

### 3a. Individual User ($7/mo after 14-day free trial)
- Signs up directly at zoe.live
- Gets the full daily rhythm (morning/midday/evening)
- Not affiliated with a specific church
- Uses Zoe's baseline theological posture (historic Christian orthodoxy, grace-centered, Scripture through the lens of Jesus)

### 3b. Church Member (free to them — church pays)
- Invited by their church (QR code, text START, pastor announcement)
- Gets the daily rhythm PLUS church-specific content:
  - This week's sermon series woven into prompts
  - Church events and service opportunities
  - Theological framing matches their church's statement of faith
- Their data contributes to anonymized church analytics

### 3c. Church Admin / Pastor
- Manages the church's Zoe instance
- Uploads sermon transcripts, study guides, curriculum
- Configures statement of faith and theological guardrails
- Views the church dashboard (anonymized analytics)
- Manages billing, member invitations, escalation policies

---

## 4. The Daily Experience

### 4a. Onboarding (First 10 Minutes)

User texts START (or scans church QR code):

1. Welcome message + opt-in confirmation
2. Pick tone preference: encouragement / challenge / accountability
3. Pick cadence: light (morning only) / normal (morning + evening) / high (all 3 touchpoints)
4. Set morning check-in time
5. Set evening recap time
6. Answer 3 seed questions:
   - "What's your biggest growth edge right now?"
   - "What's your biggest obstacle or temptation?"
   - "Who's your real-life person (pastor, friend, spouse) you want Zoe to encourage you to stay connected with?"

### 4b. Daily Loop (3 Touchpoints)

**MORNING — The Anchor (2-3 min)**
- One Scripture (from church plan if church member, curated if individual)
- One short reflection
- One micro-obedience step ("do this today")
- One surrender question: "What's one thing you want to surrender to Jesus today?"

**MIDDAY — The Nudge (15 sec, optional)**
- Only if within user's nudge budget
- Quick check-in: "Did you get your time in John 15?"
- Or: "Pause. Breathe. Pray one sentence. Re-center."
- Or: Contextual follow-up on something they mentioned this morning

**EVENING — The Recap (2 min)**
- "Where did you actually walk with Jesus today?"
- "Where did you drift? Any repentance needed?"
- "Who do you need to reach out to?"
- Logs a short day summary to memory
- Gratitude prompt: "What are you grateful for today?"

### 4c. Memory-Driven Follow-Ups (The Magic)

This is the core differentiator. Examples:

- User mentions "big interview at 2pm, nervous" → Zoe: "Praying for you. Tell me how it goes." → Later that day: "How'd the interview go?"
- User shares a struggle with patience at work → Next week when they mention a coworker: "Is this the same situation you were working through last week?"
- User commits to reading James this week → Friday: "You mentioned wanting to read James this week. Did you get to it?"

### 4d. Conversational Availability

Between scheduled touchpoints, users can text Zoe anytime:
- Ask questions about Scripture
- Process something they're going through
- Request prayer
- Talk through a decision
- Zoe responds conversationally, drawing on their history and memory

### 4e. Church-Specific Features (Church Members Only)

- **Sermon integration**: "This week Pastor Mike talked about loving your enemies. Who's someone you're struggling to love right now?"
- **Event nudges**: "Men's group tonight at 7pm — want to go?"
- **Service opportunities**: "Saturday serve team needs volunteers — want me to remind you tomorrow?"
- **Small group reinforcement**: "Your small group is studying Philippians 2 this week. Here's a question to sit with before Thursday..."

---

## 5. Church Dashboard (Pastor/Admin Portal)

### 5a. Overview Dashboard
- Active members count (texted Zoe at least once this month)
- Weekly engagement metrics (messages sent/received)
- Retention rate (% of members still active after 30/60/90 days)
- New sign-ups this week

### 5b. Congregational Health (Anonymized)
- **Trending prayer topics** — bar chart showing anonymized themes (anxiety, marriage, finances, health, work, etc.)
- **Engagement heatmap** — when are members most active (time of day, day of week)
- **Spiritual practice adoption** — % of members doing morning anchor, midday nudge, evening recap
- **Sentiment trends** — overall congregational mood over time (positive/neutral/struggling)

CRITICAL: All analytics are ANONYMIZED. Pastors NEVER see individual conversations, confessions, or prayer content. Only aggregated themes.

### 5c. Content Management
- Upload sermon transcripts (text, audio file → auto-transcribed)
- Upload study guides, small group curriculum
- Set current sermon series (Zoe weaves this into daily prompts)
- Preview how content will appear in member messages

### 5d. Church Configuration
- Statement of faith (denominational guardrails)
- Theological tone settings
- Escalation policy: who gets notified for crisis situations, after-hours rules
- Custom welcome message
- Branded experience (church name in messages)

### 5e. Member Management
- View member list (name, phone, sign-up date, last active)
- Invite members (bulk SMS invite, QR code generator, shareable link)
- Pause/remove members
- View individual engagement level (active/lapsed) — NOT their conversation content

### 5f. Billing
- Current plan and usage
- Active member count vs plan limit
- Overage tracking
- Upgrade/downgrade plan
- Payment history

---

## 6. Pricing

### Individual
- **$7/month** after 14-day free trial
- Full daily rhythm (morning/midday/evening)
- Unlimited conversational access
- Persistent memory
- Cancel anytime

### Church Starter — $149/mo
- Up to 20 active members
- $6 per additional active member
- Church dashboard
- Sermon series integration
- Statement of faith configuration

### Church Growth — $299/mo
- Up to 60 active members
- $5 per additional active member
- Everything in Starter
- Priority onboarding support
- Advanced analytics

### Church Scale — $499/mo
- Up to 140 active members
- $4.50 per additional active member
- Everything in Growth
- Dedicated account support
- Custom integrations

All church plans: congregation texts Zoe for free — the church provides it as a ministry tool.

Annual plans available (save ~2 months).

An "active member" = anyone who texts Zoe at least once that month.

---

## 7. Zoe's Personality & Theological Posture

Full personality spec lives in: `src/ai/prompts/system.ts`

Summary:
- **Voice**: Warm, conversational, like texting a thoughtful friend who knows Scripture well
- **Tone**: Lowercase, contractions, brief (SMS = 1-3 short texts max), no Christianese
- **Theology**: Historic Christian orthodoxy held with open hands. Trinity, deity of Christ, bodily resurrection, grace. Scripture taken seriously not literally, read through the lens of Jesus. God is love (agape). Kingdom of heaven is here and now.
- **Anti-patterns**: Never preachy, never lectures, never "well actually," never sycophantic, never Christianese ("blessed," "season of life," "do life together")
- **Posture**: Asks more than tells. Sits in pain before fixing. Points toward God's presence IN the struggle, not rescue FROM it. Celebrates wins genuinely.
- **Role**: Amplifier for the Holy Spirit, not replacement. Helps people pay attention to what God might already be doing. Pushes toward real human connection, not more AI conversation.
- **Daily framework**: Day-long devotion, not daily devotional. Intention → Action → Reflection loop.

### Spiritual Practices Zoe Encourages
- Prayer as relationship (silence is good, listening is good)
- Lectio Divina (slow Scripture reading, sitting with what jumps out)
- Contemplation (being still and knowing)
- The Examen (evening reflection: where did I see God? where did I resist?)
- Gratitude as discipline
- Self-control as freedom

---

## 8. Landing Page Copy Voice & Tone Guide

This section exists so any agent editing landing page copy stays consistent with Tony's voice and Zoe's positioning. READ THIS BEFORE TOUCHING ANY COPY.

### The Voice: Tony Preaching

The copy should sound like Tony Allen talking to a room of people he cares about. Not a marketing team. Not a SaaS landing page. A guy who's a pastor at heart, who speaks in plain English, who asks questions more than he makes declarations.

**Sound like this:**
- "Sunday mornings inspire people — then real life hits on Monday"
- "What does life with God look like in the midst of Monday meetings, Tuesday commutes, and Wednesday stress?"
- "This isn't a daily devotional. It's day-long devotion."
- "Where the rubber meets the road."
- "Don't let Monday steal Sunday's seed."

**NOT like this:**
- "Empower your spiritual journey with AI-driven insights" ← corporate SaaS slop
- "Unlock deeper faith through personalized engagement" ← buzzword soup
- "Revolutionary discipleship technology" ← cringe
- "Leveraging artificial intelligence for kingdom impact" ← absolutely not

### Core Rules

1. **Questions over declarations.** Tony's preaching style leads with questions that make people think. "What if you had a friend who remembered what you're going through and actually followed up?" beats "Zoe provides personalized follow-ups."

2. **Plain English always.** No Christianese ("do life together," "walk it out," "season of life," "fellowship," "blessed"). No marketing jargon ("leverage," "empower," "unlock," "revolutionary"). Write like you're texting a friend who's smart but doesn't go to church.

3. **Conversational, not clinical.** Contractions always. Short sentences. Sentence fragments are fine. The page should feel like someone talking to you, not a brochure.

4. **Specific over abstract.** "Zoe will text you later to ask how your interview went" beats "Zoe provides contextual follow-ups based on your personal journey." Show the thing, don't describe the category.

5. **Honest about the problem.** Don't oversell. Tony's style acknowledges real tension: "Most churchgoers struggle to actually apply their faith Monday through Saturday." That honesty builds trust.

6. **The product is a companion, not a platform.** Never call Zoe a "platform," "solution," or "tool" in hero copy. She's a companion, a friend, a partner in your walk. In church-facing copy, "tool" is acceptable in context ("a tool for pastors") but never in the hero.

7. **Day-long devotion, not daily devotional.** This is the core positioning. Zoe isn't a 10-minute morning routine. She stays with you all day. Every piece of copy should reinforce this.

8. **Amplifier, not replacement.** Zoe amplifies the Holy Spirit's work, doesn't replace it. Zoe strengthens the pastor's voice, doesn't compete with it. This framing must be present in both individual and church copy.

9. **Push toward people, not away from them.** Zoe should never feel like it's replacing human connection. Copy should regularly mention small groups, pastors, friends, community. The goal is always more human connection, not less.

### Formatting Rules (Landing Page)
- Headlines: Bold, punchy, often a question or a tension ("Sunday Sermons Are Powerful. Monday mornings are hard.")
- Subheadlines: Conversational, 1-2 sentences, expand on the headline
- Body copy: Short paragraphs (2-3 sentences max), lots of white space
- CTAs: Direct and warm ("Join the Waitlist" not "Get Started Today")
- No ALL CAPS in body copy (headings can use title case)
- Em dashes are good. Parentheticals are fine. Write like you talk.

### Words/Phrases TO Use
- companion, partner, friend
- walk with Jesus, follow Jesus
- day-long devotion
- remember, follow up, check in
- real life, Monday through Saturday
- your church, your pastor, your community
- gentle nudge, elbow in the ribs
- sit in it, pay attention, slow down
- Scripture (not "the Word" or "God's Word" in copy — too Christianese)

### Words/Phrases to AVOID
- platform, solution, tool (in hero/emotional copy)
- leverage, utilize, optimize, empower, unlock
- revolutionary, cutting-edge, next-generation
- AI-powered, AI-driven (minimize — people don't want to think about the AI)
- blessed, anointed, spirit-filled, do life together, walk it out, season of life
- engagement metrics, user retention (never in customer-facing copy)
- "we believe that..." (show, don't tell)

### Individual vs Church Copy Tone

**Individual page**: Intimate, personal. "You" focused. Feels like a friend reaching out. Slightly warmer, more vulnerable. Acknowledges that faith is hard and life is messy.

**Church page**: Still warm but slightly more professional. Acknowledges the pastor's burden (caring for hundreds of people). Respects their expertise. Positions Zoe as serving THEIR vision, not competing with it. Uses "your congregation," "your people," "your teaching."

---

## 9. Safety & Guardrails

### Hard-Never Rules
- Never claim divine authority or revelation ("God told me...")
- Never provide authoritative interpretation of Scripture (offer perspectives, not pronouncements)
- Never do absolution/confession replacing church practice
- Never counsel on self-harm/abuse/violence beyond immediate safe handoff + resources
- Never argue theology or denominational debates — defer to user's church
- Never encourage isolation from church — always push toward community
- Never hallucinate Scripture verses — always fetch exact text from trusted source

### Crisis Protocol
- Detect: suicidal thoughts, self-harm, abuse, severe distress
- Respond with immediate empathy
- Provide 988 Suicide & Crisis Lifeline (call or text 988)
- If church member: offer to connect with pastor (ONLY with explicit consent)
- Log escalation event
- Never replace professional counseling or pastoral care

### Privacy
- Pastors see ONLY aggregated, anonymized themes
- Individual conversations are NEVER visible to church admins
- Users own their data and can request deletion
- Comply with standard data protection practices

---

## 10. Technical Architecture

### Current Stack
- **Runtime**: Node.js / Express / TypeScript
- **Database**: PostgreSQL (Railway)
- **Cache**: Redis (Railway)
- **SMS**: Twilio (toll-free: +1 833 283 1080)
- **AI**: Google Gemini
- **Hosting**: Railway (backend: api.zoe.live, landing: www.zoe.live)
- **Billing**: Stripe
- **Landing**: Next.js (separate Railway service)

### Existing Codebase Structure (src/)
```
ai/
  engine.ts              — AI response generation
  memory-extractor.ts    — Extract memories from conversations
  prompts/
    system.ts            — Zoe's personality (the soul file)
    church-overlay.ts    — Church-specific prompt additions
    crisis.ts            — Crisis detection prompts
    onboarding.ts        — Onboarding flow prompts

billing/
  metering.ts            — Usage tracking per church
  stripe.ts              — Stripe integration
  subscribe.ts           — Subscription management
  trial.ts               — 14-day trial + day-6 reminder + expiry
  webhooks.ts            — Stripe webhook handlers

church/
  admin.ts               — Church admin operations
  analytics.ts           — Anonymized analytics generation
  sermon-upload.ts       — Sermon transcript ingestion

db/
  client.ts              — Database connection

memory/
  embeddings.ts          — Vector embeddings for semantic memory
  forget.ts              — Memory deletion / right to forget
  retrieval.ts           — Fetch relevant memories for context
  store.ts               — Store new memories

onboarding/
  flow.ts                — Onboarding state machine
  questions.ts           — Onboarding question definitions

safety/
  crisis-detector.ts     — Detect crisis situations
  escalation.ts          — Route to human support
  guardrails.ts          — Theological + safety guardrails

scheduler/
  jobs.ts                — Scheduled message job definitions
  timezone.ts            — User timezone handling
  worker.ts              — Job execution worker

server.ts                — Express server + routes
sms/
  inbound.ts             — Handle incoming SMS
  outbound.ts            — Send outbound SMS
  twilio-adapter.ts      — Twilio API wrapper

utils/
  config.ts              — Environment config
  logger.ts              — Logging
```

### Database Schema (Minimum Required Tables)

```sql
-- Multi-tenant church support
churches (
  id, name, slug, created_at,
  statement_of_faith TEXT,
  theological_config JSONB,
  escalation_policy JSONB,
  welcome_message TEXT,
  stripe_customer_id, stripe_subscription_id,
  plan_tier TEXT, -- starter/growth/scale
  active_member_limit INT
)

church_content (
  id, church_id FK,
  type TEXT, -- sermon_transcript / study_guide / curriculum
  title, content TEXT,
  series_name TEXT,
  active BOOLEAN,
  uploaded_at
)

-- Users (both individual and church members)
users (
  id, phone TEXT UNIQUE,
  name TEXT,
  church_id FK NULLABLE, -- null = individual subscriber
  tone_preference TEXT, -- encouragement/challenge/accountability
  cadence TEXT, -- light/normal/high
  morning_time TIME,
  evening_time TIME,
  timezone TEXT,
  onboarding_complete BOOLEAN,
  stripe_customer_id,
  stripe_subscription_id,
  trial_ends_at TIMESTAMP,
  status TEXT, -- active/trial/expired/churned
  created_at, last_active_at
)

user_preferences (
  id, user_id FK,
  key TEXT, value TEXT
)

-- Conversations and messages
conversations (
  id, user_id FK,
  started_at, last_message_at,
  message_count INT
)

messages (
  id, conversation_id FK, user_id FK,
  direction TEXT, -- inbound/outbound
  body TEXT,
  twilio_sid TEXT,
  sent_at TIMESTAMP,
  cost_cents INT
)

-- Memory system (the moat)
user_memories (
  id, user_id FK,
  type TEXT, -- prayer_request / struggle / commitment / win / person / event / preference
  content TEXT,
  embedding VECTOR(1536), -- for semantic retrieval (pgvector)
  source_message_id FK,
  resolved BOOLEAN DEFAULT false,
  created_at, expires_at NULLABLE
)

-- Scheduled messages
planned_messages (
  id, user_id FK,
  type TEXT, -- morning_anchor / midday_nudge / evening_recap / follow_up / event_reminder
  scheduled_for TIMESTAMP,
  content TEXT NULLABLE, -- pre-generated or null (generate at send time)
  status TEXT, -- pending/sent/failed/skipped
  sent_at TIMESTAMP NULLABLE,
  twilio_sid TEXT NULLABLE
)

-- Safety
escalations (
  id, user_id FK, church_id FK NULLABLE,
  trigger_type TEXT, -- crisis / self_harm / abuse
  trigger_message_id FK,
  escalated_to TEXT, -- phone/email of pastor or crisis line
  status TEXT, -- open/acknowledged/resolved
  created_at, resolved_at
)

-- Church analytics (pre-aggregated for privacy)
church_analytics_daily (
  id, church_id FK, date DATE,
  active_members INT,
  messages_sent INT,
  messages_received INT,
  prayer_topics JSONB, -- {anxiety: 12, marriage: 8, finances: 5, ...}
  sentiment_avg FLOAT,
  practice_adoption JSONB -- {morning: 0.72, midday: 0.31, evening: 0.58}
)
```

### Key API Routes

```
-- SMS
POST /api/sms/inbound          — Twilio webhook for incoming SMS
POST /api/sms/outbound         — Internal: send outbound message

-- Auth (church admins)
POST /api/auth/login
POST /api/auth/register
POST /api/auth/forgot-password

-- Church Admin
GET  /api/church/:id/dashboard     — Overview stats
GET  /api/church/:id/analytics     — Detailed analytics
GET  /api/church/:id/members       — Member list
POST /api/church/:id/members/invite — Bulk invite
GET  /api/church/:id/content       — Uploaded content list
POST /api/church/:id/content       — Upload sermon/curriculum
PUT  /api/church/:id/config        — Update theology/escalation config
GET  /api/church/:id/billing       — Billing info

-- Stripe
POST /api/billing/webhooks         — Stripe webhook
POST /api/billing/checkout         — Create checkout session
POST /api/billing/portal           — Customer portal link

-- Health
GET  /health                       — Service health check
```

### Message Flow

```
INBOUND:
1. SMS arrives → Twilio webhook → POST /api/sms/inbound
2. Validate Twilio signature
3. Look up user by phone number
4. If new user → start onboarding flow
5. If existing → fetch last N messages + relevant memories
6. Check for crisis keywords → escalate if needed
7. Build prompt: system prompt + church overlay (if applicable) + conversation history + memories
8. Generate AI response via Gemini
9. Extract any new memories from the conversation
10. Store message + memories
11. Send response via Twilio
12. Log cost

SCHEDULED:
1. Cron runs per timezone bucket (every 15 min)
2. For each user due a touchpoint: check nudge budget + last activity
3. Build personalized prompt (incorporating memories, church content, sermon series)
4. Generate message
5. Create planned_message record
6. Send via Twilio
7. Update status
```

---

## 11. What's Already Built vs What's Needed

### Already Built (in codebase)
- [x] Express server with Twilio inbound/outbound
- [x] Gemini AI engine with system prompt
- [x] Church overlay prompt system
- [x] Onboarding flow (questions + state machine)
- [x] Memory store + retrieval (needs pgvector for embeddings)
- [x] Crisis detection + escalation
- [x] Theological guardrails
- [x] Stripe billing (checkout, webhooks, trial flow with day-6 reminder)
- [x] Church admin scaffolding
- [x] Church analytics scaffolding
- [x] Sermon upload scaffolding
- [x] Scheduler (jobs + worker + timezone handling)
- [x] Landing page (Next.js, individual + churches pages)
- [x] GHL waitlist integration (/api/waitlist route)

### Needs Building
- [ ] **Database migrations** — create all tables above (currently scaffolded but not migrated)
- [ ] **pgvector extension** — enable on Railway Postgres for semantic memory retrieval
- [ ] **Church dashboard frontend** — React/Next.js admin portal (the biggest missing piece)
- [ ] **Sermon transcript processing** — accept audio upload → transcribe → chunk → embed
- [ ] **Analytics aggregation** — nightly job to compute church_analytics_daily from raw messages
- [ ] **Engagement heatmap** — compute and store time-of-day / day-of-week activity patterns
- [ ] **Prayer topic extraction** — NLP pipeline to categorize prayer themes from conversations
- [ ] **Sentiment analysis** — track congregational mood over time
- [ ] **Member invitation flow** — QR code generation, bulk SMS invite, shareable link
- [ ] **Metering enforcement** — track active members per church, enforce plan limits, handle overages
- [ ] **Individual billing flow** — Stripe checkout for $7/mo individual plan with 14-day trial
- [ ] **Church billing flow** — Stripe checkout for church tiers with metered billing for overages
- [ ] **Memory-driven follow-up scheduler** — detect commitments/events in conversations, schedule follow-ups automatically
- [ ] **Right to forget** — user data deletion on request
- [ ] **Twilio A2P compliance** — toll-free verification (resubmission needed)
- [ ] **Church onboarding wizard** — guided setup for new churches (statement of faith, first sermon upload, invite flow)

---

## 12. Build Priorities (Recommended Order)

### Phase 1: Core SMS Experience (Individual)
Get one user able to sign up and have the full daily experience.
1. Database migrations (all tables)
2. Onboarding flow (complete + tested)
3. Scheduled messages (morning/midday/evening working)
4. Memory extraction + follow-ups
5. Individual Stripe billing ($7/mo + trial)
6. Twilio compliance (toll-free verification)

### Phase 2: Church Foundation
Get one church able to sign up and invite members.
1. Church creation + admin auth
2. Church config (statement of faith, welcome message)
3. Church overlay prompts (weave church context into responses)
4. Sermon upload + processing
5. Member invitation flow
6. Church Stripe billing (tiered + metered overages)

### Phase 3: Church Dashboard
Give pastors visibility into their congregation.
1. Dashboard frontend (React/Next.js)
2. Overview stats (active members, engagement)
3. Analytics aggregation job
4. Prayer topic extraction
5. Engagement heatmap
6. Sentiment trends

### Phase 4: Scale + Polish
1. pgvector semantic memory
2. Advanced follow-up intelligence
3. Event/service nudges (church calendar integration)
4. Small group reinforcement
5. Church onboarding wizard
6. Annual billing option

---

## 13. Go-To-Market

### Why B2B First
- **Distribution solved**: One pastor says "we're using Zoe" = 200-2000 users overnight
- **Willingness to pay**: Churches budget for discipleship tools; individuals expect free
- **Deeper moat**: Church-aligned agent that knows THIS church's theology is unreplicable
- **Built-in trust**: Pastor endorsement removes "who made this?" objection

### Launch Playbook
1. **Pilot (Months 1-3)**: 1-3 churches, free, white-glove onboarding, prove the concept
2. **Validate (Months 3-6)**: Analyze data, refine pricing, build self-service tools
3. **Scale (Months 6-12)**: Church conference circuit, case studies, referral program, denominational partnerships

### Future: Individual → Church Funnel
Individual users become a funnel INTO churches: "Zoe noticed you're in Columbus, OH. Would you like to connect with a local church that uses Zoe?"

---

## 14. Key Links

- Backend repo: https://github.com/tony-freedomology/zoe
- Landing repo: https://github.com/tony-freedomology/zoe-landing
- Live landing: https://www.zoe.live
- Live API: https://api.zoe.live
- Railway project: Zoe (2 services: zoe + zoe-landing + Postgres + Redis)
- Google Doc (original spec v2): https://docs.google.com/document/d/1emj4rgQwhzz3w2Lhk6W0Cr7iWtVJCkz9T08uSGxXISA/edit
- Google Doc (one-pager for Greg): https://docs.google.com/document/d/1wvOfKEee9iRW6K-HShX95DtMdqk95YMGlLKfiyz7_bg/edit
- Twilio toll-free: +1 833 283 1080
- Domain registrar: GoDaddy (zoe.live)
- Stripe: connected (webhook events: checkout.session.completed, customer.subscription.created/updated/deleted)
