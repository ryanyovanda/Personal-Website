"use client"

import { useState } from "react"
import { Circle, Mail, MessageCirclePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Bio = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("ryanyovanda@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <div className="py-7 px-4">
        <div className="flex flex-row justify-between text-sm md:text-xl mb-8">
          <div className="flex flex-row items-center justify-start opacity-70 space-x-3">
            <Circle className="w-2 bg-black rounded-4xl h-2 opacity-30" />
            <h1>Fullstack Developer</h1>
          </div>
          <div className="bg-green-100 flex flex-row items-center opacity-70 space-x-3 text-sm rounded-full md:w-50 justify-center text-green-700 font-bold">
            <Circle className="w-2 bg-green-700 rounded-4xl h-2" />
            <h1>AVAILABLE FOR WORK</h1>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-1 justify-between">
          <div className="space-y-4 col-span-2">
            <div>
              <h2 className="text-4xl font-bold opacity-80 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-400 inline-block text-transparent bg-clip-text">
                I&apos;m Ryan Yovanda
              </h2>
            </div>
            <div>
              <p className="opacity-50 space-y-8 break-after-all">
                Fullstack Developer from Bandung, ID. Currently developing a project that combines design and solid engineering.
              </p>
            </div>
            <div className="space-x-4">
            <Button variant="outline" onClick={handleCopy}>
                <Mail className="mr-2" />
                <span className={copied ? "opacity-30" : "opacity-100"}>
                {copied ? "Copied" : "Copy Email"}
                </span>
            </Button>

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

          <div className="flex justify-center items-center">
            <Image
              className="rounded-full aspect-square outline-10 outline-gray-100"
              src="/profile-picture.png"
              alt="profile picture"
              width={130}
              height={130}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio
