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
              <h1>Om Kasir</h1>  <Image src="/om-kasir-logo.png" width={40} height={35} alt="om kasir logo" className=" rounded-md"></Image> 
            </div>
            <div className="flex flex-row space-x-2 p-2 bg-gray-100 rounded-sm w-fit text-sm">
                <div><p>Tech Stack</p></div>
                <div className="bg-gray-200 text-gray-800 rounded-sm px-2">Next JS</div>
            </div>
            <div className="flex flex-row space-x-2">
            <div className="flex flex-row bg-gray-100 p-2 w-fit rounded-sm hover:opacity-50">
                <Link href="https://bit.ly/OmKasirFE" target="_blank" className="flex flex-row"><Github/> Github Frontend</Link>
            </div>
            </div>
            <div className=" mt-4">
                <p className="leading-relaxed opacity-50">A  simple POS system built for everyday cashiers.
                A passion project designed to help small businesses handle transactions quickly and easily—without the clutter.</p>
            </div>
            <div>
                <Image src="/om-kasir-screenshot.png" width={500} height={500} alt="airgoda screenshot" className="shadow-sm rounded-xl"></Image>
            </div>
            <div className="font-bold text-3xl mb-4 opacity-70 flex flex-row  mt-4">
              <h1>Project Overview</h1> 
            </div>
            <div className="">
                <p className="leading-relaxed opacity-50">Om Kasir is a lightweight, cashier-first POS app I created to support small shops, coffee stalls, and local businesses. Its made to be fast, easy to use, and accessible—even for first-time users.</p>
            </div>
            <div className="font-bold text-3xl mb-4 opacity-70 flex flex-row  mt-4">
              <h1>Problem To Solve</h1> 
            </div>
            <div className="">
                <p className="leading-relaxed opacity-50">Most POS systems are bloated with features that small business owners dont need. Theyre often hard to use, slow, or too expensive. Many cashiers still rely on manual records or basic calculators.</p>
            </div>
            <div className="font-bold text-3xl mb-4 opacity-70 flex flex-row  mt-4">
              <h1>Solution</h1> 
            </div>
            <div className="">
                <p className="leading-relaxed opacity-50">Om Kasir focuses on the essentials—sales, items, user roles, and smooth checkout flows. Built for speed and clarity, it helps cashiers focus on what matters: serving customers and tracking daily sales with confidence.</p></div>
        </div>
      </div>
        <Footer/>
        </div>
        </>
    )
}
