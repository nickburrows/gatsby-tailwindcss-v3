import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import GatsbySvgIcon from "../images/gatsby_logo.svg"

const Header = ({ siteTitle }) => (
  <header className="flex items-center justify-between px-6 py-4 mx-auto my-0 text-white bg-stone-800">
    <Link className="text-white no-underline text-md hover:text-sky-500"
      to="/"
    >
      {siteTitle}
    </Link>
    <img
    className="w-auto h-10 m-0 text-white bg-white fill-current"
      alt="Gatsby logo"
      src={GatsbySvgIcon}
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
