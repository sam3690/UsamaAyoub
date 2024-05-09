'use client'
import React from 'react';
import { useState } from 'react';
import { navLinks } from '@/public/constants';
import { Poppins} from 'next/font/google';
import Link from 'next/link';
import "../styles/hamburger.css";


const poppins = Poppins({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
})

const Nav = () => {
const [active, setActive] = useState(0);
const [toggle, setToggle] = useState(false)
let navDiv = '';
if (toggle) {
  navDiv = 'flex'
  if (navDiv == 'flex') {
    const nav = navDiv + " scale-up-tr";    
  }
} else {
  
}
  return (
  <nav className={`w-full flex py-6 justify-between items-center ${poppins.className}`} >
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, i) => (
            <li key={nav.id} onClick={() => setActive(i)} className={`${poppins} font-normal duration-500 cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${i === active && 'navbtn rounded-md'} text-white `} >
              <a href={`#${nav.link}`} className='bg-inherit'>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end'>
          <button onClick={() => setToggle((prev) => !prev)} className={`hamburger hamburger--collapse z-20 ${toggle ? 'is-active' : 'hamburger--collapse-r'}`} type='button'>
            <div className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </div>
          </button>
          <div className={`${toggle ? 'flex scale-up-tr' : 'scale-out-tr' && 'hidden'} flex-col fixed bg-gray-800 bg-opacity-70 backdrop-blur-md w-full h-full top-0 z-10 right-0 `}> 
          <ul className='list-none flex flex-col justify-center top-10 items-center h-full'>
            {navLinks.map((nav, i) => (
              <li key={nav.link} onClick={() => {setActive(i); setToggle(false)}} className={`${poppins} font-normal cursor-pointer text-[30px] mb-4 ${i === active && 'navbtn rounded-md'} text-white`}>
                <a href={`#${nav.link}`} className='block'>
                  {nav.title}
                </a>
              </li>
            ))}

          </ul>
          </div>

        </div>
    </nav>
  )
} 

export default Nav