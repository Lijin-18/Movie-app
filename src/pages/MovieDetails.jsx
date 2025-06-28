import React from "react";
import { useParams } from "react-router-dom";
import useDetails from "../hooks/useDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";

function MovieDetails() {


  const addToList = (e) => {
    console.log(e.currentTarget)
  }

  


  const { id } = useParams();
  const api = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=0986b03f206eb3f356470e1f9b58d8e8`;
  const { movie } = useDetails(api);


  const poster = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  // const backDrop = movie?`url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`:`background-color:black;`

  if (!movie) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className=" relative max-w-7xl mx-auto mt-10 rounded-md overflow-hidden">
      <div
        // style={{
        //   // backgroundImage: ` url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          
        // }}
        style={{

          backgroundImage : movie.backdrop_path?` url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`:`none`,
          backgroundColor : !movie.backdrop_path?`black`:`transparent`

        }}
        
        className="bg-cover bg-center inset-0 absolute filter brightness-25"
      />
      <div className="relative z-10 p-10 flex flex-col md:flex-row text-center md:text-start ">
        <img src={poster} className="mx-auto w-56 rounded-md ]"></img>
        <div className="text-white">
          <h1 className="font-bold m-5">{movie.title}</h1>
          <p className="m-5">{movie.overview}</p>
          <div className=" flex flex-wrap justify-center md:justify-start">
            <div className="m-5 flex gap-4">
              {movie.genres.map((genre) => (
                <span className=" border-1 rounded-md p-2" key={genre.id}>
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div className="text-white m-5 flex gap-5 justify-center md:justify-start">
            <span>⭐{Math.floor(movie.vote_average * 10) / 10}</span>
            <span>🕑{movie.release_date}</span>
          </div>
          <div  className="flex gap-5 m-5 justify-center md:justify-start">
            <div onClick={(e)=>{addToList(e)}} className="text-center align-center inline-block text-white font-bold outline-1 px-3 py-2 rounded-xl transition-all hover:text-black hover:bg-white">
              <button >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div name="addToFav" className="text-center align-center inline-block text-white font-bold outline-1 px-3 py-2 rounded-xl transition-all hover:text-black hover:bg-white">
              <button >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
