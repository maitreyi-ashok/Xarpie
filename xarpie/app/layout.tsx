import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import SiteEffects from '@/components/SiteEffects';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import './globals.css';
import './motion.css';
import './theme.css'; // Xarpie light/dark theme layer — keep last so it wins the cascade

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://xarpie-labs.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Xarpie Labs — From vision to operations, under one accountable partner',
    template: '%s — Xarpie Labs',
  },
  description:
    'Xarpie Labs is a Machani Group company delivering digital transformation and artificial intelligence. We establish the engineering foundation, then build or buy the AI on top of it — deployed in client environments and supported after go-live.',
  openGraph: {
    siteName: 'Xarpie Labs',
    type: 'website',
    title: 'Xarpie Labs — From vision to operations, under one accountable partner',
    description:
      'Digital transformation and artificial intelligence, delivered by one accountable team. A Machani Group company.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1018' },
  ],
};

// Runs before first paint so the saved (or system) theme never flashes.
const THEME_INIT = `(function(){try{var t=localStorage.getItem('xarpie-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        <Nav />
        <SiteEffects />
        <main className="main-content" id="main">
          {children}
        </main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
