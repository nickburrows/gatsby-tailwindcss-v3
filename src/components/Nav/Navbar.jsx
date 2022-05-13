import React from "react"
import { CgMonday } from "react-icons/cg"
import NavItems from "./NavItems"

const Navbar = ({ navigationData, currentPath }) => {
  return (
    <nav className="navbar">
      <span className="logo">
        <CgMonday />
      </span>
      <ul className="navItems">
        {navigationData.map(({ name, link, item }, index) => (
          <NavItems
            name={name}
            link={link}
            key={index}
            currentPath={currentPath}
          />
        ))}
      </ul>
      <button className="actions">Logout</button>
    </nav>
  )
}

export default Navbar
