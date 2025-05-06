import { Circle,  MoveRight, SquareArrowOutUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { projectList } from "@/types/projects"

const ProjectList = () => {
    return(
        <>
        <div className="pt-7 pb-2 px-4 bg-[#f0f0f0] rounded-xl">
        <div className="flex flex-row justify-between text-xl mb-8">
            <div className="flex flex-row items-center justify-start opacity-70 space-x-3"><Circle className="w-2 bg-black rounded-4xl h-2 opacity-30"/><h1>Projects</h1></div>
        </div>

        {projectList.map((project, index) => (
        <Link href={project.href} key={index}>
        <div className="flex flex-row bg-white h-24 py-4 px-8 items-center rounded-xl space-x-5 shadow-sm hover:outline-5 outline-gray-300 duration-300 mb-4">
            <div className=""><Image src={project.logo} alt={`${project.title} logo`} width={50} height={50} className="rounded-xl outline-8 outline-gray-100"></Image></div>
            <div className="flex flex-col flex-grow ">
                <div className="text-xl font-bold opacity-70">{project.title}</div>
                <div className="opacity-50">{project.description}</div>
            </div>
            <div className="flex opacity-35 hover:opacity-100 transition-all duration-300">
                <SquareArrowOutUpRight/>
            </div>
         </div>
         </Link>
        ))}

         
         
        </div>
        </>
    )
}

export default ProjectList