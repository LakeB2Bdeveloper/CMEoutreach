const { useState, useEffect, useRef, useMemo } = React;

/* ----------------------------- Lucide icon ----------------------------- */
function Icon({ name, size = 18, className = "", strokeWidth = 2 }) {
  // Render a stable, React-owned <span> and let lucide build the SVG *inside* it
  // via innerHTML. React never reconciles the generated <svg>, so conditionally
  // swapping or unmounting icons can't trigger a removeChild on a node lucide
  // already replaced.
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    if (window.lucide) window.lucide.createIcons({ nameAttr: "data-lucide" });
    const svg = el.querySelector("svg");
    if (svg) {
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      if (strokeWidth) svg.setAttribute("stroke-width", strokeWidth);
    }
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      className={className}
      style={{ width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center", verticalAlign: "middle" }}>
    </span>);
}

/* --------------------------------- Nav --------------------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const SOLUTION_LINKS = [
  { href: "solutions/cme-audience-intelligence.html", num: "01", title: "CME Audience Intelligence", kicker: "Core Platform" },
  { href: "solutions/hcp-outreach.html", num: "02", title: "HCP Outreach", kicker: "Outreach" },
  { href: "solutions/alumni-outreach.html", num: "03", title: "Alumni Growth Engine", kicker: "Alumni" },
  { href: "solutions/nurse-audience-intelligence.html", num: "04", title: "Nurse Audience Intelligence", kicker: "Nursing" }];

  const PROCESS_LINKS = [
  { href: "use-cases.html", label: "Use Cases" },
  { href: "personas.html", label: "Personas & Intent" },
  { href: "how-it-works.html", label: "How CMEIntent Works" }];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="index.html" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white font-black text-lg font-display">C</div>
          <span className="font-display font-extrabold text-xl text-white tracking-tight">
            CME<span className="text-teal3">Intent</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-white/80 font-medium text-sm">
          <li className="relative group">
            <a href="index.html#our-solutions" className="hover:text-teal3 transition inline-flex items-center gap-1">
              Solutions <Icon name="chevron-down" size={14} />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-ink border border-white/10 rounded-xl shadow-2xl shadow-black/50 w-72 p-2">
                {SOLUTION_LINKS.map((s, i) =>
                <a key={i} href={s.href} className="flex gap-3 items-start p-3 rounded-lg transition hover:bg-white/5">
                    <span className="font-display font-extrabold text-teal3 text-sm leading-tight pt-0.5">{s.num}</span>
                    <span>
                      <span className="block text-white text-sm font-semibold leading-snug">{s.title}</span>
                      <span className="block text-white/45 text-[11px] mt-0.5">{s.kicker}</span>
                    </span>
                  </a>
                )}
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="services/cme-marketing.html" className="hover:text-teal3 transition inline-flex items-center gap-1">
              Services <Icon name="chevron-down" size={14} />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-ink border border-white/10 rounded-xl shadow-2xl shadow-black/50 w-64 p-2">
                <a href="services/cme-marketing.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">CME Marketing Services</a>
                <a href="services/maintenance-of-certification-marketing.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">MOC Marketing Services</a>
                <a href="services/lead-generation.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">CME Lead Generation Services</a>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="use-cases.html" className="hover:text-teal3 transition inline-flex items-center gap-1">
              Process <Icon name="chevron-down" size={14} />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-ink border border-white/10 rounded-xl shadow-2xl shadow-black/50 w-60 p-2">
                {PROCESS_LINKS.map((p, i) =>
                <a key={i} href={p.href} className="block px-3 py-2 rounded-lg text-sm font-medium transition text-white/85 hover:bg-white/5 hover:text-teal3">{p.label}</a>
                )}
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-teal3 transition inline-flex items-center gap-1">
              Resources <Icon name="chevron-down" size={14} />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-ink border border-white/10 rounded-xl shadow-2xl shadow-black/50 w-56 p-2">
                <a href="blog.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Blog</a>
                <a href="case-studies.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Case Studies</a>
                <a href="whitepapers.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Whitepapers</a>
                <a href="faqs.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">FAQs</a>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-teal3 transition inline-flex items-center gap-1">
              Company <Icon name="chevron-down" size={14} />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-ink border border-white/10 rounded-xl shadow-2xl shadow-black/50 w-64 p-2">
                <a href="#" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">About</a>
                <a href="contact.html" className="block px-3 py-2 rounded-lg text-teal3 text-sm font-medium bg-white/5 transition">Contact</a>
              </div>
            </div>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="index.html#demo" className="px-4 py-2 bg-gradient-to-br from-teal1 to-teal2 shadow-md hover:shadow-lg text-white text-sm font-semibold rounded-md transition lift">Request Demo</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>

      {open &&
      <div className="md:hidden bg-ink border-b border-white/10 px-6 py-4 flex flex-col gap-3">
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-1">Solutions</div>
          {SOLUTION_LINKS.map((s, i) =>
        <a key={i} href={s.href} onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">{s.num} · {s.title}</a>
        )}
          <div className="h-px bg-white/10 my-1" />
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-1">Services</div>
          <a href="services/cme-marketing.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">CME Marketing Services</a>
          <a href="services/maintenance-of-certification-marketing.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">MOC Marketing Services</a>
          <a href="services/lead-generation.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">CME Lead Generation Services</a>
          <div className="h-px bg-white/10 my-1" />
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-1">Process</div>
          {PROCESS_LINKS.map((p, i) =>
        <a key={i} href={p.href} onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">{p.label}</a>
        )}
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-2">Resources</div>
          <a href="blog.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Blog</a>
          <a href="case-studies.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Case Studies</a>
          <a href="whitepapers.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Whitepapers</a>
          <a href="faqs.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">FAQs</a>
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-2">Company</div>
          <a href="#" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">About</a>
          <a href="contact.html" onClick={() => setOpen(false)} className="text-teal3 text-sm py-1 pl-2">Contact</a>
          <div className="h-px bg-white/10 my-1" />
          <a href="index.html#demo" onClick={() => setOpen(false)} className="w-full text-center py-2.5 bg-gradient-to-br from-teal1 to-teal2 text-white rounded-md font-semibold text-sm">Request Demo</a>
        </div>
      }
    </nav>);
}

/* ------------------------------- Footer -------------------------------- */
function Footer() {
  const col = (title, items) =>
  <div>
      <div className="font-display font-bold text-sm text-white mb-4">{title}</div>
      <ul className="space-y-2.5">
        {items.map((it, i) =>
      <li key={i}><a href={it.href || "#"} className="text-white/70 hover:text-teal3 text-sm transition">{it.label || it}</a></li>
      )}
      </ul>
    </div>;

  return (
    <footer className="bg-[#081628] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <a href="index.html" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white font-black text-lg font-display">C</div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">CME<span className="text-teal3">Intent</span></span>
            </a>
            <p className="text-white/55 text-sm max-w-sm leading-relaxed mb-5">
              Healthcare audience intelligence for ACCME-accredited organizations. Built for CME, MOC, and medical conference marketing teams who need accurate physician data and provable outcomes.
            </p>
            <div className="flex gap-3">
              {["linkedin", "twitter", "youtube", "rss"].map((s, i) =>
              <a key={i} href="#" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-teal3 hover:border-teal3/50 transition">
                  <Icon name={s} size={16} />
                </a>
              )}
            </div>
          </div>
          {col("Solutions", [
          { label: "CME Audience Intelligence", href: "solutions/cme-audience-intelligence.html" },
          { label: "HCP Outreach", href: "solutions/hcp-outreach.html" },
          { label: "Alumni Growth Engine", href: "solutions/alumni-outreach.html" },
          { label: "Nurse Audience Intelligence", href: "solutions/nurse-audience-intelligence.html" }]
          )}
          {col("Company", ["About", "Careers", { label: "Contact", href: "contact.html" }])}
          {col("Resources", ["Blogs", "FAQs", "Whitepapers", "Newsletters"])}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-white/40">
          <div>© 2026 CMEIntent. All rights reserved. CMEIntent is not an ACCME-accredited provider; we support accredited organizations.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-teal3 transition">Privacy</a>
            <a href="#" className="hover:text-teal3 transition">Terms</a>
            <a href="#" className="hover:text-teal3 transition">HIPAA Notice</a>
            <a href="#" className="hover:text-teal3 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>);
}

/* ------------------------------- Hero ---------------------------------- */
function ContactHero() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-16 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="text-xs text-white/50 mb-5 flex items-center justify-center gap-2">
          <a href="index.html" className="hover:text-teal3 transition">Home</a>
          <span>/</span>
          <span className="text-white/80">Contact</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
          Book a Discovery Call
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-6 text-balance max-w-3xl mx-auto">
          Let's Map Your Audience on a <em className="not-italic text-teal3">30-Minute Zoom Call</em>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Pick a time that works for you, tell us what you'd like to cover. No slides, no pressure.
        </p>
      </div>
    </header>);
}

/* --------------------------- Booking constants ------------------------- */
const ZOOM_SCHEDULER_URL = "https://scheduler.zoom.us/gtm_success_team/healthcare-intent-audience-strategy-session";
const ZOOM_SCHEDULER_EMBED_URL = "https://scheduler.zoom.us/gtm_success_team/healthcare-intent-audience-strategy-session?origin=cme.intent.com&embed=true";

const WHAT_YOU_GET = [
"A walkthrough of your eligible audience",
"A sample multi-channel CME journey",
"Benchmarks for your specialty mix",
"A pricing & rollout proposal"];

/* ---------------------------- Summary Card ----------------------------- */
function SummaryCard() {
  return (
    <div className="bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-7 lg:p-8 relative overflow-hidden h-full">
      <div className="absolute -top-24 -right-24 w-[320px] h-[320px] hero-glow rounded-full pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/25">
            <Icon name="headset" size={22} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-teal3 uppercase tracking-widest">CMEIntent</div>
            <div className="font-display font-extrabold text-white text-lg leading-tight">Discovery Call</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-white/85 text-sm"><span className="text-teal3"><Icon name="clock" size={16} /></span> 30 minutes</div>
          <div className="flex items-center gap-3 text-white/85 text-sm"><span className="text-teal3"><Icon name="video" size={16} /></span> Zoom video call</div>
          <div className="flex items-center gap-3 text-white/85 text-sm"><span className="text-teal3"><Icon name="globe" size={16} /></span> Time zone detected automatically by Zoom</div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mb-6">
          <div className="text-[10px] font-bold text-white/45 uppercase tracking-widest mb-2">Pick your time</div>
          <div className="flex items-start gap-2.5 text-white/80 text-sm">
            <span className="text-teal3 mt-0.5"><Icon name="calendar-check" size={18} /></span>
            Choose a date &amp; time in the scheduler on the right — you'll get an instant confirmation with your Zoom link.
          </div>
        </div>

        <div className="text-[10px] font-bold text-white/45 uppercase tracking-widest mb-3">What you'll get</div>
        <ul className="space-y-2.5">
          {WHAT_YOU_GET.map((t, i) =>
          <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
              <span className="text-teal3 mt-0.5"><Icon name="check-circle-2" size={15} /></span>{t}
            </li>
          )}
        </ul>
      </div>
    </div>);
}

/* ----------------------------- Booking flow ---------------------------- */
function Booking() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        <div className="lg:col-span-5">
          <SummaryCard />
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-3 lg:p-4 overflow-hidden">
            <div className="flex items-center justify-between px-4 pt-2 pb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Icon name="video" size={14} /> Zoom Scheduler
              </span>
              <a
                href={ZOOM_SCHEDULER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal1 hover:text-teal2 transition">
                Open in a new tab <Icon name="external-link" size={14} />
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-100" style={{ minHeight: 560 }}>
              {!loaded &&
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400 bg-white">
                  <Icon name="loader" size={22} className="animate-spin" />
                  <span className="text-sm">Loading the scheduler…</span>
                </div>
              }
              <iframe
                title="Zoom Scheduler — Healthcare Intent Audience Strategy Session"
                src={ZOOM_SCHEDULER_EMBED_URL}
                onLoad={() => setLoaded(true)}
                frameBorder="0"
                className="w-full"
                style={{ height: 560, border: "none" }} />
            </div>

            <p className="text-xs text-slate-400 px-4 pt-3 pb-1 flex items-center gap-1.5">
              <Icon name="lock" size={13} /> Having trouble with the embedded view?{" "}
              <a href={ZOOM_SCHEDULER_URL} target="_blank" rel="noopener noreferrer" className="text-teal1 hover:text-teal2 font-semibold underline">
                Book directly on Zoom instead
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function ContactPage() {
  useEffect(() => {
    document.title = "Contact CMEIntent | Book a CME Marketing Demo";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <ContactHero />
      <Booking />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactPage />);
