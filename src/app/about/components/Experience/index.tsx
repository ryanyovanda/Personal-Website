import { Circle,  ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { experienceList } from "@/types/experience"

const Experience = () => {
    return (
        <div className="pt-7 px-4 bg-[#f0f0f0] rounded-xl">
            <div className="flex flex-row justify-between text-xl mb-4">
                <div className="flex flex-row items-center justify-start opacity-70 space-x-3">
                    <Circle className="w-2 bg-black rounded-4xl h-2 opacity-30" />
                    <h1>Experience</h1>
                </div>
            </div>

            <Accordion type="single" collapsible className="">
                {experienceList.map((experience, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="hover:no-underline [&>svg]:hidden">
                            <div className="flex flex-row bg-white h-24 py-4 px-8 items-center rounded-xl space-x-5 shadow-sm w-full">
                                <div>
                                    <Image src={experience.logo} alt={`${experience.title} logo`} width={50} height={50} className="rounded-xl outline-8 outline-gray-100" />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <div className="text-xl font-bold opacity-70 text-left">{experience.title}</div>
                                    <div className="flex flex-row justify-between">
                                        <div className="opacity-50">{experience.position}</div>
                                        <div className="bg-green-100 text-green-700 w-32 rounded-xl flex justify-center text-sm items-center">{experience.status}</div>
                                    </div>
                                    <div className="opacity-50">{experience.period}</div>
                                </div>
                                <div className="text-gray-400 hover:text-gray-800">
                                    <ChevronDown className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="rounded-xl px-8 py-2 bg-white shadow-sm ">
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
                                {experience.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Experience
