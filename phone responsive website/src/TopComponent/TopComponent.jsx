import GlobalData from "../GlobalData/GlobalData";



export default function TopComponent(){

    function topData(totaldata){
        

        return (

            <div className="topComponent-left-div">
                
                <p className="topNotRenderedData">Coins: </p>
                <p className="topRenderedData">{ totaldata.test!=1 ? totaldata.data.active_cryptocurrencies : "Loading..."}</p>
                <p className="topNotRenderedData">Exchanges: </p>
                <p className="topRenderedData">{ totaldata.test!=1 ? totaldata.data.markets : "Loading..."}</p>
                <p className="topNotRenderedData">Market Cap: </p>
                <p className="topRenderedData">{ totaldata.test!=1 ? totaldata.data.total_market_cap.usd : "Loading..."}</p>
                <p className="topNotRenderedData">24h Vol: </p>
                <p className="topRenderedData">{ totaldata.test!=1 ? totaldata.data.total_volume.usd : "Loading..."}</p>
                <p className="topNotRenderedData">Dominance: </p>
                <p className="topRenderedData">{ totaldata.test!=1 ? ("BTC" + " " + (totaldata.data.market_cap_percentage.btc).toFixed(2)) : "Loading..."}% { totaldata.test!=1 ? ("ETH"+" "+(totaldata.data.market_cap_percentage.eth).toFixed(2)) : "Loading..."}%</p>
                
                


            </div>
        )
    }

    return (

        <div className="topComponent" >
        <GlobalData render={topData} value={true} />

        <div className="topComponent-right-div" ></div>

        </div>
    )
}