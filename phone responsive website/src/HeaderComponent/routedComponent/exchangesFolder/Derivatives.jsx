import {Link} from "react-router-dom"

export default function Derivatives(){

    return (

        <div className="main-exchanges-div">
             <div className="empty-div Common-empty-div">
                    <Link  to='/'><p className="Common-coins-para" >Coins</p></Link>
                    <p className="Common-arrow-para">{">"}</p>
                    <p className="Common-para">Derivatives Exchanges</p>

             </div>

              <div className="below-exchanges-empty-div">
                   <Link className="yellowStarLinks common-exchange"  to='/exchanges'>Crypto Exchanges</Link>
                   <Link className="yellowStarLinks common-exchange" to='/exchanges/decentralized'>Decentralized Exchanges</Link>
                   <Link className="decorated common-exchange" to='/exchanges/derivatives'>Derivatives</Link>


              </div>      


        </div>
    )
}