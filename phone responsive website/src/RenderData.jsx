import Home from "./Home";




export default function RenderData(props){

  
    
 

 

    return (

       
       
       <div className="price-class-div">
        <p className="price" >{`${props.price ? props.price.toLocaleString("en-US") : ""}`}</p>
        <p className={`price ${props.change24 ? (props.change24 < 0 ? "red-color" : "green-color") :""}`}>{`${props.change24 ? props.change24.toFixed(1) : ""}`}%</p>
        <p  className="price">{`${props.volume ? props.volume.toLocaleString("en-US") : ""}`}</p>
        <p className="price">{`${props.marketCap ? props.marketCap.toLocaleString("en-US") : ""}`}</p>
        {props.onn ? <p className="price">{`${props.fdvv ? props.fdvv.toLocaleString("en-US") : ""}`}</p> : "" }
      
       
    


</div>
    )
}