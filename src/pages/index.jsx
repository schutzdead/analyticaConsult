import Image from 'next/image'
import Profil from '../../public/assets/homepage/profil.webp'
import Swipe1 from '../../public/assets/services/service1.webp'
import Swipe2 from '../../public/assets/services/service2.webp'
import Swipe3 from '../../public/assets/services/service3.webp'
import Swipe4 from '../../public/assets/projects/project1.webp'
import Lock from '../../public/assets/homepage/lock.svg'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { useEffect, useRef, useState } from 'react'

import { register } from "swiper/element/bundle";
register();

export default function Home() {

  const swiperRef = useRef(null);  
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    Object.assign(swiperContainer, swiperParams);
    swiperContainer.initialize();
  }, []);

  const [isIntersecting, setIsIntersecting] = useState(false);

  function menuObserver() {
    if(window.scrollY>=(innerHeight - 112)) {
      setIsIntersecting(true)
    } else {
      setIsIntersecting(false)
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", menuObserver);
    return () => {
      window.removeEventListener("scroll", menuObserver);
    };
  });

  return (
    <>
      <Header isIntersecting={isIntersecting} />
        <main>
          <section className='h-[100vh] -mt-24 overflow-hidden lg:flex lg:justify-center sm:-mt-24'>
            <Image src={Swipe4} className='w-full h-full object-cover' alt='Landscape' priority={true}/>
            <div className='w-full h-full bg-black/30 absolute top-0'></div>
            <p className='absolute top-1/3 text-white font-bold text-9xl w-3/4 tracking-wide ml-[20vw] xl:text-6xl xl:top-1/2 xl:-translate-y-1/2 xl:leading-normal lg:ml-0 lg:text-center md:text-4xl sm:w-[90%]' >votre Histoire,<br/><span className='text-white text-6xl font-normal md:text-2xl'>{`SOURCE D'INSPIRATION`}</span></p>
          </section>
          <section className='py-24 w-full flex justify-center gap-16 lg:items-center lg:gap-8 md:flex-col md:py-12 md:gap-12'>
            <div className=' max-w-[400px] h-auto lg:w-[40%] md:w-[40%] 2sm:w-[60%]'>
              <Image src={Profil} className='shadow-[0_25px_65px_rgba(0,0,0,0.4)] object-cover rounded-xl cursor-pointer relative 2sm:h-[45%]' alt='Profil'/>
            </div>
            <div className='max-w-[400px] gap-5 flex flex-col py-20 lg:py-0 lg:w-[40%] md:w-[80%] md:max-w-none'>
              <p className='text-primary text-xl lg:text-lg'>Confiez votre passé à notre expertise</p>
              <h1 className='text-4xl font-bold lg:text-2xl'>Histoire Consult</h1>
              <p className='leading-7 text-lg text-justify lg:text-base'>{`Histoire Consult propose une large gamme de solutions sur mesure aux entreprises, aux institutions publiques et privées ainsi qu'aux particuliers. Qu'il s'agisse de constituer vos archives, d'établir un storytelling fidèle à votre histoire, de vous assister dans l'organisation d'une conférence ou d'une exposition ou de vous conseiller en matière d'histoire, d'art et d'archéologie, nous vous accompagnons dans toutes vos démarches et vous aidons à faire de votre passé un atout.`}</p>
              <p className='text-sm lg:text-xs'>Implantés au Luxembourg, en France et en Belgique, nos collaborateurs interviennent partout ailleurs sur demande.</p>
            </div>
          </section>
          <section className='py-16 flex justify-around bg-[#f6f0ea] sm:grid sm:grid-cols-2 sm:gap-y-10 sm:px-10 2sm:px-0'>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
          </section>
          <section className='flex justify-center'>
            <div className='mb-24 mt-32 max-w-[1500px] w-[100vw] md:mb-16 md:mt-24'>
              <swiper-container ref={swiperRef} init="false" class='h-full mx-10 sm:mx-5'>
                <SlideImage image={Swipe1}/>
                <SlideImage image={Swipe2}/>
                <SlideImage image={Swipe3}/>
                <SlideImage image={Swipe4}/>
                <SlideImage image={Swipe1}/>
                <SlideImage image={Swipe2}/>
              </swiper-container>
            </div>
          </section>
        </main>
      <Footer />
    </>
  )
}

export function Icon ({image, text}) {
  return(
    <div className='flex flex-col items-center gap-4'>
      <Image src={image} alt={text} className='w-8 h-auto'/>
      <p className='text-lg font-semibold md:text-base'>{text}</p>
    </div>
  )
}

export function SlideImage ({image}) {
  return(
    <swiper-slide class="flex justify-center hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden">
      <div className='relative overflow-hidden text-white'>
        <Image src={image} alt='Article picture' className='h-[500px] object-cover object-center rounded-2xl overflow-hidden md:h-[400px] sm:max-w-[400px] 2sm:max-h-[400px]' height={2250} width={1500} />
        <div className='z-10 w-full absolute bg-black/50 bottom-0 pb-10'
             style={{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4990371148459384) 50%, rgba(255,255,255,0) 100%)'}}>
          <h2 className='font-bold px-10'>Lorem, ipsum dolor</h2>
          <p className='px-10 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </swiper-slide>
  )
}

const swiperParams = {
  slidesPerView: 3,
  pagination: true,
  spacebetween:20,
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  injectStyles: [
      `
      .swiper-button-next,
      .swiper-button-prev {
          color: white;
          width: 20px;
          height: auto;
          padding:0 10px 0 10px
      }
      .swiper-pagination-bullet{
          background-color: white;
      }
  `,
  ],
};