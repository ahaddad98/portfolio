'use client'
import React, { useEffect } from "react";
import { useState, useContext } from "react";

const MyContext = React.createContext({}) as any;


export function useMyGlobalContext() {
    return useContext(MyContext);
}

export function MyGlobalProvider({ children }: any) {
  const [theme, setTheme] = useState(true)
   
    return (
        <MyContext.Provider value={{ theme, setTheme }}>
            {children}
        </MyContext.Provider>
    );
}