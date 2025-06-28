import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import { Navigate, useNavigate } from 'react-router-dom';

function Card({image , movieName , rating , id}) {

  const [details , setDetails] = useState(false);
  const navigate = useNavigate();
  // const placeHolder = 
  const poster = image? `https://image.tmdb.org/t/p/w500${image}` : `/src/assets/movie_placeholder.png`

    const displayMovieDetail = () =>{
    
      navigate(`/movie/${id}`)
    
  }

  return (
    <div onClick={displayMovieDetail} className='transform transition-transform hover:scale-105 cursor-pointer w-40 sm:w-60 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 mt-5'>
        <div className='relative'>
            <img src={poster} className='transform:translate duration-300 hover:scale-105'/>
            <span className='absolute top-3 right-3 bg-white px-2 rounded-xl'>⭐ {Math.floor(rating * 10) / 10}</span>
        </div>
        <div className='mx-4 w-fit h-10 my-4 flex items-center'>
            <h2>{movieName}</h2>
            
        </div>

        {/* <div className='mx-4 mb-4'>
          <button className='bg-blue-500 text-white font-medium p-1 rounded-xl'>Learn more</button>
        </div> */}
        
    </div>
  )
}

export default Card