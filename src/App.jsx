import React from 'react';
import Card from './components/Card';
import { useState } from 'react'
import AppRouters from "./routes/Approutes";
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <AppRouters/>
    <Footer/>
    </>
  )
}

export default App
