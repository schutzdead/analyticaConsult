import Image from 'next/image'
import Arrow from '../../../public/assets/services/arrow.svg'
import Swipe from '../../../public/assets/homepage/swipe4.webp'
import Layout from '@/components/layout/layout'
import { services } from '../../../public/servicesData'
import { useEffect, useState } from 'react'


export default function Services() {
    
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    },[])

    return (
        <div>
        <Layout>
            <main>
            <section className='h-fullwithHeader2 w-full bg-[#f6f0ea] flex items-center justify-center'>
                <div className='h-[91%] w-[97%] bg-white rounded-3xl flex overflow-hidden'>
                    <div className='w-[50%] h-full bg-white p-8 flex flex-col justify-between'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='text-7xl font-light pt-5 xl:text-5xl'>Lorem ipsum dolor sit.</h1>
                            <p className='max-w-[70%] text-lg xl:text-base xl:max-w-[85%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis saepe molestias, odio perspiciatis aperiam recusandae laboriosam autem necessitatibus vel. Eligendi!</p>
                        </div>
                        <div className='text-2xl font-light overflow-y-auto scrollbar-thumb-gray-300 scrollbar-thin pr-5 mt-24 mb-10'>
                            {services.map(service => <Service key={service.id} service={service} setIndex={setIndex} />)}
                        </div>
                    </div>
                    <div className='relative w-[50%] h-full bg-black text-black rounded-3xl overflow-hidden'>
                        <Image src={services[index]?.picture} className='w-full h-full object-cover' width={667} height={1000} alt='Services picture'/>
                        <div className='absolute top-0 h-full w-full flex flex-col justify-between text-white'>
                            <h1 className='text-3xl font-light z-10 pt-10 pl-5'>{services[index]?.title}</h1>
                            <p className='tracking-wide leading-7 z-10 py-10 px-5'
                            style={{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4990371148459384) 50%, rgba(255,255,255,0) 100%)'}}>{services[index]?.description}</p>
                        </div>
                    </div>
                </div>
            </section>
            </main>
        </Layout>
        </div>
    )
}


function Service({service, setIndex}) {
    return(
        <div className='group border-y border-gray-300 py-5 flex justify-between cursor-pointer' onClick={() => setIndex(service.id-1)}>
            <h1>{service.title}</h1>
            <div className='relative flex items-center justify-center p-2 rounded-full bg-black/70 overflow-hidden xl:p-1'>
                <Image src={Arrow} className='z-10' alt='Arrow'/>
                <div className='absolute w-10 h-10 bg-primary rounded-full -left-[100%] transition-all duration-300 group group-hover:left-0 xl:h-8 xl:w-8'></div>
            </div>
        </div>
    )
}