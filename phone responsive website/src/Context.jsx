
import React from "react"

import { useState } from "react"

const UserContext = React.createContext({})

function UserContextProvider(props){

const [cateBtn, setCateBtn] = useState(false)

function toggle(){
    setCateBtn(prev=>!prev)
}

function allOff(){
    if(cateBtn){
        setCateBtn(false)
    }
}
    
    return (

        <UserContext.Provider  value={{cateBtn: cateBtn, toggle:toggle, allOff:allOff}} >
       {props.children}

        </UserContext.Provider>
    )
}
export {UserContext, UserContextProvider}