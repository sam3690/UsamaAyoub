import React from "react";

const SkillCard = ({ id, name, icon }) => (
  
    <div className='flex justify-center items-center flex-col pt-7 pb-3 px-2 py-6 rounded-[20px] w-[120px] hover:backdrop-blur-sm hover:bg-gray-800 md:mr-10 sm:mr-5 mr-0 my-5 transition-shadow '>
    <img src={icon} alt={name} className='w-[50px] h-[27.6px] object-contain'/>
      <p className='font-Poppins font-semibold text-lg leading-[32.4px] text-white my-10'>{name}
      </p>
    </div>
  
);

export default SkillCard