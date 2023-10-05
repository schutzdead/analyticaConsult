import Image from 'next/image'
import Facebook from '../../../public/assets/footer/facebook.svg'
import Next from '../../../public/assets/team/next.svg'
import Instagram from '../../../public/assets/footer/instagram.svg'
import Linkedin from '../../../public/assets/footer/linkedin.svg'
import HeaderTeam from '@/components/layout/headerTeam'
import Link from 'next/link'
import { team } from '../../../public/teamData'

import { register } from "swiper/element/bundle";
import { useEffect, useRef } from 'react'
register();

export default function Team() {

    const swiperRef = useRef(null);  
    useEffect(() => {
      const swiperContainer = swiperRef.current;
      console.log(swiperContainer);
      Object.assign(swiperContainer, swiperParams);
      swiperContainer.initialize();
    }, []);

    return (
        <>
            < HeaderTeam />
            <main className='flex-1 w-[100vw] h-fullwithHeader2 bg-[#e7dfdb] flex justify-center items-center'>
                <swiper-container ref={swiperRef} init="false" class='h-full w-full mx-10 flex items-center sm:mx-5'>
                    {
                        team ?
                        team.map(t => <ProfilTeam key={t.id} data={t} />)
                        : 'Equipe en cours de constitution.'
                    }
                </swiper-container>
            </main>
        </>
    )
}

function ProfilTeam ({data}) {
    return(
        <swiper-slide class='flex items-center justify-center'>
            <div className='grid grid-cols-3 h-[60vh] items-center justify-items-center mb-[120px] max-w-[1600px] w-full'>
                <div className='flex flex-col items-center font-light'>
                    <h1 className='text-4xl'>{data.fullname.toUpperCase()}</h1>
                    <p className='text-sm text-primary font-normal'>{data.title1.toUpperCase()}</p>
                    <p className='text-sm mt-3'>{data.title2.toUpperCase()}</p>
                </div>
                <Image src={data.picture} className='shadow-[0_25px_65px_rgba(0,0,0,0.3)] object-cover cursor-pointer h-[60vh] w-auto max-w-[385px]' alt='Profil'/>
                <div className='flex flex-col px-20 h-full justify-center leading-7 tracking-wide font-light text-justify'>
                    <p className='flex items-center h-full'>{data.content}</p>
                    <div className='text-end flex flex-col items-end gap-1'>
                        <div className='flex gap-2 md:justify-center'>
                            <Link href={data.facebook} target={"_blank"}>
                                <Image className="w-6 h-auto" src={Facebook} alt="Pictogram Facebook"/>
                            </Link>
                            <Link href={data.instagram} target={"_blank"}>
                                <Image className="w-6 h-auto" src={Instagram} alt="Pictogram Instagram"/>
                            </Link>
                            <Link href={data.linkedin} target={"_blank"}>
                                <Image className="w-6 h-auto" src={Linkedin} alt="Pictogram Linkedin"/>
                            </Link>
                        </div>
                        <div className='flex flex-col text-xs'>
                            <span class="swiper-no-swiping">{data.phone}</span>
                            <span class="swiper-no-swiping">{data.email}</span>
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
    speed: 1500,
    scrollbar: {
        hide: true,
    },
    injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
            color: black;
            width: 14px;
            height: auto;
        }
    `,
    ],
};