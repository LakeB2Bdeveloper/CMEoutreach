const { useState, useEffect, useRef } = React;
const { Icon, Nav, Footer } = window;

/* keyword highlight helpers */
const KP = ({ children, href }) => href
  ? <a href={href} className="kw-primary">{children}</a>
  : <span className="kw-primary">{children}</span>;
const KW = ({ children, href }) => href
  ? <a href={href} className="kw">{children}</a>
  : <span className="kw">{children}</span>;

/* ----------------------------- Article header -------------------------- */
function ArticleHead() {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-14 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-xs text-white/50 mb-6 flex items-center gap-2 flex-wrap">
          <a href="index.html" className="hover:text-teal3 transition">Home</a><span>/</span>
          <a href="case-studies.html" className="text-teal3 hover:text-teal2 transition">Case Studies</a><span>/</span>
          <span className="text-white/80">Verified medical professional database</span>
        </div>
        <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-4">Multi-Specialty Society</div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-[1.08] tracking-tight mb-6 text-balance">
          Rebuilding outreach on a verified <em className="not-italic text-teal3">medical professional database</em>
        </h1>
        <div className="flex items-center gap-3 flex-wrap text-[13px] text-white/55 font-medium">
          <span>CMEIntent Team</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>June 2026</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>6 min read</span>
        </div>
      </div>
    </header>);
}

/* ------------------------------- Stat band ----------------------------- */
function Stats({ items }) {
  return (
    <div className="max-w-4xl mx-auto px-6 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((s, i) =>
        <div key={i} className="rounded-2xl border border-ink2 bg-ink p-6 text-center">
          <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">{s.val}</div>
          <div className="text-[13px] font-medium text-white/65 mt-1.5 leading-snug">{s.label}</div>
        </div>
        )}
      </div>
    </div>);
}

/* ------------------------------- Article ------------------------------- */
function Article() {
  return (
    <article className="bg-white">
      <figure className="max-w-4xl mx-auto px-6 pt-12">
        <image-slot
          id="case-database-lead"
          shape="rounded"
          radius="24"
          fit="cover"
          placeholder="Drop or click to upload the lead image"
          style={{ width: "100%", height: "auto", aspectRatio: "2 / 1", display: "block" }}>
        </image-slot>
        <figcaption className="text-center text-[12px] text-slate-400 mt-6 font-medium">A verified, continuously refreshed database replaced a list that had been quietly decaying for years.</figcaption>
      </figure>

      <Stats items={[
        { val: "97%", label: "NPI match accuracy after rebuild" },
        { val: "2.4×", label: "Improvement in deliverability" },
        { val: "120+", label: "Specialty taxonomies resolved" }]} />

      <div className="post-body max-w-[680px] mx-auto px-6 pt-12 pb-4">
        <p className="lead-para">A large multi-specialty society had spent years building a contact file the hard way, one event and one import at a time. On paper it looked impressive. In practice, bounce rates were climbing, whole specialties were mislabeled, and the marketing team had stopped trusting their own audience. The fix was not a better email. It was a better foundation.</p>

        <h2>The challenge</h2>
        <p>The society's list had never been a real <KP href="solutions/cme-audience-intelligence.html">medical professional database</KP>. It was a static export that began decaying the moment it was created. Physicians had changed practices, retired, and updated credentials, and none of that had flowed back into the file. Because records carried only a name and an address, the team could not segment by subspecialty or eligibility, so every campaign went out broad and landed soft.</p>

        <h2>The approach</h2>
        <p>We started by replacing the list with a verified, continuously maintained foundation. Every record was validated against NPI, state licensure, and address-change data, then enriched so that the file functioned as a true <KW href="solutions/cme-audience-intelligence.html">clinician database</KW> and <KW href="solutions/cme-audience-intelligence.html">medical specialty database</KW> rather than a flat spreadsheet.</p>

        <p>That rebuilt foundation did several jobs at once:</p>
        <ul>
          <li><strong>Coverage.</strong> A <KW href="solutions/cme-audience-intelligence.html">healthcare professional database</KW> spanning physicians, nurses, pharmacists, and executives across more than 120 specialty taxonomies.</li>
          <li><strong>Contactability.</strong> A clean <KW href="solutions/cme-audience-intelligence.html">healthcare contact database</KW> with deliverable email, verified direct lines, and confirmed practice addresses.</li>
          <li><strong>Precision.</strong> Rich <KP href="solutions/cme-audience-intelligence.html">physician targeting data</KP> on credential, board status, and practice setting, so audiences could be built down to the subspecialty.</li>
        </ul>

        <blockquote className="pullquote">The society did not need a bigger list. It needed a file it could believe, where every record was current and every specialty was correct.</blockquote>

        <p>With that in place, the team could finally run precise <KW href="solutions/hcp-outreach.html">HCP targeting</KW>. Instead of emailing the whole membership and hoping, they built a tailored audience for each activity, matched to the exact clinicians the program was accredited for.</p>

        <h2>The results</h2>
        <p>Match accuracy climbed to 97 percent and deliverability more than doubled, which lifted engagement across every campaign and restored the team's confidence in their own data. Planning got easier too: with subspecialties resolved and eligibility attached to each record, the society could forecast reach for any activity before a single email went out.</p>

        <p>The deeper win was durability. Because the database is maintained continuously rather than refreshed in occasional bulk imports, it stays accurate between campaigns instead of decaying the way the old list did. The society now treats it as a core asset that feeds intent scoring, segmentation, and attribution, not as a file to be repurchased every year.</p>
      </div>

      <div className="max-w-[680px] mx-auto px-6 mt-10 mb-16">
        <a href="case-studies.html" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-ink hover:bg-ink2 text-white text-sm font-bold shadow-md transition lift">
          <Icon name="arrow-left" size={16} strokeWidth={2.5} /> Back to all case studies
        </a>
      </div>
    </article>);
}

/* --------------------------- Related reading --------------------------- */
const RELATED = [
{ href: "case-studies/cme-lead-generation.html", category: "Accredited CME Provider", title: "CME lead generation services that tripled qualified enrollments", excerpt: "How verified intent turned a flat funnel into a predictable enrollment pipeline." },
{ href: "case-studies/audience-segmentation.html", category: "Medical Conference Series", title: "Healthcare audience segmentation that filled a medical conference", excerpt: "Segmentation and intent intelligence that sold out the room ahead of the early-bird deadline." },
{ href: "blog-medical-professional-database.html", category: "Data", title: "What makes a medical professional database worth using", excerpt: "Coverage, accuracy, and segmentation depth that separate a real database from a stale list." }];

function Related() {
  return (
    <section className="bg-[#F4F7FA] border-t border-slate-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-9">
          <div className="text-[11px] font-bold text-teal1 uppercase tracking-widest mb-2">Keep reading</div>
          <h2 className="font-display font-extrabold text-3xl text-ink tracking-tight text-balance">More outcomes from CMEIntent teams</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {RELATED.map((r, i) =>
          <a key={i} href={r.href} className="group flex flex-col gap-2.5 rounded-2xl border border-ink2 bg-ink p-7 shadow-sm hover:shadow-lg hover:border-teal3 transition lift">
              <div className="text-[10px] font-bold text-teal3 uppercase tracking-widest">{r.category}</div>
              <h3 className="font-display font-bold text-[19px] text-white leading-snug tracking-tight group-hover:text-teal3 transition text-balance">{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{r.excerpt}</p>
              <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-xs font-bold text-teal3 group-hover:gap-2.5 transition-all">Read more <Icon name="arrow-right" size={14} strokeWidth={2.5} /></span>
            </a>
          )}
        </div>
      </div>
    </section>);
}

/* ------------------------------- CTA ----------------------------------- */
function ArticleCTA() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight text-balance">
            See how clean your audience could be
          </h2>
          <p className="text-white/70 leading-relaxed mb-7">
            Book a 30-minute discovery call and we will run a free audience scan of your specialty against our verified database. No slides, no pressure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="contact.html" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Discovery Call <Icon name="arrow-right" size={18} />
            </a>
            <a href="case-studies.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              Back to Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>);
}

/* ------------------------------- Page ---------------------------------- */
function ArticlePage() {
  useEffect(() => {
    document.title = "Case Study: Verified Medical Professional Database | CMEIntent";
  }, []);
  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <ArticleHead />
      <Article />
      <Related />
      <ArticleCTA />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<ArticlePage />);
