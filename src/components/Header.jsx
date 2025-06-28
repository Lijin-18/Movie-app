import React, { useState } from 'react'
import { NavLink, useNavigate , useSearchParams } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    const [searchParm , setSearchParam] = useSearchParams()

    const activeStyle = "inline-block transform origin-center  text-blue-500 transition duration-300 ease-in-out"

    const inActiveStyle = "inline-block transform origin-center  duration-300 ease-in-out"

    const searchMovie = (e) =>{
        e.preventDefault()
        console.log(e.target.search.value)
        const input = e.target.search.value;
        setSearchParam({query:input})
        navigate(`search/movie?query=${e.target.search.value}`)
        e.target.search.value=null
    }

  return (
    <header className='max-w-full bg-[#032541]'>
        <div className='max-w-7xl mx-auto flex  flex-col gap-3 sm:gap-0 sm:flex-row bg-[#032541] p-4 text-center text-white justify-between'>
            <div className='font-bold text-xl'>
                <NavLink to="/"><h1>JIN</h1></NavLink>
            </div>
            <ul className='flex items-center flex-row justify-center  gap-8 font-semibold overflow-hidden'>
                <li ><NavLink to="/" className={({isActive})=> isActive? activeStyle : inActiveStyle}>Home</NavLink></li>
                <li><NavLink to="movie/popular" className={({isActive})=> isActive? activeStyle : inActiveStyle}>Popular</NavLink></li>
                <li><NavLink to="/movie/upcoming" className={({isActive})=> isActive? activeStyle : inActiveStyle}>Upcoming</NavLink></li>
                <li><NavLink to="/movie/top" className={({isActive})=> isActive? activeStyle : inActiveStyle}>Top</NavLink></li>
            </ul>
           <form onSubmit={(e)=>searchMovie(e)}>
             <input name='search' placeholder='Search....' className='bg-white rounded-md p-1 text-black focus:outline-none hover:ring-2 focus:ring-2 focus:ring-blue-500 hover:ring-blue-500 transition hidden sm:block'/>
           </form>
        </div>
    </header>
  )
}

export default Header