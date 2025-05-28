import Link from 'next/link'
import { ReturnButton } from '../components/button'

function SocialMediaLink({image_path, alt, url, text}) {
  return (
    <div className="text-lg flex items-center font-it gap-3 italic">
          <img
            src={image_path}
            width="50"
            height="50"
            alt={alt}
          />
          <Link href={url}>{text}</Link>
    </div>
  )
}

export default function Contact() {
  return (
    <div className="bg-[#EEF0F2] text-[#08091F] w-screen h-screen flex flex-col items-start font-serif pl-[5%] pt-[4%]">
        <h1 className="text-7xl md:text-9xl font-bold">Contact</h1>
        <p className="text-lg mt-[4%] mb-[1%]">Find project repository on Github:</p>
        <SocialMediaLink image_path="/github.png" alt="Github icon." url="https://github.com/yioryos-n" text="yioryos-n" />
        <p className="text-lg mt-[2%] mb-[1%]">Take a look at my zine, Kourtina3000:</p>
        <SocialMediaLink image_path="/insta.png" alt="Instagram icon." url="https://www.instagram.com/kourtina3000/" text="Kourtina3000" />
        <SocialMediaLink image_path="/behance.png" alt="Behance icon." url="https://www.behance.net/georgiosnizamis" text="Georgios Nizamis" />
        <div className="mt-[4%]">  
          <ReturnButton/>
        </div>
    </div>
  )
}