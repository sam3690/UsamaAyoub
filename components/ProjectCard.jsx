import Link from 'next/link'
import React from 'react'

const ProjectCard = ({id, title, img, link, github}) => {
  return (
    <div key={id} className='justify-center sm:ml-8 sm:mx-0 w-auto min-w-[300px] h-[400px] '>
        <img src={img} alt={id} className='w-[100%] h-[300px] max-w-[600px] rounded-md object-cover object-top duration-1000 ease-in-out hover:object-bottom' />
        <div className='flex items-center justify-between mt-3'>
          <Link className='font-Poppins font-semibold text-lg leading-[32.4px] text-white' href={link} target='_blank' rel='noopener noreferrer'>{title}</Link>
          {github && (
            <Link href={github} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
              <img src='/assets/github.svg' alt='github' className='w-6 h-6' />
              <span className='text-sm text-white/80'>Repo</span>
            </Link>
          )}
        </div>
    </div>
  )
}

export default ProjectCard