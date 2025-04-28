import { createContext, useContext, useState } from "react";

 let mycontext=createContext();
 import React from 'react'
 
 const MyContextProvider = ({children}) => {
const [count,setCount]=useState(0) ;
const inc=()=>setCount(s=>s+1)
const dec=()=>setCount(s=>s-1)
const reset=()=>setCount(0)
   return (
     <mycontext.Provider value={{count,inc,dec,reset}}>
     {children}
     </mycontext.Provider>
   )
 }
 
 export default MyContextProvider
 export const useMyContext=()=> useContext(mycontext)
 