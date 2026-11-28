// Contenu de la page Recherche. Modifie les textes ici (français et anglais), sans toucher au dessin de la page.
// Les chiffres viennent du profil HAL (https://cv.hal.science/nicolas-daclin) : à mettre à jour de temps en temps.

type Txt = { fr: string; en: string };

export const research = {
  intro: {
    fr: 'Autour des processus, pour les modéliser, les simuler, les faire dialoguer entre organisations et les rendre résilients.',
    en: 'Around processes, to model them, simulate them, make them interoperate across organisations and make them resilient.',
  } as Txt,

  // Indicateur d'impact, affiché seulement quand value est renseigné. Une seule source, avec sa date.
  hIndex: {
    value: 19 as number | null,
    label: { fr: 'h-index', en: 'h-index' } as Txt,
    source: 'Google Scholar, nov. 2026',
    url: 'https://scholar.google.com/citations?user=Tfx289EAAAAJ&hl=fr',
  },

  // Chiffres du profil HAL.
  stats: [
    { n: 127, label: { fr: 'documents sur HAL', en: 'documents on HAL' } as Txt },
    { n: 24, label: { fr: 'articles de revue', en: 'journal articles' } as Txt },
    { n: 81, label: { fr: 'communications en congrès', en: 'conference papers' } as Txt },
  ],

  // Le fil conducteur et les axes de recherche ne forment plus qu'une structure : quatre étapes, puis l'horizon.
  path: {
    title: { fr: 'Le fil conducteur', en: 'The common thread' } as Txt,
    steps: [
      {
        icon: 'model',
        name: { fr: 'Modéliser', en: 'Model' } as Txt,
        text: {
          fr: 'Décrire un processus et ses décisions avec des notations partagées.',
          en: 'Describe a process and its decisions with shared notations.',
        } as Txt,
        tags: ['BPMN', 'GRAI', 'IDEF0'],
      },
      {
        icon: 'simulate',
        name: { fr: 'Simuler', en: 'Simulate' } as Txt,
        text: {
          fr: 'Transformer un modèle de processus en simulation pour mesurer, comparer et anticiper.',
          en: 'Turn a process model into a simulation to measure, compare and anticipate.',
        } as Txt,
        tags: ['DEVS', 'BPSim', { fr: 'indicateurs', en: 'KPIs' }],
      },
      {
        icon: 'interop',
        name: { fr: 'Faire interopérer', en: 'Interoperate' } as Txt,
        text: {
          fr: 'Faire dialoguer des processus et des simulateurs issus d’organisations différentes, et vérifier qu’ils s’entendent.',
          en: 'Make processes and simulators from different organisations work together, and check that they understand each other.',
        } as Txt,
        tags: ['HLA', { fr: 'exigences', en: 'requirements' }, { fr: 'vérification', en: 'verification' }],
      },
      {
        icon: 'resilient',
        name: { fr: 'Rendre résilient', en: 'Make resilient' } as Txt,
        text: {
          fr: 'Évaluer comment un système interconnecté encaisse une perturbation, des infrastructures critiques aux hôpitaux de campagne.',
          en: 'Assess how an interconnected system absorbs a disruption, from critical infrastructures to field hospitals.',
        } as Txt,
        tags: [{ fr: 'infrastructures critiques', en: 'critical infrastructures' }, { fr: 'cybersécurité', en: 'cybersecurity' }],
      },
    ] as { icon: 'model' | 'simulate' | 'interop' | 'resilient'; name: Txt; text: Txt; tags: (string | Txt)[] }[],
    horizon: {
      icon: 'horizon' as const,
      name: { fr: 'Et après', en: 'What comes next' } as Txt,
      text: {
        fr: 'Des systèmes holoniques à l’heure de l’intelligence artificielle et des jumeaux numériques.',
        en: 'Holonic systems in the era of artificial intelligence and digital twins.',
      } as Txt,
      tags: [{ fr: 'jumeaux numériques', en: 'digital twins' }, { fr: 'holons', en: 'holons' }, { fr: 'IA', en: 'AI' }],
    },
  },

  tool: {
    title: { fr: 'MSStudio, mon outil', en: 'MSStudio, my tool' } as Txt,
    text: {
      fr: 'Une application web que je développe, qui réunit des notations de modélisation d’entreprise et la simulation à événements discrets. Elle sert la recherche, et aussi l’enseignement de ces matières.',
      en: 'A web application I am developing, which brings together enterprise modelling notations and discrete-event simulation. It serves research, and also the teaching of these subjects.',
    } as Txt,
    slug: 'msstudio',
  },

  // « Mon corpus en chiffres » (profil HAL, comptes susceptibles d'évoluer).
  domains: [
    { label: { fr: 'Informatique', en: 'Computer science' } as Txt, n: 22 },
    { label: { fr: 'Sciences de l’ingénieur', en: 'Engineering sciences' } as Txt, n: 20 },
    { label: { fr: 'Ingénierie assistée par ordinateur', en: 'Computer-aided engineering' } as Txt, n: 19 },
    { label: { fr: 'Modélisation et simulation', en: 'Modelling and simulation' } as Txt, n: 18 },
    { label: { fr: 'Complexité', en: 'Complexity' } as Txt, n: 7 },
    { label: { fr: 'Risques', en: 'Risks' } as Txt, n: 6 },
  ],
  keywords: [
    { w: { fr: 'interopérabilité', en: 'interoperability' } as Txt, n: 15 },
    { w: { fr: 'résilience', en: 'resilience' } as Txt, n: 11 },
    { w: { fr: 'simulation', en: 'simulation' } as Txt, n: 10 },
    { w: { fr: 'vérification', en: 'verification' } as Txt, n: 9 },
    { w: { fr: 'exigences d’interopérabilité', en: 'interoperability requirements' } as Txt, n: 7 },
    { w: { fr: 'ingénierie système', en: 'systems engineering' } as Txt, n: 5 },
    { w: { fr: 'BPMN', en: 'BPMN' } as Txt, n: 4 },
    { w: { fr: 'processus collaboratifs', en: 'collaborative processes' } as Txt, n: 4 },
    { w: { fr: 'interopérabilité fédérée', en: 'federated interoperability' } as Txt, n: 4 },
    { w: { fr: 'évaluation de la résilience', en: 'resilience assessment' } as Txt, n: 4 },
  ],

  publications: {
    title: { fr: 'Publications récentes', en: 'Recent publications' } as Txt,
    items: [
      { year: 2026, title: 'A Model-Driven Transformation Framework for Business Process Simulation and Process-Level KPI Computation', venue: 'Applications of Modelling and Simulation' },
      { year: 2025, title: 'Renewable Energy Mix System Modelling with Power Grid Integration', venue: 'Procedia Computer Science' },
      { year: 2024, title: 'An HLA-Based Automated Approach for the Interoperable Simulation of Collaborative Business Processes', venue: 'Simulation Modelling Practice and Theory' },
    ],
    cta: { fr: 'Toutes mes publications sur HAL', en: 'All my publications on HAL' } as Txt,
  },
};
