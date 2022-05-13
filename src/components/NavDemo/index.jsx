import React from "react"

import navigationData from "../../data/navigation"

import Navbar from "../Navbar"
import Tabbar from "../Tabbar"

const NavDemo = ({ currentPath }) => {
  return (
    <>
      <Navbar navigationData={navigationData} currentPath={currentPath} />
      <Tabbar navigationData={navigationData} currentPath={currentPath} />
    </>
  )
}

export default NavDemo
