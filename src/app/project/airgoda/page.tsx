import Footer from "@/app/components/Footer";
import { Circle, Github } from "lucide-react";
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
              <h1>Airgoda</h1>  <Image src="/airgoda-logo.png" width={40} height={35} alt="airgoda logo" className=" rounded-md"></Image> 
            </div>
            <div className="flex flex-row space-x-2 p-2 bg-gray-100 rounded-sm w-fit text-sm">
                <div><p>Tech Stack</p></div>
                <div className="bg-gray-200 text-gray-800 rounded-sm px-2">Next JS</div>
                <div className="bg-green-100 text-green-800 rounded-sm px-2">Spring Boot</div>
            </div>
            <div className="flex flex-row space-x-2">
            <div className="flex flex-row bg-gray-100 p-2 w-fit rounded-sm hover:opacity-50">
                <Link href="https://bit.ly/AirgodaFE" target="_blank" className="flex flex-row"><Github/> Github Frontend</Link>
            </div>
            <div className="flex flex-row bg-gray-100 p-2 w-fit rounded-sm hover:opacity-50">
                <Link href="https://bit.ly/AirgodaBE" className="flex flex-row"><Github/> Github Backend</Link>
            </div>
            </div>
            <div className=" mt-4">
                <p className="leading-relaxed opacity-50">Redefining property rentals with clarity, control, and care.
                A passion project built to streamline bookings and empower both renters and property owners through thoughtful design.
                     </p>
            </div>
            <div>
                <Image src="/airgoda-screenshot.png" width={500} height={500} alt="airgoda screenshot" className="shadow-sm rounded-xl"></Image>
            </div>
            <div className="font-bold text-3xl mb-4 opacity-70 flex flex-row  mt-4">
              <h1>Project Overview</h1> 
            </div>
            <div className="">
                <p className="leading-relaxed opacity-50">Airgoda is my self-initiated passion project—a full-featured property rental web app designed to bridge the gap between users seeking transparent, flexible accommodation and hosts who need intuitive tools to manage listings, pricing, and availability. Its where clean code meets purposeful design.
                     </p>
            </div>
            <div className="font-bold text-3xl mb-4 opacity-70 flex flex-row  mt-4">
              <h1>Problem To Solve</h1> 
            </div>
            <div className="">
                <p className="leading-relaxed opacity-50">Many rental platforms overlook the nuance of seasonal pricing, real-time availability, and smooth tenant-side management. I wanted to build something different—something personal. Airgoda was my response to the lack of user-focused tools for both guests and hosts. The challenge was to create a platform that doesnt just work—but feels empowering, clear, and fair.</p>
            </div>
            <div className="font-bold text-3xl mb-4 opacity-70 flex flex-row  mt-4">
              <h1>Project Overview</h1> 
            </div>
            <div className="">
                <p className="leading-relaxed opacity-50">From the ground up, I crafted a mobile-first, responsive experience that prioritizes real-time search, transparent pricing, and smooth booking flows. On the backend, I implemented peak season rate management, multi-room listings, and booking status tracking. Every interaction—from registration to review—was designed to be intuitive, reliable, and meaningful. This wasnt just about building a product; it was about designing an ecosystem that respects the users journey on both sides of the rental experience.</p>
            </div>
        </div>
      </div>
        <Footer/>
        </div>
        </>
    )
}
