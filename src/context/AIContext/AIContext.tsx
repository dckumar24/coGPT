import { createContext, useState } from "react";

interface AIContextProps {
    response: string;
    setResponse: (response: string) => void;
    loading:boolean,
    setLoading:(loading:boolean)=>void
}

interface AIProviderProps {
    children: React.ReactNode
}

const AIContext = createContext<AIContextProps>({} as AIContextProps);


const AIProvider = ({ children }: AIProviderProps) => {
    const [response, setResponse] = useState('');
    const [loading,setLoading]=useState(false)
    return (
        <AIContext.Provider value={{ response: response, setResponse, loading:loading, setLoading }}>
            {children}
        </AIContext.Provider>
    )
}

export{ AIProvider,
    AIContext
}

