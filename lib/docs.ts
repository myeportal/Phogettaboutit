import fs from 'node:fs';
import path from 'node:path';

export type DocMeta = {
  slug: string;
  title: string;
  category: string;
  description: string;
  sourcePath: string;
  file: string;
};

const contentRoot = path.join(process.cwd(), 'content');
const docsManifestPath = path.join(contentRoot, 'docs-manifest.json');

export function getDocs(): DocMeta[] {
  return JSON.parse(fs.readFileSync(docsManifestPath, 'utf8')) as DocMeta[];
}

export function getDocBySlug(slug: string) {
  const docs = getDocs();
  const doc = docs.find((item) => item.slug === slug);
  if (!doc) return null;

  const markdown = fs.readFileSync(path.join(process.cwd(), doc.file), 'utf8');
  return { ...doc, markdown };
}
