import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id="services">
          <h4 className='text-center mb-2 text-lg font-ovo'>All about skills</h4>
          <h2 className='text-center text-5xl font-ovo'>My Proficiency</h2>
          <p className='text-center font-ovo max-w-2xl mx-auto mt-5 mb-20'>Want to know what i can do? here are my skillsets. I can do this all day, but of course with very very "reasonable" price.</p>  
          <div className='grid grid-cols-(--my-grid-auto) gap-4 my-10'>
              {serviceData.map(({icon, title, description, link}, index) => (
                  <div key={index}
                  className='boder boder-gray-400 rounded-lg px-8 py-1 cursor-pointer hover:bg-lightHover/50 hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white'>
                      <Image src={icon} alt="" className='w-10' />
                      <h3 className='text-lg my-4 text-gray-400 dark:text-white'>{title}</h3>
                      <p className='text-sm text-gray-600 leading-5 dark:text-white/60'>{description}</p>
                      <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                          Read more... <Image src={assets.right_arrow} alt="" className='w-4'/> 
                      </a>
                  </div>
              ))}
            
        </div>
    </div>
  )
}

export default Services
