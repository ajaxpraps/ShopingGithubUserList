import { createContext,useState } from "react";
export const MyContext = createContext(0);

export const CountContextProvider = ({children})=>{
    const [count,setCount] = useState(0);

    return <MyContext.Provider value={{count,setCount}}>
              {children}
    </MyContext.Provider>
}