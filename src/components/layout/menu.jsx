import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { unlock } from "@/utils/lockScreen"
import Close from '../../../public/assets/header/close.svg'

export default function Menu ({menu, setMenu , setHamburger}) {
    return (
        <>
            <div className="hidden fixed w-full h-full left-0 top-0 z-30 bg-black/60 cursor-pointer md:block"
                    style={menu ? {opacity:1, transition:'opacity 1s'} : {opacity:0, zIndex:-10}} onClick={() => {setMenu(false);unlock();setHamburger(false)}}></div>
                <menu className="hidden fixed pl-10 w-[60%] pr-10 h-full top-0 bg-white z-40 py-16 flex-col items-center md:flex sm:w-full sm:pr-10 md:py-10"
                style={menu ? {left:0, transition:'left 400ms ease-out'} : {left:"-100%"}}>
                <Image src={Close} onClick={() => {setMenu(false);unlock();setHamburger(false)}} alt="Close pictogram" className='w-8 cursor-pointer self-start'/>
                <div className="flex justify-center">
                    <ul className="relative flex flex-col items-center text-3xl font-bold tracking-wide w-full gap-10">
                        <li className='cursor-pointer relative overflow-hidden mt-20 group'>
                            <Link href='/' onClick={() => {setMenu(false);unlock();setHamburger(false)}}>
                            <p>Accueil</p>
                            </Link>
                        </li>
                        <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
                            <Link href='/services/' onClick={() => {setMenu(false);unlock();setHamburger(false)}}>
                            <p>Services</p>
                            </Link>
                        </li>
                        <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
                            <Link href='/projects/' onClick={() => {setMenu(false);unlock();setHamburger(false)}}>
                            <p>Projets</p>
                            </Link>
                        </li>
                        <li className='cursor-pointer relative overflow-hidden group mt-1.5'>
                            <Link href='/team/' onClick={() => {setMenu(false);unlock();setHamburger(false)}}>
                            <p>Equipe</p>
                            </Link>
                        </li>
                        <Link href='/contact/'>
                            <div className='group w-[145px] flex items-center justify-center relative text-primary pt-3'>
                                <button className='z-10 py-1.5 rounded w-full border border-primary bg-white transition-all duration-500 relative bottom-1.5 right-1.5 group-hover:border-third group-hover:bg-white group-hover:text-third group-hover:bottom-0 group-hover:right-0'>Contact</button>
                                <div className='text-transparent bg-primary/80 py-1.5 w-full absolute rounded'>Contact</div>
                            </div>
                        </Link>
                    </ul>
                </div>
            </menu>
        </>
    )
}


export function Hamburger ({hamburger, setHamburger}) {
    return (
        <div className='flex flex-col justify-between h-4 w-5 relative cursor-pointer' onClick={() => setHamburger(!hamburger)}>
            <HamburgerLine animation={hamburger ? {transform:'rotate(45deg)', top:'7px'} : {transform:'rotate(0)', left:0, top:0}}/>
            <HamburgerLine animation={hamburger ? {width:0} : {width:'100%'}} duration={'400ms'} />
            <HamburgerLine animation={hamburger ? {transform:'rotate(-45deg)', top:'-7px'} : {transform:'rotate(0)', left:0, top:0}}/>
        </div>
    )
  }

export function BlackHamburger ({hamburger, setHamburger}) {
    return (
        <div className='flex flex-col justify-between h-4 w-5 relative cursor-pointer' onClick={() => setHamburger(!hamburger)}>
            <BlackHamburgerLine animation={hamburger ? {transform:'rotate(45deg)', top:'7px'} : {transform:'rotate(0)', left:0, top:0}}/>
            <BlackHamburgerLine animation={hamburger ? {width:0} : {width:'100%'}} duration={'400ms'} />
            <BlackHamburgerLine animation={hamburger ? {transform:'rotate(-45deg)', top:'-7px'} : {transform:'rotate(0)', left:0, top:0}}/>
        </div>
    )
  }


function HamburgerLine ({animation}) {
    return(
    <span className={`bg-white h-[2px] w-full relative transition-all`}
          style={animation}></span>
    )
}

function BlackHamburgerLine ({animation}) {
    return(
    <span className={`bg-black h-[2px] w-full relative transition-all`}
          style={animation}></span>
    )
}