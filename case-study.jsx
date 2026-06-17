const { useEffect } = React;
const { Icon, Nav, Footer } = window;

const DATA = (window.CASE_STUDIES || {})[window.__CASE_SLUG__];

/* Render a title array: even fragments plain, odd fragments emphasized. */
function Title({ parts }) {
  return (
    <React.Fragment>
      {parts.map((p, i) =>
        i % 2 === 1
          ? <em key={i} className="not-italic text-teal3">{p}</em>
          : <React.Fragment key={i}>{p}</React.Fragment>
      )}
    </React.Fragment>);
}

function CaseHead({ data }) {
  return (
    <header className="relative bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] pt-32 pb-14 px-6 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full hero-glow pointer-events-none z-[2]" />
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none z-[2]" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-xs text-white/50 mb-6 flex items-center gap-2 flex-wrap">
          <a href="index.html" className="hover:text-teal3 transition">Home</a><span>/</span>
          <a href="case-studies.html" className="text-teal3 hover:text-teal2 transition">Case Studies</a><span>/</span>
          <span className="text-white/80">{data.client}</span>
        </div>
        <div className="text-[11px] font-bold text-teal3 uppercase tracking-widest mb-4">{data.client}</div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-[1.08] tracking-tight mb-6 text-balance">
          <Title parts={data.title} />
        </h1>
        <div className="flex items-center gap-3 flex-wrap text-[13px] text-white/55 font-medium">
          <span>CMEIntent Team</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>{data.date}</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>{data.read}</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <a href={data.areaHref} className="text-teal3 hover:text-teal2 transition">{data.area}</a>
        </div>
      </div>
    </header>);
}

function MetricStrip({ metrics }) {
  return (
    <section className="px-6 -mt-8 relative z-20">
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 shadow-lg">
        {metrics.map((m, i) =>
          <div key={i} className="bg-white px-4 py-7 text-center">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-teal1 tracking-tight tabular-nums">{m.val}</div>
            <div className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1.5 leading-snug">{m.label}</div>
          </div>
        )}
      </div>
    </section>);
}

function Section({ title, intro, paras, bullets }) {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      {intro && <p className="lead-para">{intro}</p>}
      {paras && paras.map((p, i) => <p key={i}>{p}</p>)}
      {bullets &&
        <ul>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>}
    </React.Fragment>);
}

function KeepExploring({ data }) {
  const sib = (window.CASE_STUDIES || {})[data.sibling];
  return (
    <section className="py-16 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-bold text-teal1 uppercase tracking-widest block mb-6">Keep exploring</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <a href={data.areaHref} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal2 hover:shadow-lg transition lift">
            <div className="text-[10px] font-bold uppercase tracking-widest text-teal1 mb-2">Solution</div>
            <div className="font-display font-bold text-ink leading-snug mb-3">{data.area}</div>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-teal1 group-hover:gap-2.5 transition-all">See the solution <Icon name="arrow-right" size={15} strokeWidth={2.5} /></span>
          </a>
          {sib &&
            <a href={`case-studies/${data.sibling}.html`} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal2 hover:shadow-lg transition lift">
              <div className="text-[10px] font-bold uppercase tracking-widest text-teal1 mb-2">Related case study</div>
              <div className="font-display font-bold text-ink leading-snug mb-3 text-balance"><Title parts={sib.title} /></div>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-teal1 group-hover:gap-2.5 transition-all">Read case study <Icon name="arrow-right" size={15} strokeWidth={2.5} /></span>
            </a>}
        </div>
      </div>
    </section>);
}

function CaseCTA() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#03101F] via-[#061A30] to-[#04162A] rounded-3xl p-10 lg:p-12 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] hero-glow rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4 tracking-tight text-balance">
            Could we drive the same for your programs?
          </h2>
          <p className="text-white/70 leading-relaxed mb-7" style={{ maxWidth: "44ch" }}>
            Book a 30-minute discovery call and we'll show you the verified, intent-active clinicians already in-market for your therapeutic area.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="contact.html" className="px-6 py-3.5 bg-gradient-to-br from-gold2 to-gold text-ink font-bold rounded-lg shadow-lg hover:shadow-xl transition lift flex items-center gap-2">
              Book a Discovery Call <Icon name="arrow-right" size={18} />
            </a>
            <a href="case-studies.html" className="px-6 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:border-teal3 hover:text-teal3 transition">
              All Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>);
}

function CaseStudyPage() {
  const data = DATA;
  useEffect(() => {
    if (data) document.title = "Case Study: " + data.title.join("") + " | CMEIntent";
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Case study not found.
      </div>);
  }

  return (
    <div className="bg-white text-ink font-sans antialiased selection:bg-teal2 selection:text-white">
      <Nav />
      <CaseHead data={data} />
      <MetricStrip metrics={data.metrics} />
      <article className="post-body max-w-3xl mx-auto px-6 pt-14 pb-6">
        <Section title="The challenge" paras={data.challenge} />
        <Section title="The approach" intro={data.approachIntro} bullets={data.approach} />
        <Section title="The results" intro={data.resultsIntro} bullets={data.results} />
        <blockquote className="pullquote">{data.quote.text}</blockquote>
        <p className="text-sm font-semibold text-slate-500 italic -mt-4">{data.quote.role}</p>
      </article>
      <KeepExploring data={data} />
      <CaseCTA />
      <Footer />
    </div>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<CaseStudyPage />);
