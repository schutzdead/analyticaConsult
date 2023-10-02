import Image from 'next/image'
import Layout from '@/components/layout/layout'
import History from '../../public/assets/homepage/landscape1.webp'
import Profil from '../../public/assets/homepage/profil.jpg'
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
          <section className='h-[100vh] -mt-28 overflow-hidden'>
            <Image src={History} className='w-full h-full object-cover' alt='Landscape' priority={true}/>
            <div className='w-full h-full bg-black/40 absolute top-0'></div>
            <p className='absolute top-1/3 text-white font-bold text-7xl w-3/4 leading-snug tracking-wide ml-[20vw]'>LOREM IPSUM DOOS<br/><span className='text-primary'>DOLOR SIT</span></p>
          </section>
          <section className='py-32 w-full flex justify-center gap-16'>
            <div className='w-1/3 max-w-[400px] h-auto'>
              <Image src={Profil} className='shadow-[0_25px_65px_rgba(0,0,0,0.4)] object-cover rounded-xl cursor-pointer relative 2sm:h-[45%]' alt='Profil'/>
            </div>
            <div className='w-[1/3] max-w-[500px] gap-5 flex flex-col py-20'>
              <p className='text-primary text-xl'>Votre histoire entre de bonnes mains</p>
              <div>
                <h1 className='text-4xl font-bold'>Lorem ipsum dolor</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, asperiores.</p>
              </div>
              <p className='leading-7 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere iusto sit a reiciendis ab laborum? Voluptates labore dolorum illum ducimus iste perferendis, ipsa officia sed libero saepe, omnis pariatur eaque praesentium, ad inventore! Nemo minima quis repellat culpa, accusamus laboriosam molestias facilis animi eaque. Nisi quaerat inventore harum aliquid eligendi.</p>
            </div>
          </section>
          <section className='pb-16 pt-16 flex justify-around bg-[#f6f0ea]'>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
          </section>
          <section className='my-32 h-[600px]'>
            <swiper-container ref={swiperRef} init="false" class='h-full'> 
              <SlideImage />
              <SlideImage />
              <SlideImage />
              <SlideImage />
              <SlideImage />
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
      <Image src={image} alt={text} className='w-8 h-auto' priority/>
      <p className='text-lg font-semibold'>{text}</p>
    </div>
  )
}

export function SlideImage () {
  return(
    <swiper-slide class="flex justify-center ">
      <div className='relative h-[90%] w-[70%] overflow-hidden text-white'>
        <Image src={Profil} alt='Article picture' className='h-full w-full object-cover' priority/>
        <div className='z-10 w-full absolute bg-black/50 bottom-0 py-5'>
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
  navigation:true,
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  injectStyles: [
      `
      .swiper-button-next,
      .swiper-button-prev {
          color: black;
          width: 20px;
          height: auto;
          padding:0 10px 0 10px
      }
      .swiper-pagination-bullet{
          background-color: black;
      }
      .swiper-pagination{
        bottom:110%
      }
  `,
  ],
};