"use client";

import Link from 'next/link'
import { ResponsiveLink } from './components/responsiveLink';
import { ResponsiveLinkSmallScreen } from './components/responsiveLinkSmallScreen';
import { ScrollLabel } from './components/scrollLabel';
import { Moon } from './components/moon';

export default function Home() {
  

  return (    
    <div className="w-screen h-dvh grid grid-cols-3, grid-rows-3 items-center background-image-night">
      <div className="p-5 mt-[-6%] row-start-1 row-end-2 col-start-1 col-end-4 flex flex-col items-center md:flex-row md:justify-between md:items-start">
        <ResponsiveLink/>
        <h1 className="mt-[-1%] mb-[3%] md:mb-0 font-serif text-8xl md:text-9xl text-shadow-large tracking-wide font-black">Moon</h1>
        <ResponsiveLinkSmallScreen/>
        <Link href="./contact">
          <button type="button" className="mt-[2%] md:mt-0 font-serif text-xl text-shadow-small hover:text-shadow-hover hover:duration-500 hover:cursor-pointer">Contact</button>
        </Link>
      </div>
      <div className="row-start-2 row-end-3 col-start-2 col-end-3 place-self-center flex">
        <Moon/>
      </div>
      <div className="row-start-3 row-end-4 col-start-1 col-end-4 self-center text-center animate-pulse text-shadow-small">
        <ScrollLabel/>
      </div>
    </div>
  )
}