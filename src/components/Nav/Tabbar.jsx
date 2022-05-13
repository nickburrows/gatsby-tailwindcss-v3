import React from "react"
import TabbarItems from "./TabbarItems"

const Tabbar = ({ navigationData, currentPath }) => {
  return (
    <nav className="tabbar">
      {navigationData.map(({ icon, link }, index) => (
        <TabbarItems
          key={index}
          link={link}
          icon={icon}
          currentPath={currentPath}
        />
      ))}
    </nav>
  )
}

export default Tabbar
