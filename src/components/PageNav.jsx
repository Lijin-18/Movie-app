import React, { useCallback, useContext } from 'react'
import MovieContext from '../context/MovieContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


function PageNav() {

    const {pageCount , incPage , decPage} = useContext(MovieContext)


  return (
    <div className='flex justify-center gap-5 my-4 '>
        <button  onClick={decPage} className='transition-all hover:scale-105 p-3 rounded-xl text-white bg-blue-500 cursor-pointer'> <FontAwesomeIcon className='mr-3' icon={faArrowLeft}></FontAwesomeIcon> Prev</button>
        <h1 className='p-2'>{pageCount}</h1>
        <button  onClick={incPage} className='transition-all hover:scale-105 p-3 rounded-xl text-white bg-blue-500 cursor-pointer cursor-pointer'>Next <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button>
      </div>
  )
}

export default PageNav