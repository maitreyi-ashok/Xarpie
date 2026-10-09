import Link from 'next/link';
import Hero from '@/components/Hero';
import ClosingPanel from '@/components/ClosingPanel';

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Xarpie Labs"
        title="Ownership from vision to operations."
        body="Digital transformation and artificial intelligence, delivered by one accountable team. A Machani Group company."
        primaryHref="/about"
        primaryLabel="About us"
        secondaryHref="/capabilities"
        secondaryLabel="See our capabilities"
      />

      <section className="board">
        <p className="eyebrow">01 / What we do</p>
        <h2 className="t-h2 stack-sm">Two things, in the order that makes them work.</h2>
        <p className="t-lead stack-sm">
          We do digital transformation and we do artificial intelligence — and the
          order matters. Most organisations already have applications, a landscape, an
          infrastructure. Where those are scattered, fragmented or inconsistent, they
          will not carry AI reliably.
        </p>
      </section>

      <ClosingPanel
        kicker="From vision to operations"
        title="Ownership that does not end at go-live."
        body="We start at your business problem and stay accountable through to live operations — one team, one line of sight, from first conversation to the system carrying load."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80"
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/team"
        secondaryLabel="Meet the leadership"
      />
    </>
  );
}
