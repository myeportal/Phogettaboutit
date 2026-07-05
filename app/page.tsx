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

      <section className="ambience-split panel">
        <div className="section-intro">
          <p className="kicker">Inside the house</p>
          <h2>Lunch rises in Vietnam. Dinner glows in Italy.</h2>
          <p>
            Guests should understand the shift before they ever walk in: brighter, herb-fresh energy at midday upstairs in the story, then a warmer Italian dinner atmosphere as the night settles in.
          </p>
        </div>

        <article className="ambience-card vietnam-lunch">
          <div className="ambience-image-wrap">
            <img
              className="ambience-image"
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
              alt="A bright restaurant dining room with natural light, greenery, and calm midday energy for the Vietnam lunch mood"
            />
          </div>
          <div className="ambience-copy">
            <span className="pill">Vietnam Lunch • 10:30 AM–2:30 PM</span>
            <h3>Bright, fresh, and quietly alive.</h3>
            <p>
              Sunlit tables, clean lines, green notes, and an easy midday rhythm that makes pho, herbs, vermicelli bowls, and banh mi feel immediate and restorative.
            </p>
          </div>
        </article>

        <article className="ambience-card italia-dinner">
          <div className="ambience-image-wrap">
            <img
              className="ambience-image"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
              alt="A warm restaurant interior with moody lighting and intimate tables for the Italy dinner atmosphere"
            />
          </div>
          <div className="ambience-copy">
            <span className="pill">Italia Dinner • 4:30 PM–9:30 PM</span>
            <h3>Warmer light, slower pacing, longer tables.</h3>
            <p>
              By evening the room softens into amber light, richer textures, and a more intimate dinner cadence built for pasta, cocktails, and a table worth lingering over.
            </p>
          </div>
        </article>
      </section>

      <section className="grid-2">
        <article className="panel">
          <h2>Two dayparts. One polished guest experience.</h2>
          <p>
            PHOITALIA keeps the house unmistakably unified while letting each service express its own emotional temperature: Vietnam first for lunch, then Italy for dinner, each with clear hours and a distinct sense of place.
          </p>
        </article>
        <article className="panel">
          <h2>The shift should feel visual, not theatrical.</h2>
          <p>
            Thoughtful imagery, practical screens, and low-volume music can support the transition without distracting from the meal. PHOITALIA remains the lead brand everywhere, while {brand.supportingDomain} stays in a supporting role and PHOGETTABOUTIT remains secondary only.
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
