import YellowStar from "../../../YellowStar"
import {Link} from "react-router-dom"



export default function NewCryptocurrencies(){
    

    return (

        <div className="Common-div">
        <div className="empty-div Common-empty-div">
        <Link  to='/'><p className="Common-coins-para" >Coins</p></Link>
        <p className="Common-arrow-para">{">"}</p>
        <p className="Common-para">New Cryptocurrencies</p>

        </div>

            <YellowStar/>
        </div>
    )
}