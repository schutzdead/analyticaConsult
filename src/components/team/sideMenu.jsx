import Image from "next/image"
import Facebook from '../../../public/assets/footer/facebook.svg'
import Instagram from '../../../public/assets/footer/instagram.svg'
import Linkedin from '../../../public/assets/footer/linkedin.svg'
import RightArrow from '../../../public/assets/team/rightSide.svg'
import Link from "next/link"
import { team } from "../../../public/teamData"
import { unlock } from "@/utils/lockScreen"
import { useEffect, useRef, useState } from "react"

export default function SideMenu ({bag, setBag, id, position}) {
    const [height, setHeight] = useState(position)
    const slot = useRef()

    useEffect(() => {
        slot.current.style.overflow = 'auto'
    }, [])

    useEffect(() => {
        setHeight(position)
    }, [position])
    return(
        <div className="w-[100vw] h-[100vh] top-0 left-0 absolute overflow-hidden"
             style={bag ? {display:"flex", top:`${height}px`} : {display:"none", top:`${height}px`}}>
            <div className="h-ull z-30 bg-black/80 cursor-pointer"
                 style={bag ? {opacity:1, transition:'opacity 1s'} : {opacity:0, zIndex:-10}}
                 onClick={() => {setBag(false), unlock()}}></div>
            <menu className="h-full max-w-[400px] z-40 bg-[#e7dfdb] text-black flex flex-col transition-all duration-700 py-10 md:py-5 sm:w-full"
                 style={bag ? {right:0, transition:'right 400ms ease-out', backgroundColor:'#e7dfdb'} : {right:'-100%'}}>
                    <div className="flex text-xs self-end items-center mr-3 cursor-pointer" onClick={() => {setBag(false);unlock()}}>
                        <p>{`Voir l'équipe`}</p>
                        <Image src={RightArrow} alt="Right arrow pictogram" className='w-5'/>
                    </div>
                    <div ref={slot} className="px-16 flex flex-col max-h-[80vh] overflow-y-auto leading-7 tracking-wide font-light py-10">
                        <div className="flex flex-col gap-7 justify-center">
                            <div className="pt-5">
                                <h1 className='text-2xl whitespace-nowrap'>{team[id]?.fullname.toUpperCase()}</h1>
                                <p className='text-xs text-primary font-normal'>{team[id]?.title1.toUpperCase()}</p>
                            </div>
                            <p className=''>{team[id]?.content}</p>
                        </div>
                        <div className='text-end flex flex-col items-end gap-1 pt-8'>
                            <div className='flex gap-2 md:justify-center'>
                                <Link href={team[id] ? team[id]?.linkedin : ''} target={"_blank"}>
                                    <Image className="w-6 h-auto" src={Linkedin} alt="Pictogram Linkedin"/>
                                </Link>
                            </div>
                            <div className='flex flex-col text-xs'>
                                <span className="swiper-no-swiping">{team[id]?.phone}</span>
                                <span className="swiper-no-swiping">{team[id]?.email}</span>
                            </div>
                        </div>
                    </div>
            </menu>
        </div>
    )
}
