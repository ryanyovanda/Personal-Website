import { Circle, Instagram, Linkedin} from "lucide-react"
import Link from "next/link"

const Footer = () => {
    return(
        <>
        <div className="pt-7 pb-2 px-4">
        <div className="flex flex-col justify-center items-center mb-8 space-y-3 opacity-70">
        <h1 className="text-4xl font-bold">Let&apos;s Work Together</h1>
        <h2 className="opacity-50 text-xl">Unleash your creative idea into real product</h2>
        {/* <div className="space-x-4">
                    <Button variant="outline"><Mail/>Copy Email</Button>
                    <Button><MessageCirclePlus/>Hire Me</Button>
                </div> */}
        </div>
        <div className="flex flex-row justify-between text-xl mb-2 bg-[#f0f0f0] py-7 px-4 rounded-xl">
            <div className="flex items-center justify-start opacity-70 space-x-3"><Circle className="w-2 bg-black rounded-4xl h-2 opacity-30"/><h1>Follow Me</h1></div>
            <div className="flex flex-row items-center space-x-4">
            <Link className=" opacity-30 hover:opacity-100 transition-all duration-300" href="https://instagram.com/ryovanda">
            <Instagram />
            </Link>
            <Link className=" opacity-30 hover:opacity-100 transition-all duration-300" href="https://linkedin.com/in/ryanyovanda">
            <Linkedin />
            </Link>
        </div>
        </div>
        <div className="flex flex-row justify-center text-xl bg-[#f0f0f0] py-7 px-4 rounded-xl">
            <div>
                <h1 className="text-sm flex items-center opacity-50">© 2025 - Ryan Yovanda</h1>
                <h1 className="text-sm flex items-center opacity-50">Last Update May 2025</h1>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer