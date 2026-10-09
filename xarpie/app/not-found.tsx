import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="board">
      <p className="eyebrow">404</p>
      <h1 className="t-h1 stack-sm">Page not found.</h1>
      <p className="t-lead stack-sm">The page you were looking for does not exist.</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
        <Link href="/" className="btn btn-primary">Go home <span aria-hidden>→</span></Link>
        <Link href="/contact" className="btn btn-ghost">Contact us</Link>
      </div>
    </section>
  );
}
