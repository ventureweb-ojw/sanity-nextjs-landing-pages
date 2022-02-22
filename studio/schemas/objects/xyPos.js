export default {
    title: 'X/Y Position',
    name: 'xyPos',
    type: 'object',
    //@TODO - custom input component for layout
    fields: [
      {
        title: 'X Position (%)',
        name: 'xpos',
        type: 'number',
        initialValue: 50,
        validation: Rule => Rule.required().min(0).max(100).integer().error('Please enter an integer value between 0 and 100'),
      },
      {
        title: 'Y Position (%)',
        name: 'ypos',
        type: 'number',
        initialValue: 50,
        validation: Rule => Rule.required().min(0).max(100).integer().error('Please enter an integer value between 0 and 100'),
      },
    ],
  };
  