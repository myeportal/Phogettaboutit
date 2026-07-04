import Link from 'next/link';
import { brand, featuredItems, heroStats } from '@/lib/site-data';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="kicker">{brand.descriptor}</p>
          <h1>{brand.tagline}</h1>
          <p className="hero-copy">
            PHOITALIA now tells a stronger geographic daypart story: lunch begins in Vietnam with bright herbs, broth, and speed, then dinner lands in Italy with pasta, cocktails, and a warmer room. Think of the brand like a route across the map, not a fusion mashup.
          </p>
          <div className="button-row">
            <Link className="cta primary" href="/menu">View Menus</Link>
            <Link className="cta" href="/brand">Explore Brand</Link>
            <Link className="cta" href="/docs">Review Docs</Link>
          </div>
        </div>
        <div className="stats">
          {heroStats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <span className="muted">{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="grid-2">
        <article className="panel">
          <h2>Two dayparts. Two countries. One house.</h2>
          <p>
            Pho Lunch runs from 10:30 AM to 2:30 PM and owns the Vietnam side of the story with fresh, aromatic midday energy. Italia Dinner begins at 4:30 PM and runs to 9:30 PM with pasta, cocktails, conversation, and comfort. Same hospitality standard, but the guest journey intentionally moves from Vietnam at noon to Italy at night.
          </p>
        </article>
        <article className="panel">
          <h2>Global-map concept, clear hierarchy</h2>
          <p>
            The website and copy should feel like a route line stretching from Vietnam to Italy across the day. PHOITALIA remains the lead brand everywhere, {brand.supportingDomain} stays supporting only, and PHOGETTABOUTIT remains secondary for campaigns, merch, loyalty, or creative extensions.
          </p>
        </article>
      </section>

      <section className="panel">
        <h2>Start with the route highlights.</h2>
        <div className="grid-2">
          {featuredItems.map((item) => (
            <div key={item.name} className="signal-card">
              <span className="pill">{item.daypart}</span>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2 style={{ marginBottom: 8 }}>Deploy-ready review build</h2>
          <p>This Next.js project now reflects the updated daypart story, route-from-Vietnam-to-Italy positioning, and current PHOITALIA brand guardrails.</p>
        </div>
        <div className="button-row">
          <Link className="cta primary" href="/docs">Open docs library</Link>
          <Link className="cta" href="/docs/site-architecture">Architecture notes</Link>
        </div>
      </section>
    </>
  );
}
