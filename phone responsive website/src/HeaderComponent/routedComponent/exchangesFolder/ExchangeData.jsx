import { useState, useEffect } from "react"



export default function Exchangedata(props){

    const [exList, setExList] = useState([])


    useEffect(()=>{

        const getData = async ()=>{
            const res = await fetch("https://api.coingecko.com/api/v3/exchanges")
            const data = await res.json()
            setExList(data)
        }
   getData()
    },[])



    return (

        <div>
              {props.render(exList)}
        </div>
    )
}