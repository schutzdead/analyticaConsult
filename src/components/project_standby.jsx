import Image from 'next/image'
import Arrow from '../../public/assets/projects/arrow.svg'
import ProjectModal from '@/components/projects/modal'
import { useEffect, useState } from 'react'
import { projects } from '../../public/projectData'

export default function Projects() {
    const [modal, setModal] = useState(false)
    const [position, setPosition] = useState()
    const [body, setBody] = useState()
    const [currentId, setCurrentId] = useState()

    useEffect(() => {
        setBody(document?.querySelector('body'))
    },[])

    return (
        <>
            <main className='flex flex-col mx-10 items-center flex-1 mt-44 gap-16 sm:mt-8 scroll-m-44 md:scroll-m-28 md:gap-0 md:mx-8' id='projects'>
                <h1 className="text-4xl font-bold text-center font-Caslon md:text-4xl">Nos projets</h1>
                <section className='grid grid-cols-3 gap-10 mx-20 max-w-[1600px] w-full lg:grid-cols-2 md:grid-cols-1 md:mx-8 md:gap-8 md:mt-8'>
                    {
                        projects 
                        ? projects.map(project => <Card key={project.id} project={project} setModal={setModal} setPosition={setPosition} body={body} setCurrentId={setCurrentId} />)
                        : ''
                    }
                </section>
            </main>
            <ProjectModal modal={modal} setModal={setModal} position={position} project={projects[currentId-1]} />
        </>
    )
}

function Card ({setModal, setPosition, body, setCurrentId, project}) {
    return (
        <div className='group group/buttonBis relative h-[450px] w-full bg-gray-100 rounded-2xl overflow-hidden xl:h-[350px] sm:h-[200px]' onClick={() => {setCurrentId(project?.id); setModal(true); setPosition(Math.max(window.screenY, document.documentElement.scrollTop, document.body.scrollTop)); body.style.overflow = 'hidden'}}>
            <Image src={project?.picture} className='w-full h-full object-cover rounded-2xl group-hover:scale-[1.25] transition-all duration-500 sm:group-hover:scale-100' width={667} height={1000} alt='Services picture' priority/>
            <h1 className='text-5xl text-white w-full font-bold absolute top-1/2 text-center z-10 -translate-y-1/2 xl:text-4xl md:text-5xl sm:text-4xl sm:top-10 sm:translate-y-0'>{project?.title}</h1>
            <div className='h-full w-full absolute top-0 bg-black/25 sm:bg-black/45'>
                <div className='w-full h-full relative top-0 overflow-hidden flex items-end py-5'>
                    <div className='bg-white cursor-pointer w-full group/button relative mx-5 px-5 overflow-hidden transition-all duration-700 bottom-0 flex items-center justify-between rounded-2xl translate-y-[150%] group-hover/buttonBis:translate-y-0 md:w-auto md:translate-y-0 md:left-1/2 md:-translate-x-1/2 md:mx-0'>
                        <div className='flex flex-col gap-1 py-3 pr-5 sm:py-2 sm:gap-0 sm:pr-3'>
                            <div>
                                <h2 className='text-primary text-xs'>{project?.service}</h2>
                            </div>
                            <p className='text-lg font-light text-gray-500 xl:text-base sm:text-sm'>Découvrir le projet</p>
                        </div>
                        <Image src={Arrow} className='mx-2 relative left-0 group-hover/button:left-2 transition-all duration-300 sm:mx-0 sm:h-auto sm:w-4' alt='Services picture' priority/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// function MainCard ({setModal, setPosition}) {
//     return (
//         <div className='relative h-[600px] w-full bg-gray-100 rounded-md overflow-hidden group group/buttonBis xl:h-[450px]' onClick={() => {setModal(true); lock(); setPosition(document?.documentElement?.scrollTop)}}>
//             <Image src={Project1} className='w-full h-full object-cover rounded-md group-hover:scale-[1.25] transition-all duration-500' width={1900} height={1266} alt='Services picture' priority/>
//             <div className='h-full w-full absolute top-0' style={{background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 100%)'}}></div>
//                 <div className='w-full h-heightforCard absolute flex items-end pb-10 top-0 overflow-hidden md:h-full'>
//                     <div className='bg-white cursor-pointer group/button px-5 z-10 absolute overflow-hidden transition-all duration-700 bottom-0 left-1/2 -translate-x-1/2 flex items-center rounded-2xl translate-y-full group-hover/buttonBis:translate-y-0 md:-translate-y-0 md:w-[90%] md:relative md:justify-between'>
//                         <div className='flex flex-col gap-1 py-3 pr-5 border-r md:border-none'>
//                             <div>
//                                 <h2 className='text-primary text-xs'>Calligraphie</h2>
//                                 <h1 className='text-lg'>Le Nouvel Horizon</h1>
//                             </div>
//                             <p className='text-lg font-light text-gray-500 md:text-base'>Découvrir mon projet phare</p>
//                         </div>
//                         <Image src={Arrow} className='mx-2 relative left-0 group-hover/button:left-2 transition-all duration-300' alt='Services picture' priority/>
//                     </div>
//                 </div>
//         </div>
//     )
// }