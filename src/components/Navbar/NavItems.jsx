import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"

const NavItems = ({ currentPath, name, link }) => {
  return (
    <li className="flex items-start">
      <Link
        className={classNames([
          `navItem`,
          currentPath === link && `selectedNavItem`,
        ])}
        to={link}
      >
        {name}
      </Link>
    </li>
  )
}

export default NavItems
