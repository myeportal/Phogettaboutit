import Link from 'next/link';
import { brand, brandPrinciples, brandSignals } from '@/lib/site-data';

export default function BrandPage() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Brand system</p>
        <h1>{brand.name} leads. Everything else supports.</h1>
        <p>
          The concept is framed as a premium hospitality identity: Vietnamese lunch energy, Italian dinner warmth, and clear hierarchy across web, signage, menus, and future rollout assets.
        </p>
      </section>

      <section className="grid-3">
        {brandSignals.map((signal) => (
          <article className="signal-card" key={signal.title}>
            <h2>{signal.title}</h2>
            <p>{signal.copy}</p>
          </article>
        ))}
      </section>

      <section className="panel">
        <h2>Guardrails to preserve</h2>
        <ul className="list">
          {brandPrinciples.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cta-band">
        <div>
          <h2 style={{ marginBottom: 8 }}>Package-backed brand decisions</h2>
          <p>Review the copied source documents for naming, identity, and IP architecture before launch implementation.</p>
        </div>
        <div className="button-row">
          <Link className="cta primary" href="/docs/brand-identity-guide">Brand identity doc</Link>
          <Link className="cta" href="/docs/secondary-brand-architecture">Secondary-use architecture</Link>
        </div>
      </section>
    </>
  );
}
