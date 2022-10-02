import {Link} from "react-router-dom"

import YellowStar from "../../../YellowStar"

export default function Gainers(){
    return (
        <div className="Common-div">
        <div className="empty-div Common-empty-div">
        <Link  to='/'><p className="Common-coins-para" >Coins</p></Link>
        <p className="Common-arrow-para">{">"}</p>
        <p className="Common-para">Gainers & Losers</p>

        </div>

            <YellowStar/>
        </div>
    )
}

/*

<YellowStar/>

import YellowStar from "..../YellowStar"

*/