import { useState, useEffect, useContext } from "react";

import { UserContext } from "./Context";




function UseCategories(props){

    const [categories, setCategories] = useState([])

const {cateBtn, toggle} = useContext(UserContext)

   
    
    useEffect(()=>{

        fetch("https://api.coingecko.com/api/v3/coins/categories/list")
        .then(res=> res.json())
        .then(data=> setCategories(data))

    }, [])
const number = [0,50]

    const allCategories = categories.map(item=>{
        number[0]= number[0]+1
        number[1]= number[1]+1
        return <h3 key={number[0]} className="token-category" ><a key={number[1]} className="category-link" href="#" >{item.name}</a></h3>
                          
      
        
      })
      

    return (

        <div className="categories-container">
        <button onClick={toggle} className="all-categories-btn">All Categories</button>
        <div className={cateBtn  ? "inner-categories-container" : "categories-notshown"}>
        <input className="allcategories-search" placeholder="Search..." type="search" />
            <div className="categories">
                <h3 className="token-category" ><a className="category-link" href="#">All</a></h3>
                {allCategories}
            </div>
            </div>
        </div> 
        
    )
}

export default UseCategories