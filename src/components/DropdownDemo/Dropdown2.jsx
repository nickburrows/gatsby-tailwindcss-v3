import React from "react"
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"

const Dropdown2 = () => {
  return (
    <Dropdown
      color="teal"
      placement="bottom-start"
      buttonText="Dropdown"
      buttonType="filled"
      size="regular"
      rounded={false}
      block={false}
      ripple="light"
    >
      <DropdownItem color="teal" ripple="light">
        Action
      </DropdownItem>
      <DropdownLink
        href="#"
        color="teal"
        ripple="light"
        onClick={e => e.preventDefault()}
      >
        Another Action
      </DropdownLink>
      <DropdownItem color="teal" ripple="light">
        Something else
      </DropdownItem>
    </Dropdown>
  )
}

export default Dropdown2
