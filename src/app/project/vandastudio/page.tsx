import Footer from "@/app/components/Footer";
import { Circle, Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function profile() {
    return(
        <>
        <div className="bg-white mt-24 px-4 rounded-xl my-4 drop-shadow-sm border-1 border-gray-200 pb-4 w-full md:w-1/3 space-y-2">
        <div className="py-7 px-4">
        <div className="flex flex-row justify-between text-sm md:text-xl mb-8">
          <div className="flex flex-row items-center justify-start opacity-70 space-x-3">
            <Circle className="w-2 bg-black rounded-4xl h-2 opacity-30" />
            <h1>Project</h1>
          </div>
        </div>
        <div className="space-y-2">
            <div className="font-bold text-4xl mb-4 opacity-70 flex flex-row space-x-2">
              <h1>Vanda Studio</h1>  <Image src="/vanda-studio-logo.png" width={40} height={35} alt="airgoda logo" className=" rounded-md"></Image> 
            </div>
            <div className="flex flex-row space-x-2 p-2 bg-gray-100 rounded-sm w-fit text-sm">
                <div><p>Tech Stack</p></div>
                <div className="bg-gray-200 text-gray-800 rounded-sm px-2">Next JS</div>
            </div>
            <div className="flex flex-row space-x-2">
            <div className="flex flex-row bg-gray-100 p-2 w-fit rounded-sm hover:opacity-50">
                <Link href="https://github.com/ryanyovanda/CodeChallenge2" target="_blank" className="flex flex-row"><Github/> Github Frontend</Link>
            </div>
            <div className="flex flex-row bg-gray-100 p-2 w-fit rounded-sm hover:opacity-50">
                <Link href="https://vanda-studio-company-profile.vercel.app/" className="flex flex-row" target="_blank"><SquareArrowOutUpRight className="w-5"/>Visit Website</Link>
            </div>
            </div>
            <div>
                <Image src="/vanda-studio-screenshot.png" width={500} height={500} alt="airgoda screenshot" className="shadow-sm rounded-xl"></Image>
            </div>
            <div className="font-bold text-3xl mb-4 opacity-70 flex flex-row  mt-4">
              <h1>Project Overview</h1> 
            </div>
            <div className="">
                <p className="leading-relaxed opacity-50">Designed and developed a responsive company profile website for Vanda Studio, a creative agency focused on design and branding services. This project highlights key company offerings through structured sections like Hero, Services, Testimonials, and Company Overview. Leveraged Next.js App Router for efficient routing and Tailwind CSS for consistent design. Emphasized component reusability and performance optimization.</p>
            </div>
        </div>
      </div>
        <Footer/>
        </div>
        </>
    )
}
