/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
import NavDemo from "./NavDemo"


// import "./layout.css"
import Typography from "typography"
import moragaTheme from "typography-theme-moraga"
import { Provider as GridProvider } from "griding"

const typography = new Typography(moragaTheme)
typography.injectStyles()

const Layout = ({ currentPath, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <GridProvider>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <NavDemo currentPath={currentPath} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="max-w-5xl p-6 mx-auto my-0"
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
      <footer className="footer">
            See the original article:{" "}
            <a
              href="https://blog.significa.pt/advanced-blog-system-in-gatsby-16e0cd6b85ad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advanced blog system in Gatsby
            </a>
            , by{" "}
            <a
              href="https://github.com/danilowoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              @danilowoz
            </a>
          </footer>
    </GridProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
