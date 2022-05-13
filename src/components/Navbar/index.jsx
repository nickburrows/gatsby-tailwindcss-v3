import React from "react"
import { CgMonday } from "react-icons/cg"
import classNames from "classnames"
import { Link } from "gatsby"

const Navbar = ({ navigationData, currentPath }) => {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <CgMonday className="text-white" />
      </Link>
      <ul className="flex flex-row items-center h-12">
        {navigationData.map(({ name, link }, index) => (
          <li className="m-0" key={index}>
            <Link
              to={link}
              className={classNames([
                `navItem`,
                currentPath === link && `selectedNavItem`,
              ])}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="actions">Logout</button>
    </nav>
  )
}

export default Navbar
