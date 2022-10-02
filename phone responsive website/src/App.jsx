import React from 'react'


import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Header from "./HeaderComponent/Header"
import { useContext, useState } from 'react'
import { UserContext } from './Context'




import NewCryptocurrencies from './HeaderComponent/routedComponent/cryptoCurrenciesFolder/NewCryptocurrencies'
import Categories from './HeaderComponent/routedComponent/cryptoCurrenciesFolder/Categories'
import Watchlists from './HeaderComponent/routedComponent/cryptoCurrenciesFolder/Watchlists'
import Gainers from './HeaderComponent/routedComponent/cryptoCurrenciesFolder/Gainers'
import HighVolume from './HeaderComponent/routedComponent/cryptoCurrenciesFolder/HighVolume'
import AllCryptocurrencies from './HeaderComponent/routedComponent/cryptoCurrenciesFolder/AllCryptocurrencies'
import CompareCoins from './HeaderComponent/routedComponent/cryptoCurrenciesFolder/CompareCoins'
import GlobalChart from './HeaderComponent/routedComponent/cryptoCurrenciesFolder/GlobalChart'

import CryptoExchanges from './HeaderComponent/routedComponent/exchangesFolder/CryptoExchanges'
import Derivatives from './HeaderComponent/routedComponent/exchangesFolder/Derivatives'
import Dex from './HeaderComponent/routedComponent/exchangesFolder/Dex'
import CoinDetail from './CoinDetail'






function App() {

 

 
const [drop, setDrop] = useState(false)
function change(){
  setDrop(prev=>!prev)
}

const {allOff} = useContext(UserContext)


  return (
    <div onClick={allOff}  className={`App ${(drop&&(window.innerWidth<600)) ? "hidden" :""}`}>
    
    <hr className='hr' />
   
    <Header drop={drop} change={change} />

    <hr className='hrBottom' / >

        
        
        <Routes> 
          <Route path='/'  element={<Home />}  />
          <Route path='/new-cryptocurrencies' element={<NewCryptocurrencies/>} />
          <Route path="/categories" element={<Categories/>}/>
          <Route path='/watchlists' element={<Watchlists/>}/>
          <Route path='/crypto-gainers-losers' element={<Gainers/>}/>
          <Route path='/high-volume' element={<HighVolume/>}/>
          <Route path='/all-cryptocurrencies' element={<AllCryptocurrencies/>}/>
          <Route path='/compare-coins' element={<CompareCoins/>}/>
          <Route path='/global-charts' element={<GlobalChart/>}/>
          <Route path='/exchanges' element={<CryptoExchanges/>}/>       
          <Route path='/exchanges/derivatives' element={<Derivatives/>}/>
          <Route path='/exchanges/decentralized' element={<Dex/>}/>
           <Route path="/coins/:coinId"   element={<CoinDetail/>}  />       
          
                   
          
         
         
          
        </Routes>
       
    </div>
  )
}

export default App




