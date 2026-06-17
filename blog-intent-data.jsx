const { useState, useEffect, useRef } = React;
const { Icon, Nav, Footer } = window;

/* keyword highlight helpers */
const KP = ({ children, href }) => href
  ? <a href={href} className="kw-primary">{children}</a>
  : <span className="kw-primary">{children}</span>;
const KW = ({ children, href }) => href
  ? <a href={href} className="kw">{children}</a>
  : <span className="kw">{children}</span>;

/* ----------------------------- Article header -------------------------- */
function ArticleHead() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-14 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-xs text-white/50 mb-6 flex items-center gap-2 flex-wrap">
          <a href="index.html" className="hover:text-teal3 transition">Home</a><span>/</span>
          <a href="blog.html" className="text-teal3 hover:text-teal2 transition">Blog</a><span>/</span>
          <span className="text-white/80">How healthcare intent data works</span>
        </div>
        <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-4">Audience Intelligence</div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-[1.08] tracking-tight mb-6 text-balance">
          How healthcare intent data <em className="not-italic text-teal3">really works</em>
        </h1>
        <div className="flex items-center gap-3 flex-wrap text-[13px] text-white/55 font-medium">
          <span>CMEIntent Team</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>May 2026</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>8 min read</span>
        </div>
      </div>
    </header>);
}

/* ------------------------------- Article ------------------------------- */
function Article() {
  return (
    <article className="bg-white">
      {/* Lead visual */}
      {/* Lead visual: user-fillable (drag/click to upload, hover to Replace/Remove) */}
      <figure className="max-w-4xl mx-auto px-6 pt-12">
        <image-slot
          id="blog-intent-lead"
          shape="rounded"
          radius="24"
          fit="cover"
          placeholder="Drop or click to upload the lead image"
          style={{ width: "100%", height: "auto", aspectRatio: "2 / 1", display: "block" }}>
        </image-slot>
        <figcaption className="text-center text-[12px] text-slate-400 mt-6 font-medium">Intent scoring blends thousands of behavioral signals into a single readiness score per clinician.</figcaption>
      </figure>

      {/* Body */}
      <div className="post-body max-w-[680px] mx-auto px-6 pt-12 pb-4">
        <p className="lead-para">Every accredited education team wants the same thing: to reach the right clinician at the moment they're actually looking to learn. <KP href="solutions/cme-audience-intelligence.html">Healthcare intent data</KP> is how you find that moment, but the term gets thrown around so loosely that it's worth saying plainly what it is, where it comes from, and how to act on it.</p>

        <p>At its core, intent data is a record of behavior. When a cardiologist repeatedly reads about a new heart-failure guideline, registers for a webinar, and revisits a board-recertification page, those actions form a pattern. <KW>Physician intent signals</KW> turn that pattern into something you can score, segment, and time your outreach around.</p>

        <h2>What the signals actually measure</h2>
        <p>A single click means very little. The value comes from <KW>aggregating behavioral signals</KW> across many sources and weighing them by recency, frequency, and topic. We track more than 5,000 signal types, but they fall into a few intuitive buckets:</p>

        <ul>
          <li><strong>Content consumption.</strong> Which clinical topics a clinician reads, watches, and downloads, and how deeply.</li>
          <li><strong>Search behavior.</strong> Queries like "online CME credits" or a specific therapeutic area that reveal active, in-market interest.</li>
          <li><strong>Credential timing.</strong> Where a physician sits in their license-renewal and <KW href="services/maintenance-of-certification-marketing.html">MOC recertification</KW> cycle, the single strongest predictor of CME readiness.</li>
          <li><strong>Engagement cadence.</strong> Email opens, repeat visits, and webinar attendance that show momentum rather than a one-off glance.</li>
        </ul>

        <blockquote className="pullquote">A signal isn't intent. A pattern of signals, scored over time, is intent, and that distinction is the whole game.</blockquote>

        <h2>From raw signals to a readiness score</h2>
        <p>Once signals are collected, they're matched to a verified clinician record using <KP href="solutions/cme-audience-intelligence.html">NPI validation</KP> and active-licensure confirmation, then rolled into a single score per topic. That's what makes <KW>intent-based targeting</KW> usable: instead of a spreadsheet of clicks, you get a ranked list of physicians most likely to enroll in a given activity this week.</p>

        <p>Crucially, the score decays. Interest that fired three months ago shouldn't be weighted like interest from yesterday, so the model continuously re-scores as new behavior arrives and old behavior ages out. This is why a static purchased list goes stale while an <KW>intent-active audience</KW> stays current.</p>

        {/* Inline visual: user-fillable */}
        <figure className="post-inline">
          <image-slot
            id="blog-intent-inline"
            shape="rounded"
            radius="16"
            fit="cover"
            placeholder="Optional: drop a chart or diagram here"
            style={{ width: "100%", height: "auto", aspectRatio: "2 / 1", display: "block" }}>
          </image-slot>
          <figcaption className="text-[12px] text-slate-400 mt-6 font-medium">Intent decays over time: yesterday's signal outweighs last quarter's.</figcaption>
        </figure>

        <h2>Why this matters for CME marketing</h2>
        <p>The payoff is timing. <KW>How to reach physicians at the right moment</KW> stops being guesswork when you can see who's in-market. Teams that target by intent rather than by list typically see higher open rates, dramatically better enrollment lift, and far less wasted spend on clinicians who were never going to engage.</p>

        <p>It also protects compliance. Because targeting is built on professional behavior matched to verified provider records, not protected health information, <KW>HIPAA-compliant outreach</KW> stays intact. The accredited provider keeps full control of educational decisions; intent data simply tells you where attention already is.</p>

        <h3>What good intent targeting looks like</h3>
        <p>It isn't about chasing every signal. It's knowing, for each clinician you contact, that the topic is relevant, the timing is current, and the record is verified, then letting the score decide priority rather than a hunch.</p>

        <h2>The bottom line</h2>
        <p>Intent data isn't a magic list; it's a discipline. Aggregate real behavior, match it to verified clinicians, score it by topic, and let it decay honestly, and you move from broadcasting to meeting physicians exactly where their attention already is. That's the difference between a campaign that interrupts and one that arrives right on time.</p>
      </div>

      {/* Back link */}
      <div className="max-w-[680px] mx-auto px-6 mt-10 mb-16">
        <a href="blog.html" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-ink hover:bg-ink2 text-white text-sm font-bold shadow-md transition lift">
          <Icon name="arrow-left" size={16} strokeWidth={2.5} /> Back to all articles
        </a>
      </div>
    </article>);
}

/* --------------------------- Related reading --------------------------- */
const RELATED = [
{ href: "blog-hcp-targeting.html", category: "Targeting", title: "HCP targeting and audience segmentation, a precision playbook", excerpt: "Turn physician targeting data into narrow, current segments that fill conferences and drive enrollment." },
{ href: "blog-healthcare-lead-generation.html", category: "Lead Generation", title: "Healthcare lead generation for CME", excerpt: "From intent signal to enrollment, how a modern lead engine produces qualified clinicians." },
{ href: "blog-medical-professional-database.html", category: "Data", title: "What makes a medical professional database worth using", excerpt: "Coverage, accuracy, and segmentation depth that separate a real clinician database from a stale list." }];


function Related() {
  return (
    <section className="bg-[#F4F7FA] border-t border-slate-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-9">
          <div className="text-[11px] font-bold text-teal1 uppercase tracking-widest mb-2">Keep reading</div>
          <h2 className="font-display font-extrabold text-3xl text-ink tracking-tight text-balance">More on reaching the right clinician</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {RELATED.map((r, i) =>
          <a key={i} href={r.href} className="group flex flex-col gap-2.5 rounded-2xl border border-ink2 bg-ink p-7 shadow-sm hover:shadow-lg hover:border-teal3 transition lift">
              <div className="text-[10px] font-bold text-teal3 uppercase tracking-widest">{r.category}</div>
              <h3 className="font-display font-bold text-[19px] text-white leading-snug tracking-tight group-hover:text-teal3 transition text-balance">{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{r.excerpt}</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-xs font-bold text-teal3 group-hover:gap-2.5 transition-all">Read article <Icon name="arrow-right" size={14} strokeWidth={2.5} /></span>
            </a>
          )}
        </div>
      </div>
    </section>);
}

/* ------------------------------- CTA ----------------------------------- */
function ArticleCTA() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight text-balance">
            See the intent signals firing in your specialty
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            Book a 30-minute discovery call and we'll show you the verified, intent-active clinicians already in-market for your programs. No slides, no pressure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="contact.html" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Discovery Call <Icon name="arrow-right" size={18} />
            </a>
            <a href="blog.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              Back to the Blog
            </a>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function ArticlePage() {
  useEffect(() => {
    document.title = "How Healthcare Intent Data Works for CME Marketing | CMEIntent";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <ArticleHead />
      <Article />
      <Related />
      <ArticleCTA />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<ArticlePage />);
