type KPIProps = {
  title: string;
  value: string;
  delta?: string;
  trend?: 'up' | 'down' | 'flat';
};

export default function KPI({ title, value, delta, trend = 'flat' }: KPIProps) {
  return (
    <div className="kpi">
      <p className="kpi__title">{title}</p>
      <p className="kpi__value">{value}</p>
      {delta && (
        <p className={`kpi__delta kpi__delta--${trend}`}>
          {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '·'} {delta}
        </p>
      )}
    </div>
  );
}
