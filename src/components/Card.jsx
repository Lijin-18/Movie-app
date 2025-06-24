import React from 'react'

function Card({image , movieName}) {

  const poster = `https://image.tmdb.org/t/p/w500${image}`

  return (
    <div className='w-40 sm:w-60 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 mt-5'>
        <div>
            <img src={poster}/>
        </div>
        <div className='p-2'>
            <h2>{movieName}</h2>
            
        </div>
        
    </div>
  )
}

export default Card