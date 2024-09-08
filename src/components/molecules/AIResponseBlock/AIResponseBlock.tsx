import { useContext } from "react"
import { AIContext } from "../../../context/AIContext/AIContext"
import SkeletonLoader from "../../atoms/SkeletonLoader/SkeletonLoader"

const AIResponseBlock=()=>{

    const {response,setResponse, loading}=useContext(AIContext)

    // const response=`Hyderabad, India's "City of Pearls," is a vibrant blend of history and modernity. It boasts iconic landmarks like Charminar and Golconda Fort, delicious Hyderabadi cuisine, and a thriving IT industry. From bustling markets to serene lakes, Hyderabad offers a unique cultural experience.`

    return <div className="w-1/2 h-screen bg-[#292929] p-10 text-justify ">

        {loading ? <div>
            <p className="italic font-2xl font bold flex justify-center">Generating response 🤖🤖🤖 🚀🚀🚀</p>
       <p className="italic font-2xl font bold flex justify-center mb-10">Take a break and please bilnk your eyes...</p>
            <SkeletonLoader></SkeletonLoader>
        </div> : response!==''?<div className="w-full h-full bg-black shadow-xl shadow-slate-950  rounded-2xl p-9">
            <span className="italic font-serif font-bold text-2xl">{`" `}</span>
            {response}
            <span className="italic font-serif font-bold text-2xl">{` "`}</span>
        
       <div className="flex justify-center m-4">
        <button className="bg-[#292929] w-32 h-8 text-white rounded-xl" onClick={()=>{setResponse('') }}>Clear response</button>
       </div>
        
        </div>:<div>
            <p className="italic font-2xl font bold flex justify-center">Type the Prompt in the box...</p>
       <p className="italic font-2xl font bold flex justify-center mb-10">Prompt Less... Save water  🌍!!!</p></div>}

    </div>
}

export default AIResponseBlock