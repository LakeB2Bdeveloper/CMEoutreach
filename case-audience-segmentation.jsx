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
          <span className="text-white/80">Audience segmentation for a conference</span>
        </div>
        <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-4">Medical Conference Series</div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-[1.08] tracking-tight mb-6 text-balance">
          Healthcare audience segmentation that <em className="not-italic text-teal3">filled a medical conference</em>
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
          id="case-segmentation-lead"
          shape="rounded"
          radius="24"
          fit="cover"
          placeholder="Drop or click to upload the lead image"
          style={{ width: "100%", height: "auto", aspectRatio: "2 / 1", display: "block" }}>
        </image-slot>
        <figcaption className="text-center text-[12px] text-slate-400 mt-6 font-medium">Tighter segments, not broader blasts, sold the room out weeks ahead of schedule.</figcaption>
      </figure>

      <Stats items={[
        { val: "Sold out", label: "Two weeks before the early-bird deadline" },
        { val: "62%", label: "Of registrations from targeted segments" },
        { val: "34%", label: "Lower cost per registration" }]} />

      <div className="post-body max-w-[680px] mx-auto px-6 pt-12 pb-4">
        <p className="lead-para">A respected medical conference series had a recurring anxiety: every year began with an empty room and a long, expensive push to fill it. Broad email blasts to the whole specialty drove some signups, but at a high cost and with little predictability. The organizers wanted a calmer, more reliable path to a full house.</p>

        <h2>The challenge</h2>
        <p>The series had been marketing by volume. A single large list received the same invitations regardless of subspecialty, seniority, or interest, so most messages landed with clinicians who were never likely to attend. Without a way to group the audience meaningfully, the team could not tailor the pitch, and the cost of every registration crept upward each cycle.</p>

        <h2>The approach</h2>
        <p>We replaced the blast with precision. The foundation was <KP href="solutions/hcp-outreach.html">healthcare audience segmentation</KP>: the broad universe was divided into coherent groups by specialty, subspecialty, practice setting, and seniority, so each segment could receive a message built for it. On top of that static structure we layered behavior, turning ordinary outreach into <KW href="solutions/hcp-outreach.html">HCP audience targeting</KW> aimed at the clinicians most likely to register.</p>

        <p>The behavioral layer came from <KW href="solutions/cme-audience-intelligence.html">CME intent data intelligence</KW>, which scored who was actively engaging with the conference's clinical themes. That produced genuine <KW href="solutions/cme-audience-intelligence.html">healthcare audience insights</KW>, not just counts: the team could see which topics were heating up and which segments were leaning in, then prioritize accordingly.</p>

        <ul>
          <li><strong>Segment first.</strong> Build distinct audiences by specialty, setting, and seniority rather than one undifferentiated list.</li>
          <li><strong>Layer intent.</strong> Rank each segment by live engagement so spend follows demand.</li>
          <li><strong>Sequence by deadline.</strong> Time invitations and reminders to the early-bird window for each segment.</li>
        </ul>

        <blockquote className="pullquote">Filling a conference is not about reaching more people. It is about reaching the right people early, with a reason to care that is specific to them.</blockquote>

        <p>With segments defined and prioritized, the program ran as focused <KW href="services/cme-marketing.html">medical conference marketing</KW>: pre-event invitations, reminders, and a final nudge, each tuned to the segment and the behavior that put a clinician in it. The same discipline now anchors the series' broader <KW href="services/cme-marketing.html">CME marketing</KW> calendar.</p>

        <h2>The results</h2>
        <p>The conference sold out two weeks ahead of the early-bird deadline, a first for the series. Nearly two thirds of registrations came from the targeted segments, and the cost per registration fell by about a third as spend stopped chasing clinicians who were never going to attend. Just as valuable, the organizers walked away with a repeatable model: segment, layer intent, sequence to the deadline, and let demand rather than volume drive the room.</p>
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
{ href: "case-studies/cme-lead-generation.html", category: "Accredited CME Provider", title: "CME lead generation services that tripled qualified enrollments", excerpt: "How verified intent turned a flat funnel into a predictable enrollment pipeline." },
{ href: "case-studies/medical-professional-database.html", category: "Multi-Specialty Society", title: "Rebuilding outreach on a verified medical professional database", excerpt: "How a clean clinician database and medical specialty database restored precise targeting." },
{ href: "blog-hcp-targeting.html", category: "Targeting", title: "HCP targeting and audience segmentation, a precision playbook", excerpt: "The method behind this result, from physician targeting data to live intent." }];

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
            Fill your next event with the right clinicians
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            Book a 30-minute discovery call and we will show you how tightly we can segment and target the verified, intent-active clinicians in your therapeutic area. No slides, no pressure.
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
    document.title = "Case Study: Healthcare Audience Segmentation | CMEIntent";
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
