/* ============================================================
   CME Lead Generation Services — service sub-page
   Reuses Nav, Footer, Icon from solutions.jsx (exported to window).
   ============================================================ */
const { useState: useStateLead, useEffect: useEffectLead } = React;
const { Nav: NavLead, Footer: FooterLead, Icon: IconLead } = window;

/* ------------------------------- Hero ---------------------------------- */
function LeadHero() {
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
            <a href="cme-marketing.html" className="hover:text-teal3 transition">Services</a>
            <span>/</span>
            <span className="text-white/80">CME Lead Generation</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
            CME Lead Generation Services
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.2rem] text-white leading-[1.1] tracking-tight mb-6 text-balance">
            CME Lead Generation <em className="not-italic text-teal3">Services</em>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8 leading-relaxed">
            Healthcare lead generation built for medical education. We turn verified, intent-active clinicians into healthcare marketing leads, then qualify and nurture them into enrolled learners for your CME programs.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2" style={{ fontSize: "17px" }}>
              Book a Quick Demo <IconLead name="arrow-right" size={18} />
            </a>
            <a href="#services" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition" style={{ fontSize: "17px" }}>
              Explore Services
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5">
            {["NPI-verified leads", "MQL & SQL scoring", "CRM-ready handoff"].map((b, i) =>
            <span key={i} className="inline-flex items-center gap-2 text-white/65 text-sm">
                <IconLead name="check-circle-2" size={15} className="text-teal3" /> {b}
              </span>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
            <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-5">A pipeline built on real intent</div>
            <div className="grid grid-cols-2 gap-5">
              {[
              { val: "2.4×", label: "Qualified lead growth" },
              { val: "41%", label: "MQL to SQL conversion" },
              { val: "58%", label: "CME email open rate" },
              { val: "2.1M+", label: "Verified HCPs" }].
              map((s, i) =>
              <div key={i} className="border border-white/10 rounded-xl p-4 bg-white/[0.02]">
                  <div className="font-display font-extrabold text-3xl text-white leading-none mb-1.5">{s.val}</div>
                  <div className="text-white/55 text-xs leading-snug">{s.label}</div>
                </div>
              )}
            </div>
            <p className="text-white/40 text-[11px] mt-5 leading-relaxed">Aggregate results across 200+ CME lead generation programs, 2024–2025.</p>
          </div>
        </div>
      </div>
    </header>);
}

/* ----------------------------- Intro band ------------------------------ */
function LeadIntro() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-3">More than a list, a qualified pipeline</span>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-5 tracking-tight text-balance">
        Healthcare lead generation, engineered for enrollment
      </h2>
      <p className="text-lg leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>
        Most healthcare marketing leads never convert because they were never the right clinicians to begin with. CMEIntent pairs verified physician and clinician data with intent scoring and managed outreach, so every lead we generate is a healthcare qualified lead with a real reason to enroll, handed to your team CRM-ready.
      </p>
    </section>);
}

/* --------------------------- Service cards ----------------------------- */
const LEAD_SERVICES = [
{
  num: "01",
  icon: "graduation-cap",
  title: "CME & Provider Lead Generation",
  tag: "CME lead generation services",
  text: "End-to-end CME lead generation services and medical education lead generation, purpose-built as lead generation for CME providers across every activity format.",
  points: ["Activity-specific lead campaigns", "Accredited-provider compliance built in", "Enrollment-focused landing pages"]
},
{
  num: "02",
  icon: "stethoscope",
  title: "Physician & Doctor Lead Generation",
  tag: "Physician lead generation",
  text: "Targeted physician lead generation and doctor lead generation that reaches the exact specialties your program is accredited for, using NPI-verified data.",
  points: ["Specialty- and credential-matched targeting", "NPI-verified physician contacts", "Geographic and health-system filters"]
},
{
  num: "03",
  icon: "filter",
  title: "Qualified Lead Pipelines",
  tag: "Healthcare qualified leads",
  text: "We score and route healthcare qualified leads, separating healthcare marketing qualified leads (MQLs) from healthcare sales qualified leads (SQLs) so your team works the right ones first.",
  points: ["Intent-based lead scoring", "MQL and SQL stage definitions", "Automated routing to your CRM"]
},
{
  num: "04",
  icon: "trending-up",
  title: "HCP Demand Generation",
  tag: "HCP demand generation",
  text: "Full-funnel HCP demand generation and healthcare lead generation that builds awareness and fills the top of your funnel with healthcare marketing leads.",
  points: ["Multi-channel awareness campaigns", "Content and webinar lead capture", "Always-on top-of-funnel programs"]
},
{
  num: "05",
  icon: "radar",
  title: "Audience Acquisition & Outbound",
  tag: "Medical audience acquisition",
  text: "Net-new medical audience acquisition and healthcare outbound lead generation that expands your reachable market with verified, compliant contacts.",
  points: ["Net-new clinician acquisition", "Compliant outbound sequences", "Continuous data enrichment"]
},
{
  num: "06",
  icon: "heart-handshake",
  title: "Engagement Campaigns",
  tag: "Physician engagement campaigns",
  text: "Physician engagement campaigns and clinicians engagement campaigns that nurture leads from first touch to enrollment and keep them coming back.",
  points: ["Personalized nurture journeys", "Re-engagement of dormant leads", "Lifetime-value growth across programs"]
}];

function LeadServiceCards() {
  return (
    <section id="services" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Our Lead Gen Services</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
            Six ways we fill your <em className="not-italic text-teal1">enrollment pipeline</em>
          </h2>
          <p style={{ color: "rgb(6, 30, 63)" }}>Engage any service on its own, or combine them into a single managed lead generation program.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEAD_SERVICES.map((s, i) =>
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-7 flex flex-col lift shadow-sm hover:shadow-lg hover:border-teal2 transition relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/25">
                  <IconLead name={s.icon} size={22} />
                </div>
                <span className="font-display font-extrabold text-3xl text-slate-200 leading-none">{s.num}</span>
              </div>
              <span className="text-[10px] font-bold text-teal1 uppercase tracking-widest block mb-2">{s.tag}</span>
              <h3 className="font-display font-extrabold text-xl text-ink mb-3 tracking-tight leading-snug">{s.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgb(6, 30, 63)" }}>{s.text}</p>
              <ul className="mt-auto space-y-2.5 pt-4 border-t border-slate-100">
                {s.points.map((p, j) =>
                <li key={j} className="flex gap-2.5 text-sm" style={{ color: "rgb(6, 30, 63)" }}>
                    <span className="text-teal1 mt-0.5 shrink-0"><IconLead name="check" size={15} strokeWidth={2.6} /></span>{p}
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
const LEAD_STEPS = [
{ num: "1", title: "Define Your Ideal Audience", text: "We map the specialties, credentials, and regions your CME programs are accredited for, and set the criteria that make a lead truly qualified." },
{ num: "2", title: "Build the Target Audience", text: "We assemble NPI-verified, intent-active prospects from a HIPAA-compliant database, scoped to the clinicians most likely to enroll." },
{ num: "3", title: "Generate & Nurture Leads", text: "Multi-channel outbound and engagement campaigns capture leads and nurture them with timed, personalized sequences." },
{ num: "4", title: "Qualify & Hand Off", text: "We score each lead, separate MQLs from SQLs, and deliver them CRM-ready with full attribution back to source." }];

function LeadProcess() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">How It Works</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
          Your lead generation program in <em className="not-italic text-teal1">four steps</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {LEAD_STEPS.map((step, idx) =>
        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-7 relative lift shadow-sm hover:shadow-lg hover:border-teal2 transition group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center font-display font-extrabold text-lg text-white mb-4 shadow-lg shadow-teal1/30">
              {step.num}
            </div>
            <h3 className="font-display font-bold text-base text-ink mb-2 leading-snug">{step.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{step.text}</p>
            {idx < LEAD_STEPS.length - 1 &&
            <div className="hidden lg:block absolute top-11 -right-4 text-slate-200 z-10">
                <IconLead name="chevron-right" size={20} />
              </div>
            }
          </div>
        )}
      </div>
    </section>);
}

/* ------------------------------- CTA band ------------------------------ */
function LeadCTA() {
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
              Let's build your enrollment pipeline
            </h2>
            <p className="text-white/70 leading-relaxed mb-7 max-w-xl">
              In a 30-minute demo, we'll show you the intent-active clinicians inside your therapeutic area and outline a CME lead generation program tailored to your enrollment goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
                Book a Quick Demo <IconLead name="arrow-right" size={18} />
              </a>
              <a href="cme-marketing.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
                All CME Services
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-4">What you get</div>
              <ul className="space-y-3">
                {["A free audience scan of your specialty", "A sample lead generation plan", "Benchmarks for qualified-lead conversion"].map((b, i) =>
                <li key={i} className="flex gap-2.5 text-white/85 text-sm leading-relaxed">
                    <span className="text-gold mt-0.5 shrink-0"><IconLead name="check-circle-2" size={16} /></span>{b}
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
function LeadGenPage() {
  useEffectLead(() => {
    document.title = "CME Lead Generation Services: Healthcare Marketing Leads | CMEIntent";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <NavLead />
      <LeadHero />
      <LeadIntro />
      <LeadServiceCards />
      <LeadProcess />
      <LeadCTA />
      <FooterLead />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<LeadGenPage />);
