import React from 'react'

const ProjectCard = ({id, title, img}) => {
  return (
    <div key={id} className='justify-center sm:ml-8 sm:mx-0 w-auto min-w-[300px] h-[400px] '>
        <img src={img} alt={id} className='w-[100%] h-[300px] rounded-md object-cover object-top duration-1000 ease-in-out hover:object-bottom' />
        <p className='font-Poppins font-semibold text-lg leading-[32.4px] text-white my-10'>{title}</p>
        </div>
  )
}

export default ProjectCard