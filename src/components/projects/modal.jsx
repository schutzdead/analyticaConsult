import Link from 'next/link'
import Image from 'next/image'
import Facebook from '../../../public/assets/footer/facebook.svg'

export default function ProjectModal ({setModal}) {
    return (
        <div className='w-[100vw] h-[100vw] bg-black/50' onClick={() => setModal(false)}>
            TEST 
        </div>
    )
}