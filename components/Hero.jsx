'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'



const Hero = () => {
const [isdesktop, setIsdesktop] = useState(false)
const [chkLarge, setChkLarge] = useState(false)

const checkWindowWidth = () => {
  let windowWidth;
  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth;
  }
  if (windowWidth <= 1024) {
    setIsdesktop(true);
  } else {
    setIsdesktop(false);
  }
  if (windowWidth >= 1024) {
    setChkLarge(true);
  } else {
    setChkLarge(false);
  }
  

}
useEffect(() => {
  checkWindowWidth();
}, [isdesktop])

if (typeof window !== 'undefined') {
  window.addEventListener('resize', checkWindowWidth)
}


  return (
    <section id='home' className='w-full flex-center flex-col sm:flex-row sm:py-16 py-6'>
      <div className='w-[600px} sm:w-[25%]  h-[100%] ml-6 '>
          <img
          className={`max-w-[600px] max-h-[600px] ${chkLarge ? 'w-[500px] h-[500px]' : 'w-[100%] h-[100%]'}`}
          src='./assets/me.svg'
          />
          </div> <br className="block md:hidden sm:hidden"/> {""}
      <div className="flex-1 flex items-start flex-col xl:px-0 sm:px-16 px-6 lg:ml-10">
        <div className='flex flex-row justify-between items-center lg:ml-[200px] w-full'>
          <h1 className='flex-1 font-Poppins font-semibold text-3xl text-white sm:text-3xl md:text-3xl lg:text-5xl'>Hello {""}
          <Image src='./assets/wavingHand.svg' className={`wave ${isdesktop ? 'w-[40px] h-[40px]':'w-[60px] h-[60px]'} `} width={10} height={10}/> I'm<br className="sm:block"/> {""}
          <span className='bg-gradient-to-r from-indigo-600 to-teal-400 bg-clip-text text-transparent'>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Usama Ayoub',
              4000, // wait 1s before replacing 
              'Web Dev',
              2000,
              'Back-end Dev',
              2000,
              'Front-end Dev',
              2000
            ]}
            wrapper="span"
            speed={8}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
          </span>{""}
          </h1>
          <br className="sm:block hidden"/> {""}
        </div>
          <div className='flex flex-row mt-5 max-w-[600px] min-w-[300px] text-white justify-between items-center w-full bg-gray-700 px-10 py-6 rounded-2xl text-lg lg:ml-[200px] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50'>
            <p className='text-whtie font-Rubik'>
          Welcome to my digital realm! I'm Usama, a dynamic web developer proficient in both frontend and backend technologies. With a passion for crafting seamless user experiences and a knack for elegant code, I specialize in translating design concepts into interactive interfaces and building scalable systems that power the heartbeat of your digital presence.
          </p>
          </div> <br className="block md:hidden sm:hidden"/> {""}
      {/* <button class="button-85 mt-6 sm:ml-[200px] ml-4 " role="button">Download CV</button> */}
      <Link
        href= {`/assets/Usama's Resume.pdf`}
        target='_blank'
        alt='My CV'
        // rel='`noopener noreferrer`'
        download={`Usama's Resume.pdf`}
      >
      <button className="relative inline-flex items-center justify-center p-0.5 mt-6 sm:ml-[200px] ml-4 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Download CV
        </span>
      </button>
      </Link>
      </div> 
      
    </section>
  )
}

export default Hero