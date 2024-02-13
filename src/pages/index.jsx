import Image from 'next/image'
import Swipe4 from '../../public/assets/homepage/project1.webp'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { useEffect, useState } from 'react'
import Services from '@/components/servicesFeature'
import Contact from '@/components/contactFeature'
import Team from '@/components/teamFeature'
import Projects from '@/components/project_standby'

import { register } from "swiper/element/bundle";
register();

export default function Home() {
  // const swiperRef = useRef(null);  
  // useEffect(() => {
  //   const swiperContainer = swiperRef.current;
  //   Object.assign(swiperContainer, swiperParams);
  //   swiperContainer.initialize();
  // }, []);

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
          <section className='h-[100vh] -mt-24 overflow-hidden lg:flex lg:justify-center'>
            <Image src={Swipe4} className='h-[100vh] w-[100vw] z-0 object-cover absolute top-0' alt='Landscape' priority />
            <div className='w-full h-[100vh] bg-black/70 z-10 relative top-0'></div>
            <div className=' z-20 absolute text-white font-bold text-8xl w-full items-center flex flex-col top-1/2 -translate-y-1/2 mt-10 xl:text-7xl lg:text-center lg:text-6xl sm:w-[90%] sm:text-4xl' >
              <p className='text-center max-w-[90%] font-Caslon tracking-wide'>votre Histoire, <span className='text-white font-normal text-6xl xl:text-5xl lg:text-4xl sm:text-2xl'></span>{`source d’Inspiration`}</p>
              <div className='w-[70%] mt-24 font-medium leading-[40px] text-justify xl:leading-8 flex flex-col text-xl gap-10 xl:gap-5 xl:text-lg xl:mt-16 lg:text-base lg:w-[80%] md:w-[90%] sm:w-[95%] sm:text-sm sm:mt-10'>
                <p>
                  {`HistHorizons propose une large gamme de solutions sur mesure aux entreprises, aux institutions publiques et privées ainsi qu'aux particuliers. Qu'il s'agisse de retracer votre histoire, de la communiquer via un storytelling captivant ou d’imaginer de nouvelles opportunités, nous vous accompagnons dans toutes vos démarches et vous aidons à faire de votre passé un atout.`}
                </p>
                <p>Implantés au Luxembourg, en France et en Belgique, nos collaborateurs interviennent partout ailleurs sur demande.</p>
              </div>
            </div>
          </section>
          {/* <section className='py-16 flex justify-around bg-[#f6f0ea] sm:grid sm:grid-cols-2 sm:gap-y-10 sm:px-10 2sm:px-0'>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
            <Icon image={Lock} text="Lorem ispum"/>
          </section> */}
          <Services />
          <Projects />
          <Team />
          <Contact />
          {/* <section className='flex justify-center'>
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
          </section> */}
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

// const swiperParams = {
//   slidesPerView: 3,
//   pagination: true,
//   spacebetween:20,
//   autoplay:{
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   breakpoints:{
//     0: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//   },
//   injectStyles: [
//       `
//       .swiper-button-next,
//       .swiper-button-prev {
//           color: white;
//           width: 20px;
//           height: auto;
//           padding:0 10px 0 10px
//       }
//       .swiper-pagination-bullet{
//           background-color: white;
//       }
//   `,
//   ],
// };