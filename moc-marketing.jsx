/* ============================================================
   MOC & Recertification Marketing — service sub-page
   Reuses Nav, Footer, Icon from solutions.jsx (exported to window).
   ============================================================ */
const { useState: useStateMoc, useEffect: useEffectMoc } = React;
const { Nav: NavMoc, Footer: FooterMoc, Icon: IconMoc } = window;

/* ------------------------------- Hero ---------------------------------- */
function MocHero() {
  return (
    <header className="relative min-h-[600px] bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-20 px-6 overflow-hidden flex items-center">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute bottom-[-220px] left-[-160px] w-[520px] h-[520px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7">
          <div className="text-xs text-white/50 mb-4 flex items-center gap-2">
            <a href="index.html" className="hover:text-teal3 transition">Home</a>
            <span>/</span>
            <a href="services/cme-marketing.html" className="hover:text-teal3 transition">Services</a>
            <span>/</span>
            <span className="text-white/80">MOC Marketing Services</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
            MOC Marketing Services
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.2rem] text-white leading-[1.1] tracking-tight mb-6 text-balance">
            Maintenance of Certification <em className="not-italic text-teal3">Marketing</em>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8 leading-relaxed">
            Reach physicians exactly when recertification is on their mind. From MOC course promotion and enrollment campaigns to board-certified physician engagement, CMEIntent connects your certification programs with clinicians inside their renewal window.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2" style={{ fontSize: "17px" }}>
              Book a Quick Demo <IconMoc name="arrow-right" size={18} />
            </a>
            <a href="#services" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition" style={{ fontSize: "17px" }}>
              Explore Services
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5">
            {["All ABMS member boards", "Deadline-aware targeting", "HIPAA compliant"].map((b, i) =>
            <span key={i} className="inline-flex items-center gap-2 text-white/65 text-sm">
                <IconMoc name="check-circle-2" size={15} className="text-teal3" /> {b}
              </span>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
            <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-5">Why deadline-timed outreach wins</div>
            <div className="grid grid-cols-2 gap-5">
              {[
              { val: "5.7×", label: "Conversion vs. generic list" },
              { val: "91%", label: "MOC deadline accuracy" },
              { val: "38%", label: "Email click-through rate" },
              { val: "22%", label: "Same-day registration" }].
              map((s, i) =>
              <div key={i} className="border border-white/10 rounded-xl p-4 bg-white/[0.02]">
                  <div className="font-display font-extrabold text-3xl text-white leading-none mb-1.5">{s.val}</div>
                  <div className="text-white/55 text-xs leading-snug">{s.label}</div>
                </div>
              )}
            </div>
            <p className="text-white/40 text-[11px] mt-5 leading-relaxed">Aggregated from MOC-focused campaigns across 12 specialty boards, 2024–2025.</p>
          </div>
        </div>
      </div>
    </header>);
}

/* ----------------------------- Intro band ------------------------------ */
function MocIntro() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-3">Recertification is the highest-urgency CME need</span>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-5 tracking-tight text-balance">
        Physician recertification marketing, timed to the renewal cycle
      </h2>
      <p className="text-lg leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>
        Every board-certified physician faces recurring board certification maintenance requirements, and the moment they begin researching is when your program should appear. CMEIntent combines medical recertification audience targeting with done-for-you campaign execution, so your specialty board certification programs reach the right clinicians at exactly the right time.
      </p>
    </section>);
}

/* --------------------------- Service cards ----------------------------- */
const MOC_SERVICES = [
{
  num: "01",
  icon: "megaphone",
  title: "MOC Course Promotion",
  tag: "Certification course marketing",
  text: "Multi-channel MOC course promotion and certification course marketing that puts your medical board certification courses in front of physicians actively maintaining their credentials.",
  points: ["Board- and specialty-matched promotion", "Compliant email, display & social", "Always-on visibility for self-paced modules"]
},
{
  num: "02",
  icon: "calendar-check",
  title: "MOC Enrollment Campaigns",
  tag: "MOC enrollment campaigns",
  text: "Conversion-focused MOC enrollment campaigns and MOC lead generation that turn recertification interest into completed registrations before the deadline passes.",
  points: ["Deadline-driven urgency sequences", "Conversion-optimized enrollment pages", "CRM-ready, NPI-matched MOC leads"]
},
{
  num: "03",
  icon: "send",
  title: "MOC Physician Outreach",
  tag: "MOC physician outreach",
  text: "Targeted MOC physician outreach and professional certification outreach that reaches clinicians directly, with messaging tuned to their board and certification stage.",
  points: ["Board-specific messaging frameworks", "Multi-touch, compliance-reviewed flows", "Personalized by certification stage"]
},
{
  num: "04",
  icon: "crosshair",
  title: "Recruitment & Audience Targeting",
  tag: "MOC participant recruitment",
  text: "Precise MOC participant recruitment powered by medical recertification audience targeting that reaches physicians within 12 to 18 months of their recertification requirements.",
  points: ["MOC deadline intelligence", "ABMS board & specialty filters", "Practice-setting & geographic targeting"]
},
{
  num: "05",
  icon: "refresh-cw",
  title: "Physician Recertification Marketing",
  tag: "Board certification maintenance",
  text: "End-to-end physician recertification marketing for board certification maintenance and continuing certification education across the full renewal lifecycle.",
  points: ["MOC Part 2 lifelong-learning promotion", "MOC Part 4 practice-improvement activities", "Year-round renewal-cycle nurture"]
},
{
  num: "06",
  icon: "award",
  title: "Board Programs & Engagement",
  tag: "Specialty board certification programs",
  text: "Grow specialty board certification programs with sustained board-certified physician engagement that builds loyalty from one certification cycle to the next.",
  points: ["Specialty society & board partnerships", "Cohort-building for specialty programs", "Re-engagement of lapsed diplomates"]
}];

function MocServiceCards() {
  return (
    <section id="services" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Our MOC Services</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
            Six ways we grow your <em className="not-italic text-teal1">certification programs</em>
          </h2>
          <p style={{ color: "rgb(6, 30, 63)" }}>Engage any service on its own, or combine them into a single managed MOC marketing program.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOC_SERVICES.map((s, i) =>
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-7 flex flex-col lift shadow-sm hover:shadow-lg hover:border-teal2 transition relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/25">
                  <IconMoc name={s.icon} size={22} />
                </div>
                <span className="font-display font-extrabold text-3xl text-slate-200 leading-none">{s.num}</span>
              </div>
              <span className="text-[10px] font-bold text-teal1 uppercase tracking-widest block mb-2">{s.tag}</span>
              <h3 className="font-display font-extrabold text-xl text-ink mb-3 tracking-tight leading-snug">{s.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgb(6, 30, 63)" }}>{s.text}</p>
              <ul className="mt-auto space-y-2.5 pt-4 border-t border-slate-100">
                {s.points.map((p, j) =>
                <li key={j} className="flex gap-2.5 text-sm" style={{ color: "rgb(6, 30, 63)" }}>
                    <span className="text-teal1 mt-0.5 shrink-0"><IconMoc name="check" size={15} strokeWidth={2.6} /></span>{p}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>);
}

/* ----------------------------- Process band ---------------------------- */
const MOC_STEPS = [
{ num: "1", title: "Identify Renewal Windows", text: "We pinpoint physicians approaching board recertification using MOC deadline intelligence across all major ABMS boards." },
{ num: "2", title: "Build Board-Specific Audiences", text: "We segment NPI-verified physicians by board, specialty, and certification stage from a HIPAA-compliant database." },
{ num: "3", title: "Launch Timed Outreach", text: "Urgency-based, multi-channel campaigns go live, tuned to each board's recertification cycle and requirements." },
{ num: "4", title: "Track Completions & ROI", text: "We attribute every enrollment and completion back to its campaign, with transparent channel-level reporting." }];

function MocProcess() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">How It Works</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
          Your MOC marketing program in <em className="not-italic text-teal1">four steps</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {MOC_STEPS.map((step, idx) =>
        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-7 relative lift shadow-sm hover:shadow-lg hover:border-teal2 transition group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center font-display font-extrabold text-lg text-white mb-4 shadow-lg shadow-teal1/30">
              {step.num}
            </div>
            <h3 className="font-display font-bold text-base text-ink mb-2 leading-snug">{step.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{step.text}</p>
            {idx < MOC_STEPS.length - 1 &&
            <div className="hidden lg:block absolute top-11 -right-4 text-slate-200 z-10">
                <IconMoc name="chevron-right" size={20} />
              </div>
            }
          </div>
        )}
      </div>
    </section>);
}

/* ------------------------------- CTA band ------------------------------ */
function MocCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" /> Limited Pilot Slots, Q3 2026
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight text-balance">
              Reach physicians before their deadline
            </h2>
            <p className="text-white/70 leading-relaxed mb-7 max-w-xl">
              In a 30-minute demo, we'll show you the board-certified physicians approaching recertification inside your specialty, and outline an MOC marketing program tailored to your certification programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
                Book a Quick Demo <IconMoc name="arrow-right" size={18} />
              </a>
              <a href="services/cme-marketing.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
                All CME Services
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-4">What you get</div>
              <ul className="space-y-3">
                {["A scan of physicians nearing recertification", "A sample MOC enrollment campaign plan", "Board-level deadline benchmarks"].map((b, i) =>
                <li key={i} className="flex gap-2.5 text-white/85 text-sm leading-relaxed">
                    <span className="text-gold mt-0.5 shrink-0"><IconMoc name="check-circle-2" size={16} /></span>{b}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function MocPage() {
  useEffectMoc(() => {
    document.title = "MOC Marketing: Maintenance of Certification Campaigns | CMEIntent";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <NavMoc />
      <MocHero />
      <MocIntro />
      <MocServiceCards />
      <MocProcess />
      <MocCTA />
      <FooterMoc />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<MocPage />);
