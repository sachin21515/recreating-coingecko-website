

import RenderData from "./RenderData"
import TotalData from './TotalData'

import Nav from "./Nav"
import UseCategories from './UseCategories'
import useCoinData from "./useCoinData"
import useToggle from "./useToggle"
import Left from "./Left"








export default function Home(props){

  const {data} = useCoinData()

  const {onn, toggle} = useToggle()


 

  
    
   
    const number = [0]
     
      const arrayData= data.map(item=>{
            
        return(<RenderData key={item.id}
                   
                    price={item.current_price}
                     change24={item.price_change_percentage_24h}
                     marketCap={item.market_cap} 
                      volume={item.total_volume}
                      fdvv={item.fully_diluted_valuation}
                      onn={onn}
    />
             
        )
        
         
    
        
      })

      const leftdata = data.map(item=>{
        number[0] = number[0]+1
        return(<Left key={item.id}
                     id={item.id}
                    number={number[0]} 
                     name={item.name} 
                    image={item.image}
                    symbol={item.symbol}
        />
              
        
        )
      })
    
     
   
    return (
        <div className="home-main">
        <div className="empty-div">

      </div>

        <TotalData />

        <div className='nav-usecategories' >
            <UseCategories />
            <Nav toggle={toggle} onn={onn}/>
        
        </div>
    
      
       <div className="main-coinData-div">
              <div className="left-div">

              <div className="price-class-div-title">
            <p className="number title-font">{"#"}</p>
            <div className="coin-title">
            <p className="title-font" >{"Coin"}</p>
            </div>
            </div>
                 {leftdata}
              </div>

             <div className="right-div">

             <div className="price-class-div">
            <p className="price title-font">{"Price"}</p>
           
            <p className="price title-font">{"24h"}</p>
            
            <p className="price title-font">{"24h volume"}</p>
            <p className="price title-font">{"Mkt Cap"}</p>
            { onn ? <p className="price title-font">{"Fdv Cap"}</p> : ""}
            </div>
                {arrayData}
            </div>
        </div>
     
        </div>
    )
}