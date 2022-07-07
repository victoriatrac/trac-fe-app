import React, { useState, useEffect } from 'react'
// import { getDefaultNormalizer } from "@testing-library/react"

/* Component for paginating the news application data */

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const [ pages ] = useState(Math.round(data.length / dataLimit ))
  const [ currentPage, setCurrentPage ] = useState(1)

  /* When the user changes the page, scroll to the top of the news container. */
  useEffect(() => {
    document.getElementById('news-container').scrollTo({ behavior: 'smooth', top: '0px' })
  }, [currentPage])

  /* Next page handler - add one to current page */
  function goToNextPage() {
    setCurrentPage((page) => page + 1)
  }

  /* Previous page handler - subtract one from current page */
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1)
  }

  /* Handles page changes when user clicks on a page number instead of an arrow */
  function changePage(event) {
    // Uses textContext to get the number the page should change to
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  /* Decides which posts to show */
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  /* What group of page numbers to show for the page number buttons */
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }

  return (
    <div>
      {/* Display the paginated data with the component used to render, which was passed via props. */}
      {getPaginatedData().map((d, idx) => (
        <RenderComponent key={idx} data={d} />
      ))}

      {/* Display the previous page button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>

      {/* Display the pagination group */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* Display the next page button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>
  )
}

export default Pagination