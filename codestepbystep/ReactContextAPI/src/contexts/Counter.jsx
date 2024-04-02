import { createContext,useState } from "react";


export const CounterContext = createContext(null);//default value of context

// it wrap our children through props 
//then go main.js
export const CounterProvider = (props) =>{
    const [count,setCount] = useState(0);
    return (
        <CounterContext.Provider value={{count,setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}