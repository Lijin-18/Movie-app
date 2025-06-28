import React from 'react';
import Card from './components/Card';
import { useState , useContext } from 'react'
import AppRouters from "./routes/Approutes";
import Header from './components/Header';
import MovieContext, { MyMovieContext } from './context/MovieContext';
import Footer from './components/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyMovieContext>
      <>
    <Header/>
    <AppRouters/>
    <Footer/>
    </>
    </MyMovieContext>
  )
}

export default App
