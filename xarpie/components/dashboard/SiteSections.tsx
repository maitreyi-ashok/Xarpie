const sections = [
  { num: '01', name: 'About', desc: 'Who we are and what we do', views: 4820 },
  { num: '02', name: 'Leadership', desc: 'The people accountable for the work', views: 1930 },
  { num: '03', name: 'Operating Model', desc: 'How an engagement runs', views: 2410 },
  { num: '04', name: 'Capabilities', desc: 'The two layers we build', views: 5190 },
  { num: '05', name: 'Industries', desc: 'Deployed work, by sector', views: 3760 },
  { num: '06', name: 'Contact', desc: 'Start a conversation', views: 1180 },
];

export default function SiteSections() {
  const max = Math.max(...sections.map((s) => s.views));
  return (
    <div className="sec-grid">
      {sections.map((s) => (
        <div key={s.num}>
          <div className="row-head">
            <span>
              <span className="row-num">{s.num}</span>
              {s.name}
            </span>
            <span className="row-val">{s.views.toLocaleString('en-US')}</span>
          </div>
          <div className="bar">
            <div className="bar__fill" style={{ width: `${(s.views / max) * 100}%` }} />
          </div>
          <p className="row-desc">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
