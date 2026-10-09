import Link from 'next/link';
import InfinityMark from './InfinityMark';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <InfinityMark className="footer-brand__infinity" />
          <div className="footer-brand__stack">
            <span className="footer-brand__mark">XARPIE</span>
            <span className="footer-brand__sub">A MACHANI GROUP COMPANY</span>
          </div>
        </div>

        <div className="footer-links">
          <span className="footer-links__k">CONNECT</span>
          <Link href="/contact">Contact</Link>
          <a href="mailto:contact@xarpie.com">contact@xarpie.com</a>
          <a>Careers</a>
          <span className="footer-links__sep">·</span>
          <Link href="/capabilities">Digital transformation</Link>
          <span className="footer-links__sep">·</span>
          <Link href="/capabilities">Artificial intelligence</Link>
        </div>

        <div className="footer-copy">
          © 2026 Xarpie Labs. A Machani Group company.
        </div>
      </div>
    </footer>
  );
}
