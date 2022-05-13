import React from "react"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const renderList = ({ node }) => {
  const image = getImage(node.frontmatter.image)

  return (
    <div className="cell-xs" key={node.fields.slug}>
      <article className="article">
        <div className="flex flex-row flex-nowrap md:flex-wrap">
          <div className="w-1/6 mx-4">
            <div className="-ml-12 overflow-hidden">
              <Link to={node.fields.slug}>
                <GatsbyImage image={image} alt={node.frontmatter.title} />
              </Link>
            </div>
          </div>

          <div className="w-4/6 mx-4">
              <p className="author">
                By{" "}
                <Link
                  className="text-inherit"
                  to={`/blog/author/${kebabCase(node.frontmatter.author)}`}
                >
                  {node.frontmatter.author}
                </Link>
              </p>

              <Link to={node.fields.slug}>
                <h2 className="title">{node.frontmatter.title}</h2>
              </Link>

              <p className="date">{formatDate(node.frontmatter.date)}</p>

              <div className="inline-block mb-0 text-xs tracking-wide text-gray-400 uppercase md:text-sm">
                {node.frontmatter.category.map((cat, index, arr) => (
                  <ConcatWords arrCount={arr.length} index={index} key={cat}>
                    <Link
                      className="text-right text-inherit"
                      to={`/blog/category/${kebabCase(cat)}`}
                    >
                      {cat}
                    </Link>
                  </ConcatWords>
                ))}
              </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default renderList
