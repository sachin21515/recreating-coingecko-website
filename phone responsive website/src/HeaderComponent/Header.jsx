
import {Link} from "react-router-dom"
import React, {useState, useEffect} from "react"

import geckoIcon from "../geckoicon.png"
import searchIcon from "../searchicon.png"


import useCoinData from "../useCoinData"
import TopComponent from "../TopComponent/TopComponent"
import DropDown from "./DropDown"


export default function Header(props){
    const {data} = useCoinData()
    const [hovered, setHovered] = useState(false)

    const [exchangesHovered, setExchangesHovered] = useState(false)



    const [search, setSearch] = useState("")

    const [match, setMatch] = useState([])
    


 
    
function handleChange(e){
    setSearch(e.target.value)
    
}

useEffect(()=>{
    let number = 0.1
const namee = data.map(item=>{
    if(item.name.toLowerCase().includes(search.toLowerCase())){
       number= number + 1
        return <li key={number} className="listed-search" >
                 <a href={`/coins/${item.id}`} className="coin-links" >
                        
                        <img src={item.image} className="image-logo" />
                                <div className="listed-search-name-symbol-div">
                                    <p className="name">{item.name}</p>
                                    <p className="listed-search-symbol" >({`${item.symbol ? item.symbol.toUpperCase() : ""}`})</p>
                                    </div>
                                    <p className="listed-search-rank">{item.market_cap_rank}</p>
                            
                    </a>
                
              </li>

    }
 

   
        
    }) 
   
    setMatch(namee)
   
    

},[search])

    function hover(){
        setHovered(prev=>!prev)
    }

    function exchangesHover(){
        setExchangesHovered(prev=>!prev)
    }




    const hoveredPara = hovered && <div onMouseEnter={() => setHovered(true)}onMouseLeave={() => setHovered(false)} onClick={hover} className="hovered-div">
                                      <Link  to='/'><p>By Market Cap</p></Link>
                                      <Link to='/new-cryptocurrencies'><p>New Cryptocurrencies</p></Link>
                                      <Link to='/categories'><p>Categories</p></Link>
                                      <Link to='/watchlists'><p>Watchlists</p></Link>
                                      <Link to='/crypto-gainers-losers' ><p>Gainers & Losers</p></Link>
                                      <Link to='/high-volume'><p>High Volume</p></Link>
                                      <Link to='/all-cryptocurrencies'><p>All Coins</p></Link>
                                      <Link to='/compare-coins'><p>Compare Coins</p></Link>
                                      <Link to='/global-charts'><p>Global Chart</p></Link>
                                      
                                   </div>


   const exchangesHoveredDiv = exchangesHovered && <div  onMouseEnter={() => setExchangesHovered(true)}onMouseLeave={() => setExchangesHovered(false)} onClick={exchangesHover} className="hovered-div exchangesDivPosition"  >

                                      <Link  to='/exchanges'><p>Crypto Exchanges</p></Link>
                                      <Link to='/exchanges/decentralized'><p>Decentralized Exchanges</p></Link>
                                      <Link to='/exchanges/derivatives'><p>derivatives</p></Link>


                                                </div> 

   
    return (
        <div className="header-main">
        <TopComponent/>
        
       {hoveredPara}
       {exchangesHoveredDiv}
       
       <div className={search ? "show-search-div" : "no-show-search-div"}>
       
      
       {match}
       
       </div>
      

       <div className="header">
          <div className="header-left-div" >
          <div className="header-drop-down-div">
          <button className={window.innerWidth<600 ? "show-drop-btn" : "no-btn"} onClick={props.change}>drop</button>
            <div className="header-link">
            <div className="geckoIcon" >
            <img   src={geckoIcon}  />
            </div>
            
                <Link  to="/"><h3 className="Coingecko-Link" >CoinGecko</h3></Link>
            </div>
            <p className={window.innerWidth<600 ? "subscribe-p" : "no-subscribe"}>Subscribe</p>
            {props.drop&&window.innerWidth<600 ? <DropDown /> : ""}
            </div>
            <div className="header-left-element-div">
                <h4  onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}className="header-element">Cryptocurrencies</h4>



                <h4 onMouseEnter={() => setExchangesHovered(true)}
            onMouseLeave={() => setExchangesHovered(false)} className="header-element">Exchanges</h4>



                <h4 className="header-element">NFT</h4>
                <h4 className="header-element">Learn Crypto</h4>
                <h4 className="header-element">Products</h4>
            </div>
            </div>
            <div className="header-right-div">
                <div className="header-right-element-div">
                <h4 className="header-element" >Portfolio</h4>
                <h4 className="header-element" >Login</h4>
                <h4 className="header-element" >Sign Up</h4>
                </div>
                <div className="header-search-div">
                <div className="searchicon-div" >
                     <img src={searchIcon} />
                     </div>
                    
                    <input className="header-search" type="text" placeholder="Search"
                        
                        value={search}
                        onChange={handleChange}
                    />
                    
                </div>

            </div>
            

        </div>
        
        </div>

    )
}