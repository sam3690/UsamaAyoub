import Link from 'next/link'
import React from 'react'

const ProjectCard = ({id, title, img, link, github}) => {
  return (
    <div key={id} className='justify-center sm:ml-8 sm:mx-0 w-auto min-w-[300px] h-[400px] '>
        <img src={img} alt={id} className='w-[100%] h-[300px] max-w-[600px] rounded-md object-cover object-top duration-1000 ease-in-out hover:object-bottom' />
        <div className='flex flex-col gap-3 mt-3'>
          <h3 className='font-Poppins font-semibold text-lg leading-[32.4px] text-white'>{title}</h3>
          <div className='flex items-center gap-3'>
            {link && (
              <Link href={link} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300'>
                <img src='./assets/external-link.svg' alt='external link' className='w-4 h-4' />
                <span className='text-sm text-white font-medium'>Preview</span>
              </Link>
            )}
            {github && (
              <Link href={github} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300'>
                <img src='./assets/github.svg' alt='github' className='w-4 h-4' />
                <span className='text-sm text-white font-medium'>Repo</span>
              </Link>
            )}
          </div>
        </div>
    </div>
  )
}

export default ProjectCard