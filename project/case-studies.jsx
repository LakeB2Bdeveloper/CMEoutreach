const { useState, useEffect, useRef } = React;
const { Icon, Nav, Footer } = window;

/* ----------------------------- Case study data ------------------------ */
const FEATURED = {
  href: "#",
  client: "National CME Provider",
  title: "How a national CME provider doubled qualified enrollments",
  excerpt: "By layering intent signals over verified NPI data, a leading accredited provider rebuilt its targeting around in-market clinicians, growing completed activities 2.1× in two quarters without expanding spend.",
  meta: "May 2026 · 6 min read" };


const CASES = [
{
  client: "Multi-Specialty Society",
  title: "94% inbox placement for a multi-specialty CME launch",
  excerpt: "Verification, NCOA validation, and sender-authentication hygiene took a stalled invitation program to 94%+ inbox placement, putting accredited activities back in front of clinicians.",
  meta: "Medical Society · 5 min read",
  dark: false },

{
  client: "Specialty Board",
  title: "Filling MOC renewal cohorts ahead of the deadline",
  excerpt: "Timing outreach to recertification windows turned a quiet enrollment quarter into fully-subscribed cohorts, with same-week sign-ups from physicians inside their MOC cycle.",
  meta: "Board / MOC · 6 min read",
  dark: true },

{
  client: "Integrated Health System",
  title: "Account-based CME across an integrated health system",
  excerpt: "Targeting every eligible physician and APP within a hospital system concurrently lifted system-wide participation and gave the education team one defensible audience to plan against.",
  meta: "Health System · 7 min read",
  dark: false },

{
  client: "Nursing CE Provider",
  title: "Reviving a stalled nursing CE audience",
  excerpt: "A refreshed, verified nurse audience and intent-based segmentation re-engaged lapsed learners and rebuilt a predictable pipeline of completed continuing-education activities.",
  meta: "Nursing CE · 5 min read",
  dark: true },

{
  client: "Medical Communications",
  title: "Proving campaign ROI on a grant-funded program",
  excerpt: "Multi-touch attribution tied every completion back to its originating asset, letting the team show funders exactly which channels drove accredited activity, and where to reinvest.",
  meta: "Med Comms · 6 min read",
  dark: false },

{
  client: "Medical Conference Series",
  title: "Scaling alumni re-engagement for a conference series",
  excerpt: "An alumni growth engine re-activated past attendees with personalized, intent-aware outreach, lifting early-bird registration and shortening the path to a sold-out room.",
  meta: "Medical Conference · 5 min read",
  dark: true }];


/* ------------------------------- Hero ---------------------------------- */
function CaseHero() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-xs text-white/50 mb-5 flex items-center gap-2">
          <a href="index.html" className="hover:text-teal3 transition">Home</a>
          <span>/</span>
          <span className="text-white/80">Case Studies</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
          Proven Results in Medical Education
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-6 text-balance max-w-3xl">
          Real Outcomes, <em className="not-italic text-teal3">Real Learnings</em>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
          How accreditation leaders, medical-education marketers, and audience strategists used verified physician data and intent intelligence to grow enrollment, prove ROI, and reach the right clinician at the right moment.
        </p>
      </div>
    </header>);
}

/* --------------------------- Featured case ----------------------------- */
function FeaturedCase() {
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center max-w-7xl mx-auto mt-16 mb-14 rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-xl transition lift">
      {/* Lead image on the LEFT, inset with left spacing — drag or click to upload */}
      <div className="pl-6 lg:pl-10">
        <image-slot
          id="case-featured-lead"
          shape="rect"
          fit="cover"
          placeholder="Drop or click to upload the lead image"
          style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1200 / 520" }}>
        </image-slot>
      </div>
      {/* Body */}
      <a href={FEATURED.href} className="flex flex-col justify-center gap-4 p-8 lg:p-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold text-teal1 uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-teal1 pulse-dot" /> Featured
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-[11px] font-bold text-teal1 uppercase tracking-widest">{FEATURED.client}</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-cshead tracking-tight leading-tight group-hover:text-teal1 transition text-balance">{FEATURED.title}</h2>
        <p className="text-[15px] leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{FEATURED.excerpt}</p>
        <div className="flex items-center justify-between gap-4 mt-2">
          <span className="text-xs font-semibold text-slate-400 tracking-wide tabular-nums">{FEATURED.meta}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-teal1 group-hover:gap-2.5 transition-all">Read case study <Icon name="arrow-right" size={16} strokeWidth={2.5} /></span>
        </div>
      </a>
    </div>);
}

/* ----------------------------- Case card ------------------------------- */
function CaseCard({ c }) {
  const dark = c.dark;
  return (
    <a href="#" className={`group flex flex-col rounded-2xl border overflow-hidden transition lift shadow-sm hover:shadow-lg ${
    dark ? "bg-csteal border-csteal2 hover:border-teal3" : "bg-white border-slate-200 hover:border-teal2"}`}>
      {/* Body */}
      <div className="p-7 flex flex-col gap-2.5 flex-1">
        <div className={`text-[10px] font-bold uppercase tracking-widest ${dark ? "text-teal3" : "text-teal1"}`}>{c.client}</div>
        <h3 className={`font-display font-bold text-[19px] leading-snug tracking-tight transition ${dark ? "text-white group-hover:text-teal3" : "text-cshead group-hover:text-teal1"}`}>{c.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.7)" : "rgb(6, 30, 63)" }}>{c.excerpt}</p>
        <div className={`mt-auto pt-3 flex items-center justify-between gap-3 text-xs font-semibold tabular-nums ${dark ? "text-white/45" : "text-slate-400"}`}>
          <span>{c.meta}</span>
          <span className={`inline-flex items-center ${dark ? "text-teal3" : "text-teal1"} group-hover:translate-x-0.5 transition-transform`}>Read case study</span>
        </div>
      </div>
    </a>);
}

/* ------------------------------- Grid ---------------------------------- */
function CaseGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="flex items-end justify-between gap-4 mb-7">
        <h2 className="font-display font-extrabold text-2xl text-ink tracking-tight">Latest case studies</h2>
        <span className="text-sm text-slate-400 font-medium hidden sm:block">{CASES.length} case studies</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {CASES.map((c, i) => <CaseCard key={i} c={c} />)}
      </div>
    </section>);
}

/* ------------------------------- CTA ----------------------------------- */
function CaseCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" /> Write the next one with us
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight text-balance">
            See the results we could drive for your programs
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            Book a 30-minute discovery call and we'll show you the verified, intent-active clinicians already in-market for your therapeutic area, and the outcomes teams like yours are seeing.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="contact.html" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Discovery Call <Icon name="arrow-right" size={18} />
            </a>
            <a href="blog.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              Read the Blog
            </a>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function CaseStudiesPage() {
  useEffect(() => {
    document.title = "Case Studies | MedReachIQ";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <CaseHero />
      <FeaturedCase />
      <CaseGrid />
      <CaseCTA />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<CaseStudiesPage />);
