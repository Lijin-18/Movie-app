import React from "react";
import { useParams } from "react-router-dom";
import useDetails from "../hooks/useDetails";

function MovieDetails() {
  const { id } = useParams();
  const api = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=0986b03f206eb3f356470e1f9b58d8e8`;
  const { movie } = useDetails(api);
  console.log(movie);

  const poster = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  if (!movie) {
    return <div>loading.........</div>;
  }

  return (
    // <div
    //   style={{
    //     backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`
    //   }}
    //   className="relative overflow-hidden h-fit bg-cover bg-no-repeat filter brightness-50 bg-red-100 p-20 mt-10 max-w-7xl mx-auto rounded-xl "
    // >
    //   <div className="absolute ">
    //     <div>
    //     <img src={poster} className="w-50 "></img>
    //   </div>
    //   <div>
    //     <div>
    //       <h1 className="text-white ">{movie.title}</h1>
    //     </div>
    //   </div>
    //   </div>
    // </div>

    <div className=" relative max-w-7xl mx-auto mt-10 rounded-md overflow-hidden">
      <div
        style={{
          backgroundImage: ` url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
        }}
        className="bg-cover bg-center inset-0 absolute filter brightness-25"
      />
        <div className="relative z-10 p-10 flex flex-col md:flex-row text-center md:text-start ">
          <img src={poster} className="mx-auto w-56 rounded-md drop-shadow-md drop-shadow-[0_0_10px_#facc15]"></img>
          <div className="text-white">
            <h1 className="font-bold m-5">{movie.title}</h1>
            <p className="m-5">{movie.overview}</p>
            {/* <div className=" flex flex-wrap">
              {
                movie.genres.map(genre=>(
                  <span className="m-5 border-1 rounded-md p-2" key={genre.id}>{genre.name}</span>
                ))
              }
            </div> */}
            <div className="text-white m-5 flex gap-5 justify-center md:justify-start">
            <span>⭐{Math.floor(movie.vote_average*10)/10}</span>
            <span>🕑{movie.release_date}</span>
          </div>
          </div>
          
        </div>
      </div>
  );
}

export default MovieDetails;
