// Contenu de la page Recherche. Modifie les textes ici (français et anglais), sans toucher au dessin de la page.
// Les chiffres viennent du profil HAL (https://cv.hal.science/nicolas-daclin) : à mettre à jour de temps en temps.

type Txt = { fr: string; en: string };

export const research = {
  intro: {
    fr: 'Autour des processus : les modéliser, les simuler, les faire dialoguer entre organisations et les rendre résilients.',
    en: 'Around processes: modelling them, simulating them, making them interoperate across organisations and making them resilient.',
  } as Txt,

  // Chiffres du profil HAL.
  stats: [
    { n: 127, label: { fr: 'documents sur HAL', en: 'documents on HAL' } as Txt },
    { n: 24, label: { fr: 'articles de revue', en: 'journal articles' } as Txt },
    { n: 81, label: { fr: 'communications en congrès', en: 'conference papers' } as Txt },
  ],

  // Le fil conducteur : quatre étapes qui s'enchaînent.
  thread: {
    title: { fr: 'Le fil conducteur', en: 'The common thread' } as Txt,
    steps: [
      {
        name: { fr: 'Modéliser', en: 'Model' } as Txt,
        text: { fr: 'Décrire un processus et ses décisions avec des notations partagées.', en: 'Describe a process and its decisions with shared notations.' } as Txt,
        tags: ['BPMN', 'GRAI', 'IDEF0'],
      },
      {
        name: { fr: 'Simuler', en: 'Simulate' } as Txt,
        text: { fr: 'Exécuter le modèle pour mesurer, comparer, anticiper.', en: 'Run the model to measure, compare and anticipate.' } as Txt,
        tags: ['DEVS', 'BPSim', 'KPI'],
      },
      {
        name: { fr: 'Faire interopérer', en: 'Interoperate' } as Txt,
        text: { fr: 'Faire dialoguer des processus et des simulateurs issus d’organisations différentes.', en: 'Make processes and simulators from different organisations work together.' } as Txt,
        tags: ['HLA', { fr: 'exigences', en: 'requirements' }],
      },
      {
        name: { fr: 'Rendre résilient', en: 'Make resilient' } as Txt,
        text: { fr: 'Évaluer comment un système interconnecté encaisse une perturbation.', en: 'Assess how an interconnected system absorbs a disruption.' } as Txt,
        tags: [{ fr: 'infrastructures critiques', en: 'critical infrastructures' }],
      },
    ] as { name: Txt; text: Txt; tags: (string | Txt)[] }[],
  },

  // Axes détaillés (d'après les thèmes du profil HAL).
  axes: {
    title: { fr: 'Quatre axes', en: 'Four research axes' } as Txt,
    items: [
      {
        emoji: '🤝',
        name: { fr: 'Interopérabilité des processus collaboratifs', en: 'Interoperability of collaborative processes' } as Txt,
        text: {
          fr: 'Exigences d’interopérabilité, vérification, et interopérabilité fédérée assistée par l’IA, par exemple pour le Physical Internet.',
          en: 'Interoperability requirements, verification, and AI-assisted federated interoperability, for example for the Physical Internet.',
        } as Txt,
      },
      {
        emoji: '🛡️',
        name: { fr: 'Résilience des infrastructures et systèmes interconnectés', en: 'Resilience of infrastructures and interconnected systems' } as Txt,
        text: {
          fr: 'Évaluation de la résilience, infrastructures critiques, cybersécurité (notamment des hôpitaux de campagne). Participation à un projet ANR sur le sujet.',
          en: 'Resilience assessment, critical infrastructures, cybersecurity (notably for field hospitals). Participation in an ANR project on the topic.',
        } as Txt,
      },
      {
        emoji: '🧪',
        name: { fr: 'Simulation de processus métiers', en: 'Business process simulation' } as Txt,
        text: {
          fr: 'BPMN, BPSim, DEVS, HLA et ingénierie dirigée par les modèles : transformer un modèle de processus en simulation et calculer des indicateurs de performance.',
          en: 'BPMN, BPSim, DEVS, HLA and model-driven engineering: turning a process model into a simulation and computing performance indicators.',
        } as Txt,
      },
      {
        emoji: '🪞',
        name: { fr: 'Jumeaux numériques, holons et IA', en: 'Digital twins, holons and AI' } as Txt,
        text: {
          fr: 'Systèmes holoniques à l’heure de l’intelligence artificielle et des jumeaux numériques.',
          en: 'Holonic systems in the era of artificial intelligence and digital twins.',
        } as Txt,
      },
    ],
  },

  tool: {
    title: { fr: 'L’outil : MSStudio', en: 'The tool: MSStudio' } as Txt,
    text: {
      fr: 'Une application web que je développe : elle réunit des notations de modélisation d’entreprise et la simulation à événements discrets. Elle sert la recherche, et aussi l’enseignement de ces matières.',
      en: 'A web application I am developing: it brings together enterprise modelling notations and discrete-event simulation. It serves research, and also the teaching of these subjects.',
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
