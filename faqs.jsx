/* ============================================================
   FAQs — frequently asked questions, grouped by topic.
   Reuses Nav, Footer, Icon from solutions.jsx (exported to window).
   ============================================================ */
const { useState: useStateFaq, useEffect: useEffectFaq } = React;
const { Nav: NavFaq, Footer: FooterFaq, Icon: IconFaq } = window;

const FAQ_GROUPS = [
{
  group: "Data & Coverage",
  icon: "database",
  items: [
  { q: "Where does your healthcare data come from?", a: "We aggregate NPI-verified physician and clinician records from licensure boards, professional registries, and accredited sources, then continuously validate them against NPI, state licensure, and NCOA data so every record stays campaign-ready." },
  { q: "How many healthcare professionals are in your database?", a: "Our medical professional database covers 2.1M+ NPI-verified physicians and clinicians across 120+ specialty taxonomies, plus nurses, pharmacists, dentists, physician assistants, and healthcare executives." },
  { q: "How accurate and current is the data?", a: "We report a 97% NPI match accuracy and refresh records continuously. Licensure, specialty, practice setting, and contact details are re-verified on a rolling basis rather than in occasional bulk updates." },
  { q: "Do you offer a healthcare contact database for direct outreach?", a: "Yes. Our healthcare contact database is a continuously verified healthcare professional database and clinician database that also functions as a medical specialty database, pairing every NPI-validated record with deliverable email, direct line, and practice address data so your outreach lands." },
  { q: "Which types of healthcare professionals can I reach?", a: "Our physician database spans every provider type, from a specialist physician database and primary care physician contacts to nurse practitioner contacts, a physician assistant database, and a healthcare executive database. Because every record is built on licensed healthcare professional data, you can pull a medical specialist email list, a medical practitioner mailing list, or broader healthcare provider contacts from a single healthcare workforce database." }]
},
{
  group: "Targeting & Segmentation",
  icon: "crosshair",
  items: [
  { q: "How granular is your audience segmentation?", a: "You can segment by specialty and subspecialty, credential, board status, practice setting, geography, accreditation eligibility, and real-time intent signals, alone or in combination, to build a campaign-ready audience for each activity." },
  { q: "What is healthcare intent data and how do you use it?", a: "Intent data is the set of behavioral signals that show which clinicians are actively researching a topic. We score those signals by topic and urgency so your outreach reaches physicians who are in-market right now." },
  { q: "Can you target a specific specialty or board?", a: "Yes. We resolve subspecialties across ABMS boards and specialty societies, so you can promote each activity to exactly the clinicians eligible for it." },
  { q: "How does HCP targeting and audience segmentation work?", a: "Our HCP targeting and HCP audience targeting combine physician targeting data with healthcare audience segmentation, so you can build precise segments in minutes and pull healthcare audience insights from a single source rather than stitching together fragmented lists." },
  { q: "What behavioral data powers your intent signals?", a: "We layer HCP behavioral data and CME intent data intelligence on top of healthcare intent data, scoring clinical research and engagement activity by topic and urgency so you reach clinicians who are in-market right now." },
  { q: "How granular is your healthcare professional segmentation?", a: "Healthcare professional segmentation is built into the platform, so our HCP audience intelligence lets you slice any audience by specialty, credential, practice setting, and live intent before you ever launch a campaign." }]
},
{
  group: "Specialty Coverage",
  icon: "stethoscope",
  items: [
  { q: "Can you build specialty-specific physician audiences?", a: "Yes. Healthcare specialty targeting lets you build a cardiologist database, an oncology physician database, a neurologist email list, orthopedic surgeon contacts, a dermatologist database, a radiologist marketing list, a gastroenterologist database, or endocrinologist contacts on demand, each NPI-verified and campaign-ready." },
  { q: "Do you cover primary care and high-volume specialties too?", a: "Absolutely. Alongside niche subspecialties we maintain a family medicine physician database, internal medicine physician contacts, an emergency medicine physician list, a psychiatry physician database, pediatrics physician contacts, and nurse practitioner specialty lists, so no audience is out of reach." }]
},
{
  group: "Compliance & Privacy",
  icon: "shield-check",
  items: [
  { q: "Is your data HIPAA compliant?", a: "Yes. We operate within a HIPAA-compliant framework and design every audience and campaign around CAN-SPAM, ACCME, and applicable privacy requirements so your outreach stays defensible." },
  { q: "Are you an ACCME-accredited provider?", a: "No. CMEIntent is not an ACCME-accredited provider; we support accredited organizations with the audience intelligence and marketing execution behind their CME and MOC programs." }]
},
{
  group: "Working With CMEIntent",
  icon: "handshake",
  items: [
  { q: "Do you run campaigns, or just provide data?", a: "Both. You can license audience intelligence to run in-house, or engage our team to manage end-to-end CME and MOC marketing campaigns across email, display, and ABM channels." },
  { q: "How do you measure results?", a: "We tie every enrollment and completion back to its originating campaign with channel-level attribution reporting, so you can see what drove registrations, engagement, and credit completion." },
  { q: "How do we get started?", a: "Book a 30-minute demo and we'll run a free audience scan of your therapeutic area, share benchmarks for your activity formats, and outline a sample campaign tailored to your programs." },
  { q: "Do you provide CME lead generation services?", a: "Yes. We deliver CME lead generation services and continuing medical education marketing programs that convert healthcare marketing leads into registrations, including event and medical conference marketing across email, display, and ABM channels." }]
}];

function FaqHero() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="text-xs text-white/50 mb-5 flex items-center justify-center gap-2">
          <a href="index.html" className="hover:text-teal3 transition">Home</a>
          <span>/</span>
          <span className="text-white/80">FAQs</span>
        </div>
        <div className="inline-flex items-center gap-2 bg-teal1/20 border border-teal3/30 text-teal3 text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-teal3 pulse-dot" />
          Frequently Asked Questions
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-[1.1] tracking-tight mb-6 text-balance max-w-3xl mx-auto">
          Answers About <em className="not-italic text-teal3">Healthcare Data &amp; CME Marketing</em>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          The questions CME and MOC teams ask us most, about our data, targeting, compliance, and how we work together.
        </p>
      </div>
    </header>);
}

function FaqList() {
  const [open, setOpen] = useStateFaq("0-0");
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="space-y-12">
        {FAQ_GROUPS.map((grp, gi) =>
        <div key={gi}>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal1 to-teal2 text-white flex items-center justify-center shadow-lg shadow-teal1/25">
              <IconFaq name={grp.icon} size={18} />
            </span>
            <h2 className="font-display font-extrabold text-2xl text-ink tracking-tight">{grp.group}</h2>
          </div>
          <div className="space-y-3">
            {grp.items.map((f, ii) => {
              const key = `${gi}-${ii}`;
              const isOpen = open === key;
              return (
                <div key={ii} className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition hover:border-teal2/60 shadow-sm">
                  <button
                    onClick={() => setOpen(isOpen ? "" : key)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                    aria-expanded={isOpen}>
                    <span className="font-display font-bold text-base text-ink leading-snug">{f.q}</span>
                    <span className={`shrink-0 text-teal1 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                      <IconFaq name="plus" size={20} strokeWidth={2.5} />
                    </span>
                  </button>
                  <div className="grid transition-all duration-200 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "rgb(6, 30, 63)" }}>{f.a}</p>
                    </div>
                  </div>
                </div>);
            })}
          </div>
        </div>
        )}
      </div>
    </section>);
}

function FaqCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-10 lg:p-12 relative overflow-hidden text-center">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3 tracking-tight">Still have a question?</h2>
          <p className="text-white/70 leading-relaxed mb-7 max-w-xl mx-auto">Talk to our team and we'll walk through your specialty, your goals, and how CMEIntent can help.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="index.html#demo" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Quick Demo <IconFaq name="arrow-right" size={18} />
            </a>
            <a href="contact.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>);
}

function FaqPage() {
  useEffectFaq(() => {
    document.title = "FAQs: Healthcare Data & CME Marketing | CMEIntent";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <NavFaq />
      <FaqHero />
      <FaqList />
      <FaqCTA />
      <FooterFaq />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<FaqPage />);
