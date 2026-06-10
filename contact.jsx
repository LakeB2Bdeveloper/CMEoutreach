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
  { href: "solution-audience-intelligence.html", num: "01", title: "CME Audience Intelligence", kicker: "Core Platform" },
  { href: "solution-cme-targeting.html", num: "02", title: "HCP Outreach", kicker: "Outreach" },
  { href: "solution-multichannel-marketing.html", num: "03", title: "Alumni Growth Engine", kicker: "Alumni" },
  { href: "solution-nursing.html", num: "04", title: "Nurse Audience Intelligence", kicker: "Nursing" }];

  const PROCESS_LINKS = [
  { href: "use-cases.html", label: "Use Cases" },
  { href: "personas.html", label: "Personas & Intent" },
  { href: "how-it-works.html", label: "How MedReachIQ Works" }];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <a href="index.html" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white font-black text-lg font-display">M</div>
          <span className="font-display font-extrabold text-xl text-white tracking-tight">
            MedReach<span className="text-teal3">IQ</span>
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
              Company <Icon name="chevron-down" size={14} />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-ink border border-white/10 rounded-xl shadow-2xl shadow-black/50 w-64 p-2">
                <a href="#" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">About</a>
                <div className="px-3 pt-3 pb-1 text-teal3 text-[13px] font-bold tracking-wide">Healthcare Marketing Intelligence Hub</div>
                <a href="blog.html" className="block px-3 py-2 pl-5 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Blogs</a>
                <a href="#" className="block px-3 py-2 pl-5 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Case Studies</a>
                <div className="h-px bg-white/10 my-1.5 mx-2" />
                <a href="#" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">FAQs</a>
                <a href="contact.html" className="block px-3 py-2 rounded-lg text-teal3 text-sm font-medium bg-white/5 transition">Contact</a>
              </div>
            </div>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 border border-white/30 rounded-md text-white text-sm font-semibold hover:border-teal3 hover:text-teal3 transition">Log In</a>
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
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-1">Process</div>
          {PROCESS_LINKS.map((p, i) =>
        <a key={i} href={p.href} onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">{p.label}</a>
        )}
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-2">Company</div>
          <a href="#" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">About</a>
          <div className="text-teal3 text-[13px] font-bold pl-2 pt-1.5">Healthcare Marketing Intelligence Hub</div>
          <a href="blog.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-5">Blogs</a>
          <a href="#" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-5">Case Studies</a>
          <a href="#" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">FAQs</a>
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
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white font-black text-lg font-display">M</div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">MedReach<span className="text-teal3">IQ</span></span>
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
          {col("Company", ["About", "Careers", { label: "Contact", href: "contact.html" }])}
          {col("Resources", ["Blogs", "FAQs", "Whitepapers", "Newsletters"])}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-white/40">
          <div>© 2026 MedReachIQ. All rights reserved. MedReachIQ is not an ACCME-accredited provider; we support accredited organizations.</div>
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
          Pick a time that works, tell us what you'd like to cover, and we'll walk through the verified, intent-active clinicians inside your therapeutic area — no slides, no pressure.
        </p>
      </div>
    </header>);
}

/* --------------------------- Booking constants ------------------------- */
const TIME_SLOTS = [
{ h: 9, m: 0 }, { h: 9, m: 30 }, { h: 10, m: 30, taken: true }, { h: 11, m: 0 },
{ h: 13, m: 0 }, { h: 14, m: 30 }, { h: 15, m: 0 }, { h: 16, m: 30, taken: true }];

const TOPICS = [
"Audience targeting", "CME enrollment", "Compliance & HIPAA", "Multi-channel outreach", "Pricing & rollout", "Data accuracy"];

const WHAT_YOU_GET = [
"A walkthrough of your eligible audience",
"A sample multi-channel CME journey",
"Benchmarks for your specialty mix",
"A pricing & rollout proposal"];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function startOfDay(d) {const x = new Date(d);x.setHours(0, 0, 0, 0);return x;}
function fmtTime(h, m) {
  const am = h < 12;
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:${String(m).padStart(2, "0")} ${am ? "AM" : "PM"}`;
}
function fmtLongDate(d) {
  return d.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

/* ------------------------------ Calendar ------------------------------- */
function Calendar({ selected, onSelect }) {
  const today = startOfDay(new Date());
  const [view, setView] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const maxMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1); // book up to 2 months out

  const grid = useMemo(() => {
    const y = view.getFullYear(), mo = view.getMonth();
    const first = new Date(y, mo, 1);
    const lead = first.getDay();
    const daysInMonth = new Date(y, mo + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < lead; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(y, mo, d));
    return cells;
  }, [view]);

  const canPrev = view > new Date(today.getFullYear(), today.getMonth(), 1);
  const canNext = view < maxMonth;
  const step = (n) => setView(new Date(view.getFullYear(), view.getMonth() + n, 1));

  const isSelectable = (d) => {
    if (!d) return false;
    const wd = d.getDay();
    return d >= today && d <= maxMonth && wd !== 0 && wd !== 6;
  };
  const sameDay = (a, b) => a && b && a.getTime() === startOfDay(b).getTime();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="font-display font-bold text-ink">{MONTHS[view.getMonth()]} {view.getFullYear()}</div>
        <div className="flex gap-1.5">
          <button onClick={() => canPrev && step(-1)} disabled={!canPrev}
            className={`w-9 h-9 rounded-lg border flex items-center justify-center transition ${canPrev ? "border-slate-200 text-ink hover:border-teal2 hover:text-teal1" : "border-slate-100 text-slate-300 cursor-not-allowed"}`}>
            <Icon name="chevron-left" size={16} />
          </button>
          <button onClick={() => canNext && step(1)} disabled={!canNext}
            className={`w-9 h-9 rounded-lg border flex items-center justify-center transition ${canNext ? "border-slate-200 text-ink hover:border-teal2 hover:text-teal1" : "border-slate-100 text-slate-300 cursor-not-allowed"}`}>
            <Icon name="chevron-right" size={16} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DOW.map((d) => <div key={d} className="text-center text-[11px] font-bold text-slate-400 py-1.5">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {grid.map((d, i) => {
          if (!d) return <div key={i} />;
          const ok = isSelectable(d);
          const sel = sameDay(selected, d);
          return (
            <button
              key={i}
              disabled={!ok}
              onClick={() => onSelect(startOfDay(d))}
              className={`aspect-square rounded-lg text-sm font-semibold transition flex items-center justify-center ${
              sel ? "bg-gradient-to-br from-teal1 to-teal2 text-white shadow-md" :
              ok ? "text-ink hover:bg-teal3/15 hover:text-teal1" :
              "text-slate-300 cursor-not-allowed"}`}>
              {d.getDate()}
            </button>);
        })}
      </div>
    </div>);
}

/* ------------------------------- Stepper ------------------------------- */
function Stepper({ step }) {
  const steps = ["Date & time", "Your details", "Confirmed"];
  return (
    <div className="flex items-center gap-2 mb-8">
      {steps.map((label, i) => {
        const n = i + 1;
        const done = step > n;
        const active = step === n;
        return (
          <React.Fragment key={i}>
            <div className="flex items-center gap-2.5">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
              done ? "bg-teal1 text-white" : active ? "bg-ink text-white" : "bg-slate-100 text-slate-400"}`}>
                {done ? <Icon name="check" size={14} /> : n}
              </span>
              <span className={`text-sm font-semibold hidden sm:block ${active || done ? "text-ink" : "text-slate-400"}`}>{label}</span>
            </div>
            {i < steps.length - 1 && <div className={`flex-1 h-px ${done ? "bg-teal1" : "bg-slate-200"}`} />}
          </React.Fragment>);
      })}
    </div>);
}

/* ---------------------------- Summary Card ----------------------------- */
function SummaryCard({ date, time, tz }) {
  return (
    <div className="bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-7 lg:p-8 relative overflow-hidden h-full">
      <div className="absolute -top-24 -right-24 w-[320px] h-[320px] hero-glow rounded-full pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/25">
            <Icon name="headset" size={22} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-teal3 uppercase tracking-widest">MedReachIQ</div>
            <div className="font-display font-extrabold text-white text-lg leading-tight">Discovery Call</div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-white/85 text-sm"><span className="text-teal3"><Icon name="clock" size={16} /></span> 30 minutes</div>
          <div className="flex items-center gap-3 text-white/85 text-sm"><span className="text-teal3"><Icon name="video" size={16} /></span> Zoom video call</div>
          <div className="flex items-center gap-3 text-white/85 text-sm"><span className="text-teal3"><Icon name="globe" size={16} /></span> {tz}</div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mb-6">
          <div className="text-[10px] font-bold text-white/45 uppercase tracking-widest mb-2">Your selection</div>
          {date ?
          <div className="flex items-start gap-2.5 text-white">
              <span className="text-teal3 mt-0.5"><Icon name="calendar-check" size={18} /></span>
              <div>
                <div className="font-display font-bold text-sm leading-tight">{fmtLongDate(date)}</div>
                <div className="text-white/60 text-sm mt-0.5">{time ? time : "Select a time"}</div>
              </div>
            </div> :
          <div className="flex items-center gap-2.5 text-white/45 text-sm">
              <Icon name="calendar" size={18} /> No date selected yet
            </div>
          }
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

/* --------------------------- Field components -------------------------- */
function Field({ label, required, error, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold text-ink uppercase tracking-wide mb-1.5">{label}{required && <span className="text-teal1"> *</span>}</span>
      {children}
      {error && <span className="block text-[12px] text-rose-500 mt-1">{error}</span>}
    </label>);
}
const inputCls = "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:border-teal2 focus:ring-2 focus:ring-teal3/25 transition";

/* ----------------------------- Booking flow ---------------------------- */
function Booking() {
  const tz = "Eastern Time (ET)";

  const [step, setStep] = useState(1);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null); // index into TIME_SLOTS
  const [form, setForm] = useState({ name: "", email: "", phone: "", org: "", role: "", topics: [], notes: "" });
  const [errors, setErrors] = useState({});

  const timeLabel = slot != null ? fmtTime(TIME_SLOTS[slot].h, TIME_SLOTS[slot].m) : null;
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const toggleTopic = (t) =>
  setForm((f) => ({ ...f, topics: f.topics.includes(t) ? f.topics.filter((x) => x !== t) : [...f.topics, t] }));

  const goDetails = () => {if (date && slot != null) setStep(2);};

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Email is required.";else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const confirm = () => {if (validate()) {setStep(3);window.scrollTo({ top: 0, behavior: "smooth" });}};

  const reset = () => {
    setStep(1);setDate(null);setSlot(null);
    setForm({ name: "", email: "", phone: "", org: "", role: "", topics: [], notes: "" });
    setErrors({});
  };

  const downloadIcs = () => {
    const s = TIME_SLOTS[slot];
    const start = new Date(date);start.setHours(s.h, s.m, 0, 0);
    const end = new Date(start.getTime() + 30 * 60000);
    const pad = (n) => String(n).padStart(2, "0");
    const f = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
    const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//MedReachIQ//Discovery Call//EN", "BEGIN:VEVENT",
    `UID:${Date.now()}@medreachiq`, `DTSTART:${f(start)}`, `DTEND:${f(end)}`,
    "SUMMARY:MedReachIQ Discovery Call (Zoom)",
    "DESCRIPTION:A Zoom link will be included in your confirmation email.",
    "LOCATION:Zoom", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    const a = document.createElement("a");a.href = url;a.download = "medreachiq-discovery-call.ics";
    document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
  };

  const firstName = (() => {
    const parts = form.name.trim().split(/\s+/).filter(Boolean);
    const titles = ["dr", "dr.", "mr", "mr.", "ms", "ms.", "mrs", "mrs.", "prof", "prof.", "dr.med"];
    const named = parts.find((p) => !titles.includes(p.toLowerCase()));
    return named || parts[0] || "there";
  })();

  /* ---- Confirmation ---- */
  if (step === 3) {
    return (
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-8 lg:p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/12 text-emerald-600 flex items-center justify-center mx-auto mb-6">
            <Icon name="check-circle-2" size={34} strokeWidth={2} />
          </div>
          <h2 className="font-display font-extrabold text-3xl text-ink mb-3 tracking-tight">You're booked, {firstName}!</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto" style={{ color: "rgb(6, 30, 63)" }}>
            A calendar invite with your Zoom link is on its way to <span className="font-semibold text-ink">{form.email}</span>.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left max-w-md mx-auto mb-8">
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal1 to-teal2 text-white flex items-center justify-center"><Icon name="video" size={18} /></span>
              <div>
                <div className="font-display font-bold text-ink text-sm">Discovery Call · Zoom</div>
                <div className="text-slate-500 text-xs">30 minutes</div>
              </div>
            </div>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-ink"><span className="text-teal1"><Icon name="calendar-check" size={16} /></span>{fmtLongDate(date)}</div>
              <div className="flex items-center gap-2.5 text-ink"><span className="text-teal1"><Icon name="clock" size={16} /></span>{timeLabel} · {tz}</div>
              {form.topics.length > 0 &&
              <div className="flex items-start gap-2.5 text-ink"><span className="text-teal1 mt-0.5"><Icon name="list-checks" size={16} /></span>{form.topics.join(", ")}</div>
              }
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={downloadIcs} className="px-6 py-3 bg-gradient-to-br from-teal1 to-teal2 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition lift flex items-center gap-2">
              <Icon name="calendar-plus" size={18} /> Add to calendar
            </button>
            <button onClick={reset} className="px-6 py-3 border border-slate-200 text-ink font-semibold rounded-lg hover:border-teal2 hover:text-teal1 transition">
              Book another time
            </button>
          </div>
        </div>
      </section>);
  }

  /* ---- Steps 1 & 2 ---- */
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        <div className="lg:col-span-5">
          <SummaryCard date={date} time={timeLabel} tz={tz} />
        </div>

        <div className="lg:col-span-7">
          {step === 2 &&
          <div className="flex justify-start mb-4">
              <button onClick={() => setStep(1)} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-ink hover:bg-ink2 text-white text-sm font-semibold shadow-md transition lift">
                <Icon name="arrow-left" size={16} /> Back to date &amp; time
              </button>
            </div>
          }
          <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-7 lg:p-8">
            <Stepper step={step} />

            {step === 1 &&
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <h3 className="font-display font-bold text-ink mb-4">Pick a date</h3>
                    <Calendar selected={date} onSelect={(d) => {setDate(d);setSlot(null);}} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink mb-4">Available times</h3>
                    {date ?
                  <div className="grid grid-cols-2 gap-2.5">
                        {TIME_SLOTS.map((s, i) => {
                      const sel = slot === i;
                      return (
                        <button
                          key={i}
                          disabled={s.taken}
                          onClick={() => setSlot(i)}
                          className={`rounded-lg border py-2.5 text-sm font-semibold transition ${
                          s.taken ? "border-slate-100 text-slate-300 line-through cursor-not-allowed" :
                          sel ? "border-teal1 bg-teal3/15 text-teal1" :
                          "border-slate-200 text-ink hover:border-teal2 hover:text-teal1"}`}>
                              {fmtTime(s.h, s.m)}
                            </button>);
                    })}
                      </div> :
                  <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-400 flex flex-col items-center gap-2">
                        <Icon name="calendar-clock" size={24} />
                        Select a date to see open times
                      </div>
                  }
                  </div>
                </div>
                <div className="flex justify-end mt-8 pt-6 border-t border-slate-100">
                  <button
                  onClick={goDetails}
                  disabled={!(date && slot != null)}
                  className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
                  date && slot != null ?
                  "bg-gradient-to-br from-teal1 to-teal2 text-white shadow-md hover:shadow-lg lift" :
                  "bg-slate-100 text-slate-400 cursor-not-allowed"}`}>
                    Continue <Icon name="arrow-right" size={18} />
                  </button>
                </div>
              </div>
            }

            {step === 2 &&
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full name" required error={errors.name}>
                    <input className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Dr. Jane Smith" />
                  </Field>
                  <Field label="Work email" required error={errors.email}>
                    <input type="email" className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@institution.org" />
                  </Field>
                  <Field label="Phone">
                    <input type="tel" className={inputCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(555) 123-4567" />
                  </Field>
                  <Field label="Organization">
                    <input className={inputCls} value={form.org} onChange={(e) => set("org", e.target.value)} placeholder="Accredited CME provider" />
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Your role">
                    <select className={inputCls} value={form.role} onChange={(e) => set("role", e.target.value)}>
                      <option value="">Select one…</option>
                      <option>CME / CE Director</option>
                      <option>Marketing Lead</option>
                      <option>Accreditation Manager</option>
                      <option>Medical Education</option>
                      <option>Other</option>
                    </select>
                  </Field>
                </div>

                <div className="mt-6">
                  <span className="block text-xs font-bold text-ink uppercase tracking-wide mb-2.5">What would you like to cover?</span>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {TOPICS.map((t) => {
                    const on = form.topics.includes(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleTopic(t)}
                        className={`text-sm font-semibold px-3.5 py-1.5 rounded-full border transition ${
                        on ? "bg-ink text-white border-ink" : "bg-white text-slate-600 border-slate-200 hover:border-teal2 hover:text-teal1"}`}>
                        {on && <span className="mr-1.5">✓</span>}{t}
                      </button>);
                  })}
                  </div>
                  <textarea
                  className={inputCls + " resize-none"}
                  rows="4"
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  placeholder="Tell us about your programs, specialties, or goals so we can tailor the call…" />
                </div>

                <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-100">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5"><Icon name="lock" size={13} /> HIPAA-aware. We never sell your data.</span>
                  <button onClick={confirm} className="px-6 py-3 rounded-lg font-bold bg-gradient-to-br from-gold2 to-gold text-ink shadow-md hover:shadow-lg transition lift flex items-center gap-2 shrink-0">
                    Confirm booking <Icon name="check" size={18} />
                  </button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function ContactPage() {
  useEffect(() => {
    document.title = "Contact | MedReachIQ";
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
