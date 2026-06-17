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
          <a href="case-studies.html" className="text-teal3 hover:text-teal2 transition">Case Studies</a><span>/</span>
          <span className="text-white/80">CME lead generation services</span>
        </div>
        <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-4">Accredited CME Provider</div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-[1.08] tracking-tight mb-6 text-balance">
          CME lead generation services that <em className="not-italic text-teal3">tripled qualified enrollments</em>
        </h1>
        <div className="flex items-center gap-3 flex-wrap text-[13px] text-white/55 font-medium">
          <span>CMEIntent Team</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>June 2026</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>6 min read</span>
        </div>
      </div>
    </header>);
}

/* ------------------------------- Stat band ----------------------------- */
function Stats({ items }) {
  return (
    <div className="max-w-4xl mx-auto px-6 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((s, i) =>
        <div key={i} className="rounded-2xl border border-ink2 bg-ink p-6 text-center">
          <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">{s.val}</div>
          <div className="text-[13px] font-medium text-white/65 mt-1.5 leading-snug">{s.label}</div>
        </div>
        )}
      </div>
    </div>);
}

/* ------------------------------- Article ------------------------------- */
function Article() {
  return (
    <article className="bg-white">
      <figure className="max-w-4xl mx-auto px-6 pt-12">
        <image-slot
          id="case-leadgen-lead"
          shape="rounded"
          radius="24"
          fit="cover"
          placeholder="Drop or click to upload the lead image"
          style={{ width: "100%", height: "auto", aspectRatio: "2 / 1", display: "block" }}>
        </image-slot>
        <figcaption className="text-center text-[12px] text-slate-400 mt-6 font-medium">Two quarters after rebuilding the funnel on verified intent, qualified enrollments had tripled.</figcaption>
      </figure>

      <Stats items={[
        { val: "3.1×", label: "Qualified enrollments in two quarters" },
        { val: "47%", label: "Lift in email engagement" },
        { val: "0", label: "Increase in media spend" }]} />

      <div className="post-body max-w-[680px] mx-auto px-6 pt-12 pb-4">
        <p className="lead-para">An accredited national CME provider had a healthy catalog and a capable team, but a tired pipeline. Registrations were flat, the house list was decaying, and every new activity launched into the same shrinking pool of contacts. The goal was simple to state and hard to deliver: produce more qualified enrollments without simply spending more.</p>

        <h2>The challenge</h2>
        <p>The provider's outreach was built on a single aging list. It produced reach but no relevance, so open rates drifted down and unsubscribes drifted up. Because there was no way to tell who was actually in-market, the team treated every clinician identically and hoped volume would carry the day. It did not. The real problem was not the creative or the offer; it was that <KP href="services/lead-generation.html">healthcare lead generation</KP> had been reduced to a list blast.</p>

        <h2>The approach</h2>
        <p>We rebuilt the engine around behavior rather than volume. The first move was to layer <KP href="solutions/cme-audience-intelligence.html">healthcare intent data</KP> over the provider's verified audience, so that real interest, not guesswork, defined who entered the funnel. <KW href="solutions/cme-audience-intelligence.html">HCP behavioral data</KW> told us which clinicians were researching each therapeutic topic and how recently, and that signal became the basis for every audience.</p>

        <p>From there, the work followed a clear sequence:</p>
        <ul>
          <li><strong>Resolve interest to identity.</strong> Match each behavioral signal to a verified clinician record so every lead is real and reachable.</li>
          <li><strong>Score and rank.</strong> Weight signals by recency, frequency, and topic so the team works the hottest leads first.</li>
          <li><strong>Sequence the outreach.</strong> Replace one-and-done sends with timed, relevant touches tied to each clinician's behavior.</li>
          <li><strong>Route by readiness.</strong> Send high-scoring clinicians to immediate outreach and warming ones into nurture until their signals strengthen.</li>
        </ul>

        <blockquote className="pullquote">The list never changed size dramatically. What changed was that we stopped emailing everyone and started reaching the clinicians who were already paying attention.</blockquote>

        <p>This is where managed <KW href="services/lead-generation.html">CME lead generation services</KW> did the heavy lifting. Rather than asking the internal team to assemble data sources and scoring infrastructure, CMEIntent supplied the verified records, the signal pipeline, and the analytics, then handed back a ranked list of clinicians genuinely worth contacting. The provider kept full control of every educational decision.</p>

        <h2>The results</h2>
        <p>Within two quarters, qualified enrollments had tripled, and they did so without a single dollar of additional media spend. Email engagement climbed as messages started landing with clinicians who cared about the topic, and the steady flow of <KW href="services/lead-generation.html">healthcare marketing leads</KW> finally gave the team a predictable pipeline to plan against.</p>

        <p>Just as important, the program became defensible. Because targeting was built on professional behavior matched to verified records rather than protected health information, the provider's <KW href="services/cme-marketing.html">continuing medical education marketing</KW> stayed compliant throughout. Today the same engine powers the rest of their <KW href="services/cme-marketing.html">CME marketing</KW>, and each campaign starts from demand rather than from a list.</p>
      </div>

      <div className="max-w-[680px] mx-auto px-6 mt-10 mb-16">
        <a href="case-studies.html" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-ink hover:bg-ink2 text-white text-sm font-bold shadow-md transition lift">
          <Icon name="arrow-left" size={16} strokeWidth={2.5} /> Back to all case studies
        </a>
      </div>
    </article>);
}

/* --------------------------- Related reading --------------------------- */
const RELATED = [
{ href: "case-studies/medical-professional-database.html", category: "Multi-Specialty Society", title: "Rebuilding outreach on a verified medical professional database", excerpt: "How a clean clinician database and medical specialty database restored precise targeting." },
{ href: "case-studies/audience-segmentation.html", category: "Medical Conference Series", title: "Healthcare audience segmentation that filled a medical conference", excerpt: "Segmentation and intent intelligence that sold out the room ahead of the early-bird deadline." },
{ href: "blog-healthcare-lead-generation.html", category: "Lead Generation", title: "Healthcare lead generation for CME", excerpt: "The playbook behind this result, from intent signal to completed enrollment." }];

function Related() {
  return (
    <section className="bg-[#F4F7FA] border-t border-slate-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-9">
          <div className="text-[11px] font-bold text-teal1 uppercase tracking-widest mb-2">Keep reading</div>
          <h2 className="font-display font-extrabold text-3xl text-ink tracking-tight text-balance">More outcomes from CMEIntent teams</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {RELATED.map((r, i) =>
          <a key={i} href={r.href} className="group flex flex-col gap-2.5 rounded-2xl border border-ink2 bg-ink p-7 shadow-sm hover:shadow-lg hover:border-teal3 transition lift">
              <div className="text-[10px] font-bold text-teal3 uppercase tracking-widest">{r.category}</div>
              <h3 className="font-display font-bold text-[19px] text-white leading-snug tracking-tight group-hover:text-teal3 transition text-balance">{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{r.excerpt}</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-xs font-bold text-teal3 group-hover:gap-2.5 transition-all">Read more <Icon name="arrow-right" size={14} strokeWidth={2.5} /></span>
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
            See what a real lead engine could do for you
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            Book a 30-minute discovery call and we will show you the verified, intent-active clinicians already in-market for your programs. No slides, no pressure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="contact.html" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Discovery Call <Icon name="arrow-right" size={18} />
            </a>
            <a href="case-studies.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              Back to Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function ArticlePage() {
  useEffect(() => {
    document.title = "Case Study: CME Lead Generation Services | CMEIntent";
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
