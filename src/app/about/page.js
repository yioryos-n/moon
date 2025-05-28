import { ReturnButton } from '../components/button'

export default function About() {
  return (
    <div className="bg-[#EEF0F2] text-[#08091F] h-screen w-screen flex flex-col items-start  font-serif pl-[5%]">
        <h1 className="text-7xl md:text-9xl pb-[5%] pt-[5%] font-bold">About</h1>
        <p className="text-lg">This project is a simple interactive moon phase model built with Next.js.</p>
        <p className="text-lg mt-[2%]">The moon’s phases are controlled by your scroll — as you scroll, the moon changes! 🌑🌒🌓🌔🌕🌖🌗🌘</p>
        <p className="text-lg mt-[2%]">It was created just for fun and to help me learn how to build interactive experiences using Next.js.</p>
        <div className="mt-[5%]">  
          <ReturnButton/>
        </div>
    </div>
  )
}