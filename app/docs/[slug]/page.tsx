import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getDocBySlug, getDocs } from '@/lib/docs';

export function generateStaticParams() {
  return getDocs().map((doc) => ({ slug: doc.slug }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="doc-meta">
          <span className="pill">{doc.category}</span>
          <span className="pill">{doc.sourcePath}</span>
        </div>
        <h1>{doc.title}</h1>
        <p>{doc.description}</p>
      </section>

      <article className="markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.markdown}</ReactMarkdown>
      </article>
    </>
  );
}
