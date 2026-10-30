import { articles, categories, catBySlug } from '../data/site';
export function GET() {
  const items = [
    ...articles.map((a) => ({ t: a.title, d: a.excerpt, c: catBySlug(a.cat).name, k: a.keywords, u: `/${a.slug}/` })),
    ...categories.map((c) => ({ t: c.name, d: c.intro, c: 'Emne', k: '', u: `/${c.slug}/` })),
    { t: 'Fagpanelet', d: 'De fagpersoner, der skriver og gennemgår guiderne.', c: 'Om siden', k: 'fysioterapeut træner bodybuilder crossfit crossfitter oliver kjeldgaard skribenter mikael munk personlig træner', u: '/fagpanel/' },
    { t: 'Om os & ejerskab', d: 'Styrkeviden udgives af MakeIt Danmark ApS.', c: 'Om siden', k: 'makeit ejer om', u: '/om-os/' },
    { t: 'Sådan arbejder vi', d: 'Hvordan guiderne bliver skrevet, gennemgået og opdateret.', c: 'Om siden', k: 'metode kilder', u: '/metode/' },
    { t: 'Kontakt', d: 'Skriv til os om fejl, rettelser eller samarbejde.', c: 'Om siden', k: 'kontakt mail', u: '/kontakt/' },
  ];
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
}
