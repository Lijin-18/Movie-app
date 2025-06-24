import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

    const activeStyle = "inline-block transform origin-center  text-red-500 transition duration-300 ease-in-out"

    const inActiveStyle = "inline-block transform origin-center  duration-300 ease-in-out"

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
            <input className='bg-white rounded-xl p-1 text-black focus:outline-none hover:ring-2 focus:ring-2 focus:ring-red-500 hover:ring-red-500 transition hidden sm:block'/>
        </div>
    </header>
  )
}

export default Header