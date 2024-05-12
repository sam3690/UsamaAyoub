import React from 'react'
import { skills } from '@/public/constants'
import SkillCard from './SkillCard'

const Services = () => {
  return (
    <section id='services' className='flex-col sm:mb-[100px] mb-6 relative flex justify-center items-center sm:px-16 px-6 '>
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
            <h1 className='font-Poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full'>My Skills <br className='sm:block hidden'/></h1>      
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center w-full mr-0 relative z-[1]'>
        {skills.map((card) =>(
            <SkillCard key={card.id}{...card}/>
        ))}
        </div>
    </section>
  )
}

export default Services