export default function HeroCanvas() {
  return (
    <>
      <div className="photo-hero__media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80"
          alt=""
          loading="eager"
        />
      </div>
      <div className="photo-hero__scrim" aria-hidden="true" />
    </>
  );
}
