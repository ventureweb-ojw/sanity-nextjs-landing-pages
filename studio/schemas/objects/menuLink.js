export default {
    title: 'Menu Link',
    name: 'menuLink',
    type: 'object',
    validation: Rule =>
      Rule.custom(
        (fields = {}) =>
          !fields.route || !fields.link || 'Only one link type is allowed'
      ),
    fieldsets: [
      {
        title: 'Link',
        name: 'link',
      },
    ],
    fields: [
      {
        title: 'Label',
        name: 'label',
        type: 'string',
      },
      {
        title: 'Internal link',
        description: 'Use this to link between pages on the website',
        name: 'route',
        type: 'reference',
        to: [{ type: 'route' }],
        fieldset: 'link',
      },
      {
        title: 'External link',
        name: 'link',
        type: 'url',
        fieldset: 'link',
      },
      {
          title: 'Children',
          name: 'children',
          type: 'array',
          of: [
            {
              title: 'Child Links',
              type: 'menuLink',
            },
          ],
      }
    ],
    preview: {
      select: {
        label: 'label',
        routeTitle: 'route.title',
        slug: 'route.slug.current',
        link: 'link',
      },
      prepare({ label, routeTitle = '', slug, link }) {
        const subtitleExtra = slug
          ? `Slug:/${slug}/`
          : link
          ? `External link: ${link}`
          : 'Not set';
        return {
          title: `${label}`,
          subtitle: `${routeTitle} ${subtitleExtra}`,
        };
      },
    },
  };
  