'use client';

import { useEffect, useState } from 'react';

export type DashColors = {
  green: string;
  greenDim: string;
  cyan: string;
  faint: string;
  dim: string;
  line: string;
  lineBright: string;
  panel: string;
  text: string;
};

const LIGHT: DashColors = {
  green: '#1E9E6C',
  greenDim: '#167A54',
  cyan: '#1E7FA8',
  faint: '#9A9DA3',
  dim: '#5B5F66',
  line: '#E4E4DF',
  lineBright: '#CFCFC8',
  panel: '#FFFFFF',
  text: '#14161A',
};

/** Reads the dashboard palette from CSS variables so the charts follow light/dark mode. */
export function useDashColors(): DashColors {
  const [colors, setColors] = useState<DashColors>(LIGHT);

  useEffect(() => {
    const root = document.documentElement;
    const read = () => {
      const s = getComputedStyle(root);
      const v = (name: string, fallback: string) => s.getPropertyValue(name).trim() || fallback;
      setColors({
        green: v('--d-green', LIGHT.green),
        greenDim: v('--d-green-dim', LIGHT.greenDim),
        cyan: v('--d-cyan', LIGHT.cyan),
        faint: v('--d-faint', LIGHT.faint),
        dim: v('--d-dim', LIGHT.dim),
        line: v('--d-line', LIGHT.line),
        lineBright: v('--d-line-bright', LIGHT.lineBright),
        panel: v('--d-panel', LIGHT.panel),
        text: v('--d-text', LIGHT.text),
      });
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  return colors;
}
