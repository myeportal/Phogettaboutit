import { menuSections } from '@/lib/site-data';

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Choose your mood</p>
        <h1>Lunch bright. Dinner warm.</h1>
        <p>
          PHOITALIA uses one house identity with two dayparts: a scan-friendly Vietnamese lunch and a slower, warmer Italian dinner experience.
        </p>
      </section>

      <section className="grid-2">
        {menuSections.map((section) => (
          <article className="menu-card" key={section.title}>
            <span className="pill">{section.title}</span>
            <h2>{section.subtitle}</h2>
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
