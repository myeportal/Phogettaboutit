import Link from 'next/link';
import { getDocs } from '@/lib/docs';
import { docsIntro } from '@/lib/site-data';

export default function DocsPage() {
  const docs = getDocs();

  return (
    <>
      <section className="page-hero">
        <p className="kicker">Review library</p>
        <h1>Selected PHOITALIA package docs</h1>
        <p>{docsIntro}</p>
      </section>

      <section className="grid-2">
        {docs.map((doc) => (
          <article key={doc.slug} className="doc-card">
            <div className="doc-meta">
              <span className="pill">{doc.category}</span>
              <span className="pill">{doc.sourcePath}</span>
            </div>
            <h2>{doc.title}</h2>
            <p>{doc.description}</p>
            <Link className="cta primary" href={`/docs/${doc.slug}`}>
              Open doc
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
