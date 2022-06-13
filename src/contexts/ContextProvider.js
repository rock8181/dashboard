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
    const [isClicked, setIsClicked] = useState(initialState)
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:true});
    }
    const [screenSize, setScreenSize] = useState(undefined);
    return (
        <StateContext.Provider 
            value={{
                activeMenu,//activeMenu:activeMenu같은면 하나로 써도 됨
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }} 
        >
        {children}
        </StateContext.Provider>    
    )
}

export const useSateContext = () => useContext(StateContext);
