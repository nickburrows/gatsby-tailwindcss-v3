import React from "react"

import PaginationItem from "./PaginationItem"

const Pagination = ({ numPages, currentPage, contextPage }) => {
  if (numPages <= 1) {
    return null
  }

  return (
    <ul className="pagination">
      {Array.from({ length: numPages }).map((item, i) => {
        const index = i + 1

        const baseLink = `/blog/${contextPage ? `${contextPage}/` : ""}`
        const link = index === 1 ? baseLink : `${baseLink}page/${index}`

        return (
          <PaginationItem
            currentPage={currentPage}
            index={index}
            link={link}
            key={link}
          />
        )
      })}
    </ul>
  )
}

export default Pagination
