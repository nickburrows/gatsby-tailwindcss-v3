import React from "react"

const PaginationItem = ({ currentPage, index, link }) => {
  const itemClass = `min-w-[50px] -mt-[1px] mx-[0.5em] mb-0 py-[1em] px-0 text-center border-t border-stone-600`
  const itemCurrentClass = `min-w-[50px] -mt-[1px] mx-[0.5em] mb-0 py-[1em] px-0 text-center border-t-transparent`
  return (
    <li className={currentPage === index ? itemClass : itemCurrentClass }>
      {currentPage === index ? (
        <span>{index}</span>
      ) : (
        <a href={link}>{index}</a>
      )}
    </li>
  )
}

export default PaginationItem
