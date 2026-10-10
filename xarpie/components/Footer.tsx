import Link from 'next/link';
import InfinityMark from './InfinityMark';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link href="/" className="footer-brand" aria-label="Xarpie Labs home">
          <InfinityMark className="footer-brand__infinity" />
          <span className="footer-brand__stack">
            <span className="footer-brand__mark">XARPIE</span>
            <span className="footer-brand__sub">A MACHANI GROUP COMPANY</span>
          </span>
        </Link>

        <div className="footer-links">
          <span className="footer-links__k">Connect</span>
          <Link href="/contact">Contact</Link>
          <a href="mailto:contact@xarpie.com">contact@xarpie.com</a>
          <a
            href="https://machani.darwinbox.in/ms/candidate/careers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Careers
          </a>
          <span className="footer-copy">Digital transformation · Artificial intelligence</span>
          <span className="footer-copy">© 2026 Xarpie Labs. A Machani Group company.</span>
        </div>
      </div>
    </footer>
  );
}
