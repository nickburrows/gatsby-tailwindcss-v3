import React, { useState, useRef } from "react"
import useOnClickOutside from "../../utils/useOnClickOutside"

import { VscCircuitBoard } from "react-icons/vsc"

const DropdownDemo = () => {
  const [show, setShow] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setShow(false))
  return (
    <>
      <div ref={ref}>
        <button
          className="flex items-center justify-center bg-gray-200 rounded"
          onClick={() => setShow(true)}
        >
          <VscCircuitBoard className="text-3xl text-teal-400" />
        </button>
      </div>
      {show && (
        <ul className="dropdown">
          <li>{"oats"}</li>
          <li>{"oat milk"}</li>
          <li>{"oatmeal"}</li>
          <li>{"oat bran"}</li>
        </ul>
      )}
    </>
  )
}

export default DropdownDemo
