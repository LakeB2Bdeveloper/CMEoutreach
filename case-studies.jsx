const { useState, useEffect, useRef } = React;
const { Icon, Nav, Footer } = window;

/* ----------------------------- Case study data ------------------------ */
const CASES = [
{
  href: "case-studies/cme-lead-generation.html",
  client: "Accredited CME Provider",
  title: "CME lead generation services that tripled qualified enrollments",
  excerpt: "Healthcare lead generation built on healthcare intent data and HCP behavioral data turned a flat funnel into a steady flow of healthcare marketing leads. The CME lead generation services behind it drove continuing medical education marketing that actually converted.",
  meta: "CME Provider · 6 min read",
  dark: false },

{
  href: "case-studies/medical-professional-database.html",
  client: "Multi-Specialty Society",
  title: "Rebuilding outreach on a verified medical professional database",
  excerpt: "Replacing a stale list with a verified medical professional database gave the society one clinician database and medical specialty database to plan against. The refreshed healthcare contact database and healthcare professional database supplied the physician targeting data behind precise HCP targeting.",
  meta: "Medical Society · 6 min read",
  dark: true },

{
  href: "case-studies/audience-segmentation.html",
  client: "Medical Conference Series",
  title: "Healthcare audience segmentation that filled a medical conference",
  excerpt: "Healthcare audience segmentation and HCP audience targeting, sharpened by CME intent data intelligence and healthcare audience insights, powered the medical conference marketing and CME marketing that filled the room ahead of the early-bird deadline.",
  meta: "Medical Conference · 6 min read",
  dark: false },

{
  href: "case-studies/cme-audience-segment-specialty-society.html",
  client: "National Specialty Society",
  title: "How a national specialty society built a 40,000-physician CME segment in 48 hours",
  excerpt: "A large but undifferentiated member file became a precise, in-market audience once verified specialty data met live intent signals, producing a 40,000-physician segment ready to activate in two days.",
  meta: "Specialty Society · 3 min read",
  dark: true },

{
  href: "case-studies/grand-rounds-intent-data.html",
  client: "Academic Medical Center",
  title: "Academic medical center used intent data to refill grand rounds attendance",
  excerpt: "Declining grand rounds attendance turned around when the program used intent data and geographic targeting to reach external physicians across its service area.",
  meta: "Academic Medical Center · 3 min read",
  dark: false },

{
  href: "case-studies/compliant-prescriber-outreach.html",
  client: "Specialty Pharma Team",
  title: "Specialty pharma team reached 18,000 in-market prescribers with zero compliance flags",
  excerpt: "Building targeting on verified professional records and behavior, never on protected health information, let the team hit reach and compliance goals at the same time.",
  meta: "Specialty Pharma · 3 min read",
  dark: false },

{
  href: "case-studies/intent-targeted-outreach-efficiency.html",
  client: "Medical Society",
  title: "Medical society used intent signals to cut outreach volume 40% while lifting response",
  excerpt: "More email was producing less response. Sending only to clinicians showing real in-market behavior shrank volume and grew results at once.",
  meta: "Medical Society · 3 min read",
  dark: true },

{
  href: "case-studies/cme-alumni-reactivation.html",
  client: "Academic CME Office",
  title: "Academic CME office reactivated 38% of lapsed alumni in a single semester",
  excerpt: "A structured reactivation built on refreshed contact data and renewal-window timing brought more than a third of dormant past learners back in one semester.",
  meta: "Academic CME Office · 3 min read",
  dark: false },

{
  href: "case-studies/alumni-recurring-revenue.html",
  client: "Specialty Society",
  title: "Specialty society turned past attendees into a recurring revenue stream",
  excerpt: "Cohort nurture and intent-triggered offers turned one-off event attendees into a dependable, repeating enrollment pipeline.",
  meta: "Specialty Society · 3 min read",
  dark: true },

{
  href: "case-studies/nursing-ce-rn-enrollment.html",
  client: "Nursing CE Provider",
  title: "Nursing CE provider tripled RN enrollment by targeting active renewal windows",
  excerpt: "License-verified nurse data and state-by-state renewal targeting tripled RN enrollment where generic lists and mistimed outreach had stalled.",
  meta: "Nursing CE Provider · 3 min read",
  dark: false },

{
  href: "case-studies/aprn-license-segmentation.html",
  client: "APRN Certification Body",
  title: "APRN certification body filled specialty cohorts using license-level segmentation",
  excerpt: "License-level segmentation across NP, CNS, CRNA, and CNM populations turned chronically under-filled specialty cohorts into full ones.",
  meta: "APRN Certification Body · 3 min read",
  dark: false }];


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

/* ----------------------------- Case card ------------------------------- */
function CaseCard({ c }) {
  const dark = c.dark;
  return (
    <a href={c.href || "#"} className={`group flex flex-col rounded-2xl border overflow-hidden transition lift shadow-sm hover:shadow-lg ${
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
    document.title = "CME Marketing Case Studies & Results | CMEIntent";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <CaseHero />
      <CaseGrid />
      <CaseCTA />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<CaseStudiesPage />);
