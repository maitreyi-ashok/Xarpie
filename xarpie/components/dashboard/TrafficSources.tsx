'use client';

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDashColors } from './useDashColors';

const data = [
  { name: 'Organic', value: 45 },
  { name: 'Direct', value: 25 },
  { name: 'LinkedIn', value: 15 },
  { name: 'Referral', value: 10 },
  { name: 'Email', value: 5 },
];

const MONO = 'IBM Plex Mono, ui-monospace, monospace';

export default function TrafficSources() {
  const c = useDashColors();
  const colors = [c.green, c.cyan, c.greenDim, c.faint, c.lineBright];
  return (
    <div className="chart-box" role="img" aria-label="Traffic sources: Organic 45%, Direct 25%, LinkedIn 15%, Referral 10%, Email 5%">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius="46%" outerRadius="72%" paddingAngle={2} stroke={c.panel} strokeWidth={2}>
            {data.map((entry, i) => (
              <Cell key={entry.name} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: c.panel,
              border: `1px solid ${c.lineBright}`,
              borderRadius: 0,
              color: c.text,
              fontFamily: MONO,
              fontSize: 12,
            }}
          />
          <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: 11, color: c.dim, fontFamily: MONO }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
