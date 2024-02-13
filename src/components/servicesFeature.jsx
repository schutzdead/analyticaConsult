import Image from 'next/image'
import Arrow from '../../public/assets/services/arrow.svg'
import Plus from '../../public/assets/services/plus.svg'
import { services } from '../../public/servicesData'
import { useEffect, useRef, useState } from 'react'

import { register } from "swiper/element/bundle";
register();

export default function Services() {
    
    const [index, setIndex] = useState(0)
    const [currentSelect, setCurrentSelect] = useState()
    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    useEffect(() => {
        setIndex(0)
    },[])

    useEffect(() => {
        setTimeout(() => {
            setTitle(services[index]?.title)
            setContent(services[index]?.description)
        },400)
    },[index])

    const swiperRef = useRef(null);  
    useEffect(() => {
      const swiperContainer = swiperRef.current;
      swiperContainer.initialize();
    }, []);

    return (
            <main className='flex flex-1 items-center justify-center scroll-smooth mt-44 sm:mt-14 scroll-m-28' id='services'>
            <section className='w-full bg-white flex items-center justify-center max-w-[1800px] lg:h-auto hsm:h-auto'>
                <div className='h-[70vh] w-[80%] bg-white rounded-3xl flex overflow-hidden lg:hidden hsm:hidden'>
                    <div className='w-[50%] h-full bg-[#e7dfdb]/40 p-8 flex flex-col'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='text-6xl font-Caslon font-medium pt-5'>Nos services</h1>
                            {/* <p className='text-lg xl:text-base max-w-[85%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis saepe molestias, odio perspiciatis aperiam recusandae laboriosam autem necessitatibus vel. Eligendi!</p> */}
                        </div>
                        <div className='text-2xl font-light overflow-y-auto scrollbar-thumb-gray-300 scrollbar-thin pr-5 h-full flex flex-col justify-center py-20 xl:py-16'>
                            {services?.slice(1,services.length).map(service => <Service key={service.id} service={service} setIndex={setIndex} setCurrentSelect={setCurrentSelect} currentSelect={currentSelect} swiperRef={swiperRef} />)}
                        </div>
                    </div>
                    <div className='relative w-[50%] h-full bg-gray-100 text-black lg:hidden'>
                        <swiper-container ref={swiperRef} class='w-full h-full object-cover rounded-3xl overflow-hidden'>
                            {services?.map(s => 
                            <swiper-slide key={s.id}>
                                <Image src={s.picture} className='w-full h-full object-cover object-left' width={1500} height={2250} alt='Services picture' priority/>
                            </swiper-slide>
                            )}
                        </swiper-container>
                        <div className='z-10 absolute top-0 h-full w-full flex flex-col justify-between text-white'>
                            <div className='relative overflow-hidden'>
                                <h1 key={services[index].id} className='text-5xl font-light z-10 pt-16 pb-2 pl-20 relative animate-fromtoptotop xl:px-14 lg:pb-14'>{title}</h1>
                            </div>
                            <div className='relative overflow-hidden rounded-b-3xl mx-[1px]'
                                 style={{background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 60%, rgba(255,255,255,0) 100%)'}}>
                                <div className='max-h-[200px] overflow-y-auto scrollbar-thumb-gray-300 scrollbar-thin flex items-start my-10 pl-20 pr-10 mr-10 z-10 xl:px-14'>
                                    <p key={services[index].id} className='text-lg tracking-wide leading-7 relative animate-fromtoptotop font-medium lg:px-14 lg:pb-14'>{content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white hidden px-10 h-auto lg:flex flex-col gap-10 items-center sm:px-7 sm:gap-7 
                                hsm:flex hsm:px-7 hsm:gap-7 '>
                    <div className='flex flex-col gap-6 mt-10 sm:mt-5 hsm:mt-5'>
                        <h1 className='text-4xl font-bold font-Caslon pt-5'>Nos services</h1>
                        {/* <p className='text-lg xl:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis saepe molestias, odio perspiciatis aperiam recusandae laboriosam autem necessitatibus vel. Eligendi!</p> */}
                    </div>
                    <Image src={services[0].picture} className='max-h-[350px] object-cover rounded-3xl' width={1500} height={2250} alt='Services picture' priority/>
                    <div className='w-full text-black mb-10'>
                        {services? 
                            services?.slice(1,services.length).map(service => <ServiceReponsive key={service.id} service={service}/>)
                        :''
                        }
                    </div>
                </div>
            </section>
            </main>
    )
}


function Service({service, setIndex, setCurrentSelect, currentSelect, swiperRef}) {

    const [select, setSelect] = useState(false)

    useEffect(() => {
        if(service.id === currentSelect) return setSelect(true)
        setSelect(false)
    }, [currentSelect, service.id])

    return(
        <div className='group border-y border-gray-300 py-5 flex justify-between cursor-pointer' 
             onClick={() => {setIndex(service.id-1); setCurrentSelect(service.id); swiperRef.current.swiper.slideTo(service.id-1, 500, false)}}>
            <h1>{service.title}</h1>
            <div className='relative flex items-center justify-center p-2 rounded-full overflow-hidden xl:p-1'
                 style={select ? {backgroundColor:'#6a97f9'} : {backgroundColor:'black', opacity:'0.8'}}>
                <Image src={Arrow} className='z-10' alt='Arrow' priority/>
                <div className='absolute w-10 h-10 bg-primary rounded-full -left-[100%] transition-all duration-300 group group-hover:left-0 xl:h-8 xl:w-8'></div>
            </div>
        </div>
    )
}

function ServiceReponsive ({service}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="flex justify-between items-center cursor-pointer pt-7 gap-5" onClick={() => {setOpen(!open)}}>
                <h1>{service.title}</h1>
                <Image src={Plus} className="w-4 h-auto transition-all duration-300" style={open ? {transform:'rotate(45deg)'} : {transform:'rotate(0deg)'}} alt='Logo' priority />
            </div>
            <ul className="flex items-start overflow-hidden mb-7"
                style={open ? {maxHeight:'850px', transition:'all 1s'} : { maxHeight:0, transition:'all 1s 0s'}}>
                <p className='tracking-wide leading-7 pt-7'>{service.description}</p>
            </ul>
            <div className="w-full bg-gray-300 h-[1px]"></div>
        </>
    )
}