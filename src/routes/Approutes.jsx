import React from 'react';
import {Routes , Route} from "react-router-dom";
import {MovieDetails , MovieList , PageNotFound , Search } from "../pages";
import { useSearchParams } from 'react-router-dom';


function Approutes() {
      const [searchParam] = useSearchParams()
      const query = searchParam.get("query")

      return (
    <>
        <Routes>
            <Route path="/" element={<MovieList apiPoint={`movie/now_playing`}/>} ></Route>
            <Route path="movie/:id" element={<MovieDetails apiPoint={`movie/`}/>}></Route>
            <Route path="movie/popular" element={<MovieList apiPoint={`movie/popular`}/>}></Route>
            <Route path="movie/top" element={<MovieList apiPoint={`movie/top_rated`}/>}></Route>
            <Route path="movie/upcoming" element={<MovieList apiPoint={`movie/upcoming`}/>}></Route>
            <Route path="search/movie" element={<Search/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    </>
)
}

export default Approutes