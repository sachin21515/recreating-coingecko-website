
import {Link} from "react-router-dom"
export default function Left(props){


 
    return (


 
                 
        <div className="price-class-div">         
             <p className="number">{props.number}</p>
                <div className="coin" >
                        <Link to={`/coins/${props.id}`} className="coin-links" >
                        
                            <img src={props.image} className="image-logo" />
                                <div className="above-symbal-div">
                                        <p className="name">{props.name}</p>
                                        <p className="symbal" >{`${props.symbol ? props.symbol.toUpperCase() : ""}`}</p>
                                
                                </div>
                        </Link>
                </div>
        
        </div>
      
    )
}