import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"

const NavItems = ({ currentPath, name, link }) => {
  return (
    <li
      className={classNames([
        `navItem`,
        currentPath === link && `selectedNavItem`,
      ])}
    >
      <Link to={link}>{name}</Link>
    </li>
  )
}

export default NavItems
