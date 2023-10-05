import Image from 'next/image'
import ProjectAll from '../../../public/assets/homepage/swipe4.webp'
import Project from '../../../public/assets/projects/project1.webp'
import Arrow from '../../../public/assets/projects/arrow.svg'
import Layout from '@/components/layout/layout'
import { services } from '../../../public/servicesData'
import { useEffect, useRef, useState } from 'react'

export default function Services() {
    return (
        <Layout>
            <main>
                <section className='my-16 mx-20 md:mx-8 md:mb-8'>
                    <MainCard />
                </section>
                <section className='grid grid-cols-3 gap-10 mx-20 my-16 lg:grid-cols-2 md:grid-cols-1 md:mx-8 md:gap-8 md:mt-8'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </main>
        </Layout>
    )
}

function Card () {
    return (
        <div className='group group/buttonBis relative h-[450px] w-full bg-gray-100 rounded-md overflow-hidden xl:h-[350px]'>
            <Image src={ProjectAll} className='w-full h-full object-cover rounded-md group-hover:scale-[1.25] transition-all duration-500' width={667} height={1000} alt='Services picture' />
            <h1 className='text-3xl text-white w-full font-bold absolute top-1/2 text-center z-10 -translate-y-1/2 xl:text-2xl'>Le Nouvel Horizon</h1>
            <div className='h-full w-full absolute top-0 bg-black/25'>
                <div className='w-full h-full relative top-0 overflow-hidden flex items-end py-5'>
                    <div className='bg-white w-full group/button relative mx-5 px-5 overflow-hidden transition-all duration-700 bottom-0 flex items-center justify-between rounded-2xl translate-y-[150%] group-hover/buttonBis:translate-y-0 md:w-auto md:translate-y-0 md:left-1/2 md:-translate-x-1/2 md:mx-0'>
                        <div className='flex flex-col gap-1 py-3 pr-5'>
                            <div>
                                <h2 className='text-primary text-xs'>Calligraphie</h2>
                            </div>
                            <p className='text-lg font-light text-gray-500 xl:text-base'>Découvrir mon projet</p>
                        </div>
                        <Image src={Arrow} className='mx-2 relative left-0 group-hover/button:left-2 transition-all duration-300' alt='Services picture' />
                    </div>
                </div>
            </div>
        </div>
    )
}

function MainCard () {
    return (
        <div className='relative h-[450px] w-full bg-gray-100 rounded-md overflow-hidden group group/buttonBis'>
            <Image src={Project} className='w-full h-full object-cover rounded-md group-hover:scale-[1.25] transition-all duration-500' width={667} height={1000} alt='Services picture' />
            <div className='h-full w-full absolute top-0' style={{background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 100%)'}}></div>
                <div className='w-full h-heightforCard absolute flex items-end pb-10 top-0 overflow-hidden md:h-full'>
                    <div className='bg-white group/button px-5 z-10 absolute overflow-hidden transition-all duration-700 bottom-0 left-1/2 -translate-x-1/2 flex items-center rounded-2xl translate-y-full group-hover/buttonBis:translate-y-0 md:-translate-y-0 md:w-[90%] md:relative md:justify-between'>
                        <div className='flex flex-col gap-1 py-3 pr-5 border-r md:border-none'>
                            <div>
                                <h2 className='text-primary text-xs'>Calligraphie</h2>
                                <h1 className='text-lg'>Le Nouvel Horizon</h1>
                            </div>
                            <p className='text-lg font-light text-gray-500 md:text-base'>Découvrir mon projet phare</p>
                        </div>
                        <Image src={Arrow} className='mx-2 relative left-0 group-hover/button:left-2 transition-all duration-300' alt='Services picture' />
                    </div>
                </div>
        </div>
    )
}