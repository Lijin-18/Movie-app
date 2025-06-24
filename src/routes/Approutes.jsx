import React from 'react';
import {Routes , Route} from "react-router-dom";
import {MovieDetails , MovieList , PageNotFound , Search } from "../pages";


function Approutes() {
      return (
    <>
        <Routes>
            <Route path="/" element={<MovieList/>} ></Route>
            <Route path="movie/:id" element={<MovieDetails/>}></Route>
            <Route path="movie/popular" element={<MovieDetails/>}></Route>
            <Route path="search" element={<Search/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    </>
)
}

export default Approutes