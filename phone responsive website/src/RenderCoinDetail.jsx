
import { Link } from "react-router-dom"
export default function RenderCoinDetail(props){

console.log(props.singleData)


    return (

        <div className="render-coin-detail-main">
            <div className="empty-div Common-empty-div">
                    <Link  to='/'><p className="Common-coins-para" >Coins</p></Link>
                    <p className="Common-arrow-para">{">"}</p>
                    <p className="Common-para">{props.singleData.name} Price</p>

            </div>

            <div className="render-detail-second-div">
            <p className="coin-detail-rank">Rank #{props.singleData.market_cap_rank}</p>
                    <div className="render-detail-second-div1"> 
                            <img className="coin-detail-logo" src={props.singleData.image} />
                            <h3 className="coin-detail-name">{props.singleData.name}</h3>
                            <h3 className="coin-detail-symbol">({props.singleData.symbol.toUpperCase()})</h3>
                    
                    
                    </div>
                    <div className="render-detail-second-div2" >
                             <h1 className="coin-detail-price" >${props.singleData.current_price.toLocaleString("en-US")}</h1>
                             <p  className={`coin-detail-price-change ${props.singleData.price_change_percentage_24h <0 ? "red-color" : "green-color"}`} >{props.singleData.price_change_percentage_24h.toFixed(1)}%</p>
                    </div>

            </div>



        </div>
    )
}