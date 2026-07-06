const { useState, useEffect, useRef } = React;

/* ----------------------------- Lucide icon ----------------------------- */
function Icon({ name, size = 18, className = "", strokeWidth = 2 }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
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
  { href: "personas.html", label: "Personas & Intent", active: true },
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
                <a key={i} href={p.href} className={`block px-3 py-2 rounded-lg text-sm font-medium transition ${p.active ? "bg-white/5 text-teal3" : "text-white/85 hover:bg-white/5 hover:text-teal3"}`}>{p.label}</a>
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
          <a href="services/cme-marketing.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">CME Marketing Services</a>
          <a href="services/maintenance-of-certification-marketing.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">MOC Marketing Services</a>
          <a href="services/lead-generation.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">CME Lead Generation Services</a>
          <div className="h-px bg-white/10 my-1" />
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-1">Process</div>
          {PROCESS_LINKS.map((p, i) =>
        <a key={i} href={p.href} onClick={() => setOpen(false)} className={`text-sm py-1 pl-2 ${p.active ? "text-teal3" : "text-white/80"}`}>{p.label}</a>
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
          { label: "CME Audience Intelligence", href: "solution-audience-intelligence.html" },
          { label: "HCP Outreach", href: "solution-cme-targeting.html" },
          { label: "Alumni Growth Engine", href: "solution-multichannel-marketing.html" },
          { label: "Nurse Audience Intelligence", href: "solution-nursing.html" }]
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

/* ----------------------------- Persona Data ---------------------------- */
const PERSONAS = [
{
  id: "pcp",
  icon: "stethoscope",
  category: "Primary Care Physician",
  title: "The Time-Constrained PCP",
  tagline: "High patient volume, low spare time: wants credit-ready learning that fits between appointments.",
  intent: 88,
  profile: [
  "Family or Internal Medicine physician",
  "Community-based practice",
  "High daily patient volume"],

  goals: [
  "Maintain licensure & certification",
  "Stay current on evolving guidelines",
  "Improve patient outcomes"],

  challenges: [
  "Severely limited time",
  "Heavy patient load",
  "Administrative burden"],

  resonates: [
  "On-demand CME",
  "Mobile learning",
  "Short modules",
  "Credit tracking"],

  intentIndicators: [
  "Upcoming license renewal deadline",
  "New primary-care guideline releases",
  "Growing chronic-condition patient base",
  "Searching for flexible CME options"],

  signals: [
  { icon: "search", text: 'Searches "online CME credits"' },
  { icon: "repeat", text: "Revisits CME course pages multiple times" },
  { icon: "download", text: "Downloads clinical guideline summaries" },
  { icon: "mail-open", text: "Opens CME & certification emails" },
  { icon: "monitor-play", text: "Watches on-demand webinars" },
  { icon: "calendar-clock", text: "Registers near credit-expiration windows" }]

},
{
  id: "specialist",
  icon: "heart-pulse",
  category: "Specialist Physician",
  title: "The Excellence-Seeking Specialist",
  tagline: "Cardiology, oncology, neurology and beyond: chasing emerging therapies and board recertification.",
  intent: 91,
  profile: [
  "Cardiologist, oncologist, neurologist, surgeon, etc.",
  "Specialty practice, hospital, or academic center",
  "Focused on advanced clinical care & outcomes"],

  goals: [
  "Track emerging therapies & protocols",
  "Maintain board certification",
  "Improve specialty-specific outcomes",
  "Strengthen clinical reputation"],

  challenges: [
  "Rapid pace of clinical innovation",
  "Increasing subspecialization",
  "Limited time to review new evidence",
  "Balancing care with education"],

  resonates: [
  "Expert-led CME",
  "Case-based learning",
  "Clinical trial updates",
  "Specialty-specific education",
  "Conference & symposium content"],

  intentIndicators: [
  "Upcoming board recertification",
  "New FDA approvals in specialty",
  "Major disease-management guideline changes",
  "Interest in emerging treatment modalities",
  "Specialty conference attendance"],

  signals: [
  { icon: "download", text: "Downloads specialty clinical resources" },
  { icon: "flask-conical", text: "Consumes clinical trial summaries" },
  { icon: "book-open", text: "Registers for advanced specialty CME" },
  { icon: "users", text: "Engages with KOL content" },
  { icon: "search", text: "Searches specialty-focused CME" },
  { icon: "monitor-play", text: "Attends disease-state webinars" }]

},
{
  id: "np",
  icon: "clipboard-plus",
  category: "Nurse Practitioner",
  title: "The Practical NP",
  tagline: "Direct patient care plus admin duties: values affordable, immediately applicable education.",
  intent: 84,
  profile: [
  "NP in primary, specialty, or outpatient care",
  "Provides direct care & clinical decision support",
  "Balances clinical and administrative work"],

  goals: [
  "Meet CE requirements for licensure",
  "Improve patient-care delivery",
  "Expand clinical competencies",
  "Stay current with evidence-based practice"],

  challenges: [
  "Limited time for education",
  "Budget constraints for development",
  "Growing patient responsibilities",
  "Keeping pace with care standards"],

  resonates: [
  "Practical, applicable content",
  "Flexible online learning",
  "Affordable CE",
  "Patient-focused case studies",
  "Mobile-friendly education"],

  intentIndicators: [
  "CE renewal approaching",
  "Expanded clinical responsibilities",
  "Transition into specialty care",
  "Interest in patient-management skills"],

  signals: [
  { icon: "search", text: "Searches accredited CE programs" },
  { icon: "download", text: "Downloads practice tools & templates" },
  { icon: "monitor-play", text: "Attends patient-care webinars" },
  { icon: "book-open", text: "Engages with care-pathway content" },
  { icon: "tag", text: "Visits pricing / subscription pages" },
  { icon: "calendar-clock", text: "Registers for skill-development programs" }]

},
{
  id: "pharmacist",
  icon: "pill",
  category: "Pharmacist",
  title: "The Therapeutics-Driven Pharmacist",
  tagline: "Medication management and counseling: needs to stay ahead of new drugs and label changes.",
  intent: 82,
  profile: [
  "Clinical, hospital, retail, or specialty pharmacist",
  "Owns medication management & counseling",
  "Frequently supports therapeutic decisions"],

  goals: [
  "Maintain licensure & CE compliance",
  "Stay current on drug therapies & guidelines",
  "Improve medication safety & outcomes",
  "Enhance therapeutic expertise"],

  challenges: [
  "Constant new medications",
  "Evolving regulatory requirements",
  "High volume of clinical information",
  "Keeping up with therapeutic innovation"],

  resonates: [
  "Drug-focused content",
  "Therapeutic area updates",
  "Evidence-based reviews",
  "Medication-safety education",
  "Clinical application scenarios"],

  intentIndicators: [
  "New medication launches in practice area",
  "Changes in treatment guidelines",
  "Expanding specialty-pharmacy duties",
  "Regulatory updates affecting practice"],

  signals: [
  { icon: "download", text: "Downloads drug monographs & resources" },
  { icon: "monitor-play", text: "Attends pharmacology webinars" },
  { icon: "search", text: "Searches pharmacy CE credits" },
  { icon: "shield-check", text: "Consumes medication-safety content" },
  { icon: "book-open", text: "Engages with treatment comparisons" },
  { icon: "bell", text: "Reads FDA approval & label updates" }]

},
{
  id: "early-career",
  icon: "sprout",
  category: "Early-Career Clinician",
  title: "The Rising Early-Career Clinician",
  tagline: "1–5 years into practice: building confidence with structured, foundational learning pathways.",
  intent: 79,
  profile: [
  "Physician, NP, PA, or pharmacist, 1–5 years in",
  "Recently completed training or certification",
  "Building clinical confidence & expertise"],

  goals: [
  "Strengthen clinical decision-making",
  "Meet licensure & certification needs",
  "Accelerate professional growth",
  "Develop specialty expertise"],

  challenges: [
  "Limited real-world experience",
  "Navigating CE requirements",
  "Building professional credibility",
  "Managing workload while learning"],

  resonates: [
  "Structured learning pathways",
  "Foundational & intermediate education",
  "Mentorship opportunities",
  "Career-development content",
  "Certification prep resources"],

  intentIndicators: [
  "Recent transition to independent practice",
  "Pursuit of specialty certifications",
  "Interest in career advancement",
  "Seeking professional-development resources"],

  signals: [
  { icon: "download", text: "Downloads career-development guides" },
  { icon: "search", text: "Searches beginner–intermediate CME" },
  { icon: "award", text: "Engages with certification content" },
  { icon: "monitor-play", text: "Attends educational webinars regularly" },
  { icon: "users", text: "Joins online learning communities" },
  { icon: "book-open", text: "Consumes best-practice resources" }]

},
{
  id: "academic",
  icon: "microscope",
  category: "Academic / Research",
  title: "The Research-Oriented Academic",
  tagline: "Teaches, publishes, and influences peers: wants peer-reviewed evidence and faculty-led depth.",
  intent: 86,
  profile: [
  "Physician at an academic or teaching hospital",
  "Active in research, teaching, or publishing",
  "Influences peers & future clinicians"],

  goals: [
  "Stay current with emerging evidence",
  "Advance academic & clinical expertise",
  "Publish research & present findings",
  "Contribute to professional education"],

  challenges: [
  "Balancing research, teaching & care",
  "Evaluating high volumes of literature",
  "Securing time for development",
  "Staying ahead of evolving evidence"],

  resonates: [
  "Evidence-based content",
  "Peer-reviewed research discussions",
  "Faculty-led CME",
  "Advanced scientific education",
  "Clinical trial & innovation updates"],

  intentIndicators: [
  "Active research participation",
  "Conference presentations / speaking",
  "Publication of scientific papers",
  "Involvement in trials or guidelines"],

  signals: [
  { icon: "download", text: "Downloads research papers & publications" },
  { icon: "monitor-play", text: "Attends research-focused webinars" },
  { icon: "users", text: "Engages with faculty & expert content" },
  { icon: "pen-tool", text: "Participates in CME content development" },
  { icon: "flask-conical", text: "Consumes outcomes-research content" },
  { icon: "search", text: "Searches cutting-edge education" }]

},
{
  id: "pa",
  icon: "activity",
  category: "Physician Assistant",
  title: "The Efficiency-Focused PA",
  tagline: "Collaborates across care teams: distinct engagement patterns warrant their own playbook.",
  intent: 80,
  bonus: true,
  profile: [
  "PA in primary, urgent, or specialty care",
  "Works collaboratively with care teams",
  "Involved in diagnosis, treatment & management"],

  goals: [
  "Meet CME for certification maintenance",
  "Improve clinical efficiency & care",
  "Expand specialty knowledge",
  "Stay current on treatment guidelines"],

  challenges: [
  "Time constraints from patient volume",
  "Balancing CME with workload",
  "Keeping pace with protocols"],

  resonates: [
  "Practical clinical education",
  "Short on-demand modules",
  "Case-based learning",
  "Specialty-focused updates"],

  intentIndicators: [
  "NCCPA certification maintenance approaching",
  "New responsibilities in practice setting",
  "Interest in specialty expansion"],

  signals: [
  { icon: "search", text: "Searches PA CME credits" },
  { icon: "download", text: "Downloads patient-management resources" },
  { icon: "monitor-play", text: "Registers for clinical-skills webinars" },
  { icon: "book-open", text: "Engages with specialty content" },
  { icon: "award", text: "Visits accreditation & certification pages" }]

}];


/* ------------------------------- Hero ---------------------------------- */
function PersonasHero() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="text-xs text-white/50 mb-5 flex items-center justify-center gap-2">
          <a href="index.html" className="hover:text-teal3 transition">Home</a>
          <span>/</span>
          <span className="text-white/80">Personas &amp; Intent</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
          Personas &amp; Intent
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-6 text-balance max-w-3xl mx-auto">
          Know Exactly Who You're Reaching &amp; <em className="not-italic text-teal3">When They're In-Market</em>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Every clinician learns differently and buys differently. CMEIntent turns healthcare audience segmentation and HCP behavioral data into the core CME personas we target, the intent indicators that reveal readiness, and the behavioral signals our engine acts on.
        </p>
      </div>
    </header>);
}

/* --------------------------- Intent Score Ring ------------------------- */
function IntentRing({ value }) {
  const [shown, setShown] = useState(0);
  const rafRef = useRef(null);
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    const from = 0;
    const duration = 1000;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setShown(from + (value - from) * e);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value]);
  const deg = shown * 3.6;
  return (
    <div className="relative w-[112px] h-[112px] shrink-0" aria-label={`Intent score ${value} of 100`}>
      <div
        className="w-full h-full rounded-full"
        style={{ background: `conic-gradient(#1DCFCF ${deg}deg, rgba(255,255,255,0.10) ${deg}deg)` }} />
      <div className="absolute inset-[10px] rounded-full bg-[#071a2f] flex flex-col items-center justify-center">
        <span className="font-display font-extrabold text-3xl text-white leading-none tabular-nums">{Math.round(shown)}</span>
        <span className="text-[9px] font-bold text-teal3 uppercase tracking-widest mt-1">Intent</span>
      </div>
    </div>);
}

/* ----------------------------- Info Card ------------------------------- */
function InfoCard({ icon, label, accent, items }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2.5 mb-4">
        <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${accent.bg} ${accent.text}`}>
          <Icon name={icon} size={17} />
        </span>
        <h4 className="font-display font-bold text-sm text-ink uppercase tracking-wide">{label}</h4>
      </div>
      <ul className="space-y-2.5">
        {items.map((it, i) =>
        <li key={i} className="flex gap-2.5 text-sm leading-snug" style={{ color: "rgb(6, 30, 63)" }}>
            <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${accent.dot}`} />
            {it}
          </li>
        )}
      </ul>
    </div>);
}

/* -------------------------- Persona Explorer --------------------------- */
function PersonaExplorer() {
  const [active, setActive] = useState(0);
  const p = PERSONAS[active];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Persona Explorer</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
          Select a Persona to See How They <em className="not-italic text-teal1">Learn &amp; Engage</em>
        </h2>
        <p className="text-slate-500" style={{ color: "rgb(6, 30, 63)" }}>Pick any clinician profile to reveal their goals, what content resonates, and the live intent &amp; behavioral signals that flag readiness.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        {/* Selector rail */}
        <div className="lg:col-span-4">
          <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
            {PERSONAS.map((per, i) =>
            <button
              key={per.id}
              onClick={() => setActive(i)}
              className={`text-left rounded-2xl p-4 border transition lift shrink-0 w-[260px] lg:w-full flex items-center gap-3.5 ${
              active === i ?
              "bg-ink border-ink text-white shadow-lg" :
              "bg-white border-slate-100 hover:border-teal2 shadow-sm"}`
              }>
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
              active === i ? "bg-gradient-to-br from-teal1 to-teal2 text-white" : "bg-teal3/15 text-teal1"}`
              }>
                  <Icon name={per.icon} size={20} />
                </span>
                <span className="min-w-0">
                  <span className={`block text-[10px] font-bold uppercase tracking-widest mb-0.5 truncate ${active === i ? "text-teal3" : "text-teal1"}`}>
                    {per.category}{per.bonus ? " · Bonus" : ""}
                  </span>
                  <span className={`block font-display font-bold text-[15px] leading-snug truncate ${active === i ? "text-white" : "text-ink"}`}>{per.title}</span>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-8">
          <div key={p.id} className="persona-detail">
            {/* Header */}
            <div className="bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-7 lg:p-9 mb-6 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-[360px] h-[360px] hero-glow rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/30 shrink-0">
                    <Icon name={p.icon} size={26} />
                  </span>
                  <div>
                    {p.bonus &&
                    <span className="inline-block text-[10px] font-bold text-gold uppercase tracking-widest mb-1.5 bg-gold/10 border border-gold/25 rounded-full px-2.5 py-0.5">Bonus Persona</span>
                    }
                    <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-1">{p.category}</div>
                    <h3 className="font-display font-extrabold text-2xl text-white tracking-tight leading-tight">{p.title}</h3>
                    <p className="text-white/65 text-sm mt-2 leading-relaxed max-w-lg">{p.tagline}</p>
                  </div>
                </div>
                <IntentRing value={p.intent} />
              </div>
            </div>

            {/* 2x2 attribute grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <InfoCard icon="user-round" label="Profile" items={p.profile}
                accent={{ bg: "bg-teal3/15", text: "text-teal1", dot: "bg-teal1" }} />
              <InfoCard icon="target" label="Goals" items={p.goals}
                accent={{ bg: "bg-emerald-500/12", text: "text-emerald-600", dot: "bg-emerald-500" }} />
              <InfoCard icon="triangle-alert" label="Challenges" items={p.challenges}
                accent={{ bg: "bg-amber-500/12", text: "text-amber-600", dot: "bg-amber-500" }} />
              <InfoCard icon="sparkles" label="What Resonates" items={p.resonates}
                accent={{ bg: "bg-fuchsia-500/12", text: "text-fuchsia-600", dot: "bg-fuchsia-500" }} />
            </div>

            {/* Intent indicators */}
            <div className="bg-ink rounded-3xl p-7 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 grid-texture opacity-25 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-9 h-9 rounded-lg bg-teal3/20 text-teal3 flex items-center justify-center"><Icon name="crosshair" size={17} /></span>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide">Intent Indicators</h4>
                  <span className="text-[11px] text-white/45 ml-1">what signals this persona is in-market</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {p.intentIndicators.map((ind, i) =>
                  <span key={i} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-2 text-sm text-white/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal3" />
                      {ind}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Behavioral signals feed */}
            <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-9 h-9 rounded-lg bg-teal3/15 text-teal1 flex items-center justify-center"><Icon name="activity" size={17} /></span>
                <h4 className="font-display font-bold text-sm text-ink uppercase tracking-wide">Behavioral Signals</h4>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-teal1 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" /> Live feed
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {p.signals.map((s, i) =>
                <div key={i} className="signal-row flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3" style={{ animationDelay: `${i * 90}ms` }}>
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-100 text-teal1 flex items-center justify-center shrink-0"><Icon name={s.icon} size={15} /></span>
                    <span className="text-sm leading-snug" style={{ color: "rgb(6, 30, 63)" }}>{s.text}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- CTA ----------------------------------- */
function PersonasCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" /> Map your audience
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight text-balance">
            See which personas are in-market for your programs
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            In a 30-minute demo we'll match these personas to your verified, intent-active audience and show the behavioral signals already firing inside your therapeutic area.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Quick Demo <Icon name="arrow-right" size={18} />
            </a>
            <a href="use-cases.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              Explore Use Cases
            </a>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function PersonasPage() {
  useEffect(() => {
    document.title = "Healthcare Audience Segmentation & HCP Behavioral Data | CMEIntent";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <PersonasHero />
      <PersonaExplorer />
      <PersonasCTA />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<PersonasPage />);
