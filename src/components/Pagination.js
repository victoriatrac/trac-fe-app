import React, { useState, useEffect } from 'react'
// import { getDefaultNormalizer } from "@testing-library/react"

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [ pages ] = useState(Math.round(data.length / dataLimit ))
  const [ currentPage, setCurrentPage ] = useState(1)

  useEffect(() => {
    document.getElementById('news-container').scrollTo({ behavior: 'smooth', top: '0px' })
  }, [currentPage])

  function goToNextPage() {
    setCurrentPage((page) => page + 1)
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1)
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }

  return (
    <div>
      <h1>{title}</h1>
      <div class="data-container">

        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}

      </div>

      <div class="pagination">

        <button
          onClick={goToPreviousPage}
          class={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            class={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          class={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>
    </div>
  )
}

export default Pagination