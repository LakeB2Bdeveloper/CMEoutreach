/* Shared chrome for the CMEIntent blog hub + article pages.
   Loaded before blog.jsx / article scripts; exports Icon, Nav, Footer to window. */
const { useState, useEffect, useRef, useMemo } = React;

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
    </span>);
}

/* --------------------------------- Nav --------------------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const SOLUTION_LINKS = [
  { href: "solution-audience-intelligence.html", num: "01", title: "CME Audience Intelligence", kicker: "Core Platform" },
  { href: "solution-cme-targeting.html", num: "02", title: "HCP Outreach", kicker: "Outreach" },
  { href: "solution-multichannel-marketing.html", num: "03", title: "Alumni Growth Engine", kicker: "Alumni" },
  { href: "solution-nursing.html", num: "04", title: "Nurse Audience Intelligence", kicker: "Nursing" }];

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
            <a href="cme-marketing.html" className="hover:text-teal3 transition inline-flex items-center gap-1">
              Services <Icon name="chevron-down" size={14} />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-ink border border-white/10 rounded-xl shadow-2xl shadow-black/50 w-64 p-2">
                <a href="cme-marketing.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">CME Marketing Services</a>
                <a href="maintenance-of-certification-marketing.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">MOC Marketing Services</a>
                <a href="lead-generation.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">CME Lead Generation Services</a>
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
                <a href="contact.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Contact</a>
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
          <a href="cme-marketing.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">CME Marketing Services</a>
          <a href="maintenance-of-certification-marketing.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">MOC Marketing Services</a>
          <a href="lead-generation.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">CME Lead Generation Services</a>
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
          <a href="contact.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Contact</a>
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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
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
          { label: "CME Audience Intelligence", href: "solution-audience-intelligence.html" },
          { label: "HCP Outreach", href: "solution-cme-targeting.html" },
          { label: "Alumni Growth Engine", href: "solution-multichannel-marketing.html" },
          { label: "Nurse Audience Intelligence", href: "solution-nursing.html" }]
          )}
          {col("Process", [
          { label: "Use Cases", href: "use-cases.html" },
          { label: "Personas & Intent", href: "personas.html" },
          { label: "How CMEIntent Works", href: "how-it-works.html" }]
          )}
          {col("Resources", [{ label: "Blogs", href: "blog.html" }, { label: "Case Studies", href: "case-studies.html" }, { label: "Whitepapers", href: "whitepapers.html" }, "FAQs"])}
          {col("Company", ["About", { label: "Contact", href: "contact.html" }])}
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

Object.assign(window, { Icon, Nav, Footer });
