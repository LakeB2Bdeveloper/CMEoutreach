const { useState, useEffect, useRef } = React;

const ZOOM_SCHEDULER_URL = "https://scheduler.zoom.us/gtm_success_team/healthcare-intent-audience-strategy-session";

/* ----------------------------- Lucide icon ----------------------------- */
function Icon({ name, size = 18, className = "", strokeWidth = 2 }) {
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
    </span>
  );
}

/* --------------------------------- Nav --------------------------------- */
function Nav() {
  const [open, setOpen] = useState(false);

  const SOLUTION_LINKS = [
    { href: "solutions/cme-audience-intelligence.html", num: "01", title: "CME Audience Intelligence", kicker: "Core Platform" },
    { href: "solutions/hcp-outreach.html",              num: "02", title: "HCP Outreach",              kicker: "Outreach" },
    { href: "solutions/alumni-outreach.html",           num: "03", title: "Alumni Growth Engine",      kicker: "Alumni" },
    { href: "solutions/nurse-audience-intelligence.html", num: "04", title: "Nurse Audience Intelligence", kicker: "Nursing" },
  ];

  const PROCESS_LINKS = [
    { href: "use-cases.html",    label: "Use Cases" },
    { href: "personas.html",     label: "Personas & Intent" },
    { href: "how-it-works.html", label: "How CMEIntent Works" },
  ];

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
                <a href="blog.html"          className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Blog</a>
                <a href="case-studies.html"  className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Case Studies</a>
                <a href="whitepapers.html"   className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Whitepapers</a>
                <a href="faqs.html"          className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">FAQs</a>
              </div>
            </div>
          </li>

          <li className="relative group">
            <a href="#" className="hover:text-teal3 transition inline-flex items-center gap-1">
              Company <Icon name="chevron-down" size={14} />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-ink border border-white/10 rounded-xl shadow-2xl shadow-black/50 w-64 p-2">
                <a href="#"           className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">About</a>
                <a href="contact.html" className="block px-3 py-2 rounded-lg text-teal3 text-sm font-medium bg-white/5 transition">Contact</a>
              </div>
            </div>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href={ZOOM_SCHEDULER_URL} target="_blank" rel="noopener"
            className="px-4 py-2 bg-gradient-to-br from-teal1 to-teal2 shadow-md hover:shadow-lg text-white text-sm font-semibold rounded-md transition lift">
            Book a Call
          </a>
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
          <a href="blog.html"         onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Blog</a>
          <a href="case-studies.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Case Studies</a>
          <a href="whitepapers.html"  onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Whitepapers</a>
          <a href="faqs.html"         onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">FAQs</a>
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-2">Company</div>
          <a href="#"            onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">About</a>
          <a href="contact.html" onClick={() => setOpen(false)} className="text-teal3 text-sm py-1 pl-2">Contact</a>
          <div className="h-px bg-white/10 my-1" />
          <a href={ZOOM_SCHEDULER_URL} target="_blank" rel="noopener" onClick={() => setOpen(false)}
            className="w-full text-center py-2.5 bg-gradient-to-br from-teal1 to-teal2 text-white rounded-md font-semibold text-sm">
            Book a Call
          </a>
        </div>
      }
    </nav>
  );
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
              Healthcare audience intelligence for ACCME-accredited organizations. Built for CME, MOC, and medical conference marketing teams.
            </p>
          </div>
          {col("Solutions", [
            { label: "CME Audience Intelligence", href: "solutions/cme-audience-intelligence.html" },
            { label: "HCP Outreach",              href: "solutions/hcp-outreach.html" },
            { label: "Alumni Growth Engine",      href: "solutions/alumni-outreach.html" },
            { label: "Nurse Audience Intelligence", href: "solutions/nurse-audience-intelligence.html" },
          ])}
          {col("Company", ["About", "Careers", { label: "Contact", href: "contact.html" }])}
          {col("Resources", [
            { label: "Blogs",       href: "blog.html" },
            { label: "FAQs",        href: "faqs.html" },
            { label: "Whitepapers", href: "whitepapers.html" },
            { label: "Case Studies", href: "case-studies.html" },
          ])}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-white/40">
          <div>© 2026 CMEIntent. All rights reserved. CMEIntent is not an ACCME-accredited provider.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-teal3 transition">Privacy</a>
            <a href="#" className="hover:text-teal3 transition">Terms</a>
            <a href="#" className="hover:text-teal3 transition">HIPAA Notice</a>
            <a href="#" className="hover:text-teal3 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
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
          Let's Map Your Audience on a <em className="not-italic text-teal3">30-Minute Strategy Call</em>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Pick a time that works for you. No slides, no pressure — just a focused look at the in-market physicians ready for your programs.
        </p>
        <a href={ZOOM_SCHEDULER_URL} target="_blank" rel="noopener"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition text-lg lift">
          Open Booking Calendar →
        </a>
      </div>
    </header>
  );
}

/* --------------------------- What you get ------------------------------ */
const WHAT_YOU_GET = [
  { icon: "users",          title: "Your eligible audience",      desc: "A live look at verified, in-market physicians matched to your specialty and programs." },
  { icon: "route",          title: "A sample CME journey",        desc: "Multi-channel outreach sequence tailored to your learner profile." },
  { icon: "bar-chart-2",    title: "Benchmarks for your mix",     desc: "Open rate, enrollment, and CPL benchmarks across comparable programs." },
  { icon: "file-text",      title: "Pricing & rollout proposal",  desc: "A clear proposal scoped to your program calendar and audience size." },
];

function WhatYouGet() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-teal1/10 border border-teal3/20 text-teal1 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
          What's included in 30 minutes
        </div>
        <h2 className="font-display font-extrabold text-3xl text-ink tracking-tight">Come prepared for a real conversation</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {WHAT_YOU_GET.map((item, i) => (
          <div key={i} className="flex gap-4 bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal2 transition">
            <div className="w-11 h-11 rounded-xl bg-teal3/12 text-teal1 flex items-center justify-center shrink-0">
              <span data-lucide={item.icon} style={{width:20,height:20}}></span>
            </div>
            <div>
              <div className="font-display font-bold text-ink text-base mb-1">{item.title}</div>
              <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- Zoom Scheduler Embed ---------------------- */
function SchedulerEmbed() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-20">
      <div className="text-center mb-8">
        <h2 className="font-display font-extrabold text-2xl text-ink tracking-tight mb-2">Choose a time that works for you</h2>
        <p className="text-slate-500 text-sm">Powered by Zoom Scheduler · 30-minute session · Your local timezone detected automatically</p>
      </div>

      {/* Embedded Zoom scheduler iframe */}
      <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white" style={{minHeight: "700px"}}>
        <iframe
          src={ZOOM_SCHEDULER_URL}
          style={{width:"100%", height:"750px", border:"none"}}
          title="Book a Healthcare Intent Audience Strategy Session"
          allow="camera; microphone; fullscreen"
        />
      </div>

      {/* Fallback link if iframe is blocked */}
      <div className="text-center mt-5">
        <p className="text-slate-400 text-sm">
          Having trouble viewing the calendar?{" "}
          <a href={ZOOM_SCHEDULER_URL} target="_blank" rel="noopener" className="text-teal1 font-semibold hover:text-teal2 transition underline underline-offset-2">
            Open it directly in Zoom →
          </a>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- Page ---------------------------------- */
function ContactPage() {
  useEffect(() => {
    document.title = "Book a Strategy Call | CMEIntent";
    // Render lucide icons for the WhatYouGet section
    if (window.lucide) window.lucide.createIcons();
  }, []);

  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <ContactHero />
      <WhatYouGet />
      <SchedulerEmbed />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactPage />);
