import Link from 'next/link';

export type PagerLink = {
  href: string;
  dir: 'Previous' | 'Next' | 'Or' | 'Start again';
  title: string;
  align?: 'left' | 'right';
};

export default function SectionPager({ links }: { links: PagerLink[] }) {
  if (!links || links.length === 0) return null;

  return (
    <nav className="pager" aria-label="Continue reading">
      {links.map((l, i) => (
        <Link
          key={`${l.href}-${i}`}
          href={l.href}
          className="pager-link"
          style={l.align === 'right' ? { textAlign: 'right' } : undefined}
        >
          <span className="pager-dir">
            {l.dir === 'Previous' && '← Previous'}
            {l.dir === 'Next' && 'Next →'}
            {l.dir === 'Or' && 'Or →'}
            {l.dir === 'Start again' && 'Start again →'}
          </span>
          <span className="pager-title">{l.title}</span>
        </Link>
      ))}
    </nav>
  );
}
