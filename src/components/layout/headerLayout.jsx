import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/header/logo2.webp'
import { lock, unlock } from '@/utils/lockScreen'
import { useState } from 'react'
import Menu from './menu'
import { BlackHamburger } from './menu'

export default function Headerlayout () {
  
  const [menu, setMenu] = useState(false)
  const [hamburger, setHamburger] = useState(false)

    return (
    <>
      <Menu menu={menu} setMenu={setMenu} setHamburger={setHamburger}/>
      <header className='z-20 h-20 flex justify-between px-[8vw] items-start sticky top-0 border-b border-gray-300 text-red bg-white transition-all duration-300 lg:px-10 md:px-5 sm:h-24'>
          <div onClick={() => {setMenu(!menu); menu ? unlock() : lock()}} className='hidden z-40 md:block md:mt-5'>
            <BlackHamburger hamburger={hamburger} setHamburger={setHamburger}/>
          </div>
          <Link href='/' className='flex items-center justify-center h-full font-bold md:absolute md:left-1/2 md:-translate-x-1/2 sm:flex-col sm:gap-0'>
            <Image src={Logo} className='touch-none h-1/2 max-h-[45px] w-auto cursor-pointer relative md:h-auto' alt='Logo' priority/>
          </Link>
          <nav className='flex items-center h-full relative md:hidden'>
            <ul className='flex gap-10 tracking-wider font-Helvetica lg:gap-5'>
              <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
                <Link href='/#services'>
                  <p>Services</p>
                  <UnderlineHover />
                </Link>
              </li>
              <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
                <Link href='/#projects'>
                  <p>Projets</p>
                  <UnderlineHover />
                </Link>
              </li>
              <li className='cursor-pointer relative overflow-hidden group mt-1.5 mr-[95px]'>
                <Link href='/#teamId'>
                  <p>Equipe</p>
                  <UnderlineHover />
                </Link>
              </li>
              <Link href='/#contact'>
                <li className='group w-[85px] flex items-center justify-center absolute text-primary right-0'>
                  <button className='z-10 py-1.5 rounded w-full border border-primary/40 bg-white transition-all duration-500 relative bottom-1 right-1 group-hover:border-third group-hover:bg-white group-hover:text-third group-hover:bottom-0 group-hover:right-0'>Contact</button>
                  <div className='text-transparent bg-primary/80 py-1.5 w-full absolute rounded'>Contact</div>
                </li>
              </Link>
            </ul>
          </nav>
      </header>
    </>
    )
}


export function UnderlineHover () {
  return(
    <div className={`w-full bg-black mt-1 h-[1px] relative -left-[100%] transition-all duration-500 group-hover:left-0`}></div>
  )
}
