import Link from 'next/link'
import Image from 'next/image'
import Project1 from '../../../public/assets/projects/project1.webp'
import RightArrow from '../../../public/assets/projects/rightSide.svg'
import { unlock } from '@/utils/lockScreen'
import { useEffect, useState } from 'react'

export default function ProjectModal ({setModal, modal}) {

    const [position, setPosition] = useState(0)
    useEffect(() => {
        setPosition(document?.documentElement.scrollTop)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [document?.documentElement.scrollTop])

    console.log(position);
    return (
        <div className={`w-[100vw] h-[100vh] bg-black/90 absolute flex-col items-center text-white z-50`}
             style={modal ? {display:'flex', top:`${position}px`} : {display:'none'}}>
            <section className='flex h-[15%] items-center px-20 self-start sm:px-5'>
                <div className="flex text-sm font-light pr-3 cursor-pointer items-center bg-primary rounded py-1 sm:text-xs sm:py-[2px] sm:pr-1.5" onClick={() => {setModal(false);unlock()}}>
                    <Image src={RightArrow} alt="Right arrow pictogram" className='w-8 rotate-180 sm:w-5'/>
                    <p>{`Retour aux projets`}</p>
                </div>
            </section>
            <section className='h-[85%] max-w-[1600px] grid grid-cols-2 grid-rows-[1fr_3fr] justify-items-center gap-x-20 lg:flex lg:flex-col lg:items-center lg:gap-10 lg:mb-10 sm:gap-5'>
                <div className='col-span-2 flex flex-col items-center lg:pb-5 sm:px-10 sm:pb-0'>
                    <h1 className='text-7xl font-medium lg:text-5xl sm:text-3xl 2sm:text-2xl whitespace-nowrap'>LE NOUVEL HORIZON</h1>
                    <h2 className='text-primary text-xl sm:text-base'>Calligraphie</h2>
                </div>
                <div className='w-[80%] flex flex-col gap-4 justify-self-end lg:max-w-[400px]'>
                    <Image src={Project1} className='w-auto h-[30vh] object-cover rounded-md group-hover:scale-[1.25] transition-all duration-500' width={1900} height={1266} alt='Project picture' priority/>
                    <div className='italic sm:text-sm'>
                        <h2>Titre Légende</h2>
                        <p>Lorem ipsum, dolor sit amet </p>
                    </div>
                </div>
                <div className='w-[80%] text-justify justify-self-start overflow-y-auto scrollbar-thumb-gray-300 scrollbar-thin pr-5 sm:w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi tempora, voluptate, dolore praesentium, rerum laboriosam veritatis quia est dicta obcaecati possimus itaque autem saepe sequi expedita ipsum? Soluta ut labore facere voluptates nihil nemo amet, natus atque vero corporis vitae ratione aliquam tempora dicta sint repellat perspiciatis modi voluptatibus tempore eaque! Quas, reiciendis voluptatum. Voluptatibus error quam recusandae dolores sequi ipsam deleniti reprehenderit architecto asperiores, doloremque, aut molestias? Autem officia quod aliquid. Adipisci tempore, nostrum quod cum excepturi debitis ex magnam, corporis odit ipsa similique nam culpa dignissimos nemo. Consectetur rem minima incidunt totam, ducimus a assumenda illo voluptatem.</div>
            </section>
        </div>
    )
}