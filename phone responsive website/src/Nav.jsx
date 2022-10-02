
import on from "./toggleon.png"
import off from "./toggleoff.png"







export default function Nav(props){

   

    return (

        <div className="nav">
       
            
            <div className="fdv" >
                
                <img  onClick={props.toggle}  className="toggle-image" src= {props.onn ? on : off}/>
                <p >{props.onn ? "Show Fully Diluted Valuation" : "Show Fully Diluted Valuation"}</p>
            </div>


        </div>
    )
}

/*

*/