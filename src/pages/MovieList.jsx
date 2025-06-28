import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
import MovieContext from '../context/MovieContext';
import PageNav from '../components/PageNav';

function MovieList({apiPoint}) {

  const {pageCount , setPageCount , decPage ,  incPage} = useContext(MovieContext)
  
  const {movies} = useFetch(apiPoint , pageCount);




  return (

    <div  className='max-w-7xl   mx-auto'>
    <h1 className='text-2xl font-bold text-[#032541] mt-5'>All Movies </h1>
      <div className='place-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-2 gap-x-0'>
    
      {
        movies.map((movie)=>
          <Card key={movie.id} image={movie.poster_path} movieName={movie.original_title} rating={movie.vote_average} id={movie.id}/>
        )
      }
    </div>

      <PageNav></PageNav>

    </div>
  )
}

export default MovieList