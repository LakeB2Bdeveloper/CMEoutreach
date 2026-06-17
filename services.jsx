/* ============================================================
   Services — CME Marketing Services pillar page
   Reuses Nav, Footer, Icon from solutions.jsx (exported to window).
   ============================================================ */
const { useState, useEffect, useRef } = React;
const { Nav, Footer, Icon } = window;

/* ------------------------------- Hero ---------------------------------- */
function ServicesHero() {
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
            <span className="text-white/80">Services</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
            CME Marketing Services
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.2rem] text-white leading-[1.1] tracking-tight mb-6 text-balance">
            Continuing Medical Education Marketing <em className="not-italic text-teal3">Services</em>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8 leading-relaxed">
            End-to-end CME course promotion that fills your programs. From accredited CME marketing and online CME promotion to participant recruitment and learner engagement, CMEIntent runs the campaigns that turn intent-active physicians into enrolled, engaged learners.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2" style={{ fontSize: "17px" }}>
              Book a Quick Demo <Icon name="arrow-right" size={18} />
            </a>
            <a href="#services" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition" style={{ fontSize: "17px" }}>
              Explore Services
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5">
            {["Accredited-provider focused", "HIPAA compliant", "Performance reported"].map((b, i) =>
            <span key={i} className="inline-flex items-center gap-2 text-white/65 text-sm">
                <Icon name="check-circle-2" size={15} className="text-teal3" /> {b}
              </span>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
            <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-5">Built to move the metrics that matter</div>
            <div className="grid grid-cols-2 gap-5">
              {[
              { val: "3.2×", label: "Avg. enrollment lift" },
              { val: "58%", label: "CME email open rate" },
              { val: "−40%", label: "No-show reduction" },
              { val: "2.1M+", label: "Verified clinicians" }].
              map((s, i) =>
              <div key={i} className="border border-white/10 rounded-xl p-4 bg-white/[0.02]">
                  <div className="font-display font-extrabold text-3xl text-white leading-none mb-1.5">{s.val}</div>
                  <div className="text-white/55 text-xs leading-snug">{s.label}</div>
                </div>
              )}
            </div>
            <p className="text-white/40 text-[11px] mt-5 leading-relaxed">Aggregate results across 200+ CME programs, 2024–2025.</p>
          </div>
        </div>
      </div>
    </header>);
}

/* ----------------------------- Intro band ------------------------------ */
function ServicesIntro() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-3">A full-service CME marketing partner</span>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-5 tracking-tight text-balance">
        Healthcare continuing education marketing, run end to end
      </h2>
      <p className="text-lg leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>
        Accredited CME is only as effective as the audience it reaches. CMEIntent pairs verified healthcare intent data with done-for-you campaign execution, so your team can focus on the education while we fill the seats. Every service below is a stand-alone engagement or a piece of a connected, fully managed program.
      </p>
    </section>);
}

/* --------------------------- Service cards ----------------------------- */
const SERVICES = [
{
  num: "01",
  icon: "megaphone",
  title: "CME Course Promotion",
  tag: "Online CME promotion",
  text: "Multi-channel CME course promotion that puts your activities in front of the right clinicians. We build online CME promotion and broader healthcare continuing education marketing campaigns around verified specialty, credential, and intent data.",
  points: ["Specialty-matched audience building", "Compliant email, display & social", "Always-on promotion for enduring content"]
},
{
  num: "02",
  icon: "calendar-check",
  title: "Event, Webinar & Conference Marketing",
  tag: "CME event marketing",
  text: "Fill every format. Our CME event marketing, CME webinar marketing, and CME conference marketing programs drive registrations and reduce no-shows with timed, multi-touch outreach sequences.",
  points: ["Pre-event warm-up & reminder flows", "Live and virtual CME registration drives", "6-month conference awareness campaigns"]
},
{
  num: "03",
  icon: "user-plus",
  title: "Participant Recruitment & Attendee Acquisition",
  tag: "CME participant recruitment",
  text: "Targeted CME participant recruitment and CME attendee acquisition that reaches clinicians actively researching your therapeutic area, not a generic purchased list.",
  points: ["Intent-triggered prospect identification", "NPI-verified, CRM-ready contacts", "Geographic & health-system targeting"]
},
{
  num: "04",
  icon: "graduation-cap",
  title: "Course Enrollment Acceleration",
  tag: "Physician CME enrollment",
  text: "Turn interest into completed registrations. We optimize CME course enrollment and physician CME enrollment with conversion-focused landing pages, retargeting, and urgency-based messaging.",
  points: ["Conversion-optimized enrollment pages", "Drop-off retargeting sequences", "MOC-deadline urgency campaigns"]
},
{
  num: "05",
  icon: "heart-handshake",
  title: "Learner Engagement & Retention",
  tag: "CME learner engagement",
  text: "Keep clinicians coming back. Our CME learner engagement programs nurture participants from one activity to the next, growing lifetime learning value across your portfolio.",
  points: ["Post-activity nurture journeys", "Personalized next-course recommendations", "Re-engagement of lapsed learners"]
},
{
  num: "06",
  icon: "settings-2",
  title: "Campaign Management & Outreach Solutions",
  tag: "CME campaign management",
  text: "A fully managed engine behind it all. Our CME campaign management and CME outreach solutions deliver accredited CME marketing with the compliance guardrails accredited providers require.",
  points: ["Dedicated campaign strategist", "Compliance-reviewed creative & data", "Channel-level attribution reporting"]
}];

function ServiceCards() {
  return (
    <section id="services" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Our Services</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
            Six ways we grow your <em className="not-italic text-teal1">CME programs</em>
          </h2>
          <p style={{ color: "rgb(6, 30, 63)" }}>Engage any service on its own, or combine them into a single managed CME marketing program.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) =>
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-7 flex flex-col lift shadow-sm hover:shadow-lg hover:border-teal2 transition relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/25">
                  <Icon name={s.icon} size={22} />
                </div>
                <span className="font-display font-extrabold text-3xl text-slate-200 leading-none">{s.num}</span>
              </div>
              <span className="text-[10px] font-bold text-teal1 uppercase tracking-widest block mb-2">{s.tag}</span>
              <h3 className="font-display font-extrabold text-xl text-ink mb-3 tracking-tight leading-snug">{s.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgb(6, 30, 63)" }}>{s.text}</p>
              <ul className="mt-auto space-y-2.5 pt-4 border-t border-slate-100">
                {s.points.map((p, j) =>
                <li key={j} className="flex gap-2.5 text-sm" style={{ color: "rgb(6, 30, 63)" }}>
                    <span className="text-teal1 mt-0.5 shrink-0"><Icon name="check" size={15} strokeWidth={2.6} /></span>{p}
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
const SERVICE_STEPS = [
{ num: "1", title: "Scope & Strategy", text: "We map your CME calendar, target specialties, and goals, then design a campaign plan and compliance guardrails before anything launches." },
{ num: "2", title: "Audience Build", text: "We assemble NPI-verified, intent-active audiences for each activity from a HIPAA-compliant medical professional database." },
{ num: "3", title: "Multi-Channel Launch", text: "Email, display, and ABM outreach goes live with timed sequences tuned to each CME format and enrollment window." },
{ num: "4", title: "Optimize & Report", text: "We track enrollment, engagement, and completion, then optimize spend and share transparent channel-level reporting." }];

function ServiceProcess() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">How It Works</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
          Your CME marketing program in <em className="not-italic text-teal1">four steps</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {SERVICE_STEPS.map((step, idx) =>
        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-7 relative lift shadow-sm hover:shadow-lg hover:border-teal2 transition group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center font-display font-extrabold text-lg text-white mb-4 shadow-lg shadow-teal1/30">
              {step.num}
            </div>
            <h3 className="font-display font-bold text-base text-ink mb-2 leading-snug">{step.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{step.text}</p>
            {idx < SERVICE_STEPS.length - 1 &&
            <div className="hidden lg:block absolute top-11 -right-4 text-slate-200 z-10">
                <Icon name="chevron-right" size={20} />
              </div>
            }
          </div>
        )}
      </div>
    </section>);
}

/* ------------------------------- CTA band ------------------------------ */
function ServicesCTA() {
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
              Let's fill your next CME activity
            </h2>
            <p className="text-white/70 leading-relaxed mb-7 max-w-xl">
              In a 30-minute demo, we'll show you the intent-active clinicians inside your therapeutic area and outline a CME marketing program tailored to your accredited activities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
                Book a Quick Demo <Icon name="arrow-right" size={18} />
              </a>
              <a href="contact.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
                Talk to Our Team
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-4">What you get</div>
              <ul className="space-y-3">
                {["A free audience scan of your specialty", "A sample CME campaign plan", "Benchmarks for your activity formats"].map((b, i) =>
                <li key={i} className="flex gap-2.5 text-white/85 text-sm leading-relaxed">
                    <span className="text-gold mt-0.5 shrink-0"><Icon name="check-circle-2" size={16} /></span>{b}
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
function ServicesPage() {
  useEffect(() => {
    document.title = "CME Marketing Services: Continuing Medical Education Marketing | CMEIntent";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <ServicesHero />
      <ServicesIntro />
      <ServiceCards />
      <ServiceProcess />
      <ServicesCTA />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<ServicesPage />);
