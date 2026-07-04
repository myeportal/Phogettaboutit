import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'PHOITALIA | Pho by Day. Pasta by Night.',
  description:
    'PHOITALIA is a premium restaurant concept pairing Vietnamese lunch energy with Italia dinner warmth under one welcoming brand.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
