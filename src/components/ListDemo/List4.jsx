import React from "react"

const List4 = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg lg:w-1/3">
      <ul className="divide-y-2 divide-gray-400">
        <li className="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200">
          View List Item
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </li>
        <li className="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200">
          Edit List Item
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </li>
        <li className="flex items-center justify-between p-3 hover:bg-blue-600 hover:text-blue-200">
          Messages
          <span className="px-2 py-1 text-sm text-blue-200 bg-blue-600 rounded-full">
            +1
          </span>
        </li>
      </ul>
    </div>
  )
}

export default List4
