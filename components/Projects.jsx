'use client'
import React from 'react'
import { projects } from '@/public/constants'
import ProjectCard from './ProjectCard'


const Projects = () => {
  return (
    <section id='projects' className='flex-col flex justify-center items-center mb-[100px] sm:px-16 px-6'>
      <div className='w-full flex justify-between items-center flex-col relative z-[1]'>
        <h1 className='font-Poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full pb-8'>My Projects</h1> <br className='sm:block hidden'/>
          <div className='w-full flex flex-wrap items-center'> 
          {projects.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
          </div>
      </div>
      
    </section>
  )
}

export default Projects