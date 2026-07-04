import { menuSections } from '@/lib/site-data';

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Choose your route</p>
        <h1>Vietnam for lunch. Italy for dinner.</h1>
        <p>
          PHOITALIA uses one house identity with two intentional stops on the map: a bright Vietnamese lunch from 10:30 AM to 2:30 PM, then a warmer Italia dinner from 4:30 PM to 9:30 PM.
        </p>
      </section>

      <section className="grid-2">
        {menuSections.map((section) => (
          <article className="menu-card" key={section.title}>
            <span className="pill">{section.title}</span>
            <h2>{section.subtitle}</h2>
            <p style={{ marginTop: 8, color: 'rgba(245, 239, 229, 0.78)' }}>{section.note}</p>
            <ul className="list">
              {section.items.map(([name, detail]) => (
                <li key={name}>
                  <strong>{name}</strong>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
