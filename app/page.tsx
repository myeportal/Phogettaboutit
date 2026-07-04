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
            PHOITALIA brings bright Vietnamese lunch energy and warm Italian dinner comfort together under one welcoming roof. Built as a premium neighborhood house, the concept is clear, polished, and ready for review.
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
          <h2>Not fusion. Just two great reasons to come back.</h2>
          <p>
            Lunch is fresh, aromatic, and energizing when the middle of the day needs a reset. Dinner turns warmer, slower, and comfort-led with pasta, cocktails, conversation, and room to linger. Same house. Same hospitality. Two moods, one standard.
          </p>
        </article>
        <article className="panel">
          <h2>Primary brand architecture</h2>
          <p>
            PHOITALIA leads every guest-facing touchpoint. {brand.supportingDomain} remains a supporting traffic-capture domain, PHOGETTABOUTIT stays secondary only for campaigns, merch, loyalty, or content themes, and a future web3 checkout can support utility tokens the founder may deploy later around “PHO” and “ITALIA.”
          </p>
        </article>
      </section>

      <section className="panel">
        <h2>Start with the favorites.</h2>
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
          <p>This Next.js project packages a premium concept site plus selected PHOITALIA docs for GitHub and Vercel handoff.</p>
        </div>
        <div className="button-row">
          <Link className="cta primary" href="/docs">Open docs library</Link>
          <Link className="cta" href="/docs/site-architecture">Architecture notes</Link>
        </div>
      </section>
    </>
  );
}
