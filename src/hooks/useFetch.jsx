import { useState , useEffect } from "react";


const useFetch = (apiPoint) =>{


    // https://api.themoviedb.org/3/movie/1087192?language=en-US 

  const [movies , setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPoint}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
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

    useEffect(() => {
    fetchMovie();
  }, [apiPoint]);

  return {
    movies
  }

}

export default useFetch;