import {useCallback, useContext, useMemo, useRef, useState} from 'react';
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";
import { AIContext } from '../../../context/AIContext/AIContext';
import useAutosizeTextArea from '../../../hooks/useAutosizeTextArea'
import brandLogo from '../../../assets/199thGPTLogo.jpg'

const BharathAI = () => {

    const textAreaRef=useRef<HTMLTextAreaElement>(null)
    const [prompt, setPrompt] = useState('');
    useAutosizeTextArea(textAreaRef.current,prompt)


    const {setResponse,setLoading, loading}=useContext(AIContext)

    const genAI = useMemo(() => new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_API_KEY||''), []) //new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_API_KEY||'');
    const model = useMemo(():GenerativeModel => genAI.getGenerativeModel({ model: "gemini-1.5-flash" }), [genAI])

const fetchData =useCallback(
    async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e?.preventDefault();
        if(!prompt && prompt.length === 0) return
        setLoading(true)

        const result = await model.generateContent(`${prompt} with in 199 words`);
        setResponse(result.response.text());
        setLoading(false)
    },[prompt, model]
) 




    return (
        <div className='flex flex-col w-1/2 h-screen items-center justify-center bg-[#0F172A] text-white'>
            <div className='text-4xl m-1 mt-10 flex justify-center items-center'>
                <img src={brandLogo} className=' w-1/3 flex flex-row items-center justify-center'></img>
            </div>
            <form className='flex flex-col w-full p-8 h-full items-center '>
                <div className=" border-2 w-full border-black">
                    <textarea
                        id="review-text"
                        className="w-full h-full p-2 text-black text-decoration-none italic"
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Type the prompt here..."
                        ref={textAreaRef}
                        rows={1}
                        value={prompt}
                        maxLength={100}
                    />
                </div>
                <div className='m-4'>
                    <button 
                    className=' w-32 h-10  bg-sky-500 rounded-xl'
                     type='submit'
                      disabled={loading}
                      onClick={(e)=>fetchData(e)} >Submit Prompt</button>
                </div>
            </form>
            
           
        </div>
    );
};

export default BharathAI