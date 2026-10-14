import Link from 'next/link';
import HeroCanvas from './HeroCanvas';
import EyebrowPill from './EyebrowPill';

type Props = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export default function Hero({
  eyebrow, title, body,
  primaryHref, primaryLabel,
  secondaryHref, secondaryLabel,
}: Props) {
  return (
    <section className="photo-hero">
      <HeroCanvas />
      <div className="photo-hero__content">
        {eyebrow && <EyebrowPill>{eyebrow}</EyebrowPill>}
        <h1 className="t-h1 stack-sm">{title}</h1>
        <p>{body}</p>
        <div className="photo-hero__actions">
          <Link href={primaryHref} className="btn btn-primary">
            {primaryLabel} <span aria-hidden>→</span>
          </Link>
          <Link href={secondaryHref} className="btn btn-ghost--on-dark">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
