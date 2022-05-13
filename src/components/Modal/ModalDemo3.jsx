import React, { useState, useRef } from "react"
import useOnClickOutside from "../../utils/useOnClickOutside"
import { MdClose } from "react-icons/md"

const ModalDemo3 = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setModalOpen(false))

  return (
    <>
      <button
        className="px-6 py-2 text-white bg-blue-600 rounded shadow-xl"
        type="button"
        onClick={() => setModalOpen(true)}
      >
        open model
      </button>
      {isModalOpen ? (
        <>
          <div className="fixed inset-0 bg-gray-700/25 z-41" ref={ref} />
          <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto z-42">
            <div className="relative max-w-sm p-6 mx-auto bg-white divide-y divide-gray-500">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl">Model Title</h3>
                <button
                  className="border-2 border-gray-500 rounded-full"
                  type="button"
                  onClick={() => setModalOpen(false)}
                >
                  <MdClose />
                </button>
              </div>
              <div className="mt-4">
                <p className="mb-4 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus qui nihil laborum quaerat blanditiis nemo
                  explicabo voluptatum ea architecto corporis quo vitae, velit
                  temporibus eaque quisquam in quis provident necessitatibus.
                </p>
                <button className="px-4 py-2 text-white bg-red-600 rounded">
                  Cancel
                </button>
                <button className="px-4 py-2 text-white bg-green-600 rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default ModalDemo3
