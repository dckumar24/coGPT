import AIResponseBlock from "../../molecules/AIResponseBlock/AIResponseBlock";
import BharathAI from "../../molecules/BharathAI/BharathAI";

export default function Home() {

    return (

        <div className="flex flex-row w-full h-screen items-center justify-center bg-[#0F172A] text-white">

            <BharathAI />
            <AIResponseBlock />
        </div>
    )
}


