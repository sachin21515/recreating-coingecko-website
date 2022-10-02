import { useState } from "react";

export default function useToggle(){
    const [onn, setOnn] = useState(false)

    function toggle(){

        setOnn(prev=>!prev)
    }

    return {onn, toggle}
}