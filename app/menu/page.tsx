import { menuSections } from '@/lib/site-data';

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Choose your mood</p>
        <h1>Lunch bright. Dinner warm.</h1>
        <p>
          PHOITALIA uses one house identity with two dayparts: a scan-friendly Vietnamese lunch and a slower, warmer Italia dinner experience with polished hospitality built in.
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
