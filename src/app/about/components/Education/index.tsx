import { Circle,  SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { educationList } from "@/types/education"

const Education = () => {
    return(
        <>
        <div className="pt-7 pb-2 px-4 bg-[#f0f0f0] rounded-xl">
        <div className="flex flex-row justify-between text-xl mb-8">
            <div className="flex flex-row items-center justify-start opacity-70 space-x-3"><Circle className="w-2 bg-black rounded-4xl h-2 opacity-30"/><h1>Education</h1></div>
        </div>

        {educationList.map((education, index) => (
        <Link href={education.href} key={index}>
        <div className="flex flex-row bg-white h-24 py-4 px-8 items-center rounded-xl space-x-5 shadow-sm hover:outline-5 outline-gray-300 duration-300 mb-4">
            <div className=""><Image src={education.logo} alt={`${education.title} logo`} width={50} height={50} className="rounded-xl outline-8 outline-gray-100"></Image></div>
            <div className="flex flex-col flex-grow  ">
                <div className="text-xl font-bold opacity-70">{education.title}</div>
                <div className="flex flex-row justify-between">
                <div className="opacity-50">{education.description}</div>
                <div className="bg-green-100 text-green-700 w-32 rounded-xl flex justify-center text-sm items-center">{education.score}</div>
                </div>
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

export default Education