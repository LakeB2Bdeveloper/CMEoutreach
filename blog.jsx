const { useState, useEffect, useRef } = React;
const { Icon, Nav, Footer } = window;

/* ----------------------------- Blog data ------------------------------ */
const FEATURED = {
  href: "blog-intent-data.html",
  category: "Audience Intelligence",
  icon: "microscope",
  title: "How healthcare intent data really works",
  excerpt: "We aggregate 5,000+ behavioral signals from clinical platforms and CME portals to score physician intent by topic and urgency. Here's what those signals actually measure, and how to act on them without drowning your team in noise.",
  meta: "May 2026 · 8 min read" };


const POSTS = [
{
  href: "blog-intent-data.html",
  category: "Targeting",
  icon: "crosshair",
  title: "Top healthcare audience targeting strategies",
  excerpt: "Layer NPI data, prescribing patterns, practice affiliation, and board-certification timelines to build custom physician groups that actually convert.",
  meta: "Apr 2026 · 6 min read",
  dark: false },

{
  href: "blog-intent-data.html",
  category: "Compliance",
  icon: "lock",
  title: "HIPAA-compliant CME outreach: what's actually allowed",
  excerpt: "The line between compliant physician marketing and a privacy violation is narrower than most teams think. A plain-English guide to staying on the right side of it.",
  meta: "Apr 2026 · 7 min read",
  dark: true },

{
  href: "blog-intent-data.html",
  category: "Deliverability",
  icon: "mail-check",
  title: "How to reach physicians at 94%+ inbox placement",
  excerpt: "Verification, NCOA validation, and sender-authentication hygiene that keeps your CME invitations out of the spam folder and in front of clinicians.",
  meta: "Mar 2026 · 5 min read",
  dark: false },

{
  href: "blog-intent-data.html",
  category: "MOC",
  icon: "calendar-clock",
  title: "Reaching physicians during MOC renewal windows",
  excerpt: "Board recertification deadlines are the strongest intent signal in medical education. Here's how to time outreach to the renewal cycle for same-week enrollment.",
  meta: "Mar 2026 · 6 min read",
  dark: true },

{
  href: "blog-intent-data.html",
  category: "Strategy",
  icon: "hospital",
  title: "Account-based CME marketing for health systems",
  excerpt: "Target every eligible physician and APP within a hospital system concurrently: an ABM playbook built specifically for accredited education teams.",
  meta: "Feb 2026 · 8 min read",
  dark: false },

{
  href: "blog-intent-data.html",
  category: "Attribution",
  icon: "circle-dollar-sign",
  title: "Connecting CME enrollment back to campaign ROI",
  excerpt: "Multi-touch attribution that ties every completion back to its originating asset, so you can finally prove which channels drive accredited activity.",
  meta: "Feb 2026 · 7 min read",
  dark: true }];


/* ------------------------------- Hero ---------------------------------- */
function BlogHero() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-xs text-white/50 mb-5 flex items-center gap-2">
          <a href="index.html" className="hover:text-teal3 transition">Home</a>
          <span>/</span>
          <span className="text-white/80">Blog</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
          Healthcare Marketing Intelligence Hub
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-6 text-balance max-w-3xl">
          Thoughts &amp; <em className="not-italic text-teal3">Insights</em>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
          Frameworks, benchmarks, and playbooks from the MedReachIQ team, built for accreditation leaders, medical-education marketers, and audience strategists who need accurate physician data and provable outcomes.
        </p>
      </div>
    </header>);
}

/* --------------------------- Featured post ----------------------------- */
function Featured() {
  return (
    <a href={FEATURED.href} className="group grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center max-w-7xl mx-auto mt-16 mb-14 rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-xl transition lift">
      {/* Lead image on the LEFT — same dimensions as the article's inside lead (1200 / 520),
          shares the inside slot's id so an image dropped inside shows here automatically.
          pointer-events:none keeps the whole card a single click target (upload happens on the article page). */}
      <div className="pl-6 lg:pl-10">
        <image-slot
          id="blog-intent-lead"
          shape="rect"
          fit="cover"
          placeholder="Lead image"
          style={{ display: "block", width: "100%", height: "auto", aspectRatio: "1200 / 520", pointerEvents: "none" }}>
        </image-slot>
      </div>
      {/* Body */}
      <div className="flex flex-col justify-center gap-4 p-8 lg:p-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold text-teal1 uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-teal1 pulse-dot" /> Featured
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-[11px] font-bold text-teal1 uppercase tracking-widest">{FEATURED.category}</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight leading-tight group-hover:text-teal1 transition text-balance">{FEATURED.title}</h2>
        <p className="text-[15px] leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{FEATURED.excerpt}</p>
        <div className="flex items-center justify-between gap-4 mt-2">
          <span className="text-xs font-semibold text-slate-400 tracking-wide tabular-nums">{FEATURED.meta}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-teal1 group-hover:gap-2.5 transition-all">Read article <Icon name="arrow-right" size={16} strokeWidth={2.5} /></span>
        </div>
      </div>
    </a>);
}

/* ----------------------------- Post card ------------------------------- */
function PostCard({ p }) {
  const dark = p.dark;
  return (
    <a href={p.href} className={`group flex flex-col rounded-2xl border overflow-hidden transition lift shadow-sm hover:shadow-lg ${
    dark ? "bg-ink border-ink2 hover:border-teal3" : "bg-white border-slate-200 hover:border-teal2"}`}>
      {/* Body */}
      <div className="p-7 flex flex-col gap-2.5 flex-1">
        <div className={`text-[10px] font-bold uppercase tracking-widest ${dark ? "text-teal3" : "text-teal1"}`}>{p.category}</div>
        <h3 className={`font-display font-bold text-[19px] leading-snug tracking-tight transition ${dark ? "text-white group-hover:text-teal3" : "text-ink group-hover:text-teal1"}`}>{p.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.7)" : "rgb(6, 30, 63)" }}>{p.excerpt}</p>
        <div className={`mt-auto pt-3 flex items-center justify-between gap-3 text-xs font-semibold tabular-nums ${dark ? "text-white/45" : "text-slate-400"}`}>
          <span>{p.meta}</span>
          <span className={`inline-flex items-center ${dark ? "text-teal3" : "text-teal1"} group-hover:translate-x-0.5 transition-transform`}>Read article</span>
        </div>
      </div>
    </a>);
}

/* ------------------------------- Grid ---------------------------------- */
function PostGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="flex items-end justify-between gap-4 mb-7">
        <h2 className="font-display font-extrabold text-2xl text-ink tracking-tight">Latest articles</h2>
        <span className="text-sm text-slate-400 font-medium hidden sm:block">{POSTS.length} articles</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {POSTS.map((p, i) => <PostCard key={i} p={p} />)}
      </div>
    </section>);
}

/* ------------------------------- CTA ----------------------------------- */
function BlogCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" /> Put the playbook to work
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight text-balance">
            See which clinicians are in-market for your programs
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            Reading about audience intelligence is one thing. Book a 30-minute discovery call and we'll show you the verified, intent-active physicians already inside your therapeutic area.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="contact.html" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Discovery Call <Icon name="arrow-right" size={18} />
            </a>
            <a href="personas.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              Explore Personas &amp; Intent
            </a>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function BlogPage() {
  useEffect(() => {
    document.title = "Blog | MedReachIQ";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <BlogHero />
      <Featured />
      <PostGrid />
      <BlogCTA />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<BlogPage />);
