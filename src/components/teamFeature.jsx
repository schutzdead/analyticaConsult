import Image from 'next/image'
import Glass from '../../public/assets/team/glass.svg'
import Linkedin from '../../public/assets/footer/linkedin.svg'
import Link from 'next/link'
import { team } from '../../public/teamData'
import SideMenu from '@/components/team/sideMenu'
import { lock } from '@/utils/lockScreen'

import { register } from "swiper/element/bundle";
import { useEffect, useRef, useState } from 'react'
register();

export default function Team() {
    const [bag, setBag] = useState(false)
    const [currentId, setCurrentId] = useState()
    const swiperRef = useRef(null);  
    const [position, setPosition] = useState()
    const [body, setBody] = useState()

    useEffect(() => {
        setBody(document?.querySelector('body'))
    },[])

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      Object.assign(swiperContainer, swiperParams);
      swiperContainer.initialize();
    }, []);

    return (
        <div id='teamId' className='bg-white flex flex-col justify-center'>
            <SideMenu bag={bag} setBag={setBag} id={currentId-1} position={position} />
            <main className='w-[100vw] mt-44 bg-[#e7dfdb]/40 flex justify-center items-center py-5 md:mt-20'>
                <swiper-container ref={swiperRef} init="false" class='h-full w-full mx-10 flex items-center sm:mx-5'>
                    {
                        team ?
                        team.map(t => <ProfilTeam key={t.id} data={t} setBag={setBag} setCurrentId={setCurrentId} setPosition={setPosition} position={position} body={body} />)
                        : 'Equipe en cours de constitution.'
                    }
                </swiper-container>
            </main>
        </div>
    )
}

function ProfilTeam ({data, setBag, setCurrentId, setPosition, body}) {
    return(
        <swiper-slide class='flex items-center justify-center'>
            <div className='grid grid-cols-3 items-center justify-items-center max-w-[1600px] w-full xl:grid-cols-2 md:flex md:flex-col-reverse md:gap-7'>
                <div className='flex flex-col items-center font-light pl-16 md:pl-0'>
                    <h1 className='text-4xl whitespace-nowrap lg:text-3xl'>{data.fullname.toUpperCase()}</h1>
                    <p className='text-sm text-primary font-normal lg:text-xs'>{data.title1.toUpperCase()}</p>
                    <p className='text-sm mt-3 lg:text-xs'>{data.title2.toUpperCase()}</p>
                    <button className='py-1.5 mt-10 px-4 border border-primary items-center gap-2 place-self-center rounded-3xl transition-all duration-300 hidden xl:flex hover:bg-primary hover:text-white lg:px-2 md:mt-5' onClick={() => {setBag(true); setPosition(Math.max(window.screenY, document.documentElement.scrollTop, document.body.scrollTop)); body.style.overflow = 'hidden'; setCurrentId(data.id)}}>
                        <Image className="w-6 h-auto lg:w-5" src={Glass} alt="Pictogram glass"/>
                        <p className='mt-1 lg:text-sm lg:mt-0'>Informations</p>
                    </button>
                </div>
                <Image src={data.picture} className='shadow-[0_25px_25px_rgba(0,0,0,0.2)] object-cover object-top cursor-pointer h-[60vh] w-auto max-w-[385px] 2xl:max-w-[350px] xl:mr-10 lg:max-w-[320px] md:mr-0 md:h-[50vh] md:w-[320px] 2sm:max-w-[290px]' alt='Profil' priority/>
                <div className='flex flex-col pl-[2vw] pr-16 h-full justify-center leading-7 tracking-wide font-light text-justify'>
                    <p className='flex items-center h-full xl:hidden'>{data.content}</p>
                    <div className='text-end flex flex-col items-end gap-1 xl:hidden'>
                        <div className='flex gap-2 md:justify-center'>
                            <Link href={data.linkedin} target={"_blank"}>
                                <Image className="w-6 h-auto" src={Linkedin} alt="Pictogram Linkedin"/>
                            </Link>
                        </div>
                        <div className='flex flex-col text-xs'>
                            <span>{data.phone}</span>
                            <span>{data.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
    )
}

const swiperParams = {
    navigation:true,
    slidesPerView: 1,
    mousewheel:true,
    speed: 1000,
    injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
            color: black;
            width: 14px;
            height: auto;
        },
    `,
    ],
};