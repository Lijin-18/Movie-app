import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

function MovieList() {

  const [movies , setMovies] = useState([]);
  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTg2YjAzZjIwNmViM2YzNTY0NzBlMWY5YjU4ZDhlOCIsIm5iZiI6MTc1MDc1ODA3Ni42Niwic3ViIjoiNjg1YTcyYmNjOWFmYjIxZDYyMDhkN2Q0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.FwEr_VBZGHua4otDPog9vIYIGSSqbl54F8fHeZB-KSE'
  }
};

  const fetchMovie = async () =>{

    const response = await fetch(url,options);
    const data = await response.json()
    setMovies(data.results)

  }

  console.log(movies)

  useEffect(()=>{
    fetchMovie()
  },[])

  return (
    <div className='max-w-7xl place-items-center mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-2 gap-x-0'>
      {
        movies.map((movie)=>
          <Card key={movie.id} image={movie.poster_path} movieName={movie.original_title}/>
        )
      }
    </div>
  )
}

export default MovieList