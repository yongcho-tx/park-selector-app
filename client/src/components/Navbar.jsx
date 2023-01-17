import React, { useState } from "react"
import Logo from "../assets/logo.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='w-full h-[5em] flex justify-between items-center px-4 bg-cyan-500 text-neutral-100'>
      <div>
        <a href='https://yong-cho.com/' target='blank'>
          <img
            src={Logo}
            alt='Logo Img'
            style={{ width: "60px", borderRadius: "30px" }}
          />
        </a>
      </div>
      <ul className='hidden md:flex'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
        <li>
          <Link to='stats'>Stats</Link>
        </li>
        <li>
          <Link to='searchbar'>Search</Link>
        </li>
      </ul>

      {/*hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <Bars3Icon className='w-10' /> : <XMarkIcon className='w-10' />}
      </div>
      {/*mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-sky-300"
        }
      >
        <li className='py-6 text-4xl text-gray-700'>
          <Link onClick={handleClick} to='/'>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl text-gray-700'>
          <Link onClick={handleClick} to='about'>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl text-gray-700'>
          <Link onClick={handleClick} to='stats'>
            Stats
          </Link>
        </li>
        <li className='py-6 text-4xl text-gray-700'>
          <Link onClick={handleClick} to='searchbar'>
            Search
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
