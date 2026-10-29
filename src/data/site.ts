export const DATO = '29. oktober 2026';

export const categories = [
  { slug: 'greb', name: 'Greb & løftestropper', desc: 'Lasso, figure 8 eller løftegreb – og hvornår du skal bruge dem.', intro: 'Når grebet giver op før ryggen og benene, stopper sættet for tidligt. Her finder du guides om løftestropper, grebstyper og grebstræning, så du kan løfte tungt og stadig have et stærkt greb.' },
  { slug: 'handled', name: 'Håndled & wrist wraps', desc: 'Støtte i pres, bænk og overhead – uden at gøre håndleddet svagere.', intro: 'Håndleddet bærer vægten i alle presøvelser. Her kan du læse om håndledsstilling, wrist wraps og hvordan du træner, så håndleddet holder til tunge løft.' },
  { slug: 'kabeltraening', name: 'Kabeltræning', desc: 'Manchetter, øvelser og opsætning til ben, baller og ryg.', intro: 'Kabelmaskinen giver jævn modstand gennem hele bevægelsen. Her finder du øvelser med manchetter og en guide til at stille maskinen rigtigt op.' },
  { slug: 'teknik', name: 'Teknik', desc: 'Dødløft, rows, pull-ups og shrugs trin for trin.', intro: 'God teknik gør dig stærkere og mindsker risikoen for overbelastning. Her er guides til de store trækøvelser, gennemgået trin for trin.' },
  { slug: 'skadesforebyggelse', name: 'Skadesforebyggelse', desc: 'Greb, håndled og albuer – hvad fysioterapeuterne anbefaler.', intro: 'Opvarmning, belastningsstyring og hvornår du skal søge hjælp. Guiderne her er skrevet eller gennemgået af fysioterapeuter og læger.' },
  { slug: 'kom-i-gang', name: 'Kom i gang', desc: 'Første program, udstyr og fejl de fleste begyndere laver.', intro: 'Ny i styrketræning? Start her med et enkelt program og et overblik over det udstyr, du faktisk har brug for.' },
];

export const navCats = ['greb', 'handled', 'kabeltraening', 'teknik', 'skadesforebyggelse'];

export const team = [
  { id: 'fysioterapeut', title: 'Fysioterapeut', role: 'Gennemgår guides om håndled, albuer og skadesforebyggelse for faglig korrekthed.' },
  { id: 'personlig-traener', title: 'Personlig træner', role: 'Skriver guides om teknik, programmer, kabeltræning og om at komme i gang.' },
  { id: 'laege', title: 'Læge', role: 'Gennemgår guides, hvor smerter og skader nævnes, og vurderer hvornår man bør søge læge.' },
  { id: 'styrkeloeftraener', title: 'Styrkeløfttræner', role: 'Skriver guides om greb, løftestropper og tunge trækøvelser.' },
];

export const articles = [
  { slug: 'greb/loftestropper', cat: 'greb', title: 'Løftestropper: sådan vælger du den rigtige type', excerpt: 'Lasso, figure 8 eller løftegreb? Forskellen på typerne, hvad de passer til, og hvordan du sætter dem rigtigt på.', author: 'styrkeloeftraener', reviewer: 'fysioterapeut', keywords: 'stropper lifting straps løftestropper strapit lasso figure 8 løftegreb dødløft greb' },
  { slug: 'greb/grebstraening', cat: 'greb', title: 'Grebstræning: få et stærkere greb uden stropper', excerpt: 'Fem øvelser der gør grebet stærkere, og hvordan du kombinerer grebstræning med stropper.', author: 'styrkeloeftraener', reviewer: 'fysioterapeut', keywords: 'greb grebsstyrke farmers walk dead hang hook grip kalk underarme' },
  { slug: 'handled/wrist-wraps', cat: 'handled', title: 'Wrist wraps: hvornår giver de mening?', excerpt: 'Hvad wrist wraps gør, hvornår du skal bruge dem, og forskellen på 40 og 60 cm.', author: 'personlig-traener', reviewer: 'fysioterapeut', keywords: 'wrist wraps håndledsbind håndled bænkpres skulderpres dips' },
  { slug: 'handled/haandledsstilling', cat: 'handled', title: 'Håndleddet i bænkpres og skulderpres', excerpt: 'Sådan holder du håndleddet stablet over albuen, så vægten går gennem underarmen.', author: 'personlig-traener', reviewer: 'fysioterapeut', keywords: 'håndled bænkpres skulderpres greb håndledsstilling teknik' },
  { slug: 'kabeltraening/kabelmanchetter-oevelser', cat: 'kabeltraening', title: 'Kabelmanchetter: 8 øvelser til ben og baller', excerpt: 'Otte øvelser med manchetter om anklen, og hvordan du sætter dem sammen til et træningspas.', author: 'personlig-traener', reviewer: 'fysioterapeut', keywords: 'kabel manchetter cuffs hookit glute kickback baller ben abduktion' },
  { slug: 'kabeltraening/kabelmaskine-opsaetning', cat: 'kabeltraening', title: 'Sådan stiller du kabelmaskinen op', excerpt: 'Trissehøjde, håndtag, karabinhage og placering – det, der afgør om øvelsen virker.', author: 'personlig-traener', reviewer: 'styrkeloeftraener', keywords: 'kabelmaskine trisse karabinhage håndtag opsætning' },
  { slug: 'teknik/doedloeft', cat: 'teknik', title: 'Dødløft trin for trin', excerpt: 'Opstilling, greb, træk og nedsænkning – og de fejl, der oftest stopper fremgangen.', author: 'styrkeloeftraener', reviewer: 'fysioterapeut', keywords: 'dødløft deadlift teknik ryg greb rdl sumo' },
  { slug: 'teknik/rows', cat: 'teknik', title: 'Rows: sådan træner du ryggen', excerpt: 'Fire row-varianter, hvad de træner, og hvordan du rammer ryggen frem for armene.', author: 'personlig-traener', reviewer: 'styrkeloeftraener', keywords: 'rows roning ryg kabelroning håndvægtsroning stangroning' },
  { slug: 'skadesforebyggelse/opvarmning', cat: 'skadesforebyggelse', title: 'Opvarmning før styrketræning', excerpt: 'En enkel opvarmning i to trin, der gør kroppen klar til tunge sæt.', author: 'fysioterapeut', reviewer: 'laege', keywords: 'opvarmning skader forebyggelse mobilitet opvarmningssæt' },
  { slug: 'skadesforebyggelse/ondt-i-albuen', cat: 'skadesforebyggelse', title: 'Ondt i albuen ved trækøvelser', excerpt: 'Hvad du kan justere i træningen, og hvornår du skal have smerterne undersøgt.', author: 'fysioterapeut', reviewer: 'laege', keywords: 'albue smerter tennisalbue golfalbue træk overbelastning' },
  { slug: 'kom-i-gang/foerste-program', cat: 'kom-i-gang', title: 'Dit første styrkeprogram', excerpt: 'Et helkropsprogram til to-tre ugentlige træninger, og hvordan du gør fremskridt.', author: 'personlig-traener', reviewer: 'fysioterapeut', keywords: 'program begynder helkrop styrketræning kom i gang' },
  { slug: 'kom-i-gang/udstyr', cat: 'kom-i-gang', title: 'Det udstyr, du faktisk har brug for', excerpt: 'Hvad du skal bruge fra første dag, og hvad der først giver mening, når vægtene bliver tunge.', author: 'personlig-traener', reviewer: 'styrkeloeftraener', keywords: 'udstyr begynder sko stropper wrist wraps bælte cuffs' },
];

export const newest = ['greb/loftestropper', 'handled/wrist-wraps', 'kabeltraening/kabelmanchetter-oevelser'];

const CDN = 'https://cdn.shopify.com/s/files/1/0040/0464/2905/files/';
export const products: Record<string, { name: string; price: number; url: string; img: string; desc: string; points: string[]; notFor: string }> = {
  strapit: { name: 'StrapIt Lifting Straps', price: 249, url: 'https://www.nowmakeit.eu/products/strapit-sort', img: CDN + 'strapit-lifting-straps-sort-makeit.jpg?v=1789716190', desc: 'Lasso-strop i bomuldsbånd med italiensk bio-læder, produceret i Danmark. Let konstruktion med direkte fornemmelse af stangen.', points: ['Størrelser: Standard og Short (Short anbefales til hænder under ca. 16 cm)', 'Bio-læder og sytråd er OEKO-TEX® STANDARD 100-certificeret', '4,7/5 på 98 anmeldelser hos MakeIt'], notFor: 'du kun løfter tunge dødløft tæt på max og vil låses helt til stangen – så er en figure 8 stærkere.' },
  premium: { name: 'StrapIt Premium Lifting Straps', price: 349, url: 'https://www.nowmakeit.eu/products/strapit-premium-sort', img: CDN + 'strapit-premium-lifting-straps-sort-makeit.jpg?v=1789716194', desc: 'Tykkere og blødere udgave af StrapIt med mere polstring omkring hånden. Skåret, samlet og syet i Danmark.', points: ['Størrelse: Standard (hænder fra ca. 16 cm)', 'Dobbelte syninger på de belastede områder', 'Italiensk bio-læder uden animalske materialer'], notFor: 'du foretrækker en tynd strop med tæt kontakt til stangen – så passer StrapIt Standard bedre.' },
  wrist: { name: 'MakeIt Wrist Wraps', price: 349, url: 'https://www.nowmakeit.eu/products/wrist-wraps', img: CDN + 'wrist-wraps-sort-makeit_2026.jpg?v=1789799047', desc: 'Håndledsbind med justerbar velcrolukning, sælges som et sæt med to. Produceret i Danmark.', points: ['Længder: 40 cm og 60 cm', 'Til bænkpres, skulderpres, dips og andre presøvelser', 'Bio-læder og sytråd er OEKO-TEX® STANDARD 100-certificeret'], notFor: 'du træner trækøvelser – wrist wraps støtter håndleddet i pres, ikke grebet i træk.' },
  hookit: { name: 'HookIt Cuffs', price: 349, url: 'https://www.nowmakeit.eu/products/hookit-sort', img: CDN + 'Hookit-sort-makeit.jpg?v=1789716195', desc: 'Selvjusterende kabelmanchetter med polstring, der kan bruges om både håndled og ankel. Produceret i Danmark.', points: ['Længder: Short (håndled) og Long (ankler)', 'Selvjusterende – strammer til under belastning', 'Dobbelte syninger og bio-læder'], notFor: 'du kun træner med håndtag og reb – manchetterne er til øvelser, hvor kablet sidder om håndled eller ankel.' },
  karabin: { name: 'MakeIt Karabinhage', price: 99, url: 'https://www.nowmakeit.eu/products/makeit-karabinhage', img: CDN + 'karbinhage-sort-makeit.jpg?v=1789716248', desc: 'Karabinhage til at fastgøre manchetter og andet tilbehør på kabelmaskinen.', points: ['12 kN-certificeret', 'Sælges som 1 stk.', 'Passer til HookIt Cuffs'], notFor: 'din kabelmaskine allerede har en karabin på kablet.' },
};

export const catBySlug = (s: string) => categories.find((c) => c.slug === s)!;
export const memberById = (id: string) => team.find((t) => t.id === id)!;
export const articleBySlug = (s: string) => articles.find((a) => a.slug === s)!;
export const href = (slug: string) => `/${slug}/`;
export const articlesIn = (cat: string) => articles.filter((a) => a.cat === cat);
