"use client"

import { Circle} from "lucide-react"
import Image from "next/image"

const AboutMe = () => {
  return (
    <>
      <div className="py-7 px-4">
        <div className="flex flex-row justify-between text-sm md:text-xl mb-8">
          <div className="flex flex-row items-center justify-start opacity-70 space-x-3">
            <Circle className="w-2 bg-black rounded-4xl h-2 opacity-30" />
            <h1>About Me</h1>
          </div>
        </div>
        <div>
            <div className="font-bold text-4xl mb-4 opacity-70">
                <h1>Its Me Ryan </h1>
            </div>
            <div>
                <p className="leading-relaxed opacity-50">I&apos;m Ryan Yovanda, a fullstack developer based in Bandung, Indonesia, with a strong background in 
                    backend and frontend technologies. With hands-on experience building scalable web applications—from
                     admin dashboards to Saas App—I focus on developing purposeful digital solutions that simplify 
                     complex processes. I enjoy transforming technical challenges into seamless user experiences, bridging 
                     the gap between systems and people.
                     </p>
            </div>
            <div className="flex justify-center mx-auto w-[70%] outline-8 outline-gray-200 my-8 rounded-xl shadow-xl">
                <Image src="/about-me.jpeg" alt="Ryan Yovanda Photo" height={500} width={500} className="rounded-xl"></Image>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
