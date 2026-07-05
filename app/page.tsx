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
            Step into PHOITALIA for a rare kind of dining experience: vibrant Vietnamese favorites at lunch, then a warm Italian dinner atmosphere by night — all in one elegant house guests remember long after the meal ends.
          </p>
          <div className="button-row">
            <Link className="cta primary" href="/menu">View Menus</Link>
            <Link className="cta" href="/brand">Our Story</Link>
          </div>
        </div>

        <div className="hero-route-card">
          <div className="route-copy">
            <span className="pill">The house journey</span>
            <h2>Vietnam at lunch. Italy at dinner. One warm address holding both.</h2>
            <p>
              Visit once for a bright, herb-filled lunch or settle in after sunset for candlelit Italian comfort — either way, PHOITALIA gives every guest something distinctive to return for.
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
            From the first glance, guests should feel what makes PHOITALIA special: a midday experience lifted by Vietnamese freshness, then an evening shaped by the warmth and romance of Italy.
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
              Sunlit tables, lively herbs, and an easy midday rhythm make every bowl of pho, banh mi, and vermicelli feel fresh, comforting, and worth stepping out for.
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
              By evening the room softens into amber light, richer textures, and a more intimate cadence made for pasta, cocktails, conversation, and a table worth lingering over.
            </p>
          </div>
        </article>
      </section>

      <section className="grid-2">
        <article className="panel">
          <h2>Two dayparts. One polished guest experience.</h2>
          <p>
            PHOITALIA brings together two cravings guests rarely find under one roof: a bright Vietnamese lunch that feels energizing and a relaxed Italian dinner that turns the night into an occasion.
          </p>
        </article>
        <article className="panel">
          <h2>One address, two moods, no compromise.</h2>
          <p>
            What makes the experience memorable is how naturally the house moves from daytime freshness to evening warmth, giving guests a reason to visit for lunch, return for dinner, and talk about both.
          </p>
        </article>
      </section>

      <section className="panel route-highlights-panel">
        <div className="section-intro">
          <p className="kicker">Route highlights</p>
          <h2>Signature moments along the Vietnam-to-Italy arc.</h2>
          <p>
            Start with herb-bright Vietnamese flavor at lunch, then come back for the richer comfort and slower pleasures of an Italian evening.
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
          <h2 style={{ marginBottom: 8 }}>Come experience PHOITALIA for yourself</h2>
          <p>Join us for a brighter Vietnamese lunch, return for a warmer Italian dinner, and discover why one elegant house gives guests two beautiful reasons to come back.</p>
        </div>
        <div className="button-row">
          <Link className="cta primary" href="/menu">View Menus</Link>
          <Link className="cta" href="/brand">Discover the Story</Link>
        </div>
      </section>
    </>
  );
}
