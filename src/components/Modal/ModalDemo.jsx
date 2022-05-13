import React, { useState, useRef } from "react"
import { MdClose } from "react-icons/md"
import useOnClickOutside from "../../utils/useOnClickOutside"

const ModalDemo = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setModalOpen(false))
  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setModalOpen(true)}
      >
        Open regular modal
      </button>
      {isModalOpen ? (
        <>
          <div className="fixed inset-0 z-40 bg-black opacity-25" ref={ref} />
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none text-black/20 hover:text-black/40 focus:outline-none"
                    onClick={() => setModalOpen(false)}
                  >
                    <MdClose />
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear bg-transparent rounded outline-none hover:bg-gray-300/40 focus:outline-none"
                    type="button"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 hover:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setModalOpen(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default ModalDemo
