import Link from 'next/link';
import { brand, featuredItems, heroStats } from '@/lib/site-data';

export default function HomePage() {
  return (
    <>
      <section className="hero hero-splash">
        <div className="hero-media-stack" aria-hidden="true">
          <div className="hero-image-panel hero-image-vietnam">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
              alt=""
            />
          </div>
          <div className="hero-image-panel hero-image-italy">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
              alt=""
            />
          </div>
          <div className="hero-route-glow" />
        </div>

        <div className="hero-copy-column">
          <p className="kicker">{brand.descriptor}</p>
          <h1>From Saigon sunlight to Italian candlelight.</h1>
          <p className="hero-copy hero-copy-large">
            A dramatic full-house welcome for PHOITALIA: Vietnam opens the day with bright broth, herbs, and calm lunch energy, then the room crosses into Italy for a warmer dinner service built for pasta, cocktails, and lingering tables.
          </p>
          <div className="button-row">
            <Link className="cta primary" href="/menu">View Menus</Link>
            <Link className="cta" href="/brand">Explore Brand</Link>
            <Link className="cta" href="/docs">Review Docs</Link>
          </div>
        </div>

        <div className="hero-route-card">
          <div className="route-copy">
            <span className="pill">The house journey</span>
            <h2>Vietnam at lunch. Italy at dinner. One warm address holding both.</h2>
            <p>
              The homepage now opens like a premium arrival: two atmospheres, one route, and a clear emotional handoff from midday freshness to evening comfort.
            </p>
          </div>

          <div className="route-map" aria-label="Stylized route from Vietnam to Italy">
            <div className="route-label route-label-vietnam">
              <strong>Vietnam</strong>
              <span>Lunch • bright • herb-fresh</span>
            </div>
            <svg viewBox="0 0 640 320" role="img" aria-hidden="true">
              <defs>
                <linearGradient id="routeStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(120,178,131,0.95)" />
                  <stop offset="52%" stopColor="rgba(244,220,177,0.9)" />
                  <stop offset="100%" stopColor="rgba(197,101,68,0.95)" />
                </linearGradient>
                <filter id="routeBlur">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>
              <path
                d="M108 208C166 165 211 128 264 122C319 116 350 151 396 157C450 165 502 135 550 98"
                stroke="rgba(245, 232, 216, 0.18)"
                strokeWidth="20"
                fill="none"
                strokeLinecap="round"
                filter="url(#routeBlur)"
              />
              <path
                d="M108 208C166 165 211 128 264 122C319 116 350 151 396 157C450 165 502 135 550 98"
                stroke="url(#routeStroke)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="2 12"
              />
              <circle cx="108" cy="208" r="14" fill="rgba(95, 138, 104, 0.95)" />
              <circle cx="550" cy="98" r="14" fill="rgba(197, 101, 68, 0.95)" />
              <circle cx="108" cy="208" r="28" fill="rgba(95, 138, 104, 0.18)" />
              <circle cx="550" cy="98" r="28" fill="rgba(197, 101, 68, 0.18)" />
            </svg>
            <div className="route-label route-label-italy">
              <strong>Italy</strong>
              <span>Dinner • amber • lingering</span>
            </div>
          </div>

          <div className="stats hero-stats-grid">
            {heroStats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <span className="muted">{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
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

      <section className="panel route-highlights-panel">
        <div className="section-intro">
          <p className="kicker">Route highlights</p>
          <h2>Signature moments along the Vietnam-to-Italy arc.</h2>
          <p>
            Start crisp and herb-bright at lunch, then close with richer Italian comfort once the room turns warm.
          </p>
        </div>
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
