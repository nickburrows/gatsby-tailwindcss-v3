import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const BlogFeatured = () => {
  const { markdownRemark } = useStaticQuery(query)
  const image = getImage(markdownRemark.frontmatter.image)

  return (
    <div className="row">
      <div className="flex w-1/2">
        <div className="-ml-4">
          <Link to={markdownRemark.fields.slug}>
          <GatsbyImage image={image} alt={markdownRemark.frontmatter.title} />
          </Link>
        </div>
      </div>

      <div className="flex w-1/2">
        <div className="row">
          <div className="featured info">
            <p className="author">
              By{" "}
              <Link className="text-inherit"
                to={`/blog/author/${kebabCase(
                  markdownRemark.frontmatter.author
                )}`}
              >
                {markdownRemark.frontmatter.author}
              </Link>
            </p>

            <Link to={markdownRemark.fields.slug}>
              <h2 className="title">{markdownRemark.frontmatter.title}</h2>
            </Link>

            <p className="date">
              {formatDate(markdownRemark.frontmatter.date)}
            </p>

            <div className="inline-block mb-0 text-sm tracking-wide text-right text-gray-400 uppercase">
              {markdownRemark.frontmatter.category.map((cat, index, arr) => (
                <ConcatWords arrCount={arr.length} index={index} key={cat}>
                  <Link className="text-inherit" to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
                </ConcatWords>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogFeatured

const query = graphql`
  query BlogFeatured {
    markdownRemark(frontmatter: { featured: { eq: true } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
