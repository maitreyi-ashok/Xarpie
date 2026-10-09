import Link from 'next/link';

export function Pill({
  num, label, variant = 'light',
}: { num: string; label: string; variant?: 'light' | 'dark' }) {
  if (variant === 'dark') {
    return (
      <p className="ins-pill">
        <span className="ins-pill-chip">{num}</span>
        <span className="ins-pill-txt">{label}</span>
      </p>
    );
  }
  return (
    <span className="pill">
      <span className="pill__num">{num}</span>
      <span className="pill__label">{label}</span>
    </span>
  );
}

export function Button({
  href, children, variant = 'primary', external = false,
}: {
  href: string; children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'ghost-on-dark'; external?: boolean;
}) {
  const cls =
    variant === 'primary'   ? 'btn btn-primary'
  : variant === 'ghost'     ? 'btn btn-ghost'
  :                           'btn btn-ghost--on-dark';

  if (external) {
    return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  return <Link href={href} className={cls}>{children}</Link>;
}

export function StatusBadge({
  status, children,
}: { status: 'live' | 'uat'; children: React.ReactNode }) {
  return (
    <span className={`status status--${status}`}>
      <span className="status__dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export function LayerTag({
  num, label, variant = 'eng',
}: { num: string; label: string; variant?: 'eng' | 'intel' }) {
  const cls = variant === 'intel' ? 'layer-tag layer-tag--intel' : 'layer-tag';
  return (
    <span className={cls}>
      <span className="layer-tag__chip">{num}</span>
      <span className="layer-tag__txt">{label}</span>
    </span>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="photo-strip__k">{children}</p>;
}
