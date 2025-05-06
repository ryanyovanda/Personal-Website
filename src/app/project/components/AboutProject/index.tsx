"use client"

import { Circle} from "lucide-react"

const AboutProject = () => {
  return (
    <>
      <div className="py-7 px-4">
        <div className="flex flex-row justify-between text-sm md:text-xl mb-8">
          <div className="flex flex-row items-center justify-start opacity-70 space-x-3">
            <Circle className="w-2 bg-black rounded-4xl h-2 opacity-30" />
            <h1>Projects</h1>
          </div>
        </div>
        <div>
            <div className="font-bold text-4xl mb-4 opacity-70">
                <h1>Explore My Creations</h1>
            </div>
            <div>
                <p className="leading-relaxed opacity-50">Designing with intent. Building with impact.
                Each project in my portfolio is more than just code—it&apos;s a response to real-world challenges. I focus on building digital experiences that are intuitive, efficient, and human-centered—turning complexity into clarity, and ideas into interfaces that matter.
                     </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutProject
