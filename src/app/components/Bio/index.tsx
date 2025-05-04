import { Circle, CircleDot, Dot, Mail, MessageCirclePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Bio = () => {
    return(
        <>
        <div className="py-7 px-4">
        <div className="flex flex-row justify-between text-sm md:text-xl mb-8">
            <div className="flex flex-row items-center justify-start opacity-70 space-x-3"><Circle className="w-2 bg-black rounded-4xl h-2 opacity-30"/><h1>Fullstack Developer</h1></div>
            <div className="bg-green-100 flex flex-row items-center opacity-70 space-x-3 text-sm rounded-full md:w-50 justify-center text-green-700 font-bold"><Circle className="w-2 bg-green-700 rounded-4xl h-2"/><h1>AVAILABLE FOR WORK</h1></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 justify-between">
            <div className="space-y-4 col-span-2">
                <div><h2 className="text-4xl font-bold opacity-80 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-400 inline-block text-transparent bg-clip-text">I'm Ryan Yovanda</h2></div>
                <div><p className="opacity-50 space-y-8 break-after-all">Fullstack Developer from Bandung, ID Curently active finding new opportunity</p></div>
                <div className="space-x-4">
                    <Button variant="outline"><Mail/>Copy Email</Button>
                    <Button><MessageCirclePlus/>Hire Me</Button>
                </div>
            </div>
            <div className="flex justify-center items-center"><Image className="rounded-full aspect-square outline-10 outline-gray-100" src="/profile-picture.png" alt="profile picture" width={130} height={130} ></Image></div>
        </div>
        </div>
        </>
    )
}

export default Bio