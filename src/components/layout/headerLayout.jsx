import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/header/logo1.svg'
// import Menu from '../../../public/assets/header/menu.svg'
import { Hamburger } from './menu'
import { lock, unlock } from '@/utils/lockScreen'
import { useState } from 'react'
import Menu from './menu'


export default function Headerlayout () {
  
  const [menu, setMenu] = useState(false)
  const [hamburger, setHamburger] = useState(false)

    return (
    <>
      <Menu menu={menu} setMenu={setMenu} setHamburger={setHamburger}/>
      <header className='z-20 h-20 flex justify-between px-[8vw] items-start sticky top-0 text-red bg-white transition-all duration-300 lg:px-10 md:px-5'>
          <div onClick={() => {setMenu(!menu); menu ? unlock() : lock()}} className='hidden md:block md:mt-5'>
            <Hamburger hamburger={hamburger} setHamburger={setHamburger}/>
          </div>
          <Link href='/' className='flex items-center justify-center gap-2 h-full font-bold md:absolute md:left-1/2 md:-translate-x-1/2 sm:flex-col sm:gap-0'>
            <Image src={Logo} className='h-10 w-auto cursor-pointer relative md:h-12' alt='Logo' priority={true}/>
            <h1 className='text-xl text-center md:text-lg'>Analytica Consult</h1> 
          </Link>
          <nav className='flex items-center h-full relative md:hidden'>
            <ul className='flex gap-10 tracking-wider font-Helvetica lg:gap-5'>
              <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
                <Link href='/services/'>
                  <p>Services</p>
                  <UnderlineHover />
                </Link>
              </li>
              <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
                <Link href='/account/'>
                  <p>Projets</p>
                  <UnderlineHover />
                </Link>
              </li>
              <li className='cursor-pointer relative overflow-hidden group mt-1.5 mr-[125px] lg:mr-[105px]'>
                <Link href='/account/'>
                  <p>Equipe</p>
                  <UnderlineHover />
                </Link>
              </li>
              <div className='group w-[85px] flex items-center justify-center absolute text-primary right-0'>
                <button className='z-10 py-1.5 rounded w-full border border-primary/40 bg-white transition-all duration-500 relative bottom-1.5 right-1.5 group-hover:border-third group-hover:bg-white group-hover:text-third group-hover:bottom-0 group-hover:right-0'>Contact</button>
                <div className='text-transparent bg-primary/80 py-1.5 w-full absolute rounded'>Contact</div>
              </div>
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
