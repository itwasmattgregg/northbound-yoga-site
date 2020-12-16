export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fd963e1c228d425e79e565b',
                  title: 'Sanity Studio',
                  name: 'northbound-yoga-site-studio',
                  apiId: '82c77cba-ecb1-4bdb-82a8-f737b65a0995'
                },
                {
                  buildHookId: '5fd963e19a2cde00986752e0',
                  title: 'Blog Website',
                  name: 'northbound-yoga-site',
                  apiId: 'f3a69e28-ec56-42fe-978c-e8f8dac8451f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/itwasmattgregg/northbound-yoga-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://northbound-yoga-site.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
