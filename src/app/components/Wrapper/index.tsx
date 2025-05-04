import Bio from "../Bio"
import Footer from "../Footer"
import Projects from "../Projects"
const Wrapper = () => {
    return(
        <>
        <div className="bg-white mt-24 px-4 rounded-xl my-4 drop-shadow-sm border-1 border-gray-200 w-full pb-4">
            <Bio/>
            <Projects/>
            <Footer/>
        </div>
        </>
    )
}

export default Wrapper