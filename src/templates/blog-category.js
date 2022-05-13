import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import renderList from "../components/renderList"

const BlogCategory = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { currentPage, numPages, category, allCategories } = pageContext

  return (
    <Layout>
      <Seo title={category} />

      <div className="container">
        <div className="row">
          <div className="cell-xs">
            <div className="header-section-title">Categories:</div>
            <div className="header-section-list">
              {allCategories.map((cat) => (
                <Link className="mr-4" to={`/blog/category/${kebabCase(cat)}`}>
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
          contextPage={`category/${kebabCase(category)}`}
        />
      </div>
    </Layout>
  )
}

export default BlogCategory

export const query = graphql`
  query blogPostsListByCategory($category: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
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
