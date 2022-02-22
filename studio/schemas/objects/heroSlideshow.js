export default {
    type: 'object',
    name: 'heroSlideshow',
    title: 'Hero Slideshow',
    fields: [
      {
        name: 'heros',
        type: 'array',
        title: 'Heros',
        of: [
          {
            title: 'Hero',
            type: 'hero',
          },
        ],
      },
    ],
  };
  