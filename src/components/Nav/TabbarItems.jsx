import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

const TabbarItems = ({ link, icon, currentPath }) => {
  return (
    <>
      <span
        className={classNames([
          `tabItem`,
          currentPath === link && `tabItemActive`,
        ])}
      >
        <Link to={link}>
          <span className="material-icons icon">{icon}</span>
        </Link>
      </span>
    </>
  )
}

export default TabbarItems
