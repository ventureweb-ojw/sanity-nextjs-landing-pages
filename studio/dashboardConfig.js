export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62017c3cb8575f5639ad3fa9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jpem1pxr',
                  apiId: 'a7cd5919-b1bd-4b55-82b2-88ca5be3d493'
                },
                {
                  buildHookId: '62017c3dc873a05313438c3a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ta6b43am',
                  apiId: 'ba0c501a-2972-4107-b77b-e16c66f675b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ventureweb-ojw/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ta6b43am.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page', 'experience'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
