import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import ModalDemo from "../components/Modal/ModalDemo"
import ModalDemo2 from "../components/Modal/ModalDemo2"
import ModalDemo3 from "../components/Modal/ModalDemo3"
import DropdownDemo from "../components/DropdownDemo"
import Dropdown1 from "../components/DropdownDemo/Dropdown1"
import Dropdown2 from "../components/DropdownDemo/Dropdown2"
import List1 from "../components/ListDemo/List1"
import List2 from "../components/ListDemo/List2"
import List3 from "../components/ListDemo/List3"
import List4 from "../components/ListDemo/List4"
import Nav1 from "../components/Nav/Nav1"
import Nav2 from "../components/Nav/Nav2"
import Nav3 from "../components/Nav/Nav3"
import Nav4 from "../components/Nav/Nav4"

const Demo = ({ location }) => {
  const currentPath = location.pathname

  return (
    <Layout currentPath={currentPath}>
      <Seo title="Demo Page" />

      <ModalDemo />
      <DropdownDemo />
      <Dropdown1 color="white" />
      <Dropdown2 />
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <ModalDemo2 />
      <ModalDemo3 />
      <List1 />
      <List2 />
      <List3 />
      <List4 />
      <Nav1 />
      <Nav2 />
      <Nav3 />
      <Nav4 />
    </Layout>
  )
}

export default Demo
