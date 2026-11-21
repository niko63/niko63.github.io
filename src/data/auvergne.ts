// Contenu de la page « Mon Auvergne ». Modifie les textes ici (français et anglais), sans toucher au dessin de la page.
// Les textes sont un premier jet : remplace-les par les tiens (souvenirs, lieux préférés, anecdotes).

type Txt = { fr: string; en: string };

export const auvergne = {
  intro: {
    fr: 'Ce n’est pas un voyage : c’est d’où je viens. Quelques lieux, quelques images, et l’envie de vous donner envie d’y passer.',
    en: 'This is not a trip: it is where I come from. A few places, a few pictures, and the hope that you will want to visit.',
  } as Txt,

  // Texte personnel : un élément par paragraphe.
  story: {
    title: { fr: 'D’où je viens', en: 'Where I come from' } as Txt,
    paragraphs: [
      {
        fr: 'Je suis auvergnat. Entre volcans éteints, plateaux, forêts et villages de pierre, l’Auvergne est le paysage de mon enfance, et celui où je reviens dès que je peux, en Haute-Loire.',
        en: 'I am from Auvergne. Between extinct volcanoes, plateaus, forests and stone villages, it is the landscape of my childhood, and the one I come back to whenever I can, in Haute-Loire.',
      },
      {
        fr: 'Écris ici ce qui compte pour toi : ton village, une odeur, une randonnée, une table de famille, ce que tu fais en rentrant.',
        en: 'Write here what matters to you: your village, a smell, a hike, a family table, what you do when you go back.',
      },
    ] as Txt[],
  },

  // Lieux à voir, regroupés par département. Ajoute ou retire des lieux librement.
  placesTitle: { fr: 'Lieux à voir', en: 'Places to see' } as Txt,
  areas: [
    {
      name: { fr: 'Haute-Loire', en: 'Haute-Loire' } as Txt,
      places: [
        {
          name: { fr: 'Le Puy-en-Velay', en: 'Le Puy-en-Velay' } as Txt,
          text: {
            fr: 'Une ville posée sur des pitons volcaniques : la cathédrale, la statue Notre-Dame de France sur le rocher Corneille et le départ d’un grand chemin de Saint-Jacques.',
            en: 'A city set among volcanic pinnacles: the cathedral, the Notre-Dame de France statue on the Corneille rock and the start of a major Way of St James route.',
          } as Txt,
        },
        {
          name: { fr: 'Saint-Michel d’Aiguilhe', en: 'Saint-Michel d’Aiguilhe' } as Txt,
          text: {
            fr: 'Une petite chapelle romane perchée au sommet d’une aiguille de lave, au-dessus de la ville.',
            en: 'A small Romanesque chapel perched on top of a lava needle above the town.',
          } as Txt,
        },
        {
          name: { fr: 'La Chaise-Dieu', en: 'La Chaise-Dieu' } as Txt,
          text: {
            fr: 'Une grande abbatiale gothique au cœur du plateau, connue pour sa Danse macabre et son festival de musique.',
            en: 'A large Gothic abbey church on the plateau, known for its Danse macabre fresco and its music festival.',
          } as Txt,
        },
        {
          name: { fr: 'Brioude', en: 'Brioude' } as Txt,
          text: {
            fr: 'La basilique Saint-Julien, plus grande église romane d’Auvergne, et le bord de l’Allier.',
            en: 'The Basilica of Saint-Julien, the largest Romanesque church in Auvergne, and the banks of the Allier.',
          } as Txt,
        },
        {
          name: { fr: 'Les gorges de la Loire', en: 'The Loire gorges' } as Txt,
          text: {
            fr: 'La Loire encore sauvage, entre falaises et forêts, avant qu’elle ne devienne le grand fleuve que l’on connaît.',
            en: 'The Loire still wild, between cliffs and forests, before it becomes the great river we know.',
          } as Txt,
        },
      ],
    },
    {
      name: { fr: 'Puy-de-Dôme', en: 'Puy-de-Dôme' } as Txt,
      places: [
        {
          name: { fr: 'Le puy de Dôme et la chaîne des Puys', en: 'The Puy de Dôme and the Chaîne des Puys' } as Txt,
          text: {
            fr: 'Une alignée de volcans éteints, inscrite au patrimoine mondial de l’UNESCO, dominée par le puy de Dôme (1 465 m).',
            en: 'A line of extinct volcanoes, a UNESCO World Heritage site, dominated by the Puy de Dôme (1,465 m).',
          } as Txt,
        },
        {
          name: { fr: 'Le lac Pavin', en: 'Lake Pavin' } as Txt,
          text: {
            fr: 'Un lac de cratère rond et profond, entouré de forêt, que l’on peut faire à pied en moins de deux heures.',
            en: 'A round, deep crater lake surrounded by forest, which you can walk around in under two hours.',
          } as Txt,
        },
        {
          name: { fr: 'Clermont-Ferrand', en: 'Clermont-Ferrand' } as Txt,
          text: {
            fr: 'La ville en pierre de lave noire, sa cathédrale gothique et les volcans à l’horizon.',
            en: 'The city built in black lava stone, its Gothic cathedral and the volcanoes on the horizon.',
          } as Txt,
        },
        {
          name: { fr: 'Le Sancy', en: 'The Sancy massif' } as Txt,
          text: {
            fr: 'Le point culminant du Massif central, avec le Mont-Dore, Besse et de belles randonnées en été comme en hiver.',
            en: 'The highest point of the Massif Central, with Le Mont-Dore, Besse and great hikes in summer and winter.',
          } as Txt,
        },
      ],
    },
    {
      name: { fr: 'Cantal', en: 'Cantal' } as Txt,
      places: [
        {
          name: { fr: 'Salers', en: 'Salers' } as Txt,
          text: {
            fr: 'Un village de pierre sombre, ses remparts, ses vaches et son fromage.',
            en: 'A village of dark stone, its ramparts, its cattle and its cheese.',
          } as Txt,
        },
        {
          name: { fr: 'Le plomb du Cantal', en: 'The Plomb du Cantal' } as Txt,
          text: {
            fr: 'Le sommet du plus grand volcan d’Europe, avec une vue sur les monts du Cantal.',
            en: 'The summit of the largest volcano in Europe, with a view over the Cantal mountains.',
          } as Txt,
        },
      ],
    },
  ],

  // Photos : ajoute-les ici une fois les images copiées dans public/auvergne/ (voir l’exemple).
  galleryTitle: { fr: 'Photos', en: 'Photos' } as Txt,
  gallery: [] as { src: string; alt: string; alt_en?: string }[],
  // Exemple :
  // gallery: [
  //   { src: '/auvergne/puy-en-velay.jpg', alt: 'Le Puy-en-Velay au lever du jour', alt_en: 'Le Puy-en-Velay at sunrise' },
  // ],
};
