import Image from 'next/image'
import RightArrow from '../../../public/assets/projects/rightSide.svg'
import { unlock } from '@/utils/lockScreen'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function ProjectModal ({setModal, modal, position, project}) {    
    const [height, setHeight] = useState(position)
    const details = useRef()

    useEffect(() => {
        details.current.style.overflow = 'auto'
    }, [])


    useEffect(() => {
        setHeight(position)
    }, [position])

    return (
        <div className={`w-[100vw] h-[100vh] bg-black/90 absolute flex-col items-center top-0 text-white z-50`}
             style={modal ? {display:'flex', top:`${height}px`} : {display:'none', top:`${height}px`}}>
            <section className='flex h-[15%] items-center px-20 self-start sm:px-5 sm:h-[10%]'>
                <div className="flex text-sm font-light pr-3 cursor-pointer items-center bg-primary rounded py-1 sm:text-xs sm:py-[2px] sm:pr-1.5" onClick={() => {setModal(false);unlock()}}>
                    <Image src={RightArrow} alt="Right arrow pictogram" className='w-8 rotate-180 sm:w-5'/>
                    <p>{`Retour aux projets`}</p>
                </div>
            </section>
            <section className='h-[85%] max-w-[1600px] grid grid-cols-2 grid-rows-[1fr_4fr] pt-20 justify-items-center gap-x-20 lg:pt-10 sm:pt-0 lg:flex lg:flex-col lg:items-center lg:gap-10 sm:gap-10 sm:h-[80%]'>
                <div className='col-span-2 flex flex-col items-center pb-20 lg:pb-5 sm:px-10 sm:pb-0'>
                    <h1 className='text-7xl font-medium lg:text-5xl sm:text-3xl 2sm:text-2xl whitespace-nowrap'>{project?.title}</h1>
                    <h2 className='text-primary text-xl sm:text-base'>{project?.service}</h2>
                </div>
                <div className='w-[80%] flex flex-col gap-4 justify-self-end lg:max-w-[400px]'>
                    <Image src={project?.picture} className='w-auto h-[30vh] object-cover rounded-md group-hover:scale-[1.25] transition-all duration-500 md:h-[20vh]' alt='Project picture' priority/>
                    <div className='italic sm:text-sm'>
                        <h2>{project?.legend}</h2>
                    </div>
                </div>
                <Link href={`${project?.link}`} target={"_blank"} className='cursor-pointer flex justify-center'>
                    <div ref={details} className='flex flex-col gap-3 w-[80%] text-justify justify-self-start overflow-y-auto scrollbar-thumb-gray-300 scrollbar-thin pr-5 sm:w-[90%] sm:h-[28vh]'>
                        <p>{project?.content}</p>
                        <p>{project?.content2}</p>
                        <p>{project?.citation}</p>
                    </div>
                </Link>
            </section>
        </div>
    )
}