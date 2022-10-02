import {Link} from "react-router-dom"

import YellowStar from "../../../YellowStar"


export default function Categories(){

    return (
        <div className="Common-div">
        <div className="empty-div Common-empty-div">
        <Link  to='/categories'><p className="Common-coins-para" >Coins</p></Link>
        <p className="Common-arrow-para">{">"}</p>
        <p className="Common-para">Categories</p>

        </div>

            <YellowStar/>
        </div>
    )
}