import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPost = ({ location, data, pageContext }) => {
  // const { markdownRemark } = data
  const { prev, next } = pageContext
  // const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src
  const post = data.markdownRemark
  // const imageSrc = post.frontmatter.image.childImageSharp.fluid.src
  const image = getImage(post.frontmatter.image)
  const currentPath = location.pathname

  return (
    <Layout currentPath={currentPath}>
      <Seo title={post.frontmatter.title} />

      <div className="container">
        {/* <img src={imageSource} alt={post.frontmatter.title} /> */}
        <GatsbyImage image={image} alt={post.frontmatter.author} />
        <p className="author">
          By{" "}
          <Link className="text-inherit"
            to={`/blog/author/${kebabCase(post.frontmatter.author)}`}
          >
            {post.frontmatter.author}
          </Link>
        </p>

        <h2 className="title">{post.frontmatter.title}</h2>
        <p className="date">{formatDate(post.frontmatter.date)}</p>

        <div className="inline-block mb-0 text-sm tracking-wide text-right text-gray-400 uppercase">
          {post.frontmatter.category.map((cat, index, arr) => (
            <ConcatWords arrCount={arr.length} index={index} key={cat}>
              <Link className="text-inherit" to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
            </ConcatWords>
          ))}
        </div>

        <div className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="row">
          {prev && (
            <div class="w-1/2">
              <Link className="text-inherit" to={prev.node.fields.slug}>
                <div className="navigation-post">
                  <div className="navigation-post-title">
                    {" "}
                    {"<"} {prev.node.frontmatter.title}
                  </div>
                </div>
              </Link>
            </div>
          )}

          {next && (
            <div class="w-1/2">
              <Link className="text-inherit" to={next.node.fields.slug}>
                <div className="navigation-post">
                  <div>
                    {" "}
                    {next.node.frontmatter.title} {">"}
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
