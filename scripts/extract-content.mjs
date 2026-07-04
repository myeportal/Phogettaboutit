import fs from 'node:fs';
import path from 'node:path';

const root = '/data/.openclaw/workspace';
const project = path.join(root, 'phoitalia-site');
const docsDir = path.join(project, 'content', 'docs');
const manifestPath = path.join(project, 'content', 'docs-manifest.json');

const docs = [
  {
    slug: 'executive-summary',
    title: 'Executive Summary',
    category: 'Business',
    source: path.join(root, 'Phogettaboutit_Master_Package', 'docs', '01_Executive_Summary.md'),
    description: 'High-level concept overview, positioning, and launch framing for the restaurant.'
  },
  {
    slug: 'brand-identity-guide',
    title: 'PHOITALIA Brand Identity Guide',
    category: 'Brand',
    source: path.join(root, 'Phogettaboutit_Master_Package', 'PHOITALIA_BRAND_IDENTITY_GUIDE.md'),
    description: 'Brand system, voice, palette, and guest-facing identity guardrails.'
  },
  {
    slug: 'website-copy',
    title: 'Website Copy Pack',
    category: 'Marketing',
    source: path.join(root, 'Phogettaboutit_Master_Package', '17_Website_Copy.md'),
    description: 'Homepage, menu, reservation, and conversion copy for the website experience.'
  },
  {
    slug: 'naming-direction',
    title: 'Naming Decision Memo',
    category: 'Strategy',
    source: path.join(root, 'Phogettaboutit_Master_Package', 'NAMING_DECISION_MEMO__PHOITALIA_PRIMARY_DIRECTION.md'),
    description: 'Decision memo establishing PHOITALIA as the primary brand direction.'
  },
  {
    slug: 'secondary-brand-architecture',
    title: 'Secondary-Use Brand Architecture',
    category: 'IP',
    source: path.join(root, 'Phogettaboutit_IP_Master_Package', 'IP', '09_Secondary_Use_Brand_Architecture.md'),
    description: 'How phogettaboutit.com and PHOGETTABOUTIT fit as supporting assets only.'
  },
  {
    slug: 'brand-style-guide',
    title: 'Brand Style Guide',
    category: 'IP',
    source: path.join(root, 'Phogettaboutit_IP_Master_Package', 'Brand_Assets', '01_Brand_Style_Guide.md'),
    description: 'Supporting brand-style guidance from the IP package for rollout consistency.'
  }
];

fs.mkdirSync(docsDir, { recursive: true });

const manifest = docs.map((doc) => {
  const body = fs.readFileSync(doc.source, 'utf8');
  const outputFile = path.join(docsDir, `${doc.slug}.md`);
  fs.writeFileSync(outputFile, body);
  return {
    slug: doc.slug,
    title: doc.title,
    category: doc.category,
    description: doc.description,
    sourcePath: doc.source.replace(`${root}/`, ''),
    file: `content/docs/${doc.slug}.md`
  };
});

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Wrote ${manifest.length} docs to ${docsDir}`);
