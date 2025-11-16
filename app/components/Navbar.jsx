
import { assets } from '@/assets/assets'
import { Asset } from 'next/font/google'
import Image from 'next/image'
import React,{useRef, useEffect, useState} from 'react'

const navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    },[])

    
  return (
      <>
          <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-30%] dark:hidden' >
              <Image src={assets.header_bg_color} alt="" className='w-full' />
          </div>
          <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-sm shadow-sm dark:bg-darkTheme dark:shadow-white/20": ""}`}>
              <a href="#top">
                  <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className='w-28 cursor-pointer mr-14' />
              </a>

              <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "":"bg-white/20 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
                  <li><a href="#top" className='font-ovo'>Home</a></li>
                  <li><a href="#about" className='font-ovo'>About me</a></li>
                  <li><a href="#services" className='font-ovo'>Services</a></li>
                  <li><a href="#work" className='font-ovo'>My Work</a></li>
                  <li><a href="#contect" className='font-ovo'>Contact Me</a></li>
              </ul>
              <div className='flex item-center gap-4'>
                  <button onClick={() => setIsDarkMode(prev => !prev)} className='cursor-pointer'>
                     
                      <Image src={ isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
                  </button>


                  <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 border border-grey-500 rounded-full ml-4 py-2.5 font-ovo'>Contact<Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' /> </a>
                  
                  <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                  <Image src={isDarkMode ?  assets.menu_white : assets.menu_black} alt="" className="w-6" />
                  </button>
              </div>

              {/* mobile menu */}
              <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                  <div className='absolute right-6 top-6' onClick={closeMenu}>
                      <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className="w-5 cursor-pointer"/>
                  </div>
                <li><a href="#top" onClick={closeMenu} className='font-ovo'>Home</a></li>
                  <li><a href="#about" onClick={closeMenu} className='font-ovo'>About me</a></li>
                  <li><a href="#services" onClick={closeMenu} className='font-ovo'>Services</a></li>
                  <li><a href="#work" onClick={closeMenu} className='font-ovo'>My Work</a></li>
                  <li><a href="#contectMe" onClick={closeMenu} className='font-ovo'>Contact Me</a></li>
              </ul>
          </nav> 
    </>
  )
}

export default navbar
