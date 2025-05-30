import Footer from "../components/Footer";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function profile() {
    return(
        <>
        <div className="bg-white mt-24 px-4 rounded-xl my-4 drop-shadow-sm border-1 border-gray-200 pb-4 w-full md:w-1/3 space-y-2">
        <AboutMe/>
        <Education/>
        <Experience/>
        <Footer/>
        </div>
        </>
    )
}
