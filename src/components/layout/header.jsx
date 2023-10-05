import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/header/logo1.svg'
// import Menu from '../../../public/assets/header/menu.svg'
import { Hamburger } from './menu'
import { lock, unlock } from '@/utils/lockScreen'
import { useState } from 'react'
import Menu from './menu'


export default function Header ({isIntersecting}) {
  
  const [menu, setMenu] = useState(false)
  const [hamburger, setHamburger] = useState(false)

    return (
    <>
      <Menu menu={menu} setMenu={setMenu} setHamburger={setHamburger}/>
      <header className='z-20 h-24 flex justify-between px-[8vw] items-start sticky top-0 text-white transition-[background-color] duration-300 lg:px-10 sm:h-24 md:px-5'
              style={isIntersecting ? {backgroundColor:'white', color:'black', borderBottom:'solid 1px rgb(209,213,219)'} : {backgroundColor:'transparent'}}>
          <div onClick={() => {setMenu(!menu); menu ? unlock() : lock()}} className='hidden md:block md:mt-5'>
            <Hamburger hamburger={hamburger} setHamburger={setHamburger}/>
          </div>
          <Link href='/' className='flex items-center justify-center gap-2 h-full font-bold md:absolute md:left-1/2 md:-translate-x-1/2 sm:flex-col sm:gap-0'>
            <Image src={Logo} className='h-1/2 w-auto cursor-pointer relative md:h-12' alt='Logo' priority={true}/>
            <h1 className='text-2xl lg:text-xl text-center md:text-lg'>Analytica Consult</h1> 
          </Link>
          <nav className='flex items-center h-full relative md:hidden'>
            <ul className='flex gap-10 font-semibold tracking-wider font-Helvetica lg:gap-5'>
              <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
                <Link href='/services/'>
                  <p>Services</p>
                  <UnderlineHover />
                </Link>
              </li>
              <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
                <Link href='/projects/'>
                  <p>Projets</p>
                  <UnderlineHover />
                </Link>
              </li>
              <li className='cursor-pointer relative overflow-hidden group mt-1.5 mr-[95px]'>
                <Link href='/team/'>
                  <p>Equipe</p>
                  <UnderlineHover />
                </Link>
              </li>
              <Link href='/contact/'>
                <li className='group w-[85px] flex items-center justify-center absolute text-primary right-0'>
                    <button className='z-10 py-1.5 rounded w-full bg-white transition-all duration-300 relative bottom-1 right-1 group-hover:border-third group-hover:bg-white group-hover:text-third group-hover:bottom-0 group-hover:right-0'
                    style={isIntersecting ? {border:'rgba(106, 151, 249, 0.4) 1px solid'} : {border:'none'}}>Contact</button>
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
    <div className={`w-full bg-white mt-1 h-[1px] relative -left-[100%] transition-all duration-500 group-hover:left-0`}></div>
  )
}
