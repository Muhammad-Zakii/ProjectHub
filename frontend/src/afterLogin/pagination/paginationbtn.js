import React from 'react'
import Wrapper2 from '../../wrappers/wrapper2'
import { useAppContext } from '../../context/appcontext'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

const Paginationbtn = () => {
  const { numOfPages, page, changePage } = useAppContext()
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })
  console.log(pages)
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = numOfPages
    }
    changePage(newPage)
  }
  const nextPage = () => {
    let newPage = page + 1
    if (newPage > numOfPages) {
      newPage = 1
    }
    changePage(newPage)
  }
  return (
    <Wrapper2>
      <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              className={
                pageNumber === page ? 'btn-container active' : 'btn-container'
              }
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button className='next-btn' onClick={nextPage}>
        <HiChevronDoubleRight />
        Next
      </button>
    </Wrapper2>
  )
}

export default Paginationbtn
