import React from "react"
import { Link } from "gatsby"

import classNames from "classnames"

const Tabbar = ({ navigationData, currentPath }) => {
  return (
    <nav className="tabbar">
      {navigationData.map(({ icon, link }, index) => (
        <span
          key={index}
          className={classNames([
            `tabItem`,
            currentPath === link && `tabItemActive`,
          ])}
        >
          <Link to={link}>
            <span className="material-icons icon">{icon}</span>
          </Link>
        </span>
      ))}
    </nav>
  )
}

export default Tabbar
