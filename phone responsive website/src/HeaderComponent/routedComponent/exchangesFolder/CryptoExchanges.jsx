import {Link, Routes, Route} from "react-router-dom"
import Exchangedata from "./ExchangeData"

export default function CryptoExchanges(){





    function displayExchangeList(exList){
            let number = 0
      const list = exList.map(item=>{
                number = number+1
               const scoreStyle = {color: 'green', width: item.trust_score*10, backgroundColor: '#59b539', height: 7}
        return (
            <div className="inside-exList-div">
                <p className="ex-number">{number}</p>
                <div className="ex-image-div">
                <img className="ex-image" src={item.image}/>
                <p>{item.name}</p>
                </div> 
                <div className="ex-para-score-div" >
                <p className="ex-para-score" style={scoreStyle}></p>
                </div>
                <p className="ex-para" >{item.trust_score_rank}</p>
                <p className="ex-para-normalized">{item.trade_volume_24h_btc_normalized.toFixed(2)}</p>
                <p className="ex-para">{item.trade_volume_24h_btc.toFixed(2)}</p>
                
                
               

            </div>
        )
        
        


      })

        return (
            <div className="exList-div">
            
            <div className="inside-exList-div">
                    <p className="ex-number">#</p>
                    <p className="ex-image-div new">Exchange</p>
                    
                    <p className="ex-para">Trust Score</p>
                    <p className="ex-para">rank</p>
                    <p className="ex-para-normalized">24h Normalized Volume(Btc)</p>
                    <p className="ex-para">24h Volume(Btc)</p>

            </div>
                    {list}
            </div>

        )
    }


    return (

        <div className="main-exchanges-div">
             <div className="empty-div Common-empty-div">
                    <Link  to='/'><p className="Common-coins-para" >Coins</p></Link>
                    <p className="Common-arrow-para">{">"}</p>
                    <p className="Common-para">Crypto Exchanges</p>

             </div>

              <div className="below-exchanges-empty-div">
                   <Link className="decorated common-exchange" to='/exchanges'>Crypto Exchanges</Link>
                   <Link className="yellowStarLinks common-exchange" to='/exchanges/decentralized'>Decentralized Exchanges</Link>
                   <Link className="yellowStarLinks common-exchange" to='/exchanges/derivatives'>Derivatives</Link>

                   
                  
              </div>   
             
              

                <Exchangedata render={displayExchangeList} />
             
                 


        </div>
    )
}