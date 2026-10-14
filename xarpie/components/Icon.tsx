type IconName =
  | 'app' | 'integration' | 'data' | 'cloud' | 'legacy'
  | 'agent' | 'ml' | 'retrieval' | 'guardrail' | 'ops';

export default function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' as const };
  const stroke = '#3d6ff5';

  switch (name) {
    case 'app':
      return <svg {...common}><rect x="3" y="4" width="18" height="13" rx="2" stroke={stroke} strokeWidth="1.8"/><line x1="3" y1="9" x2="21" y2="9" stroke={stroke} strokeWidth="1.8"/></svg>;
    case 'integration':
      return <svg {...common}><circle cx="6" cy="12" r="3" stroke={stroke} strokeWidth="1.8"/><circle cx="18" cy="6" r="3" stroke={stroke} strokeWidth="1.8"/><circle cx="18" cy="18" r="3" stroke={stroke} strokeWidth="1.8"/></svg>;
    case 'data':
      return <svg {...common}><ellipse cx="12" cy="6" rx="8" ry="3" stroke={stroke} strokeWidth="1.8"/><path d="M4 6 V18 C4 19.7 7.6 21 12 21 C16.4 21 20 19.7 20 18 V6" stroke={stroke} strokeWidth="1.8"/></svg>;
    case 'cloud':
      return <svg {...common}><path d="M6 18 a3 3 0 0 1 -1 -5.8 a5 5 0 0 1 9.8 -1.4 a3.5 3.5 0 0 1 2.2 6.6" stroke={stroke} strokeWidth="1.8"/></svg>;
    case 'legacy':
      return <svg {...common}><rect x="3" y="6" width="12" height="12" rx="2" stroke={stroke} strokeWidth="1.8"/><rect x="9" y="3" width="12" height="12" rx="2" stroke={stroke} strokeWidth="1.8" strokeDasharray="3 2"/></svg>;
    case 'agent':
      return <svg {...common}><circle cx="12" cy="12" r="4" stroke={stroke} strokeWidth="1.8"/><circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="1.8" strokeDasharray="3 3"/></svg>;
    case 'ml':
      return <svg {...common}><path d="M4 20 L10 10 L14 14 L20 4" stroke={stroke} strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>;
    case 'retrieval':
      return <svg {...common}><rect x="4" y="4" width="6" height="16" rx="1.5" stroke={stroke} strokeWidth="1.8"/><rect x="14" y="4" width="6" height="16" rx="1.5" stroke={stroke} strokeWidth="1.8"/></svg>;
    case 'guardrail':
      return <svg {...common}><path d="M12 3 L20 6 V12 C20 16 16 19.5 12 21 C8 19.5 4 16 4 12 V6 Z" stroke={stroke} strokeWidth="1.8"/></svg>;
    case 'ops':
      return <svg {...common}><polyline points="4,12 8,12 10,7 13,18 15,10 17,12 20,12" stroke={stroke} strokeWidth="1.8" fill="none" strokeLinecap="round"/></svg>;
    default:
      return null;
  }
}
