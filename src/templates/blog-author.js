import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import renderList from "../components/renderList"

const BlogAuhor = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { currentPage, numPages, author, allAuthors } = pageContext

  return (
    <Layout>
      <Seo title={author} />

      <div className="container">
        <div className="row">
          <div className="cell-xs">
            <div className="header-section-title">Authors:</div>
            <div className="header-section-list">
              {allAuthors.map((cat) => (
                <Link className="mr-4" to={`/blog/author/${kebabCase(cat)}`}>
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {allMarkdownRemark.edges.map(renderList)}
        </div>

        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          contextPage={`author/${kebabCase(author)}`}
        />
      </div>
    </Layout>
  )
}

export default BlogAuhor

export const query = graphql`
  query blogPostsListByAuthor($author: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { in: [$author] } } }
      limit: $limit
      skip: $skip
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
        }
      }
    }
  }
`
