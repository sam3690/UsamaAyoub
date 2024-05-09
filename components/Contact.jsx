import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id='contact' className='w-full flex flex-col items-center justify-center sm:px-16 px-6'>
      <h1 className='font-Poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full pb-8'>Contact Me</h1> <br className='sm:block hidden'/>
{/* General Contacts */}
      {/* <div className='w-full flex flex-wrap items-center'>
        <div className='flex flex-row h-[300px] w-[300px] rounded-md'>
          <Image src={} className='w-full h-full' height={'100%'} width={'100%'} alt={'Phone'} >

          </Image>
        </div>
      </div> */}

{/* Social Media Contacts */}
        <div className='flex flex-row justify-between flex-center h-[100px] w-full'>
        <div className='flex flex-row items-center mx-10 bg-gray-700 backdrop-filter backdrop-blur-md bg-opacity-25 h-[150px] rounded-2xl'>
      <Link href={'https://github.com/sam3690'} target='_blank'>
        <FontAwesomeIcon icon={faGithub} height={'100px'} width={'150px'} className='mx-8 text-gray-500 duration-500 hover:text-white hover:w-[150px] hover:h-[150px]' />
      </Link>
      <Link href={'https://linkedin.com/in/usama-ayoub-736988108'} target='_blank'>
      <FontAwesomeIcon icon={faLinkedin} height={'100px'} width={'150px'} className='mx-8  text-gray-500 duration-500 hover:text-blue-800 hover:w-[150px] hover:h-[150px]' />
      </Link>
      <Link href={'https://stackoverflow.com/users/10109674/sam'} target='_blank'>
      <FontAwesomeIcon icon={faStackOverflow} height={'100px'} width={'150px'} className='mx-8 text-gray-500 duration-500 hover:text-orange-500 hover:w-[150px] hover:h-[150px]' />
      </Link>
    </div>
        </div>
    </section>
  )
}

export default Contact