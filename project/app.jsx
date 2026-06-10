const { useState, useEffect, useRef } = React;

/* ----------------------------- Lucide icon ----------------------------- */
function Icon({ name, size = 18, className = "", strokeWidth = 2 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      // replace placeholder <i> with svg
      window.lucide.createIcons({ nameAttr: "data-lucide" });
    }
  });
  return (
    <i
      ref={ref}
      data-lucide={name}
      className={className}
      style={{ width: size, height: size, display: "inline-block", verticalAlign: "middle", strokeWidth }}>
    </i>);

}

/* ------------------------------- Data ---------------------------------- */
const painPoints = [
{ icon: "alert-triangle", iconColor: "text-amber-500", title: "Declining CME Enrollment & Attendance", text: "Seats go unfilled in live and virtual CME, grand rounds, and RSS programs because outreach relies on outdated lists and untargeted blasts." },
{ icon: "trending-down", iconColor: "text-teal1", blue: true, title: "Reducing Lead-to-Enrollment Ratio", text: "Plenty of leads come in, but enrollments have slipped to around 1%. Without intent-driven targeting and timely nurture, qualified clinicians never convert into registered, credit-earning learners." },
{ icon: "mail", iconColor: "text-teal1", title: "Healthcare Email Deliverability Failures", text: "Spam filters, outdated NPI records, and non-compliant data kill your sender reputation. Healthcare email best practices demand verified data." },
{ icon: "bar-chart-3", iconColor: "text-teal1", title: "Inability to Prove CME Marketing ROI", text: "Accreditation teams demand evidence-based reporting on learning outcomes. Without intent-driven analytics, you're guessing at success." },
{ icon: "shield", iconColor: "text-amber-500", title: "Healthcare Marketing Compliance Risk", text: "HIPAA, CAN-SPAM, and ACCME independence standards create a minefield. One non-compliant campaign can jeopardize your status." },
{ icon: "eye", iconColor: "text-teal1", title: "No Visibility Into HCP Intent Signals", text: "Without healthcare intent data, you can't identify which physicians are actively researching board certification renewal or MOC requirements." }];


const steps = [
{ num: "1", title: "Capture Healthcare Intent Data", text: "Our AI engine monitors 5,000+ healthcare signals including ACCME content searches, board certification lookups, and MOC portal activity." },
{ num: "2", title: "Build Your CME Audience Segment", text: "Layer NPI-verified physician data with specialty, geography, board status, practice setting, and interprofessional role filters." },
{ num: "3", title: "Activate Multi-Channel Outreach", text: "Deploy HIPAA-compliant CME email marketing, physician webinar marketing, healthcare ABM strategies, and programmatic display." },
{ num: "4", title: "Measure Learning Outcomes & ROI", text: "Close the loop with attribution reporting that ties CME attendee acquisition to actual learning outcomes and completions." }];


const features = [
{ icon: "zap", title: "Real-Time Healthcare Intent Data", text: "Identify physicians actively researching topics relevant to your CME program. Our intent engine maps behavioral signals seamlessly." },
{ icon: "users", title: "NPI-Verified Physician Database", text: "Access 2.1M+ verified clinicians segmented by specialty, NPI, practice type, board certification status, and MOC program participation." },
{ icon: "mail", title: "CME Email Marketing Engine", text: "Send HIPAA-compliant CME email marketing campaigns with 94%+ deliverability. Built-in suppression management and clinical optimization." },
{ icon: "target", title: "CME ABM & Account Targeting", text: "Run healthcare ABM strategies targeting entire health systems, academic medical centers, or specialty group practices." }];


const tabs = [
{
  btnLabel: "Live & Virtual CME",
  title: "Drive Enrollment for Live & Virtual CME Events",
  desc: "Physician webinar marketing strategies that work require more than a generic email blast. MedReachIQ identifies clinicians with active intent to attend CME aligned with their specialty.",
  bullets: [
  "Healthcare webinar attendance strategies powered by real-time intent signals from 2.1M+ verified physicians",
  "Physician engagement strategies using personalized, specialty-specific messaging frameworks",
  "Multi-touch outreach: CME email, programmatic display, and healthcare ABM for high-value accounts",
  "Automated pre-event reminder sequences proven to reduce no-show rates by 40%",
  "Post-event pathways converting attendees into enduring materials participants"],

  metrics: [
  { val: "3.2×", label: "Enrollment Lift vs. Control" },
  { val: "94%", label: "Email Deliverability" },
  { val: "58%", label: "Open Rate (CME Email)" },
  { val: "−40%", label: "No-Show Rate Reduction" }],

  note: "Based on aggregate data from 200+ CME programs, 2024–2025."
},
{
  btnLabel: "Enduring Materials",
  title: "Scale Completions for Enduring CME Materials",
  desc: "Enduring materials represent your highest-ROI CME asset, available 24/7 and scalable to any audience size. MedReachIQ keeps your enduring materials discoverable and converting year-round.",
  bullets: [
  "Intent-triggered outreach: automatically reach physicians researching your content's therapeutic area",
  "Retargeting sequences re-engaging physicians who viewed but didn't complete your educational activity",
  "Specialty-specific promotion tracks for AMA PRA Category 1 Credit™ enduring content",
  "Learning outcomes tracking tied to completion, knowledge assessment, and competence data",
  "SEO-informed physician targeting based on search behavior and content consumption patterns"],

  metrics: [
  { val: "4.1×", label: "More Completions YoY" },
  { val: "72%", label: "Completion Rate" },
  { val: "18mo", label: "Avg. Content Lifespan" },
  { val: "$12", label: "Cost per Completion" }],

  note: "Based on 150+ enduring materials programs, 2024–2025."
},
{
  btnLabel: "Grand Rounds & RSS",
  title: "Fill Your Grand Rounds & Regularly Scheduled Series",
  desc: "Grand rounds and RSS programs are the backbone of institutional CME, yet reaching beyond your immediate clinical staff requires sophisticated outreach to external physicians.",
  bullets: [
  "Geographic and health system targeting to reach physicians in your service area",
  "Recurring calendar invitations and reminder sequences tuned to RSS scheduling patterns",
  "Interprofessional education audience segments spanning physicians, NPs, PAs, and pharmacists",
  "Topic-aligned intent targeting: promote each grand rounds session to clinicians researching its subject",
  "Hybrid attendance tools bridging in-person and virtual CME for maximum reach"],

  metrics: [
  { val: "2.8×", label: "External Attendance Growth" },
  { val: "65%", label: "Session Return Rate" },
  { val: "45%", label: "Interprofessional Mix" },
  { val: "89%", label: "Learner Satisfaction" }],

  note: "Aggregated across 80+ institutional grand rounds programs, 2024–2025."
},
{
  btnLabel: "MOC Programs",
  title: "Connect Clinicians to MOC & Board Certification Resources",
  desc: "Maintenance of Certification programs represent the highest-urgency CME need a physician will have. MedReachIQ identifies clinicians approaching their deadlines.",
  bullets: [
  "MOC deadline intelligence: target physicians within 12–18 months of board recertification requirements",
  "Board-specific targeting across all major ABMS member boards and specialty societies",
  "MOC Part 2 (lifelong learning) and Part 4 (practice improvement) activity promotion",
  "Urgency-based messaging sequences that drive action as certification windows approach",
  "HIPAA-compliant data linking CME completions to MOC point tracking systems"],

  metrics: [
  { val: "5.7×", label: "Conversion vs. Generic List" },
  { val: "91%", label: "MOC Deadline Accuracy" },
  { val: "38%", label: "Email Click-Through Rate" },
  { val: "22%", label: "Same-Day Registration" }],

  note: "Aggregated from MOC-focused CME programs across 12 specialty boards, 2024–2025."
},
{
  btnLabel: "Medical Conferences",
  title: "Medical Conference Promotion & CME Lead Generation",
  desc: "Annual conferences require a different playbook: months of awareness building, targeted CME lead generation, and a last-mile conversion push.",
  bullets: [
  "6-month audience warm-up sequences building awareness before registration opens",
  "Early bird targeting to physicians with highest intent-to-attend signals",
  "Healthcare ABM strategies for group registrations from health systems and large practices",
  "CME lead generation pipelines with CRM-ready, NPI-matched contact data",
  "Post-conference enduring materials promotion to extend educational impact"],

  metrics: [
  { val: "+47%", label: "Registration vs. Prior Year" },
  { val: "−38%", label: "Cost per Registrant" },
  { val: "6mo", label: "Optimal Lead Time" },
  { val: "3.1×", label: "Healthcare Marketing ROI" }],

  note: "Aggregated from 60+ annual CME conference campaigns, 2024–2025."
}];


const intelCards = [
{ icon: "microscope", title: "How Healthcare Intent Data Works", text: "We aggregate 5,000+ behavioral signals from clinical platforms and CME portals to score physician intent by topic and urgency." },
{ icon: "hospital", title: "Top Healthcare Audience Targeting Strategies", text: "Layer NPI data, prescribing patterns, practice affiliation, board certification timelines, and real-time intent to build custom groups." },
{ icon: "smartphone", title: "How to Reach Healthcare Professionals", text: "Our verified professional email network, point-of-care display, and EHR-adjacent touchpoints ensure your CME message hits where they work." },
{ icon: "trending-up", title: "Physician Marketing Trends 2025–2026", text: "AI-powered segmentation, MOC urgency targeting, and mobile-first CME promotion are defining the next era of health education marketing." },
{ icon: "crosshair", title: "Targeted Healthcare ABM Strategies for CME", text: "Account-based marketing built for health systems: target every eligible physician and APP within a hospital system concurrently." },
{ icon: "circle-dollar-sign", title: "Healthcare Marketing ROI Attribution", text: "Multi-touch attribution modeling connects every CME enrollment and completion back to its originating campaign asset." }];


const complianceItems = [
{ icon: "lock", title: "HIPAA Compliant Marketing Data", text: "All physician data is sourced, processed, and transmitted in full compliance with HIPAA Privacy and Security Rules. We maintain Business Associate Agreements." },
{ icon: "mail-check", title: "CAN-SPAM & Email Compliance", text: "Best practices enforced at every layer: verified opt-in data, automatic suppression management, and proper sender authentication (SPF/DKIM)." },
{ icon: "shield-check", title: "SOC 2 Type II Certified Infrastructure", text: "Our platform is SOC 2 Type II audited, ensuring your audience data and campaign analytics are protected by enterprise security standards." }];


const testimonials = [
{ initials: "SM", name: "Sarah M.", role: "CME Director, Academic Medical Center", quote: "MedReachIQ completely changed how we think about physician webinar marketing. Our virtual CME enrollment tripled in 90 days using their intent-based targeting." },
{ initials: "RJ", name: "Robert J.", role: "VP Medical Education, National Medical Society", quote: "The HIPAA-compliant data quality and email deliverability are genuinely best-in-class. We moved from an unoptimized deliverability rate to a reliable 94% overnight." },
{ initials: "KL", name: "Karen L.", role: "Accreditation Manager, Specialty Board CME Provider", quote: "As an accreditation team we were skeptical about any vendor claiming ACCME alignment. MedReachIQ's approach genuinely supports independence standards." },
{ initials: "DP", name: "David P.", role: "Director of CME, Regional Health System", quote: "The MOC deadline intelligence alone justified the investment. We're now reaching cardiologists and oncologists exactly when they're searching for board recertification activities, and our same-day registration rate has jumped past 20%." }];


/* ------------------------------ Sections ------------------------------ */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white font-black text-lg font-display">M</div>
          <span className="font-display font-extrabold text-xl text-white tracking-tight">
            MedReach<span className="text-teal3">IQ</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-white/80 font-medium text-sm">
          <li className="relative group">
            <a href="#our-solutions" className="hover:text-teal3 transition inline-flex items-center gap-1">
              Solutions <Icon name="chevron-down" size={14} />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-ink border border-white/10 rounded-xl shadow-2xl shadow-black/50 w-72 p-2">
                {[
                { href: "solution-audience-intelligence.html", num: "01", title: "CME Audience Intelligence", kicker: "Core Platform" },
                { href: "solution-cme-targeting.html", num: "02", title: "HCP Outreach", kicker: "Outreach" },
                { href: "solution-multichannel-marketing.html", num: "03", title: "Alumni Growth Engine", kicker: "Alumni" },
                { href: "solution-nursing.html", num: "04", title: "Nurse Audience Intelligence", kicker: "Nursing" }].
                map((s, i) =>
                <a key={i} href={s.href} className="flex gap-3 items-start p-3 rounded-lg hover:bg-white/5 transition">
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
                <a href="use-cases.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Use Cases</a>
                <a href="personas.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Personas &amp; Intent</a>
                <a href="how-it-works.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">How MedReachIQ Works</a>
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
                <a href="#" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">FAQs</a>
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
          <a href="#demo" className="px-4 py-2 bg-gradient-to-br from-teal1 to-teal2 shadow-md hover:shadow-lg text-white text-sm font-semibold rounded-md transition lift">Request Demo</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>

      {open && <div className="md:hidden bg-ink border-b border-white/10 px-6 py-4 flex flex-col gap-3">
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-1">Solutions</div>
          <a href="solution-audience-intelligence.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">01 · CME Audience Intelligence</a>
          <a href="solution-cme-targeting.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">02 · HCP Outreach</a>
          <a href="solution-multichannel-marketing.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">03 · Alumni Growth Engine</a>
          <a href="solution-nursing.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">04 · Nurse Audience Intelligence</a>
          <div className="h-px bg-white/10 my-1" />
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-1">Process</div>
          <a href="use-cases.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Use Cases</a>
          <a href="personas.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Personas &amp; Intent</a>
          <a href="how-it-works.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">How MedReachIQ Works</a>
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-2">Resources</div>
          <a href="blog.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Blog</a>
          <a href="case-studies.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Case Studies</a>
          <a href="whitepapers.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Whitepapers</a>
          <a href="#" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">FAQs</a>
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-2">Company</div>
          <a href="#" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">About</a>
          <a href="contact.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Contact</a>
          <div className="h-px bg-white/10 my-1" />
          <a href="#demo" onClick={() => setOpen(false)} className="w-full text-center py-2.5 bg-gradient-to-br from-teal1 to-teal2 text-white rounded-md font-semibold text-sm">Request Demo</a>
        </div>
      }
    </nav>);

}

function Dashboard() {
  // Each metric carries the value, how many decimals to show, and its unit suffix.
  const metricLabels = ["Email Deliverability", "Avg. Enrollment Lift", "Verified Clinicians", "NPI Match Accuracy"];
  const barLabels = [
  { l: "Physician Targeting Match", fill: "from-amber-400 to-yellow-300" },
  { l: "MOC Intent Signal Strength", fill: "from-pink-500 to-fuchsia-400" },
  { l: "Board Cert. Renewal Readiness", fill: "from-green-500 to-lime-400" }];


  // One dataset per audience filter — picking a chip morphs the dashboard to these numbers.
  const DATA = {
    "All Specialties": {
      records: "2,140,000",
      metrics: [{ v: 94, d: 0, s: "%" }, { v: 3.2, d: 1, s: "×" }, { v: 2.1, d: 1, s: "M+" }, { v: 97, d: 0, s: "%" }],
      bars: [92, 87, 78] },

    "Cardiology": {
      records: "412,300",
      metrics: [{ v: 96, d: 0, s: "%" }, { v: 3.6, d: 1, s: "×" }, { v: 412, d: 0, s: "K" }, { v: 98, d: 0, s: "%" }],
      bars: [95, 91, 83] },

    "Dental": {
      records: "318,500",
      metrics: [{ v: 92, d: 0, s: "%" }, { v: 3.1, d: 1, s: "×" }, { v: 319, d: 0, s: "K" }, { v: 96, d: 0, s: "%" }],
      bars: [89, 85, 76] },

    "Primary Care": {
      records: "1,380,000",
      metrics: [{ v: 93, d: 0, s: "%" }, { v: 3.4, d: 1, s: "×" }, { v: 1.4, d: 1, s: "M+" }, { v: 97, d: 0, s: "%" }],
      bars: [90, 86, 80] } };


  const filters = Object.keys(DATA);
  const [active, setActive] = useState("All Specialties");
  const [vals, setVals] = useState(() => DATA["All Specialties"].metrics.map((m) => m.v));
  const [widths, setWidths] = useState(() => DATA["All Specialties"].bars.map((b) => b));
  const [running, setRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const rafRef = useRef(null);
  const valsRef = useRef(vals);
  const widthsRef = useRef(widths);

  // Tween the displayed numbers/bars from wherever they are now to a new target set.
  const animateTo = (targetMetrics, targetBars, fromZero) => {
    cancelAnimationFrame(rafRef.current);
    const startV = fromZero ? targetMetrics.map(() => 0) : valsRef.current.slice();
    const startW = fromZero ? targetBars.map(() => 0) : widthsRef.current.slice();
    if (fromZero) {valsRef.current = startV;widthsRef.current = startW;setVals(startV);setWidths(startW);}
    const duration = 1200;
    const start = performance.now();
    setRunning(true);
    setHasRun(true);
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      const nv = targetMetrics.map((m, i) => startV[i] + (m.v - startV[i]) * e);
      const nw = targetBars.map((b, i) => startW[i] + (b - startW[i]) * e);
      valsRef.current = nv;widthsRef.current = nw;
      setVals(nv);setWidths(nw);
      if (p < 1) {rafRef.current = requestAnimationFrame(tick);} else
      {setRunning(false);}
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const selectFilter = (f) => {
    if (running || f === active) return;
    setActive(f);
    animateTo(DATA[f].metrics, DATA[f].bars, false);
  };

  const run = () => {
    if (running) return;
    animateTo(DATA[active].metrics, DATA[active].bars, true);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const ds = DATA[active];

  return (
    <div className="hidden lg:block bg-gradient-to-br from-teal1/25 via-teal2/10 to-ink/30 border border-teal3/30 rounded-2xl p-7 backdrop-blur-xl shadow-2xl shadow-teal1/20">
      <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
        <span className="text-white/60 text-xs font-semibold ml-1.5 tracking-wide">CME Audience Intelligence Dashboard</span>
        <button
          onClick={run}
          disabled={running}
          className={`ml-auto inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md transition ${
          running ?
          "bg-teal1/20 text-teal3 cursor-default" :
          "bg-teal3 text-ink hover:brightness-110 lift"}`
          }>
          <Icon name={running ? "loader" : hasRun ? "rotate-cw" : "refresh-cw"} size={12} className={running ? "spin" : ""} />
          {running ? "Refreshing" : "Refresh"}
        </button>
      </div>

      {/* Audience filter — picking a specialty re-queries the dashboard live */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {filters.map((f) =>
        <button
          key={f}
          onClick={() => selectFilter(f)}
          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition ${
          active === f ?
          "bg-teal3 text-ink border-teal3" :
          "bg-white/5 text-white/55 border-white/10 hover:text-white/80 hover:border-white/25"}`
          }>
          {f}
        </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {metricLabels.map((label, i) => {
          const m = ds.metrics[i];
          return (
            <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-4">
              <div className="font-display font-extrabold text-2xl text-teal3 tabular-nums">{vals[i].toFixed(m.d)}{m.s}</div>
              <div className="text-white/50 text-[11px] mt-1">{label}</div>
            </div>);

        })}
      </div>

      <div className="space-y-3.5">
        {barLabels.map((b, i) =>
        <div key={i}>
            <div className="flex justify-between text-xs text-white/60 mb-1"><span>{b.l}</span><span className="tabular-nums">{Math.round(widths[i])}%</span></div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <span className={`block h-full bg-gradient-to-r ${b.fill} rounded-full`} style={{ width: widths[i] + "%", transition: running ? "none" : "width .4s ease-out", color: "rgb(20, 179, 19)" }} />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 mt-5 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
        <span className="flex items-center gap-2.5">
          <span className="text-gold"><Icon name="shield-check" size={16} /></span>
          <span className="text-xs text-gold font-medium">HIPAA compliant &amp; CAN-SPAM certified</span>
        </span>
        <span className="text-[11px] text-white/45 tabular-nums whitespace-nowrap">{ds.records} records</span>
      </div>
    </div>);

}

function Hero({ heroGradient = "Deep Navy" }) {
  const gradient = HERO_GRADIENTS[heroGradient] || HERO_GRADIENTS["Deep Navy"];
  return (
    <header className="relative min-h-screen pt-28 pb-16 px-6 overflow-hidden flex items-center" style={{ background: gradient }}>
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
            CME Audience Intelligence Platform
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] text-white leading-[1.1] tracking-tight mb-6 text-balance" style={{ fontWeight: "900", width: "550px", fontSize: "56px" }}>
            Turn <em className="not-italic text-teal3">HCP Intent</em> Into <span className="text-gold">CME Enrollment</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8 leading-relaxed" style={{ fontSize: "21px" }}>
            MedReachIQ delivers HIPAA-compliant healthcare audience intelligence and CME marketing solutions that help ACCME-accredited organizations fill their live and virtual CME, grand rounds, enduring materials, and RSS programs.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2" style={{ fontSize: "17px" }}>
              Book a Quick Demo <Icon name="arrow-right" size={18} />
            </a>
            <a href="#how-it-works" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition" style={{ fontSize: "17px" }}>
              Get Started for Free
            </a>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 max-w-md text-white/60 text-xs font-medium">
            {["HIPAA Compliant Data", "ACCME-Aligned Targeting", "AMA PRA Category 1 Ready", "No Setup Fees"].map((t, i) =>
            <div key={i} className="flex items-center gap-2"><span className="text-emerald-400"><Icon name="check-circle-2" size={14} /></span> {t}</div>
            )}
          </div>
        </div>

        <Dashboard />
      </div>
    </header>);

}

function LogosBar() {
  return (
    <div className="bg-slate-50 border-y border-slate-100 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4" style={{ color: "rgb(13, 53, 105)" }}>Trusted by leading CME &amp; CE organizations</div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-sm font-bold text-slate-500">
          {[
          { i: "building-2", l: "Academic Med Centers" },
          { i: "graduation-cap", l: "ACCME Providers" },
          { i: "landmark", l: "Medical Societies" },
          { i: "pill", l: "Pharma Med Ed Teams" },
          { i: "monitor", l: "Virtual CME Platforms" }].
          map((o, i) =>
          <div key={i} className="flex items-center gap-2" style={{ color: "rgb(3, 72, 72)" }}><span className="text-teal1"><Icon name={o.i} size={16} /></span> {o.l}</div>
          )}
        </div>
      </div>
    </div>);

}

function EventBanner() {
  return (
    <section className="px-6 pt-20 pb-4 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] p-8 lg:p-12">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
              We'll Be There · July 2026
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-[1.12] tracking-tight mb-4 text-balance">
              Meet MedReachIQ at the <span className="text-teal3">AHA Leadership Summit</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 max-w-xl">
              The American Hospital Association (AHA) Leadership Summit is coming up in July 2026, and our team will be on the ground. Let's talk about how intent-driven audience intelligence can lift your CME enrollment and engagement.
            </p>
            <div className="flex flex-wrap gap-5 mb-8 text-white/80 text-sm font-medium">
              <div className="flex items-center gap-2"><span className="text-teal3"><Icon name="calendar" size={16} /></span> July 2026</div>
              <div className="flex items-center gap-2"><span className="text-teal3"><Icon name="map-pin" size={16} /></span> AHA Leadership Summit</div>
              <div className="flex items-center gap-2"><span className="text-teal3"><Icon name="users" size={16} /></span> Booth &amp; 1:1 Meetings</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
                Book a Meeting <Icon name="arrow-right" size={18} />
              </a>
              <a href="#demo" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
                Add to Calendar
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <image-slot
              id="aha-event"
              shape="rounded"
              radius="16"
              placeholder="Drop an event image here (booth, team photo, or AHA Summit banner)">
            </image-slot>
          </div>
        </div>
      </div>
    </section>);
}

function PainPoints() {
  return (
    <React.Fragment>
    <section id="solutions" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">The CME Marketing Challenge</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
          The Pain Points <em className="not-italic text-teal1">Every CME Marketer Knows</em>
        </h2>
        <p className="text-slate-500"><span style={{ color: "rgb(0, 5, 12)" }}><span style={{ color: "rgb(6, 30, 63)" }}>From CME courses to MOC modules and interprofessional education, reaching the right clinicians has never been harder.</span></span></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.map((item, idx) =>
        <div key={idx} className={`rounded-2xl p-7 lift shadow-sm hover:shadow-lg relative overflow-hidden group ${item.blue ? "bg-ink border border-ink2 hover:border-teal3" : "border border-slate-100 bg-white hover:border-teal2"}`}>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
            <div className={`mb-4 ${item.blue ? "text-teal3" : item.iconColor}`}><Icon name={item.icon} size={32} strokeWidth={1.75} /></div>
            <h3 className={`font-display font-bold text-base mb-2 ${item.blue ? "text-white" : "text-ink"}`}>{item.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: item.blue ? "rgba(255,255,255,0.7)" : "rgb(6, 30, 63)" }}>{item.text}</p>
          </div>
        )}
      </div>
    </section>
    </React.Fragment>);

}

function PersonasStrip() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0d8a8a" }}>
      <div className="absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.14), rgba(255,255,255,0) 70%)" }} />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left — animated GIF on white, flush to the bottom */}
        <div className="min-h-[320px] lg:min-h-[440px] bg-white flex items-end justify-center overflow-hidden">
          <img
            src="uploads/HCPs.gif.gif"
            alt="Healthcare professional"
            loading="lazy"
            className="w-auto h-full object-contain object-bottom"
            style={{ maxHeight: "560px" }} />
        </div>
        {/* Right — text + CTA */}
        <div className="flex flex-col justify-center gap-3 px-8 py-12 lg:px-16 lg:py-16">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 pulse-dot" /> Audience intelligence, made clear
          </div>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight text-balance">
            Know Who's Engaging, What They're Interested In, and Why It Matters
          </h3>
          <p className="text-white/80 text-[15px] leading-relaxed max-w-xl">
            Explore the specialties, roles, and intent signals that shape who actually engages, so your next CME push lands with the right audience.
          </p>
          <div className="mt-3">
            <a href="personas.html" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#0d8a8a] font-bold rounded-lg shadow-lg hover:shadow-xl transition lift whitespace-nowrap">
              Explore the Personas <Icon name="arrow-right" size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>);

}
const solutions = [
{
  num: "01",
  slug: "solution-audience-intelligence.html",
  kicker: "CME",
  title: "CME Audience Intelligence",
  focus: "Targeted CME campaigns that drive registrations and participation",
  icon: "target",
  blue: true,
  items: [
  "CME Audience Targeting",
  "Clinical Interest Insights",
  "HCP Intent & Engagement Signals",
  "CME Event Marketing",
  "CME Event Attendee Nurturing",
  "HCP Acquisition"],

  message: "Reach and convert the right healthcare professionals through targeted campaigns that drive registrations and participation."
},
{
  num: "02",
  slug: "solution-cme-targeting.html",
  kicker: "Outreach",
  title: "HCP Outreach",
  focus: "Niche audience intelligence powered by intent and specialty signals",
  icon: "send",
  items: [
  "HCP Segmentation & Profiling",
  "HCP Prospecting",
  "Compliant Outreach",
  "Targeted HCP Campaigns",
  "Campaign Performance Tracking"],

  message: "Access niche healthcare audience intelligence using intent data, specialty details, and engagement signals."
},
{
  num: "03",
  slug: "solution-multichannel-marketing.html",
  kicker: "Alumni",
  title: "Alumni Growth Engine",
  focus: "Turn alumni relationships into new revenue and growth",
  icon: "graduation-cap",
  blue: true,
  items: [
  "Alumni Intelligence Database",
  "Alumni Segmentation & Profiling",
  "Omnichannel Engagement",
  "Alumni Data Enrichment",
  "Learner Reactivation & Retention"],

  message: "Activate and engage your alumni network to turn trusted relationships into new revenue and growth opportunities."
},
{
  num: "04",
  slug: "solution-nursing.html",
  kicker: "Nursing",
  title: "Nurse Audience Intelligence",
  focus: "Reach the full nursing workforce, from CNAs to APRNs",
  icon: "stethoscope",
  items: [
  "License-Level Segmentation",
  "Specialty & Certification Targeting",
  "CE Renewal Intent Signals",
  "Multi-Channel Nurse Outreach",
  "Nursing Data Enrichment"],

  message: "Engage every tier of the nursing workforce with license-verified intelligence built for CE and certification programs."
}];


function FullBleedImage() {
  // Rendered as a direct child of the page so it has room to "pin" while the
  // Solutions panel below scrolls up over it (see #midpage-feature CSS).
  return (
    <image-slot
      id="midpage-feature"
      shape="rect"
      aria-label="Featured image"
      placeholder="Drop your image here — it will fill this full-bleed band">
    </image-slot>
  );

}


function Solutions() {
  return (
    <section id="our-solutions" className="py-20 px-6 bg-slate-50 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Our Solutions</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
            A Connected Stack for the <em className="not-italic text-teal1">Full CME Marketing Lifecycle</em>
          </h2>
          <p className="text-slate-500">From audience intelligence through multi-channel execution, four solutions built to work independently or together.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, idx) =>
          <a key={idx} href={sol.slug} className={`rounded-2xl p-7 flex flex-col lift shadow-sm hover:shadow-lg transition relative overflow-hidden group ${sol.blue ? "bg-ink border border-ink2 hover:border-teal3" : "bg-white border border-slate-100 hover:border-teal2"}`}>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/25">
                  <Icon name={sol.icon} size={22} />
                </div>
                <span className={`font-display font-extrabold text-3xl leading-none ${sol.blue ? "text-white/15" : "text-slate-200"}`}>{sol.num}</span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${sol.blue ? "text-teal3" : "text-teal1"}`}>Solution {sol.num} · {sol.kicker}</span>
              <h3 className={`font-display font-extrabold text-xl mb-2 tracking-tight ${sol.blue ? "text-white" : "text-ink"}`}>{sol.title}</h3>
              <p className="text-sm mb-5" style={{ color: sol.blue ? "rgba(255,255,255,0.65)" : "rgb(6, 30, 63)" }}>{sol.focus}</p>
              <ul className="space-y-2 mb-6">
                {sol.items.map((it, i) =>
              <li key={i} className="flex items-start gap-2 text-sm">
                    <span className={`mt-0.5 shrink-0 ${sol.blue ? "text-teal3" : "text-teal2"}`}><Icon name="check" size={14} strokeWidth={2.5} /></span>
                    <span style={{ color: sol.blue ? "rgba(255,255,255,0.8)" : "rgb(6, 30, 63)" }}>{it}</span>
                  </li>
              )}
              </ul>
              <div className={`mt-auto pt-5 border-t ${sol.blue ? "border-white/10" : "border-slate-100"}`}>
                <p className="text-sm italic leading-relaxed" style={{ color: sol.blue ? "rgba(255,255,255,0.85)" : "#0B1F3A" }}>“{sol.message}”</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-20 px-6 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal3 uppercase tracking-widest block mb-2">How MedReachIQ Works</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight text-balance">
            From <span className="text-teal3">Intent Signal</span> to Enrolled Clinician in 4 Steps
          </h2>
          <p className="text-white/60">Our audience intelligence platform connects your CME programs with verified, intent-active healthcare professionals through a HIPAA-compliant multi-channel core engine.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) =>
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative lift hover:border-teal3/40 hover:bg-white/[0.07]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center font-display font-extrabold text-lg text-white mb-4 shadow-lg shadow-teal1/30">
                {step.num}
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-2">{step.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{step.text}</p>
              {idx < steps.length - 1 &&
            <div className="hidden lg:block absolute top-10 -right-4 text-white/20">
                  <Icon name="chevron-right" size={20} />
                </div>
            }
            </div>
          )}
        </div>
      </div>
    </section>);

}

function FeaturesSection() {
  const rows = [
  { name: "Dr. Sarah M. | Interventional Cardiologist", spec: "Board Cert. Due: Q3 2026 · MOC Active · NYC Metro", intent: "96" },
  { name: "Dr. James K. | Cardiac Electrophysiologist", spec: "AMA PRA Cat. 1 Seeker · RSS Participant · Chicago", intent: "91" },
  { name: "Dr. Priya R. | Cardiovascular NP", spec: "Interprofessional Ed · Enduring Materials · Boston", intent: "88" },
  { name: "Dr. Marcus T. | Heart Failure Specialist", spec: "Grand Rounds Attendee · Board Cert. Active · Houston", intent: "85" }];

  const tags = ["AMA PRA Category 1", "MOC Active", "Board Cert. 2026", "High Intent", "ACCME Accredited", "RSS Participant", "Virtual CME", "NPI Verified"];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Key Specialized Features</span>
          <h2 className="font-display font-extrabold text-3xl text-ink mb-4 tracking-tight text-balance">
            Healthcare Audience Intelligence <em className="not-italic text-teal1">Built for CME</em>
          </h2>
          <p className="text-slate-500 mb-8">Every feature is purpose-built for the CME ecosystem, covering enduring materials promotion, live conference enrollment, and RSS program outreach.</p>
          <div className="space-y-4">
            {features.map((feat, idx) =>
            <div key={idx} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-xl hover:border-teal2 transition hover:shadow-md lift">
                <div className="w-10 h-10 rounded-lg bg-teal3/15 flex items-center justify-center shrink-0 text-teal1">
                  <Icon name={feat.icon} size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-ink mb-1">{feat.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{feat.text}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-ink border border-white/10 rounded-2xl p-6 overflow-hidden text-white shadow-2xl shadow-ink/30">
          <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="text-teal3"><Icon name="crosshair" size={14} /></span>
            Active Segment: Cardiology CME Program
          </div>

          <div className="space-y-3">
            {rows.map((row, idx) =>
            <div key={idx} className="flex items-center gap-3.5 bg-white/5 border border-white/5 rounded-xl p-3">
                <div className="w-9 h-9 rounded-full bg-teal1/30 flex items-center justify-center shrink-0 text-teal3">
                  <Icon name="stethoscope" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold truncate">{row.name}</div>
                  <div className="text-[10px] text-white/45 truncate mt-0.5">{row.spec}</div>
                </div>
                <div className="font-display font-extrabold text-xs text-teal3 bg-teal1/20 px-2.5 py-1 rounded-full whitespace-nowrap">Intent: {row.intent}</div>
              </div>
            )}
          </div>

          <div className="h-px bg-white/10 my-5" />
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2.5">Active Audience Filters</div>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, idx) =>
            <span key={idx} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${idx === 3 || idx === 6 ? 'bg-amber-500/10 border-amber-500/30 text-gold' : 'bg-teal1/15 border-teal3/25 text-teal3'}`}>
                {tag}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function UseCases() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section id="use-cases" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Use Cases</span>
        <h2 className="font-display font-extrabold text-3xl text-ink mb-4 tracking-tight text-balance">
          Built for Every CME Format &amp; <em className="not-italic text-teal1">Educational Activity</em>
        </h2>
        <p className="text-slate-500" style={{ color: "rgb(6, 30, 63)" }}>Whether you're filling seats for a grand rounds series or scaling enrollment for enduring digital materials, MedReachIQ has a proven playbook.</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {tabs.map((t, idx) =>
        <button
          key={idx}
          onClick={() => setActiveTab(idx)}
          className={`px-4 py-2 text-xs font-semibold rounded-full border transition ${activeTab === idx ? 'tab-active' : 'border-slate-200 text-slate-600 hover:border-teal2 hover:text-teal1 bg-white'}`}>
          
            {t.btnLabel}
          </button>
        )}
      </div>

      <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-5 gap-10" style={{ backgroundColor: "rgb(23, 42, 68)" }}>
        <div className="lg:col-span-3">
          <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-ink mb-3 tracking-tight text-balance" style={{ color: "rgb(239, 242, 245)" }}>{tab.title}</h3>
          <p className="text-slate-500 mb-6 leading-relaxed" style={{ color: "rgb(200, 218, 216)" }}>{tab.desc}</p>
          <ul className="space-y-3">
            {tab.bullets.map((b, i) =>
            <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed" style={{ color: "rgb(127, 236, 236)" }}>
                <span className="text-teal1 mt-0.5 shrink-0"><Icon name="check-circle-2" size={18} /></span>
                {b}
              </li>
            )}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            {tab.metrics.map((m, i) =>
            <div key={i} className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-5">
                <div className="font-display font-extrabold text-3xl text-teal1">{m.val}</div>
                <div className="text-slate-500 text-[11px] mt-1 leading-tight">{m.label}</div>
              </div>
            )}
          </div>
          <div className="mt-5 flex items-start gap-2 text-[11px] text-slate-400 italic leading-relaxed">
            <span className="shrink-0 mt-0.5"><Icon name="info" size={12} /></span>
            <span>{tab.note}</span>
          </div>
        </div>
      </div>
    </section>);

}

function IntelHub() {
  const hubResources = [
  { type: "Blog", icon: "microscope", title: "How Healthcare Intent Data Works", text: "We aggregate 5,000+ behavioral signals from clinical platforms and CME portals to score physician intent by topic and urgency.", href: "blog-intent-data.html", cta: "Read article" },
  { type: "Case Study", icon: "trending-up", title: "How a national CME provider doubled qualified enrollments", text: "Layering intent signals over verified NPI data grew completed activities 2.1× in two quarters, without expanding spend.", href: "case-studies.html", cta: "Read case study" },
  { type: "Whitepaper", icon: "file-text", title: "The 2026 CME Audience Benchmark Report", text: "Deliverability, enrollment, and intent benchmarks from 2,300+ healthcare organizations, with playbooks to match.", href: "whitepapers.html", cta: "Download whitepaper" }];
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Drag-and-drop section background — drop an image into the dashed slot
                                                    to fill the whole section. A light overlay keeps dark text readable. */}
      <image-slot
        id="intel-bg"
        shape="rect"
        placeholder="Drop a background image for this section">
      </image-slot>
      <div className="intel-overlay" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Healthcare Marketing Intelligence Hub</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
            Resources for <em className="not-italic text-teal1">Modern CME Marketers</em>
          </h2>
          <p className="text-slate-500" style={{ color: "rgb(6, 30, 63)" }}>Field-tested frameworks, benchmarks, and playbooks from the MedReachIQ team.
Built for accreditation leaders, medical education marketers, and audience strategists.</p>
        </div>

        {/* Latest resources — one Blog, one Case Study, one Whitepaper */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <h3 className="font-display font-extrabold text-2xl text-ink tracking-tight">Latest Resources</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {hubResources.map((c, i) => {
            const dark = i === 1;
            return (
              <a key={i} href={c.href} className={`group rounded-2xl p-6 lift hover:shadow-lg flex flex-col ${dark ? "bg-ink border border-ink2 hover:border-teal3" : "bg-white border border-slate-100 hover:border-teal2"}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${dark ? "bg-teal3/20 text-teal3" : "bg-teal3/15 text-teal1"}`}>
                    <Icon name={c.icon} size={22} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${dark ? "text-teal3" : "text-teal1"}`}>{c.type}</span>
                </div>
                <h3 className={`font-display font-bold text-base mb-2 transition ${dark ? "text-white" : "text-ink group-hover:text-teal1"}`}>{c.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: dark ? "rgba(255,255,255,0.7)" : "rgb(6, 30, 63)" }}>{c.text}</p>
                <span className={`mt-auto text-xs font-bold inline-flex items-center gap-1.5 ${dark ? "text-teal3" : "text-teal1"}`}>
                  {c.cta} <Icon name="arrow-right" size={14} />
                </span>
              </a>);
          })}
        </div>
      </div>
    </section>);

}

function ComplianceMarquee() {
  const badges = [
  { name: "HIPAA", icon: "lock", note: "Privacy & Security" },
  { name: "SOC 2 Type II", icon: "shield-check", note: "Audited Infrastructure" },
  { name: "CAN-SPAM", icon: "mail-check", note: "Email Compliance" },
  { name: "ACCME-Aligned", icon: "badge-check", note: "Accreditation Standards" },
  { name: "CASL", icon: "scale", note: "Canadian Anti-Spam" },
  { name: "GDPR", icon: "globe-lock", note: "Data Protection" }];
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf,last = null,offset = 0;
    const speed = 60; // px per second
    const step = (ts) => {
      if (last == null) last = ts;
      const dt = (ts - last) / 1000;
      last = ts;
      if (!pausedRef.current) {
        offset += speed * dt;
        const half = track.scrollWidth / 2;
        if (half > 0 && offset >= half) offset -= half;
        track.style.transform = `translateX(${-offset}px)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  const Chip = ({ b }) =>
  <div className="flex items-center gap-3 shrink-0 mx-3 px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
      <span className="w-10 h-10 rounded-lg bg-teal3/12 flex items-center justify-center text-teal1 shrink-0">
        <Icon name={b.icon} size={20} />
      </span>
      <span className="leading-tight">
        <span className="block font-display font-extrabold text-base text-ink whitespace-nowrap">{b.name}</span>
        <span className="block text-[11px] text-slate-500 whitespace-nowrap">{b.note}</span>
      </span>
    </div>;
  return (
    <section className="pt-16 pb-2 px-0 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Certified &amp; Compliant</span>
        <p className="text-slate-500" style={{ color: "rgb(6, 30, 63)" }}>Built to operate inside the strictest privacy and accreditation frameworks in healthcare.</p>
      </div>
      <div
        className="marquee"
        onMouseEnter={() => {pausedRef.current = true;}}
        onMouseLeave={() => {pausedRef.current = false;}}>
        <div ref={trackRef} className="marquee__track py-2" style={{ willChange: "transform" }}>
          {badges.map((b, i) => <Chip key={`a-${i}`} b={b} />)}
          {badges.map((b, i) => <Chip key={`b-${i}`} b={b} />)}
        </div>
      </div>
    </section>);
}

function Compliance() {
  return (
    <section id="compliance" className="py-20 px-6 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal3 uppercase tracking-widest block mb-2">Compliance &amp; Security</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight text-balance">
            Engineered for the <span className="text-teal3">Regulatory Reality</span> of Healthcare Marketing
          </h2>
          <p className="text-white/65 leading-relaxed mb-6 max-w-2xl mx-auto">MedReachIQ was built from day one to operate inside the strictest privacy and accreditation frameworks in the industry, without forcing your team to slow down.</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["HIPAA", "SOC 2 Type II", "CAN-SPAM", "ACCME-Aligned", "CASL", "GDPR Ready", "NCOA", "NPI Verified"].map((b, i) =>
            <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] font-semibold tracking-wide text-white/80">{b}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {complianceItems.map((c, i) =>
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-teal3/40 lift">
              <div className="w-10 h-10 rounded-lg bg-teal3/15 flex items-center justify-center text-teal3 mb-4">
                <Icon name={c.icon} size={20} />
              </div>
              <h4 className="font-display font-bold text-sm mb-2">{c.title}</h4>
              <p className="text-white/55 text-xs leading-relaxed">{c.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">What CME Leaders Say</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
          Trusted by <em className="not-italic text-teal1">Accreditation &amp; Medical Education Teams</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
        {/* Drag-and-drop left-rail image */}
        <div className="lg:col-span-1 relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 min-h-[320px]">
          <image-slot
            id="testimonial-img"
            shape="rect"
            placeholder="Drop an image for this section">
          </image-slot>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) =>
          <figure key={i} className="bg-white border border-slate-100 rounded-2xl p-7 lift hover:border-teal2 hover:shadow-lg relative">
              <div className="flex gap-1 mb-4 text-gold2" style={{ color: "rgb(245, 173, 4)" }}>
                {[...Array(5)].map((_, k) => <Icon key={k} name="star" size={14} />)}
              </div>
              <blockquote className="text-slate-700 text-sm leading-relaxed mb-6" style={{ color: "rgb(6, 30, 63)" }}><span style={{ color: "rgb(6, 30, 63)" }}>“{t.quote}”</span></blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal1 to-teal2 text-white font-display font-bold text-xs flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-ink">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>);

}

const caseStudies = [
{ icon: "users", title: "Increase in CME attendance" },
{ icon: "video", title: "Improved webinar registrations" },
{ icon: "compass", title: "Rapid expansion in specialty outreach" },
{ icon: "layers", title: "Desired outcomes from multi-channel campaigns" },
{ icon: "zap", title: "Boost in campaign efficiency" }];


function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Case Studies</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
            Why Healthcare Marketing Teams <em className="not-italic text-teal1">Trust Us</em>
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Over <span className="font-display font-extrabold text-ink">2,300+ healthcare organizations</span> have reported measurable outcomes across enrollment, engagement, and campaign performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {caseStudies.map((cs, idx) =>
          <a
            key={idx}
            href="#"
            className="group bg-white border border-slate-100 rounded-2xl p-6 flex flex-col hover:border-teal2 hover:shadow-lg shadow-sm transition lift relative overflow-hidden">

              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
              <div className="w-11 h-11 rounded-xl bg-teal3/15 flex items-center justify-center text-teal1 mb-5">
                <Icon name={cs.icon} size={20} />
              </div>
              <h3 className="font-display font-bold text-base text-ink mb-6 leading-snug">{cs.title}</h3>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-teal1 uppercase tracking-wider">
                <span>Read Success Story</span>
                <Icon name="arrow-right" size={14} strokeWidth={2.5} />
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function CTA() {
  return (
    <section id="demo" className="px-6 pt-16 pb-20">
      <div className="max-w-6xl mx-auto rounded-3xl p-10 lg:p-14 relative overflow-hidden" style={{ backgroundColor: "#0d8a8a" }}>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" /> Limited Pilot Slots, Q3 2026
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight text-balance">
              See your CME audience the way <em className="not-italic text-gold">MedReachIQ</em> sees it.
            </h2>
            <p className="text-white/70 mb-8 max-w-xl leading-relaxed">
              In a 30-minute demo, we'll show you the verified, intent-active clinicians inside your therapeutic area and walk through a sample campaign tailored to your CME program type.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="contact.html" className="px-6 py-3.5 bg-white text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2" style={{ fontSize: "17px" }}>
                Book a Quick Discovery Call <Icon name="arrow-right" size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-4">What you'll get</div>
              <ul className="space-y-3 text-sm text-white/80">
                {[
                "A free audience scan of your therapeutic area",
                "Benchmarks for CME open, click, and enrollment rates",
                "A sample HIPAA-compliant outreach sequence",
                "Pricing tailored to your accreditation footprint"].
                map((t, i) =>
                <li key={i} className="flex gap-3"><span className="text-teal3 mt-0.5 shrink-0"><Icon name="check-circle-2" size={16} /></span>{t}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  const col = (title, items) =>
  <div>
      <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-4">{title}</div>
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
            <a href="#" className="flex items-center gap-2.5 mb-4">
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
          {col("Solutions", ["CME Audience Intelligence", "HCP Outreach", "Alumni Growth Engine", "Nurse Audience Intelligence"])}
          {col("Process", [{ label: "Use Cases", href: "use-cases.html" }, { label: "Personas & Intent", href: "personas.html" }, { label: "How MedReachIQ Works", href: "how-it-works.html" }])}
          {col("Resources", [{ label: "Blogs", href: "blog.html" }, { label: "Case Studies", href: "case-studies.html" }, { label: "Whitepapers", href: "whitepapers.html" }, "FAQs"])}
          {col("Company", ["About", { label: "Contact", href: "contact.html" }])}
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

/* --------------------------------- App --------------------------------- */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bodyFontSize": 19,
  "accent": "#0D8A8A",
  "headlineAccent": "#FFD166",
  "density": "regular",
  "heroGradient": "Deep Navy"
} /*EDITMODE-END*/;

const HERO_GRADIENTS = {
  "Deep Navy": "linear-gradient(135deg, #03101F 0%, #061A30 50%, #04162A 100%)",
  "Teal Glow": "linear-gradient(135deg, #03101F 0%, #064B4B 55%, #0D8A8A 100%)",
  "Aurora": "linear-gradient(135deg, #051633 0%, #0D5B6E 50%, #1A2F6E 100%)",
  "Royal Blue": "linear-gradient(135deg, #03101F 0%, #132D52 55%, #2A6FDB 100%)",
  "Midnight Plum": "linear-gradient(135deg, #050B1F 0%, #2A1A4A 55%, #7A5AE0 100%)"
};

const ACCENT_PRESETS = ["#0D8A8A", "#2A6FDB", "#7A5AE0", "#1F8A5B"];
const HEADLINE_PRESETS = ["#FFD166", "#1DCFCF", "#F97316", "#FFFFFF"];

// Derive a slightly-lighter companion color (used for the teal2/teal3 gradients).
function lighten(hex, amt = 0.18) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  let r = n >> 16 & 255,g = n >> 8 & 255,b = n & 255;
  r = Math.round(r + (255 - r) * amt);
  g = Math.round(g + (255 - g) * amt);
  b = Math.round(b + (255 - b) * amt);
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Re-render lucide on every mount (handles dynamic content)
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons({ nameAttr: "data-lucide" });
  }, []);

  // Push tweak values into CSS variables + remap Tailwind teal/gold tokens live.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--body-fs", `${t.bodyFontSize}px`);

    const accent = t.accent;
    const accent2 = lighten(accent, 0.18);
    const accent3 = lighten(accent, 0.36);
    const head = t.headlineAccent;

    // Update Tailwind config dynamically so every `teal1/teal2/teal3/gold` class re-themes.
    if (window.tailwind) {
      window.tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
              display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
            },
            colors: {
              ink: '#0B1F3A',
              ink2: '#132D52',
              teal1: accent,
              teal2: accent2,
              teal3: accent3,
              gold: head,
              gold2: head
            }
          }
        }
      };
    }

    // Density tweaks section gaps via root variable consumed by CSS below.
    root.style.setProperty("--section-py", t.density === "compact" ? "3.5rem" : t.density === "comfy" ? "6rem" : "5rem");
  }, [t.bodyFontSize, t.accent, t.headlineAccent, t.density]);

  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <Hero heroGradient={t.heroGradient} />
      <LogosBar />
      <EventBanner />
      <PainPoints />
      <div className="reveal-group">
        <FullBleedImage />
        <Solutions />
      </div>
      <PersonasStrip />
      <Testimonials />
      {/* <HowItWorks /> moved to its own page: how-it-works.html */}
      {/* <FeaturesSection /> deactivated per request */}
      {/* <UseCases /> moved to its own page: use-cases.html */}
      <ComplianceMarquee />
      <Compliance />
      <IntelHub />
      {/* <CaseStudies /> merged into the Healthcare Marketing Intelligence Hub */}
      <CTA />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Typography" />
        <TweakSlider
          label="Body font size"
          value={t.bodyFontSize}
          min={19}
          max={24}
          step={1}
          unit="px"
          onChange={(v) => setTweak("bodyFontSize", v)} />
        
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)} />
        

        <TweakSection label="Brand colors" />
        <TweakColor
          label="Accent (teal)"
          value={t.accent}
          options={ACCENT_PRESETS}
          onChange={(v) => setTweak("accent", v)} />
        
        <TweakColor
          label="Headline accent"
          value={t.headlineAccent}
          options={HEADLINE_PRESETS}
          onChange={(v) => setTweak("headlineAccent", v)} />
        
        <TweakSection label="Hero" />
        <TweakSelect
          label="Gradient"
          value={t.heroGradient}
          options={["Deep Navy", "Teal Glow", "Aurora", "Royal Blue", "Midnight Plum"]}
          onChange={(v) => setTweak("heroGradient", v)} />
        
      </TweaksPanel>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);