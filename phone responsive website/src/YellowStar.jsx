import star from "./star.jpeg"
import React, {useState} from "react"
import { Link, useLocation } from "react-router-dom"


export default function YellowStar(){
    const location = useLocation()
    const number = [0]
    const [links, setLinks] = useState([{url:"portfolio",                             name: "Portfolio" },        {url:          "",                     name: "Coins" }   ,     {url:"new-cryptocurrencies",               name: "New Coins" } ,
                                        {url:"crypto-gainers-losers",                 name: "Gainers & losers" }, {url:"categories",                     name: "Categories"}   , {url:"categories/non-fungible-tokens-nft", name: "NFT" },
                                        {url:"categories/decentralized-finance-defi", name: "DeFi" },             {url:"categories/gaming",              name: "Gaming" }   ,    {url:"categories/binance-smart-chain",     name: "BNB" },
                                        {url:"categories/solana-ecosystem",           name: "Solana" },           {url:"categories/avalanche-ecosystem", name: "Avalanche" }])
    const array = links.map(item=>{
        number[0] = number[0]+1
        return <Link key={number[0]} className={`${location.pathname}`===`/${item.url}` ? "decorated" : "yellowStarLinks"}  to={`/${item.url}`} >{item.name}</Link>
    })

   

    return (

        <div className="nav-links">
        <div className="star-div">
        <img className="star-image" src={star} />
        </div>
        <div className="link-div">
        {array}
        
        </div>
        </div>
    )
}


/*


<a className={path==='decorated' ? "decorated" : "yellowStarLinks"} href='#'>New Coins</a>
        <a href='#'>Gainers & losers</a>
        <a href='#' className={path==='decorated' ? "decorated" : "yellowStarLinks"} >Categories</a>
        <a href='#'>NFT</a>
        <a href='#'>Defi</a>
        <a href='#'>Gaming</a>
        <a href='#'>BNB</a>
        <a href='#'>Solana</a>
        <a href='#'>Avalanche</a>

        */