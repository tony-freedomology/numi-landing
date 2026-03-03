import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "What Does It Look Like to Equip the Kingdom to Use AI Well?",
  description:
    "The church can't afford to sit this one out. Here's a practical framework for how churches and ministries should evaluate, adopt, and shape AI tools faithfully.",
};

export default function EquipKingdomPost() {
  return (
    <div className="min-h-screen text-slate-900">
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-32 px-6 pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Link href="/blog" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">← Blog</Link>
          </div>
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <span className="inline-flex items-center rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300">Church &amp; Technology</span>
            <span className="text-slate-400 text-xs font-medium">March 2026</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-400 text-xs font-medium">9 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tighter-editorial text-white leading-[1.1] font-bold mb-6">What Does It Look Like to Equip the Kingdom to Use AI Well?</h1>
          <p className="text-xl text-slate-300 font-medium leading-relaxed">The church can&apos;t afford to sit this one out. Here&apos;s a practical framework for how churches and ministries should evaluate, adopt, and shape AI tools faithfully.</p>
        </div>
      </section>

      <article className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-slate max-w-none text-slate-700 font-medium leading-relaxed text-lg space-y-6">
            <p>Here&apos;s something that shouldn&apos;t be surprising but still is: the Southern Baptist Convention became the first major denomination in America to pass a formal statement on AI ethics — in June 2023. The Vatican had already been at the table with Microsoft and IBM since February 2020, co-signing something called the <a href="https://www.vatican.va/roman_curia/pontifical_academies/acdlife/documents/rc_pont-acd_life_doc_20202228_rome-call-for-ai-ethics_en.pdf" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">Rome Call for AI Ethics</a>. The National Association of Evangelicals signed on too.</p>
            <p>Meanwhile, most local churches are still deciding whether to have a &quot;digital ministry&quot; strategy.</p>
            <p>I&apos;m not saying that to be harsh. I say it because the gap between where the conversation is happening and where most of our congregations are is enormous — and it matters. A lot.</p>
            <hr className="border-slate-200 my-10" />
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">The Church Has Always Shaped Culture or Been Shaped by It</h2>
            <p>The printing press. The radio. Television. The internet. Every major information technology in history triggered the same two responses from the church: a prophetic voice that helped communities engage wisely, and a fearful silence that left people to figure it out alone.</p>
            <p>We don&apos;t get to make AI go away by ignoring it. It&apos;s already in your people&apos;s pockets, reshaping how they learn, how they relate, how they form habits of mind. <a href="https://africa.thegospelcoalition.org/article/how-artificial-intelligence-is-shaping-the-christian-and-church-life/" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">According to the Gospel Coalition&apos;s African network</a>, one of the top uses of generative AI in 2025 was therapy and companionship. People are turning to AI chatbots because they&apos;re lonely, because the church hasn&apos;t created enough on-ramps for real connection, and because AI is available at 2am when anxiety hits hardest.</p>
            <p>That&apos;s not a technology problem. That&apos;s a discipleship gap AI is rushing to fill.</p>
            <p>So let me be direct: the church has a responsibility to be at the table when AI is being built, evaluated, and deployed — especially in faith contexts. And that responsibility starts with equipping our own people well.</p>
            <hr className="border-slate-200 my-10" />
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">The &quot;Just Ignore It&quot; Option Is Already Gone</h2>
            <p>I&apos;ve talked with pastors who think staying silent on AI is somehow neutral or safe. I want to push back on that.</p>
            <p>Silence is a position. When you say nothing, your congregation fills the vacuum with whatever YouTube, Reddit, and their coworkers are saying. And right now, those voices aren&apos;t exactly steeped in theology of the image of God.</p>
            <p><a href="https://www.barna.com/research/christians-ai-church/" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">Barna Group research</a> found that most Christians who have concerns about AI still fall into the &quot;don&apos;t know&quot; category — meaning they&apos;re not hostile to engagement, they just haven&apos;t been given tools for discernment. That&apos;s a pastoral opening, not a reason to wait.</p>
            <p>The leaders who will serve their people best in the next decade aren&apos;t the ones who warned loudest against technology. They&apos;re the ones who understood it well enough to help their congregation use it wisely. There&apos;s a difference between prophetic caution and informed engagement.</p>
            <p>The Vatican&apos;s <em>Antiqua et Nova</em> document, released in January 2025, put it plainly: <a href="https://www.usccb.org/news/2025/morality-ai-depends-human-choices-vatican-says-new-document" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">technological progress is part of God&apos;s plan for creation</a>, but people must take responsibility for how it&apos;s used. &quot;Like any tool, AI is an extension of human power.&quot; The moral weight doesn&apos;t belong to the algorithm — it belongs to the humans who build it and the communities who choose to adopt it.</p>
            <p>That means us.</p>
            <hr className="border-slate-200 my-10" />
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">The False Binary That&apos;s Slowing Us Down</h2>
            <p>&quot;AI vs. faith.&quot;</p>
            <p>I hear some version of this framing constantly, and it frustrates me every time. The question is never really &quot;AI or faith.&quot; It&apos;s always &quot;who built this, what values did they build in, and what does it do to the people who use it?&quot;</p>
            <p>A hammer isn&apos;t good or evil. A hammer wielded by someone trying to build a shelter for homeless families does something very different than the same hammer in other hands. The question isn&apos;t the tool — it&apos;s the craftsperson, the intent, and the accountability structure around both.</p>
            <p>The <a href="https://erlc.com/press/sbc-becomes-first-denomination-to-address-ethics-of-artificial-intelligence-and-emerging-technologies-guiding-erlc/" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">SBC&apos;s 2023 AI resolution</a> frames it well: believers should engage AI &quot;from a place of eschatological hope rather than uncritical embrace or fearful rejection.&quot; That&apos;s not a muddled middle — that&apos;s actually a sophisticated position. It takes human dignity seriously, holds technology accountable, and doesn&apos;t flinch from either the opportunity or the risk.</p>
            <p>The binary — AI or faith, technology or tradition — is a distraction. The real work is building and choosing tools that actually reflect our values.</p>
            <hr className="border-slate-200 my-10" />
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">What &quot;Good AI&quot; Looks Like in a Faith Context</h2>
            <p>If your church or ministry is evaluating an AI tool for discipleship, pastoral care, prayer support, or faith formation, here&apos;s a practical framework I&apos;d put to any vendor or product:</p>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 space-y-8 not-prose">
              {[
                { number: "1", title: "Is it transparent about what it is?", body: "An AI tool in a faith context should never pretend to be something it's not. It doesn't pray. It doesn't have the Holy Spirit. It doesn't replace pastoral care. The Rome Call for AI Ethics was clear that 'each person must be aware when they are interacting with a machine.' Any AI product that obscures this or plays up the mystical is either naive or deceptive. Probably both." },
                { number: "2", title: "Does it protect the privacy of your people?", body: "Spiritual conversations are among the most personal things a person shares. When someone texts about their doubts, their marriage struggles, their fear of death \u2014 that data deserves the highest protection. Good AI in a faith context means conversations stay private. Full stop. No selling behavioral data. No third-party access. No using confession-level vulnerability to train a model for someone else's product." },
                { number: "3", title: "Is it theologically grounded \u2014 or theologically lazy?", body: "There's a difference between AI that helps someone engage Scripture, ask better questions, and connect the dots across their spiritual journey \u2014 and AI that just gives you the 'Christian answer' without any depth. The Lausanne Movement's AI framework talks about 'theological alignment' as a core evaluation criterion. What tradition is informing this tool's outputs? Who did the theological work? Is it accountable to pastoral authority, or just trained on whatever's on the internet?" },
                { number: "4", title: "Does it reinforce human community or replace it?", body: "This is probably the most important question. Lifeway Research found that 95% of pastors believe discipleship happens in relationships, not programs. Good AI in a faith context isn't trying to be the pastor, the community, or the Holy Spirit. It's trying to help people stay engaged between Sundays, follow through on commitments, and surface the right questions \u2014 so that when they do sit across from a real human being, they're ready. AI that creates dependence on itself is a bad tool. AI that points you toward God and toward your community is doing its job." },
                { number: "5", title: "Is it accountable to pastoral leadership?", body: "Any AI tool deployed in a church context should give ministry leaders visibility into what it's doing \u2014 at an aggregate level \u2014 without compromising individual privacy. Pastors need to be able to see whether the tool is reinforcing the teaching coming from the pulpit, whether it's doctrinally consistent, and whether it's producing fruit in people's lives. AI with no pastoral oversight isn't ministry tech. It's just tech." },
              ].map((item) => (
                <div key={item.number} className="flex gap-5 items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">{item.number}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-slate-200 my-10" />
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">Who Should Be at the Table When AI Is Being Built?</h2>
            <p>At NRB 2026 in Nashville, a panel of Christian leaders made a point that I keep coming back to. Someone named Skytland said: <a href="https://www.christiandaily.com/news/christian-scholars-call-for-moral-framework-as-ai-reshapes-relationships-and-community" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">&quot;I think we have a moral, ethical, theological responsibility as Christians to shape technology for good.&quot;</a></p>
            <p>I agree. And I&apos;d go further.</p>
            <p>If we believe that human beings are made in the image of God — that our worth isn&apos;t reducible to productivity or utility — then we have something to say that the secular AI industry desperately needs to hear. The biggest AI labs in the world are building systems that make choices about learning, relationships, mental health, and meaning. They&apos;re doing it with engineers and product managers and investors. Very few of them have a theology of personhood.</p>
            <p>That doesn&apos;t mean they&apos;re villains. It means there&apos;s a seat at the table that&apos;s going mostly empty, and it has our name on it.</p>
            <p>The LDS Church has published <a href="https://newsroom.churchofjesuschrist.org/article/faith--ethics--and-human-dignity-in-an-age-of-artificial-intelligence--a-call-to-action" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">seven principles for their use of AI</a>, covering spiritual connection, transparency, privacy, and accountability. The NAE&apos;s president Walter Kim signed the Rome Call for AI Ethics at the Vatican Summit. The SBC has made AI advocacy a cornerstone of the ERLC&apos;s work. These aren&apos;t fringe reactions — they&apos;re institutional commitments from major faith communities that understand something important: you don&apos;t get to complain about the tools if you weren&apos;t in the room when they were built.</p>
            <p>The window for faith communities to shape the values baked into AI is right now. In five years, the defaults will be set.</p>
            <hr className="border-slate-200 my-10" />
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">The Specific Challenge of AI for Discipleship</h2>
            <p>Let me make this concrete, because I care about this one personally.</p>
            <p>Discipleship has always had a gap. The sermon ends, people go home, and the transformation that started on Sunday gets lost by Tuesday. Life is loud. Good intentions aren&apos;t enough when the world is this loud.</p>
            <p>AI can help close that gap — but only if it&apos;s built right. The difference between AI that genuinely serves spiritual formation and AI that just mimics it is enormous, and most people can&apos;t tell them apart yet.</p>
            <p>Here&apos;s what genuine AI-assisted discipleship looks like, in my view:</p>
            <ul className="list-disc pl-6 space-y-3 text-slate-700">
              <li><strong>It asks better questions, not better answers.</strong> The goal is to help someone process what God is saying to them — not to tell them what to think.</li>
              <li><strong>It remembers.</strong> Transformation happens when someone helps you connect the dots across days, not just moments. An AI tool that forgets every conversation is just a search engine with better marketing.</li>
              <li><strong>It defers to pastoral authority.</strong> The tool should reinforce what the pastor is teaching, support the church&apos;s theological tradition, and surface concerns that need human follow-up.</li>
              <li><strong>It knows its limits.</strong> When someone is in crisis, good AI points toward real people. Always.</li>
            </ul>
            <p>This is exactly what we&apos;re building with <a href="https://zoe.live" className="text-brand-cyan hover:underline" target="_blank" rel="noopener noreferrer">Zoe</a>. Zoe is an SMS-based discipleship tool — it lives in your text messages, asks you what God is saying to you and what you&apos;re going to do about it, and remembers your commitments across days so you can actually follow through. It&apos;s built for church communities, accountable to pastoral leadership, and privacy-first by design. No app, no login, no surveillance of your spiritual life.</p>
            <p>It&apos;s a tool. A well-built one, we think. Built by people who believe this stuff matters.</p>
            <hr className="border-slate-200 my-10" />
            <h2 className="text-3xl tracking-tighter-editorial text-slate-900 font-bold mt-10 mb-4">So What Does It Look Like to Equip the Kingdom?</h2>
            <p>It looks like pastors who understand AI well enough to evaluate tools — not fear them, not uncritically adopt them, but actually evaluate them with a theological framework.</p>
            <p>It looks like denominations and parachurch organizations putting people in the room where AI policy is being made — not just reacting to it after the fact.</p>
            <p>It looks like ministry leaders asking the right questions before they deploy anything: Is it transparent? Is it privacy-first? Is it theologically grounded? Does it reinforce community? Is it accountable to us?</p>
            <p>It looks like the church reclaiming its voice on what it means to be human — what learning is for, what relationships are for, what transformation looks like — in a cultural moment that desperately needs that voice.</p>
            <p>And practically? It looks like trying tools that are actually built by people who share your values. Because the alternative — letting tools built without any theological grounding quietly disciple your people — is already happening.</p>
          </div>

          <div className="mt-12 bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center">
            <p className="text-lg font-bold text-slate-900 mb-3">Zoe is built for this.</p>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">If your church is looking for an AI discipleship tool that&apos;s transparent, privacy-first, theologically grounded, and designed to work alongside pastoral leadership — not replace it — we&apos;d love to have you along for the journey.</p>
            <Link href="/#waitlist" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-8 py-4 text-base font-bold shadow-lg hover:bg-slate-700 transition-all duration-200">
              Join the Zoe Waitlist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Sources</p>
            <ul className="text-sm text-slate-500 space-y-2 font-medium">
              <li><a href="https://www.vatican.va/roman_curia/pontifical_academies/acdlife/documents/rc_pont-acd_life_doc_20202228_rome-call-for-ai-ethics_en.pdf" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">Rome Call for AI Ethics, Vatican Pontifical Academy for Life, February 2020</a></li>
              <li><a href="https://www.usccb.org/news/2025/morality-ai-depends-human-choices-vatican-says-new-document" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">Antiqua et Nova: Vatican document on AI and human intelligence, January 2025</a></li>
              <li><a href="https://erlc.com/press/sbc-becomes-first-denomination-to-address-ethics-of-artificial-intelligence-and-emerging-technologies-guiding-erlc/" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">SBC Resolution on AI and Emerging Technologies, ERLC, June 2023</a></li>
              <li><a href="https://www.nae.org/artificial-intelligence-ai-policy-believers-christians/" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">NAE: Why AI Policy Matters for Believers, January 2026</a></li>
              <li><a href="https://lausanne.org/global-analysis/ai-ethical-framework" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">Lausanne Movement: Ethical Framework for AI in Missions, November 2025</a></li>
              <li><a href="https://www.barna.com/research/christians-ai-church/" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">Barna Group: How U.S. Christians Feel About AI &amp; the Church, November 2023</a></li>
              <li><a href="https://www.christiandaily.com/news/relationship-more-essential-than-ai-for-discipleship" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">Lifeway Research: Relationship More Essential Than AI for Discipleship, November 2025</a></li>
              <li><a href="https://www.christiandaily.com/news/christian-scholars-call-for-moral-framework-as-ai-reshapes-relationships-and-community" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">NRB 2026: Christian Scholars Call for Moral Framework, February 2026</a></li>
              <li><a href="https://newsroom.churchofjesuschrist.org/article/faith--ethics--and-human-dignity-in-an-age-of-artificial-intelligence--a-call-to-action" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">LDS Church: Faith, Ethics, and Human Dignity in an Age of AI, 2025</a></li>
              <li><a href="https://www.wordonfire.org/articles/lessons-from-the-vaticans-ai-guidelines/" className="hover:text-brand-cyan transition-colors" target="_blank" rel="noopener noreferrer">Word on Fire: Lessons from the Vatican&apos;s AI Guidelines, February 2025</a></li>
            </ul>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
