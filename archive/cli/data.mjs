#!/usr/bin/env node

const incenses = {
  pgm: {
    moon: 'myrrh',
    mercury: 'cassia',
    venus: 'spikenard',
    sun: 'frankincense',
    mars: 'costos',
    jupiter: 'bay laurel',
    saturn: 'storax',
  },
  abano: {
    moon: 'aloes',
    mercury: 'mastic',
    venus: 'pepperwort',
    sun: 'red sandalwood',
    mars: 'pepper',
    jupiter: 'saffron',
    saturn: 'sulphur',
  },
  agrippa: {
    moon: 'myrtle',
    mercury: 'cinnamon',
    venus: 'saffron',
    sun: 'mastic',
    mars: 'aloes',
    jupiter: 'nutmeg',
    saturn: 'pepperword',
  },
  liber_juratus: {
    moon: 'myrtle',
    mercury: 'cinnamon',
    venus: 'saffron',
    sun: 'mastic',
    mars: 'aloes',
    jupiter: 'mace',
    saturn: 'costus',
  },
  vk_solomon: {
    moon: 'powdered loadstone',
    mercury: 'juniper',
    venus: 'musk',
    sun: 'mastic',
    mars: 'aloes',
    jupiter: 'mace',
    saturn: 'sulphur',
  },
};

const materia = {
  al_biruni: {
    moon: [
      'glass',
      'any white stone',
      'emerald',
      'moonstone',
      'anything made from silver',
      'crystal',
    ],
    mercury: [
      'amber',
      'any green stone',
      'any coin struck with a name or number',
      'coral',
    ],
    venus: [
      'silver',
      'gold',
      'brass',
      'pearls',
    ],
    sun: [
      'lapis lazuli',
      'glass',
      'marble',
      'gold',
    ],
    mars: [
      'magnetic iron',
      'copper',
    ],
    jupiter: [
      'tin',
      'any white or yellow stone',
      'brass',
      'diamond',
    ],
    saturn: [
      'iron slag',
      'lead',
      'lithic stones',
    ],
  },
  william_lily: {
    moon: [
      'silver',
      'selenite',
      'all soft stones',
      'crystals',
    ],
    mercury: [
      'quicksilver',
      'milestone',
      'topaz',
      'vitriol',
      'stones of mixed colors',
    ],
    venus: [
      'copper',
      'brass',
      'cronelian',
      'sapphire',
      'coral',
      'lapis',
      'alabaster',
    ],
    sun: [
      'any shining or fire-like stone',
      'gold',
      'hyacinth',
      'adamant',
      'ruby',
    ],
    mars: [
      'iron',
      'brimstone/sulphur',
      'ochre',
      'lodestone',
      'bloodstone',
      'jasper',
    ],
    jupiter: [
      'tin',
      'amethyst',
      'topaz',
      'marble',
      'free stone',
    ],
    saturn: [
      'lead',
      'ledstone',
      'any metal waste',
      'dust',
      'sapphire',
      'any black stone',
    ],
  },
  giorgia_anselmi: {
    moon: [
      'silver',
    ],
    mercury: [
      'silver',
      'congealed quicksilver',
    ],
    venus: [
      'bright metals',
      'silver',
    ],
    sun: [
      'gold',
    ],
    mars: [
      'iron',
      'copper',
    ],
    jupiter: [
      'white tin',
    ],
    saturn: [
      'lead',
    ],
  },
  william_ramsey: {
    moon: [
      'silver',
    ],
    mercury: [
      'quicksilver',
      'books',
      'parchment',
      'paper',
    ],
    venus: [
      'copper',
      'brass',
      'alabaster',
      'white amber',
      'silk',
      'linen',
    ],
    sun: [
      'gold',
      'yellow amber',
    ],
    mars: [
      'iron',
      'steel',
      'brick',
      'flint',
      'charcoal',
      'lodestone',
    ],
    jupiter: [
      'tin',
      'pewter',
      'wool cloth',
    ],
    saturn: [
      'black cloth',
      'wood (esp. cedar)',
      'lead',
      'dark stones',
      'clay or earthenware',
    ],
  },
};

const planets = [
  { value: 'moon', },
  { value: 'mercury', },
  { value: 'venus', },
  { value: 'sun', },
  { value: 'mars', },
  { value: 'jupiter', },
  { value: 'saturn', },
];

export { incenses, materia, planets };
