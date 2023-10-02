import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/header/logo1.svg'


export default function Header ({isIntersecting}) {
    return (
    <header className="z-20 h-28 flex justify-between px-[8vw] items-start sticky top-0 text-white transition-all duration-300 lg:px-10 md:flex-col md:items-center md:h-auto md:py-5"
            style={isIntersecting ? {backgroundColor:'black'} : {backgroundColor:'transparent'}}>
        <Link href='/' className='flex items-center justify-center gap-2 h-full font-bold'>
          <Image src={Logo} className='h-1/2 w-auto cursor-pointer relative md:h-14' alt='Logo' priority={true}/>
          <h1 className='text-2xl lg:text-xl'>Analytica Consult</h1> 
        </Link>
        <nav className='flex items-center h-full relative'>
          <ul className='flex gap-10 font-semibold tracking-wider font-Helvetica lg:gap-5'>
            <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
              <Link href='/account/'>
                <p>Services</p>
                <UnderlineHover />
              </Link>
            </li>
            <li className='cursor-pointer relative overflow-hidden mt-1.5 group'>
              <Link href='/account/'>
                <p>Projets</p>
                <UnderlineHover />
              </Link>
            </li>
            <li className='cursor-pointer relative overflow-hidden group mt-1.5 mr-[125px] lg:mr-[105px]'>
              <Link href='/account/'>
                <p>Equipe</p>
                <UnderlineHover />
              </Link>
            </li>
            <div className='group w-[85px] flex items-center justify-center absolute text-primary right-0'>
              <button className='z-10 py-1.5 rounded w-full bg-white transition-all duration-300 relative bottom-1 right-1 group-hover:border-third group-hover:bg-white group-hover:text-third group-hover:bottom-0 group-hover:right-0'>Contact</button>
              <div className='text-transparent bg-primary/80 py-1.5 w-full absolute rounded'>Contact</div>
            </div>
          </ul>
        </nav>
    </header>
    )
}


export function UnderlineHover () {
  return(
    <div className={`w-full bg-white mt-1 h-[1px] relative -left-[100%] transition-all duration-500 group-hover:left-0`}></div>
  )
}
