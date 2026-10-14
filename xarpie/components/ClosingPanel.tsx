import Link from 'next/link';

type Props = {
  /** Optional anchor id, e.g. for header dropdown links */
  id?: string;
  kicker: string;
  title: string;
  body: string;
  image: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export default function ClosingPanel({
  id, kicker, title, body, image,
  primaryHref, primaryLabel, secondaryHref, secondaryLabel,
}: Props) {
  return (
    <section id={id} className="photo-strip">
      <div className="photo-strip__media" aria-hidden="true">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="photo-strip__scrim" aria-hidden="true" />
      <div className="photo-strip__content">
        <p className="photo-strip__k">{kicker}</p>
        <h2 className="t-h2">{title}</h2>
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
