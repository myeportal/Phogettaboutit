import Link from 'next/link';
import { brand, brandPrinciples, brandSignals } from '@/lib/site-data';

export default function BrandPage() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Brand system</p>
        <h1>{brand.name} leads. The experience does the explaining.</h1>
        <p>
          PHOITALIA is one warm hospitality identity shaped by two time-locked moods: Vietnam at lunch, Italy at dinner. The guest should feel the shift through atmosphere, pacing, screens, menus, and tone long before anyone needs to explain the concept out loud.
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
          <h2 style={{ marginBottom: 8 }}>Experience-first brand direction</h2>
          <p>Review the identity and copy docs for the warm two-nation positioning, brand hierarchy, and launch guardrails before rollout.</p>
        </div>
        <div className="button-row">
          <Link className="cta primary" href="/docs/brand-identity-guide">Brand identity doc</Link>
          <Link className="cta" href="/docs/secondary-brand-architecture">Secondary-use architecture</Link>
        </div>
      </section>
    </>
  );
}
