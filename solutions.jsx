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
function Nav({ currentSlug }) {
  const [open, setOpen] = useState(false);
  const SOLUTION_LINKS = [
  { href: "solution-audience-intelligence.html", num: "01", title: "CME Audience Intelligence", kicker: "Core Platform" },
  { href: "solution-cme-targeting.html", num: "02", title: "HCP Outreach", kicker: "Outreach" },
  { href: "solution-multichannel-marketing.html", num: "03", title: "Alumni Growth Engine", kicker: "Alumni" },
  { href: "solution-nursing.html", num: "04", title: "Nurse Audience Intelligence", kicker: "Nursing" }];


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
                <a key={i} href={s.href} className={`flex gap-3 items-start p-3 rounded-lg transition ${currentSlug && s.href.includes(currentSlug) ? "bg-white/5" : "hover:bg-white/5"}`}>
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
                <a href="contact.html" className="block px-3 py-2 rounded-lg text-white/85 text-sm font-medium hover:bg-white/5 hover:text-teal3 transition">Contact</a>
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
          <a href="use-cases.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Use Cases</a>
          <a href="personas.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">Personas &amp; Intent</a>
          <a href="how-it-works.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">How MedReachIQ Works</a>
          <div className="text-white/45 text-[10px] font-bold uppercase tracking-widest pt-2">Company</div>
          <a href="#" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">About</a>
          <div className="text-teal3 text-[13px] font-bold pl-2 pt-1.5">Healthcare Marketing Intelligence Hub</div>
          <a href="blog.html" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-5">Blogs</a>
          <a href="#" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-5">Case Studies</a>
          <a href="#" onClick={() => setOpen(false)} className="text-white/80 text-sm py-1 pl-2">FAQs</a>
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

/* ---------------------------- Solution Data ---------------------------- */
const SOLUTIONS = {
  "audience-intelligence": {
    slug: "audience-intelligence",
    num: "01",
    kicker: "Core Platform",
    title: "CME Audience Intelligence",
    focus: "Targeted CME Campaigns",
    icon: "database",
    valueProp: "Identify and segment the right healthcare professionals for every CME campaign with NPI-verified data, real-time intent signals, and specialty-level intelligence.",
    heroBadges: ["NPI Verified", "HIPAA Compliant", "2.1M+ Clinicians", "Real-time Intent"],
    challenges: [
    { icon: "search-x", title: "Generic Healthcare Databases", text: "Stock lists can't separate a hospitalist from a subspecialist, leaving your CME campaigns hitting the wrong inboxes." },
    { icon: "eye-off", title: "No Visibility Into HCP Intent", text: "Without real-time engagement signals, you can't tell which physicians are actively researching board recertification or MOC activities." },
    { icon: "puzzle", title: "Fragmented Audience Data", text: "Specialty, credential, licensure, and intent data live in disconnected systems, making clean segmentation nearly impossible." }],

    capabilities: [
    { icon: "crosshair", title: "CME Audience Targeting", text: "Build campaign-ready audiences of CME-active clinicians using credential, specialty, accreditation eligibility, and real-time intent filters." },
    { icon: "microscope", title: "Clinical Interest Insights", text: "Subspecialty resolution across ABMS boards and societies, with the clinical topics and therapeutic areas each clinician is actively researching." },
    { icon: "activity", title: "HCP Intent & Engagement Signals", text: "Behavioral signals from clinical platforms, CME portals, and EHR-adjacent surfaces, scored by topic and urgency to surface who's in-market now." },
    { icon: "megaphone", title: "CME Event Marketing", text: "Promote live conferences, virtual sessions, grand rounds, and RSS programs to the exact specialties eligible for each activity." },
    { icon: "heart-handshake", title: "CME Event Attendee Nurturing", text: "Pre-event, day-of, and post-event journeys that move registrants toward attendance, completion, and claimed credit." },
    { icon: "user-plus", title: "HCP Acquisition", text: "Net-new clinician acquisition with NPI verification and continuous enrichment, so every audience stays accurate and campaign-ready." }],

    steps: [
    { num: "01", title: "Ingest", text: "Connect 5,000+ healthcare signals from clinical, educational, and credentialing sources." },
    { num: "02", title: "Verify", text: "Continuous NPI, licensure, and NCOA validation keeps every record campaign-ready." },
    { num: "03", title: "Score", text: "Intent and engagement models rank every clinician by topic urgency and likelihood to act." },
    { num: "04", title: "Segment", text: "Compose audiences by specialty, credential, intent, and accreditation alignment in minutes." }],

    outcomes: [
    { val: "2.1M+", label: "Verified Clinicians" },
    { val: "97%", label: "NPI Match Accuracy" },
    { val: "5,000+", label: "Healthcare Signals" },
    { val: "120+", label: "Specialty Taxonomies" }],

    caseStudies: [
    "How a national specialty society built a 40,000-physician CME segment in 48 hours",
    "Academic medical center used intent data to refill grand rounds attendance"]

  },

  "cme-targeting": {
    slug: "cme-targeting",
    num: "02",
    kicker: "Outreach",
    title: "HCP Outreach",
    focus: "Niche Audience Intelligence",
    icon: "send",
    valueProp: "Access niche healthcare audience intelligence powered by intent data, specialty detail, and engagement signals, so every message reaches the right clinician through compliant, precisely targeted outreach.",
    heroBadges: ["Intent-Powered", "Specialty-Level", "HIPAA Compliant", "NPI Verified"],
    challenges: [
    { icon: "users", title: "Undifferentiated HCP Lists", text: "Broad, stock contact lists treat every clinician the same, wasting outreach on professionals who will never engage with your programs." },
    { icon: "shield-alert", title: "Compliance Risk in Outreach", text: "Manual processes and stale records expose teams to consent, suppression, and HIPAA missteps that damage sender reputation and trust." },
    { icon: "eye-off", title: "No Engagement Visibility", text: "Without intent and engagement signals, you can't tell which HCPs are receptive right now versus those who should be left alone." }],

    capabilities: [
    { icon: "crosshair", title: "HCP Segmentation & Profiling", text: "Resolve clinicians by specialty, credential, practice setting, and intent to build tightly defined, campaign-ready segments." },
    { icon: "search", title: "HCP Prospecting", text: "Discover net-new, in-market healthcare professionals that match your ideal audience across 2.1M+ verified records." },
    { icon: "shield-check", title: "Compliant Outreach", text: "Built-in consent management, suppression, and SPF/DKIM authentication keep every touchpoint HIPAA-compliant and inbox-ready." },
    { icon: "megaphone", title: "Targeted HCP Campaigns", text: "Activate precise audiences across verified email, point-of-care, and EHR-adjacent channels with messaging tuned to each specialty." },
    { icon: "bar-chart-3", title: "Campaign Performance Tracking", text: "Channel-level reporting and multi-touch attribution show exactly which outreach drove engagement and response." },
    { icon: "database-zap", title: "HCP Data Enrichment", text: "Append missing NPI numbers, specialties, credentials, and direct contacts to your records and refresh them continuously.", extra: true }],

    steps: [
    { num: "01", title: "Profile", text: "Define your ideal HCP audience by specialty, credential, and intent signal." },
    { num: "02", title: "Prospect", text: "Surface verified, in-market clinicians that match your profile across the network." },
    { num: "03", title: "Engage", text: "Run compliant, channel-appropriate outreach tailored to each segment." },
    { num: "04", title: "Measure", text: "Attribute every response and refine targeting with live engagement data." }],

    outcomes: [
    { val: "2.1M+", label: "Verified Clinicians" },
    { val: "97%", label: "NPI Match Accuracy" },
    { val: "3.4×", label: "Outreach Response Lift" },
    { val: "100%", label: "HIPAA Compliant" }],

    caseStudies: [
    "Specialty pharma team reached 18,000 in-market prescribers with zero compliance flags",
    "Medical society used intent signals to cut outreach volume 40% while lifting response"]

  },

  "multichannel-marketing": {
    slug: "multichannel-marketing",
    num: "03",
    kicker: "Alumni",
    title: "Alumni Growth Engine",
    focus: "Alumni Engagement & Growth",
    icon: "graduation-cap",
    valueProp: "Activate and engage your alumni network to turn trusted clinician relationships into repeat enrollment, new revenue, and long-term growth.",
    heroBadges: ["Alumni Intelligence", "Omnichannel", "Reactivation", "Lifetime Value"],
    challenges: [
    { icon: "user-minus", title: "Dormant Alumni Relationships", text: "Past learners and attendees fade out of contact, and the trust you earned goes unused while acquisition costs keep climbing." },
    { icon: "layers", title: "No Single Alumni View", text: "Alumni records live scattered across event tools, LMS exports, and spreadsheets, making any coordinated engagement nearly impossible." },
    { icon: "trending-down", title: "Leaky Reactivation", text: "Without segmentation and timely outreach, re-enrollment and renewal campaigns reach the wrong people at the wrong moment." }],

    capabilities: [
    { icon: "database", title: "Alumni Intelligence Database", text: "A unified, continuously refreshed record of every past learner, attendee, and member, enriched with current credential and specialty data." },
    { icon: "filter", title: "Alumni Segmentation & Profiling", text: "Group alumni by program history, specialty, engagement recency, and lifetime value to target the right cohorts." },
    { icon: "share-2", title: "Omnichannel Engagement", text: "Coordinated outreach across email, event, and digital channels that keeps alumni connected to your organization." },
    { icon: "database-zap", title: "Alumni Data Enrichment", text: "Append and verify NPI, contact, and credential details so alumni records stay accurate as careers evolve." },
    { icon: "repeat", title: "Learner Reactivation & Retention", text: "Win-back and renewal journeys that re-engage lapsed alumni and keep active learners coming back." },
    { icon: "trending-up", title: "Lifetime Value Growth", text: "Turn one-time attendees into repeat learners and advocates, compounding the value of every alumni relationship.", extra: true }],

    steps: [
    { num: "01", title: "Unify", text: "Consolidate every alumni record into one continuously verified intelligence database." },
    { num: "02", title: "Segment", text: "Profile alumni by history, specialty, and engagement to define high-value cohorts." },
    { num: "03", title: "Engage", text: "Run omnichannel journeys that re-connect and reactivate your network." },
    { num: "04", title: "Grow", text: "Convert renewed relationships into repeat enrollment, revenue, and referrals." }],

    outcomes: [
    { val: "2.4×", label: "Repeat Enrollment Lift" },
    { val: "38%", label: "Lapsed Alumni Reactivated" },
    { val: "+27%", label: "Alumni Lifetime Value" },
    { val: "92%", label: "Record Match Accuracy" }],

    caseStudies: [
    "Academic CME office reactivated 38% of lapsed alumni in a single semester",
    "Specialty society turned past attendees into a recurring revenue stream"]

  },

  "nursing": {
    slug: "nursing",
    num: "04",
    kicker: "Nursing",
    title: "Nurse Audience Intelligence",
    focus: "Nursing CE & Certification Programs",
    icon: "stethoscope",
    valueProp: "Reach and engage the entire nursing workforce, from CNAs to APRNs, with license-verified audience intelligence built for continuing education, certification, and clinical leadership programs.",
    heroBadges: ["License Verified", "4M+ Nurses", "All Career Levels", "HIPAA Compliant"],
    challenges: [
    { icon: "users", title: "One-Size-Fits-All Nurse Lists", text: "Generic healthcare lists can't separate a CNA from an APRN, so CE and certification offers reach nurses they were never meant for." },
    { icon: "clock-alert", title: "Missed Licensure & CE Windows", text: "Without renewal-cycle intelligence, you miss the window when nurses are actively seeking the contact hours they need to stay licensed." },
    { icon: "puzzle", title: "Fragmented Nursing Credentials", text: "License level, specialty certification, and practice setting live in disconnected systems, making clean nurse segmentation nearly impossible." }],

    nurseTypes: [
    { abbr: "CNA", icon: "heart-handshake", title: "Certified Nursing Assistants", text: "Connect with frontline caregivers responsible for daily patient support and basic clinical assistance. Ideal for foundational education programs, compliance training, and entry-level healthcare learning initiatives." },
    { abbr: "LPN / LVN", icon: "clipboard-plus", title: "Licensed Practical & Vocational Nurses", text: "Engage nursing professionals who provide direct patient care, medication administration, and clinical support under physician or RN supervision. Perfect for vocational education, continuing education, and skill enhancement programs." },
    { abbr: "RN", icon: "stethoscope", title: "Registered Nurses", text: "Reach one of the largest and most influential healthcare audiences. RNs coordinate patient care, administer treatments, and play a central role in healthcare delivery. Promote CE courses, specialty certifications, leadership programs, and clinical education directly to practicing nurses." },
    { abbr: "APRN", icon: "award", title: "Advanced Practice Registered Nurses", text: "Target highly specialized clinicians including Nurse Practitioners (NPs), Certified Nurse Midwives (CNMs), and Certified Registered Nurse Anesthetists (CRNAs). These advanced nurses seek specialized education, certification maintenance, leadership development, and emerging clinical knowledge." }],

    capabilities: [
    { icon: "crosshair", title: "License-Level Segmentation", text: "Build audiences by exact license level, CNA through APRN, so every CE and certification offer lands with the right nursing tier." },
    { icon: "microscope", title: "Specialty & Certification Targeting", text: "Resolve nursing specialties and active certifications across acute, ambulatory, and long-term care settings." },
    { icon: "activity", title: "CE Renewal Intent Signals", text: "Behavioral and licensure-cycle signals surface which nurses are actively seeking contact hours and certification right now." },
    { icon: "megaphone", title: "Multi-Channel Nurse Outreach", text: "Activate verified nurse audiences across compliant email, point-of-care, and digital channels tuned to each career level." },
    { icon: "bar-chart-3", title: "Campaign Performance Tracking", text: "Channel-level reporting and multi-touch attribution show exactly which programs drove enrollment and credit completion." },
    { icon: "database-zap", title: "Nursing Data Enrichment", text: "Append and verify license numbers, specialties, credentials, and direct contacts so nurse records stay accurate as careers advance." }],

    steps: [
    { num: "01", title: "Profile", text: "Define your target nursing audience by license level, specialty, and CE need." },
    { num: "02", title: "Target", text: "Activate verified nurses inside the right career tier and renewal window." },
    { num: "03", title: "Engage", text: "Run compliant, career-level-appropriate outreach for CE and certification programs." },
    { num: "04", title: "Measure", text: "Attribute every enrollment and completion back to its originating campaign." }],

    outcomes: [
    { val: "4M+", label: "Verified Nurses" },
    { val: "4", label: "Career Levels Covered" },
    { val: "96%", label: "License Match Accuracy" },
    { val: "100%", label: "HIPAA Compliant" }],

    caseStudies: [
    "Nursing CE provider tripled RN enrollment by targeting active renewal windows",
    "APRN certification body filled specialty cohorts using license-level segmentation"]

  }
};

const ORDER = ["audience-intelligence", "cme-targeting", "multichannel-marketing", "nursing"];

/* --------------------------- Solution Detail --------------------------- */
function SolutionHero({ data }) {
  return (
    <header className="relative min-h-[560px] bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-20 px-6 overflow-hidden flex items-center">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute bottom-[-220px] left-[-160px] w-[520px] h-[520px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7">
          <div className="text-xs text-white/50 mb-4 flex items-center gap-2">
            <a href="index.html" className="hover:text-teal3 transition">Home</a>
            <span>/</span>
            <a href="index.html#our-solutions" className="hover:text-teal3 transition">Solutions</a>
            <span>/</span>
            <span className="text-white/80">{data.title}</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
            Solution {data.num} · {data.kicker}
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.2rem] text-white leading-[1.1] tracking-tight mb-6 text-balance">
            {data.title}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8 leading-relaxed">
            {data.valueProp}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Quick Demo <Icon name="arrow-right" size={18} />
            </a>
            <a href="#capabilities" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              Explore Capabilities
            </a>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 max-w-md text-white/60 text-xs font-medium">
            {data.heroBadges.map((t, i) =>
            <div key={i} className="flex items-center gap-2"><span className="text-teal3"><Icon name="check-circle-2" size={14} /></span> {t}</div>
            )}
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-xl shadow-2xl shadow-black/40">
            <div className="flex items-center gap-3 pb-5 mb-5 border-b border-white/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/25">
                <Icon name={data.icon} size={22} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-teal3 uppercase tracking-widest">Solution {data.num}</div>
                <div className="font-display font-bold text-white text-sm">{data.kicker}</div>
              </div>
              <span className="ml-auto font-display font-extrabold text-3xl text-white/15 leading-none">{data.num}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {data.outcomes.map((m, i) =>
              <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-4">
                  <div className="font-display font-extrabold text-2xl text-teal3">{m.val}</div>
                  <div className="text-white/50 text-[11px] mt-1">{m.label}</div>
                </div>
              )}
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 flex items-center gap-2.5 mt-5">
              <span className="text-gold"><Icon name="shield-check" size={16} /></span>
              <span className="text-xs text-gold font-medium">HIPAA compliant · ACCME-aligned · NPI Verified</span>
            </div>
          </div>
        </div>
      </div>
    </header>);
}

function Challenges({ data }) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">The Challenge</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
          What This Solution <em className="not-italic text-teal1">Solves</em>
        </h2>
        <p className="text-slate-500" style={{ color: "rgb(6, 30, 63)" }}>The specific gaps in medical education marketing that this solution was built to close.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.challenges.map((c, idx) =>
        <div key={idx} className="border border-slate-100 bg-white hover:border-teal2 rounded-2xl p-7 lift shadow-sm hover:shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
            <div className="mb-4 text-amber-500"><Icon name={c.icon} size={32} strokeWidth={1.75} /></div>
            <h3 className="font-display font-bold text-base text-ink mb-2">{c.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{c.text}</p>
          </div>
        )}
      </div>
    </section>);
}

function Capabilities({ data }) {
  return (
    <section id="capabilities" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">What's Included</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
            Capabilities Built for <em className="not-italic text-teal1">{data.focus}</em>
          </h2>
          <p className="text-slate-500" style={{ color: "rgb(6, 30, 63)" }}>Every capability is purpose-built for the CME ecosystem and works independently or alongside the rest of the MedReachIQ stack.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.capabilities.map((cap, i) =>
          <div key={i} className={`rounded-2xl p-6 lift shadow-sm hover:shadow-lg transition group relative overflow-hidden ${cap.extra ? "bg-ink border border-ink2" : "bg-white border border-slate-100 hover:border-teal2"}`}>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${cap.extra ? "bg-teal3/20 text-teal3" : "bg-teal3/15 text-teal1"}`}>
                <Icon name={cap.icon} size={20} />
              </div>
              <h3 className={`font-display font-bold text-base mb-2 leading-snug ${cap.extra ? "text-white" : "text-ink"}`}>{cap.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: cap.extra ? "rgba(255,255,255,0.7)" : "rgb(6, 30, 63)" }}>{cap.text}</p>
            </div>
          )}
        </div>
      </div>
    </section>);
}

function HowItWorks({ data }) {
  return (
    <section className="bg-ink py-20 px-6 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal3 uppercase tracking-widest block mb-2">How It Works</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-4 tracking-tight text-balance">
            From <span className="text-teal3">Setup</span> to Measurable Outcome in 4 Steps
          </h2>
          <p className="text-white/60">A repeatable workflow purpose-built for ACCME-accredited organizations and CME marketing teams.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {data.steps.map((step, idx) =>
          <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative lift hover:border-teal3/40 hover:bg-white/[0.07]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center font-display font-extrabold text-lg text-white mb-4 shadow-lg shadow-teal1/30">
                {step.num}
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-2">{step.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{step.text}</p>
              {idx < data.steps.length - 1 &&
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

function Outcomes({ data }) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Proof Points</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
          Outcomes CME Teams <em className="not-italic text-teal1">Actually Report</em>
        </h2>
        <p className="text-slate-500" style={{ color: "rgb(6, 30, 63)" }}>Aggregated benchmarks from MedReachIQ customers running this solution across cardiology, oncology, primary care, and specialty board programs.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {data.outcomes.map((o, i) =>
        <div key={i} className="bg-white border border-slate-100 rounded-2xl p-7 text-center shadow-sm">
            <div className="font-display font-extrabold text-4xl text-teal1 mb-2">{o.val}</div>
            <div className="text-sm text-slate-500" style={{ color: "rgb(6, 30, 63)" }}>{o.label}</div>
          </div>
        )}
      </div>
    </section>);
}

function RelatedCaseStudies({ data }) {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Related Success Stories</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              How teams put this solution to work
            </h2>
          </div>
          <a href="index.html#case-studies" className="text-sm font-bold text-teal1 hover:text-teal2 flex items-center gap-1.5">
            View all case studies <Icon name="arrow-right" size={14} strokeWidth={2.5} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.caseStudies.map((cs, i) =>
          <a key={i} href="#" className="group bg-white border border-slate-100 rounded-2xl p-7 flex items-start gap-5 hover:border-teal2 hover:shadow-lg shadow-sm transition lift relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
              <div className="w-12 h-12 rounded-xl bg-teal3/15 flex items-center justify-center text-teal1 shrink-0">
                <Icon name="file-text" size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-base text-ink mb-2 leading-snug">{cs}</h3>
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal1 uppercase tracking-wider">
                  <span>Read Success Story</span>
                  <Icon name="arrow-right" size={14} strokeWidth={2.5} />
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);
}

function CrossSell({ data }) {
  const others = ORDER.filter((s) => s !== data.slug).map((s) => SOLUTIONS[s]);
  const slugToFile = {
    "audience-intelligence": "solution-audience-intelligence.html",
    "cme-targeting": "solution-cme-targeting.html",
    "multichannel-marketing": "solution-multichannel-marketing.html",
    "nursing": "solution-nursing.html"
  };
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">The Connected Stack</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
          Stronger Together With <em className="not-italic text-teal1">The Rest of MedReachIQ</em>
        </h2>
        <p className="text-slate-500" style={{ color: "rgb(6, 30, 63)" }}><span style={{ color: "rgb(6, 30, 63)" }}>Every solution works on its own, and combines naturally with the others to cover the full CME marketing lifecycle.</span></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {others.map((sol, idx) =>
        <a key={idx} href={slugToFile[sol.slug]} className="group bg-white border border-slate-100 rounded-2xl p-7 flex flex-col lift shadow-sm hover:shadow-lg hover:border-teal2 transition relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/25">
                <Icon name={sol.icon} size={22} />
              </div>
              <span className="font-display font-extrabold text-3xl text-slate-200 leading-none">{sol.num}</span>
            </div>
            <span className="text-[10px] font-bold text-teal1 uppercase tracking-widest block mb-2">Solution {sol.num} · {sol.kicker}</span>
            <h3 className="font-display font-extrabold text-xl text-ink mb-2 tracking-tight">{sol.title}</h3>
            <p className="text-sm mb-5" style={{ color: "rgb(6, 30, 63)" }}>{sol.focus}</p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-teal1 uppercase tracking-wider">
              <span>Explore solution</span>
              <Icon name="arrow-right" size={14} strokeWidth={2.5} />
            </div>
          </a>
        )}
      </div>
    </section>);
}

function CTA({ data }) {
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
              See {data.title.split(" ").slice(0, 3).join(" ")} in action with your data
            </h2>
            <p className="text-white/70 leading-relaxed mb-7 max-w-xl">
              In a 30-minute demo, we'll show you the verified, intent-active clinicians inside your therapeutic area and walk through a sample campaign tailored to this solution.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
                Book a Quick Demo <Icon name="arrow-right" size={18} />
              </a>
              <a href="#" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition" style={{ fontSize: "17px" }}>
                Download CME Marketing Benchmark
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-4">What you'll get</div>
              <ul className="space-y-3 text-sm text-white/80">
                {[
                "A walkthrough of your eligible audience",
                "A sample multi-channel CME journey",
                "Benchmarks for your specialty mix",
                "A pricing & rollout proposal"].
                map((t, i) =>
                <li key={i} className="flex items-start gap-2.5">
                    <span className="text-teal3 mt-0.5"><Icon name="check-circle-2" size={16} /></span>
                    {t}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

function NurseTypes({ data }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-2">Who You Can Reach</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4 tracking-tight text-balance">
            Target Nursing Professionals by <em className="not-italic text-teal1">Career Level</em>
          </h2>
          <p className="text-slate-500" style={{ color: "rgb(6, 30, 63)" }}>From frontline caregivers to advanced clinicians, reach every tier of the nursing workforce with messaging matched to their license and learning needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.nurseTypes.map((n, i) =>
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-7 lift shadow-sm hover:shadow-lg hover:border-teal2 transition group relative overflow-hidden flex gap-5">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center text-white shadow-lg shadow-teal1/25 mb-2">
                  <Icon name={n.icon} size={24} />
                </div>
                <div className="text-center font-display font-extrabold text-[11px] text-teal1 tracking-wider">{n.abbr}</div>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-ink mb-2 leading-snug">{n.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{n.text}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);
}

function SolutionPage({ slug }) {
  const data = SOLUTIONS[slug];
  if (!data) {
    return <div className="p-20 text-center text-ink">Solution not found.</div>;
  }
  useEffect(() => {
    document.title = `${data.title} | MedReachIQ`;
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav currentSlug={slug} />
      <SolutionHero data={data} />
      <Challenges data={data} />
      {data.nurseTypes && <NurseTypes data={data} />}
      <Capabilities data={data} />
      <HowItWorks data={data} />
      <Outcomes data={data} />
      <RelatedCaseStudies data={data} />
      <CrossSell data={data} />
      <CTA data={data} />
      <Footer />
    </div>);
}

/* --------------------------- Use Cases Page --------------------------- */
const USE_CASE_TABS = [
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

function UseCasesHero() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="text-xs text-white/50 mb-5 flex items-center justify-center gap-2">
          <a href="index.html" className="hover:text-teal3 transition">Home</a>
          <span>/</span>
          <span className="text-white/80">Use Cases</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
          Use Cases
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-6 text-balance max-w-3xl mx-auto">
          Built for Every CME Format &amp; <em className="not-italic text-teal3">Educational Activity</em>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you're filling seats for a grand rounds series or scaling enrollment for enduring digital materials, MedReachIQ has a proven playbook for every program type.
        </p>
      </div>
    </header>);
}

function UseCasesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = USE_CASE_TABS[activeTab];
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {USE_CASE_TABS.map((t, idx) =>
        <button
          key={idx}
          onClick={() => setActiveTab(idx)}
          className={`px-4 py-2 text-xs font-semibold rounded-full border transition ${activeTab === idx ? "bg-ink text-white border-ink" : "border-slate-200 text-slate-600 hover:border-teal2 hover:text-teal1 bg-white"}`}>
            {t.btnLabel}
          </button>
        )}
      </div>
      <div className="rounded-3xl p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-5 gap-10" style={{ backgroundColor: "rgb(23, 42, 68)" }}>
        <div className="lg:col-span-3">
          <h3 className="font-display font-extrabold text-2xl lg:text-3xl mb-3 tracking-tight text-balance" style={{ color: "rgb(239, 242, 245)" }}>{tab.title}</h3>
          <p className="mb-6 leading-relaxed" style={{ color: "rgb(200, 218, 216)" }}>{tab.desc}</p>
          <ul className="space-y-3">
            {tab.bullets.map((b, i) =>
            <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "rgb(127, 236, 236)" }}>
                <span className="text-teal3 mt-0.5 shrink-0"><Icon name="check-circle-2" size={18} /></span>
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
          <div className="mt-5 flex items-start gap-2 text-[11px] italic leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            <span className="shrink-0 mt-0.5"><Icon name="info" size={12} /></span>
            <span>{tab.note}</span>
          </div>
        </div>
      </div>
    </section>);
}

function UseCasesPage() {
  useEffect(() => {
    document.title = "Use Cases | MedReachIQ";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <UseCasesHero />
      <UseCasesTabs />
      <Footer />
    </div>);
}

/* --------------------------- How It Works Page --------------------------- */
const HIW_STEPS = [
{ num: "1", title: "Capture Healthcare Intent Data", text: "Our AI engine monitors 5,000+ healthcare signals including ACCME content searches, board certification lookups, and MOC portal activity." },
{ num: "2", title: "Build Your CME Audience Segment", text: "Layer NPI-verified physician data with specialty, geography, board status, practice setting, and interprofessional role filters." },
{ num: "3", title: "Activate Multi-Channel Outreach", text: "Deploy HIPAA-compliant CME email marketing, physician webinar marketing, healthcare ABM strategies, and programmatic display." },
{ num: "4", title: "Measure Learning Outcomes & ROI", text: "Close the loop with attribution reporting that ties CME attendee acquisition to actual learning outcomes and completions." }];

function HowItWorksHero() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="text-xs text-white/50 mb-5 flex items-center justify-center gap-2">
          <a href="index.html" className="hover:text-teal3 transition">Home</a>
          <span>/</span>
          <span className="text-white/80">How MedReachIQ Works</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
          How MedReachIQ Works
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-6 text-balance max-w-3xl mx-auto">
          From <em className="not-italic text-teal3">Intent Signal</em> to Enrolled Clinician in 4 Steps
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Our audience intelligence platform connects your CME programs with verified, intent-active healthcare professionals through a HIPAA-compliant multi-channel core engine.
        </p>
      </div>
    </header>);
}

function HowItWorksSteps() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {HIW_STEPS.map((step, idx) =>
        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-7 relative lift shadow-sm hover:shadow-lg hover:border-teal2 transition group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal1 to-teal2 opacity-0 group-hover:opacity-100 transition" />
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal1 to-teal2 flex items-center justify-center font-display font-extrabold text-lg text-white mb-4 shadow-lg shadow-teal1/30">
              {step.num}
            </div>
            <h3 className="font-display font-bold text-base text-ink mb-2 leading-snug">{step.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{step.text}</p>
            {idx < HIW_STEPS.length - 1 &&
          <div className="hidden lg:block absolute top-11 -right-4 text-slate-200">
                <Icon name="chevron-right" size={20} />
              </div>
          }
          </div>
        )}
      </div>
    </section>);
}

function HowItWorksPage() {
  useEffect(() => {
    document.title = "How MedReachIQ Works | MedReachIQ";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <HowItWorksHero />
      <HowItWorksSteps />
      <Footer />
    </div>);
}

/* --------------------------- Bootstrap --------------------------- */
function bootstrapPage() {
  const slug = window.__SOLUTION_SLUG__;
  if (slug === "use-cases") return <UseCasesPage />;
  if (slug === "how-it-works") return <HowItWorksPage />;
  return <SolutionPage slug={slug} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(bootstrapPage());