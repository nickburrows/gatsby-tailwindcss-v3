const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require(`lodash.kebabcase`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // const blogPostTemplate = path.resolve(`./src/templates/blogTemplate.js`)
  const dsgTemplate = path.resolve(`./src/templates/using-dsg.js`)
  const blogLayout = path.resolve(`./src/templates/blog-post.js`)
  const blogListLayout = path.resolve(`./src/templates/blog-list.js`)
  const blogCategoryLayout = path.resolve(`./src/templates/blog-category.js`)
  const blogAuthorLayout = path.resolve(`./src/templates/blog-author.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              author
              category
              featured
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO]
                  )
                }
              }
            }
            html
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 3
  const postsWithoutFeatured = posts.filter(({ node }) => {
    return !node.frontmatter.featured
  })
  const numPages = Math.ceil(postsWithoutFeatured.length / postsPerPage)
  const categories = []
  const authors = []

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: blogListLayout,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
      },
    })
  })

  if (posts.length > 0) {
    posts.forEach((post, index, arr) => {
      post.node.frontmatter.category.forEach(cat => categories.push(cat))
      authors.push(post.node.frontmatter.author)

      const prev = arr[index - 1]
      const next = arr[index + 1]

      createPage({
        path: post.node.fields.slug,
        component: blogLayout,
        context: {
          slug: post.node.fields.slug,
          prev: prev,
          next: next,
        },
      })
    })

    const countCategories = categories.reduce((prev, curr) => {
      prev[curr] = (prev[curr] || 0) + 1
      return prev
    }, {})
    const allCategories = Object.keys(countCategories)

    allCategories.forEach((cat, i) => {
      const link = `/blog/category/${kebabCase(cat)}`

      Array.from({
        length: Math.ceil(countCategories[cat] / postsPerPage),
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? link : `${link}/page/${i + 1}`,
          component: blogCategoryLayout,
          context: {
            allCategories: allCategories,
            category: cat,
            limit: postsPerPage,
            skip: i * postsPerPage,
            currentPage: i + 1,
            numPages: Math.ceil(countCategories[cat] / postsPerPage),
          },
        })
      })
    })

    const countAuthor = authors.reduce((prev, curr) => {
      prev[curr] = (prev[curr] || 0) + 1
      return prev
    }, {})
    const allAuthors = Object.keys(countAuthor)

    allAuthors.forEach((aut, i) => {
      const link = `/blog/author/${kebabCase(aut)}`

      Array.from({
        length: Math.ceil(countAuthor[aut] / postsPerPage),
      }).forEach((_, i) => {
        createPage({
          path: i === 0 ? link : `${link}/page/${i + 1}`,
          component: blogAuthorLayout,
          context: {
            allAuthors: allAuthors,
            author: aut,
            limit: postsPerPage,
            skip: i * postsPerPage,
            currentPage: i + 1,
            numPages: Math.ceil(countAuthor[aut] / postsPerPage),
          },
        })
      })
    })
  }



  createPage({
    path: "/using-dsg",
    component: dsgTemplate,
    context: {},
    defer: true,
  })
}

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode })
  //   const [month, day, year] = new Date(node.frontmatter.date)
  //     .toLocaleDateString('en-EN', {
  //       year: 'numeric',
  //       month: '2-digit',
  //       day: '2-digit',
  //     })
  //     .split('/')
  //   const slug = value.replace('/blog/', '').replace(/\/$/, '')
  //   const url = `/blog/${year}/${month}/${day}${slug}`

  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value: url,
  //   })
  // }
}
