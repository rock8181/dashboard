import React,{createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    return (
        <StateContext.Provider 
            value={{
                activeMenu,//activeMenu:activeMenu같은면 하나로 써도 됨
                setActiveMenu
            }} 
        >
        {children}
        </StateContext.Provider>    
    )
}

export const useSateContext = () => useContext(StateContext);
