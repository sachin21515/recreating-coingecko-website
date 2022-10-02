
import useToggle from "./useToggle"
import on from "./toggleon.png"
import off from "./toggleoff.png"
import YellowStar from "./YellowStar"
import GlobalData from "./GlobalData/GlobalData"



export default function TotalData(props){

    const {onn, toggle} = useToggle()
   



 function displayData(totaldata){
    return (

        <div>
                 <p className="mcap-line">
                            {`The global cryptocurrency market cap today is  ${totaldata.test!=1 ? ((totaldata.data.total_market_cap.usd)/1000000000000).toFixed(2) : "Loading..."} Trillion, 
                            a ${totaldata.test !=1 ? Math.abs(totaldata.data.market_cap_percentage.market_cap_change_percentage_24h_usd).toFixed(5) : "Loading..." } % change in the last 24 hours.`}
                            </p>
                            <div className="show-stats">
                   
                    <p className="show-stats-p" >{onn ? "Show Stats" : "Show Stats"}</p>
                    <img  onClick={toggle}  className="total-data-image" src= {onn ? on : off}/>
                    </div>
                    

                            <div className={onn ? "total-data" : "no-show-total-data"}>
                            <div className="total-data-each-div" >
                        <h3>${ totaldata.test!=1 ? totaldata.data.total_market_cap.usd.toLocaleString("en-US") : "Loading" }</h3>
                            <p className="total-data-p">{"Market Capitalization"}</p>
                        </div>
                        <div className="total-data-each-div" >
                        <h3>${ totaldata.test !=1 ? totaldata.data.total_volume.usd.toLocaleString("en-US") : "Loading"}</h3>
                            <p className="total-data-p">{"24h Trading Volume"}</p>
                        </div>
                        <div className="total-data-each-div">
                        <h3>{ totaldata.test !=1 ? totaldata.data.market_cap_percentage.btc.toLocaleString("en-US") : "Loading"}%</h3>
                            <p className="total-data-p">{"Bitcoin market Cap Dominance"}</p>

                            </div>
                            <div className="total-data-each-div">
                        <h3>{ totaldata.test !=1 ? totaldata.data.active_cryptocurrencies : "Loading"}</h3>
                            <p className="total-data-p">{"# of Coins"}</p>
                        </div>
                        </div>

        </div>


    )
 }








    return (
                <div className="total-data-main" >
                
                <YellowStar/>



                    <div className="total-data-heading-div">
                    <h2 className="total-data-heading" >Cryptocurrency Prices by Market Cap</h2>
                    <GlobalData render={displayData} value={false}/>
                   
                    
                  </div>
                    
                 

                    
                        
 

                </div>       
    ) 
}

/*
 <p className="mcap-line">
                            The global cryptocurrency market cap today is ${`${((totaldata.data.total_market_cap.usd)/1000000000000).toFixed(2)}`} Trillion, 
                            a {`${Math.abs(totaldata.data.market_cap_percentage.market_cap_change_percentage_24h_usd).toFixed(5)}% change in the last 24 hours.`}
                            </p>
                            <div className={onn ? "total-data" : "no-show-total-data"}>
                            <div className="total-data-each-div" >
                        <h3>${totaldata.data.total_market_cap.usd.toLocaleString("en-US")}</h3>
                            <p>{"Market Capitalization"}</p>
                        </div>
                        <div className="total-data-each-div" >
                        <h3>${totaldata.data.total_volume.usd.toLocaleString("en-US")}</h3>
                            <p>{"24h Trading Volume"}</p>
                        </div>
                        <div className="total-data-each-div">
                        <h3>{totaldata.data.market_cap_percentage.btc.toLocaleString("en-US")}%</h3>
                            <p>{"Bitcoin market Cap Dominance"}</p>

                            </div>
                            <div className="total-data-each-div">
                        <h3>{totaldata.data.active_cryptocurrencies}</h3>
                            <p>{"# of Coins"}</p>
                        </div>
                        </div>
*/