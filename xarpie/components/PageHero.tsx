import EyebrowPill from './EyebrowPill';

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt?: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, body, image, imageAlt = '', children }: Props) {
  return (
    <section id="intro" className="photo-hero photo-hero--image">
      <div className="photo-hero__media" aria-hidden="true">
        <img src={image} alt={imageAlt} loading="eager" />
      </div>
      <div className="photo-hero__scrim" aria-hidden="true" />
      <div className="photo-hero__content">
        <EyebrowPill>{eyebrow}</EyebrowPill>
        <h1 className="t-h1 stack-sm">{title}</h1>
        <p>{body}</p>
        {children && <div className="photo-hero__actions">{children}</div>}
      </div>
    </section>
  );
}
