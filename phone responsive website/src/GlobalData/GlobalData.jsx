import {useState, useEffect} from "react"



export default function GlobalData(props){

    const [totaldata, setTotalData] = useState({test:1})
    const [classState, setClassState] = useState(props.value)

    useEffect(()=>{

        fetch("https://api.coingecko.com/api/v3/global")
       .then(res=> res.json())
        .then(data=>setTotalData(data))
     
     
     
     }, [])

    

    return (


        <div className={classState ? "topComponentRender" : "totalDataComponentRender" } >
              {props.render(totaldata)}
        </div>
    )
}