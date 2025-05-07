import { AppWindow, House, CircleUserRound, MessageCirclePlus, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const NavBar = () => {
    return(
        <>
        <div className="flex flex-row fixed justify-between w-full md:w-1/3 items-center py-1 px-4 h-16 bg-white rounded-xl my-4 drop-shadow-sm border-1 border-gray-200 z-10"> 
            <div className="flex flex-row space-x-8 ">
                <Link href="/" className="opacity-35 hover:opacity-100 duration-300 active:opacity-100 "><House/></Link>
                <Link href="/about" className="opacity-35 hover:opacity-100 duration-300"><CircleUserRound/></Link>
                <Link href="/project" className="opacity-35 hover:opacity-100 duration-300"><AppWindow/></Link>
                <Link href="https://github.com/ryanyovanda" target="_blank" className="opacity-35 hover:opacity-100 duration-300"><Github/></Link>
            </div>
            <div>
            <Button asChild>
                <a
                    href="https://wa.me/6288218449694?text=Hi!%20👋%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20hiring%20you.%20Could%20we%20discuss%20a%20potential%20project?"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MessageCirclePlus className="mr-2" />
                    Hire Me
                </a>
             </Button>
            </div>
        </div>
        </>
    )
}

export default NavBar