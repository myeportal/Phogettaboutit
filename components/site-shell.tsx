import Link from 'next/link';
import type { ReactNode } from 'react';
import { brand, nav } from '@/lib/site-data';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-frame">
      <header className="topbar">
        <div>
          <p className="eyebrow">{brand.descriptor}</p>
          <Link href="/" className="wordmark">
            {brand.name}
          </Link>
        </div>
        <nav className="nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div>
          <strong>{brand.name}</strong>
          <p>{brand.tagline}</p>
        </div>
        <div>
          <p>{brand.supportingDomain} supports campaign traffic.</p>
          <p>{brand.supportNote}</p>
        </div>
      </footer>
    </div>
  );
}
