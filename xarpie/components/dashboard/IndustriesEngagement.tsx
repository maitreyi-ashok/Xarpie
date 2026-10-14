const industries = [
  { name: 'Construction & Materials', status: 'In production', views: 512 },
  { name: 'Manufacturing & Products', status: 'In production', views: 468 },
  { name: 'Healthcare & Biomedical', status: 'User acceptance testing', views: 391 },
];

export default function IndustriesEngagement() {
  const max = Math.max(...industries.map((i) => i.views));
  return (
    <div className="ind-list">
      {industries.map((ind) => (
        <div key={ind.name}>
          <div className="row-head row-head--wrap">
            <span>{ind.name}</span>
            <span className="row-status">{ind.status}</span>
          </div>
          <div className="ind-bar">
            <div className="bar bar--grow">
              <div className="bar__fill bar__fill--cyan" style={{ width: `${(ind.views / max) * 100}%` }} />
            </div>
            <span className="row-val ind-val">{ind.views}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
