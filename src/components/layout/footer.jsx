import Link from 'next/link'
import Image from 'next/image'
import Facebook from '../../../public/assets/footer/facebook.svg'
import Instagram from '../../../public/assets/footer/instagram.svg'
import Linkedin from '../../../public/assets/footer/linkedin.svg'

export default function Footer () {
    return (
        <footer className="bg-white text-darkTypo-color pt-10 pb-5 flex flex-col gap-10 border-t border-gray-300 sm:pt-14 sm:gap-8">
            <div className='grid-cols-3 grid justify-items-center sm:grid-cols-1 sm:gap-8'>
                <div>
                    <h3 className='text-h4R font-semibold mb-2.5 sm:text-center sm:text-base'>Navigation</h3>
                    <div className='flex flex-col gap-2 lg:text-sm sm:flex-row sm:gap-5'>
                        <Link href={'/services'}>Services</Link>
                        <a href={'/projects'}>Projets</a>
                        <a href="">Mention légales</a>
                    </div>
                </div>
                <div>
                    <h3 className='text-h4R font-semibold mb-2.5 sm:text-center sm:text-base'>Contact</h3>
                    <div className='flex flex-col gap-2 lg:text-sm sm:text-center'>
                        <p>bastien.dubuisson.histoire@gmail.com</p>
                        <p>+352606060606</p>
                        <p>France - Luxembourg</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-h4R font-semibold mb-2.5 sm:text-center sm:text-base'>En savoir plus</h3>
                    <div className='flex flex-col gap-2 lg:text-sm sm:text-center'>
                        <p>Bastien Dubuisson, PhD</p>
                        <div className='flex gap-3 md:justify-center'>
                            <Image src={Facebook} alt="Pictogram Facebook"/>
                            <Image src={Instagram} alt="Pictogram Instagram"/>
                            <Link href="https://www.linkedin.com/in/lucas-soubry" target={"_blank"}>
                                <Image src={Linkedin} alt="Pictogram Linkedin"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center text-xs'>
                <p>Site réalisé par <a className='font-bold cursor-pointer' target="_blank" href="https://lucassoubry.fr">lucassoubry.fr</a></p>
            </div>
        </footer>
    )
}
