const { useState, useEffect } = React;
const { Icon, Nav, Footer } = window;

const REPORT_URL = "2026-cme-audience-benchmark-report.html";
const UNLOCK_KEY = "cmeintent_benchmark_2026_unlocked";

const HIGHLIGHTS = [
  { icon: "mail-check", title: "Deliverability baselines", text: "Median inbox placement by audience cohort — and the hygiene practices that hold it." },
  { icon: "trending-up", title: "Full-funnel conversion", text: "Open, click, enroll, and credit-completion benchmarks across 500+ organizations." },
  { icon: "activity", title: "Intent-signal lift", text: "How timing outreach to the in-market window changes enrollment economics." },
  { icon: "layers", title: "Benchmarks by therapeutic area", text: "Find your specialty across 34 therapeutic areas and read the field against a comparable peer cohort." },
];

function Stat({ n, l }) {
  return (
    <div>
      <div className="font-display font-extrabold text-3xl text-white tracking-tight">{n}</div>
      <div className="text-[11px] uppercase tracking-widest text-white/55 mt-1">{l}</div>
    </div>
  );
}

function GateForm({ onUnlock }) {
  const [form, setForm] = useState({ name: "", email: "", org: "", role: "" });
  const [touched, setTouched] = useState(false);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const valid = form.name.trim() && emailOk && form.org.trim();

  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    try {
      localStorage.setItem(UNLOCK_KEY, JSON.stringify({ ...form, at: Date.now() }));
    } catch (err) {}
    onUnlock();
  };

  const field = (key, label, type = "text", required = true) => (
    <label className="block">
      <span className="block text-sm font-semibold text-ink mb-1.5">{label}{required && <span className="text-teal1"> *</span>}</span>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[15px] outline-none transition focus:border-teal2 focus:ring-2 focus:ring-teal3/30"
        placeholder={label}
      />
    </label>
  );

  return (
    <form onSubmit={submit} className="bg-white rounded-2xl border border-slate-200 shadow-xl p-7 sm:p-8">
      <h2 className="font-display font-extrabold text-2xl text-ink tracking-tight mb-1">Get the full report</h2>
      <p className="text-sm text-slate-500 mb-6" style={{ color: "rgb(6, 30, 63)" }}>Tell us where to send it. You'll get instant access — no waiting.</p>
      <div className="grid gap-4">
        {field("name", "Full name")}
        {field("email", "Work email", "email")}
        {touched && !emailOk && <span className="text-xs text-red-500 -mt-2">Enter a valid email address.</span>}
        {field("org", "Organization")}
        <label className="block">
          <span className="block text-sm font-semibold text-ink mb-1.5">Role</span>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-[15px] outline-none transition focus:border-teal2 focus:ring-2 focus:ring-teal3/30 bg-white">
            <option value="">Select one</option>
            <option>Marketing / Outreach</option>
            <option>CME / Accreditation</option>
            <option>Program / Course Director</option>
            <option>Leadership / Executive</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center justify-center gap-2 font-display">
        Unlock the Report <Icon name="arrow-right" size={18} />
      </button>
      <p className="text-[12px] text-slate-400 mt-4 leading-relaxed text-center">
        By submitting, you agree to receive occasional research from CMEIntent. Unsubscribe anytime. We never share your details.
      </p>
    </form>
  );
}

function Unlocked() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 text-center">
      <div className="w-14 h-14 rounded-2xl bg-teal3/15 text-teal1 flex items-center justify-center mx-auto mb-5">
        <Icon name="check-circle-2" size={28} />
      </div>
      <h2 className="font-display font-extrabold text-2xl text-ink tracking-tight mb-2">You're in</h2>
      <p className="text-sm mb-7" style={{ color: "rgb(6, 30, 63)" }}>The 2026 CME Audience Benchmark Report is ready. Open it below, then use the Download PDF button in the report to save your copy.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href={REPORT_URL} className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center justify-center gap-2 font-display">
          Open the Report <Icon name="arrow-right" size={18} />
        </a>
        <a href={REPORT_URL} target="_blank" rel="noopener" className="px-6 py-3.5 border border-slate-300 text-ink font-semibold rounded-lg hover:border-teal2 hover:text-teal1 transition flex items-center justify-center gap-2">
          Open in new tab <Icon name="external-link" size={16} />
        </a>
      </div>
    </div>
  );
}

function ReportGatePage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    document.title = "Download · The 2026 CME Audience Benchmark Report | CMEIntent";
    try { if (localStorage.getItem(UNLOCK_KEY)) setUnlocked(true); } catch (e) {}
  }, []);

  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
        <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
              <Icon name="bar-chart-3" size={13} /> Benchmark Report · 2026 Edition
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-[1.05] mb-5 text-balance">
              The 2026 CME Audience Benchmark Report
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              Deliverability, enrollment, and intent benchmarks from 500+ healthcare organizations — with playbooks to match your therapeutic area.
            </p>
            <div className="flex flex-wrap gap-8">
              <Stat n="500+" l="Organizations" />
              <Stat n="8 pages" l="Full report" />
              <Stat n="4" l="Benchmark sets" />
            </div>
          </div>
          <div className="lg:pl-4">
            {unlocked ? <Unlocked /> : <GateForm onUnlock={() => setUnlocked(true)} />}
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">What's inside</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
            Four benchmark sets, one field guide
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 lift shadow-sm hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-teal3/12 text-teal1 flex items-center justify-center mb-4">
                <Icon name={h.icon} size={24} />
              </div>
              <h3 className="font-display font-bold text-[17px] text-ink mb-2 leading-snug">{h.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{h.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="whitepapers.html" className="inline-flex items-center gap-2 text-teal1 font-semibold hover:gap-3 transition-all">
            <Icon name="arrow-left" size={16} /> Back to all whitepapers
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ReportGatePage />);
