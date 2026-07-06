const { useEffect } = React;
const { Icon, Nav, Footer } = window;

/* ----------------------------- Whitepaper data ------------------------- */
const PAPERS = [
{
  topic: "Benchmark Report",
  icon: "bar-chart-3",
  title: "The 2026 CME Audience Benchmark Report",
  excerpt: "Deliverability, enrollment, and intent benchmarks from 500+ healthcare organizations, with playbooks to match your therapeutic area.",
  meta: "8 pages · PDF",
  href: "benchmark-report.html" },

{
  topic: "Intent Data",
  icon: "activity",
  title: "HCP Intent Data: A Healthcare Marketer's Guide to Identifying In-Market Audiences",
  excerpt: "How behavioral signals from clinical platforms and CME portals are scored into actionable, in-market audiences you can target today.",
  meta: "5 pages · PDF",
  href: "intent-data-report.html" },

{
  topic: "Deliverability",
  icon: "mail-check",
  title: "Email Deliverability for Healthcare Marketers",
  excerpt: "The hygiene, authentication, and list-validation practices that move accredited invitations from the spam folder back to the inbox.",
  meta: "5 pages · PDF",
  href: "deliverability-report.html" }];


/* ------------------------------- Hero ---------------------------------- */
function WhitepapersHero() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-xs text-white/50 mb-5 flex items-center gap-2">
          <a href="index.html" className="hover:text-teal3 transition">Home</a>
          <span>/</span>
          <span className="text-white/80">Whitepapers</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
          In-Depth Research &amp; Reports
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-6 text-balance max-w-3xl">
          Research, Reports &amp; <em className="not-italic text-teal3">Playbooks</em>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl leading-relaxed">Deep-dive guides, whitepapers, and benchmark reports for accreditation leaders and medical-education marketers.

        </p>
      </div>
    </header>);
}

/* --------------------------- Whitepaper card --------------------------- */
function PaperCard({ p, dark }) {
  return (
    <a
      href={p.href || "#"}
      className={`group flex flex-col rounded-2xl border overflow-hidden transition lift shadow-sm hover:shadow-lg ${
      dark ? "border-transparent hover:border-teal3" : "bg-white border-slate-200 hover:border-teal2"}`}
      style={dark ? { backgroundColor: "#0d8a8a" } : undefined}>
      <div className="p-7 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span className={`w-12 h-12 rounded-xl flex items-center justify-center ${dark ? "bg-white/15 text-white" : "bg-teal3/12 text-teal1"}`}>
            <Icon name={p.icon} size={24} />
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-widest ${dark ? "text-white/90" : "text-teal1"}`}>{p.topic}</span>
        </div>
        <h3 className={`font-display font-bold text-[19px] leading-snug tracking-tight transition mt-1 ${dark ? "text-white" : "text-ink group-hover:text-teal1"}`}>{p.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.78)" : "rgb(6, 30, 63)" }}>{p.excerpt}</p>
        <div className={`mt-auto pt-3 flex items-center justify-between gap-3 text-xs font-semibold tabular-nums ${dark ? "text-white/55" : "text-slate-400"}`}>
          <span>{p.meta}</span>
          <span className={`inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all ${dark ? "text-white" : "text-teal1"}`}>Download <Icon name="download" size={15} strokeWidth={2.5} /></span>
        </div>
      </div>
    </a>);
}

/* ------------------------------- Grid ---------------------------------- */
function PapersGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
      <div className="flex items-end justify-between gap-4 mb-7">
        <h2 className="font-display font-extrabold text-2xl text-ink tracking-tight">All whitepapers</h2>
        <span className="text-sm text-slate-400 font-medium hidden sm:block">{PAPERS.length} resources</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {PAPERS.map((p, i) => <PaperCard key={i} p={p} dark={i % 2 === 1} />)}
      </div>
    </section>);
}

/* ------------------------------- CTA ----------------------------------- */
function PapersCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" /> Put the research to work
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight text-balance">
            See these benchmarks applied to your programs
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            Book a 30-minute discovery call and we'll map the verified, intent-active clinicians already in-market for your therapeutic area against the data in these reports.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="contact.html" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Discovery Call <Icon name="arrow-right" size={18} />
            </a>
            <a href="case-studies.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function WhitepapersPage() {
  useEffect(() => {
    document.title = "Healthcare Marketing Whitepapers & Research | CMEIntent";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <WhitepapersHero />
      <PapersGrid />
      <PapersCTA />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<WhitepapersPage />);