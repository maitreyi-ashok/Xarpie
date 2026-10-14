'use client';

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useDashColors } from './useDashColors';

const data = [
  { month: 'Jan', visitors: 1200 },
  { month: 'Feb', visitors: 1500 },
  { month: 'Mar', visitors: 1800 },
  { month: 'Apr', visitors: 2200 },
  { month: 'May', visitors: 2600 },
];

const MONO = 'IBM Plex Mono, ui-monospace, monospace';

export default function VisitorsChart() {
  const c = useDashColors();
  return (
    <div className="chart-box" role="img" aria-label="Visitors per month, rising from 1,200 in January to 2,600 in May">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="visitorsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={c.green} stopOpacity={0.25} />
              <stop offset="100%" stopColor={c.green} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={c.line} vertical={false} />
          <XAxis dataKey="month" stroke={c.faint} tickLine={false} axisLine={false} fontSize={11} fontFamily={MONO} />
          <YAxis stroke={c.faint} tickLine={false} axisLine={false} fontSize={11} fontFamily={MONO} />
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
          <Area type="monotone" dataKey="visitors" stroke={c.green} strokeWidth={1.5} fill="url(#visitorsFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
