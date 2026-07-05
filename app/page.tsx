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
            PHOITALIA moves with the day: lunch opens into Vietnam with fragrant broth, bright herbs, and a calm midday rhythm, then dinner settles into Italy with warmer lighting, comforting pasta, cocktails, and a slower, more intimate pace.
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
          <h2>Two dayparts. Two moods. One safe, cozy house.</h2>
          <p>
            Pho Lunch runs from 10:30 AM to 2:30 PM and turns the room toward Vietnam: herb-bright, comforting, and quietly energizing. Italia Dinner begins at 4:30 PM and runs to 9:30 PM, softening everything into Italy with richer plates, warmer lighting, and the kind of meal that invites you to stay a little longer.
          </p>
        </article>
        <article className="panel">
          <h2>An immersive shift you can feel</h2>
          <p>
            The room does the storytelling gently: large screens carry rotating visual slides about every 30 seconds, smaller menu screens stay practical where they should, and low-volume music keeps the mood present without crowding the table. PHOITALIA remains the lead brand everywhere, while {brand.supportingDomain} stays in a supporting role, PHOGETTABOUTIT remains secondary only, and a future web3 checkout can support utility tokens the founder may deploy later around “PHO” and “ITALIA.”
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
          <h2 style={{ marginBottom: 8 }}>A house guests can step into</h2>
          <p>The site now speaks in the same voice as the room itself: lunch in Vietnam, dinner in Italy, and PHOITALIA holding both with warmth, calm, and intention.</p>
        </div>
        <div className="button-row">
          <Link className="cta primary" href="/docs">Open docs library</Link>
          <Link className="cta" href="/docs/site-architecture">Architecture notes</Link>
        </div>
      </section>
    </>
  );
}
