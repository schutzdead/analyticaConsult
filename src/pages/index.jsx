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
    console.log(swiperContainer);
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
            <p className='absolute top-1/3 text-white font-bold text-7xl w-3/4 leading-snug tracking-wide ml-[20vw] xl:text-6xl xl:top-1/2 xl:-translate-y-1/2 xl:leading-normal lg:ml-0 lg:text-center md:text-4xl' >LOREM IPSUM DOOS<br/><span className='text-white'>DOLOR SIT</span></p>
          </section>
          <section className='py-24 w-full flex justify-center gap-16 lg:items-center lg:gap-8 sm:flex-col sm:py-12 sm:gap-12'>
            <div className='w-1/3 max-w-[400px] h-auto lg:w-[40%] md:w-[45%] sm:w-[45%] 2sm:w-[60%]'>
              <Image src={Profil} className='shadow-[0_25px_65px_rgba(0,0,0,0.4)] object-cover rounded-xl cursor-pointer relative 2sm:h-[45%]' alt='Profil'/>
            </div>
            <div className='w-1/3 max-w-[500px] gap-5 flex flex-col py-20 lg:py-0 lg:w-[40%] md:w-[45%] sm:w-[90%]'>
              <p className='text-primary text-xl lg:text-lg'>Votre histoire entre de bonnes mains</p>
              <div>
                <h1 className='text-4xl font-bold lg:text-2xl'>Lorem ipsum dolor</h1>
                <p className='text-sm lg:text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, asperiores.</p>
              </div>
              <p className='leading-7 text-lg lg:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere iusto sit a reiciendis ab laborum? Voluptates labore dolorum illum ducimus iste perferendis, ipsa officia sed libero saepe, omnis pariatur eaque praesentium, ad inventore! Nemo minima quis repellat culpa, accusamus laboriosam molestias facilis animi eaque. Nisi quaerat inventore harum aliquid eligendi.</p>
            </div>
          </section>
          <section className='py-16 flex justify-around bg-[#f6f0ea] sm:grid sm:grid-cols-2 sm:gap-y-10 sm:px-10 2sm:px-0'>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
          </section>
          <section className='my-24 md:my-16'>
            <swiper-container ref={swiperRef} init="false" class='h-full mx-10 sm:mx-5'> 
              <SlideImage image={Swipe1}/>
              <SlideImage image={Swipe2}/>
              <SlideImage image={Swipe3}/>
              <SlideImage image={Swipe4}/>
              <SlideImage image={Swipe1}/>
              <SlideImage image={Swipe2}/>
            </swiper-container>
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
    <swiper-slide class="flex justify-center hover:scale-105 transition-all duration-500">
      <div className='relative overflow-hidden text-white'>
        <Image src={image} alt='Article picture' className='h-[500px] object-cover md:h-[400px] sm:max-w-[400px] 2sm:max-h-[400px]' height={2250} width={1500} />
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