
import React, { createContext, useState } from 'react'
export   let context=createContext(0)
export default function Context({ children }) {



    const [input, setInput] = useState("")

    let show = input ? "search" : "discover"
    
    function getinput(e) {
        setInput(e.target.value)
    }






  return (
  <context.Provider value={{show,getinput,setInput,input}}>
{children}
  </context.Provider>
  )
}

