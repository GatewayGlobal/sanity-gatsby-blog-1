export default {
  widgets: [
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
                  buildHookId: '5f5a1d56af236a1777357918',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-1-studio-igjk5xk1',
                  apiId: '0a6bbcf9-3a64-43b9-9aa2-a325b2c61fe9'
                },
                {
                  buildHookId: '5f5a1d56bca9f3150211678d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-1-web-7iye5oca',
                  apiId: 'e0b06d58-4130-4599-9cb9-342071f23cd0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GatewayGlobal/sanity-gatsby-blog-1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-1-web-7iye5oca.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
