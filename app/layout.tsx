import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'PHOITALIA | Vietnam at Lunch. Italy at Dinner.',
  description:
    'PHOITALIA is a premium restaurant concept built around a route-from-Vietnam-to-Italy story: bright Vietnamese lunch energy by day and warm Italia dinner hospitality at night.',
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
