// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: 'Cookie Rater',
  siteTitle: 'Cookie Rater',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',

        // add this refs section so the BlogPosts are linked with the generated Tags pages
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],
  templates: {
    BlogPost: '/blog/:slug',
    // add the tags template
    Tag: '/tag/:id/'
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      }
    }
  }
}
