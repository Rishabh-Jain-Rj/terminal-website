import React, { createContext,useState } from 'react'
export const MyContext = createContext();
const MyContextProvider = ({ children }) => {
    const [formFlag,setFormFlag]=useState(true);
    return (
        <MyContext.Provider value={{formFlag,setFormFlag}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider