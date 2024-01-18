import { restaurantList } from "../config";
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer"

function filterData(searchText,restaurants) {
    const filterEle = restaurants.filter((ele) =>
        ele?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )
    return filterEle;
}



const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    // const searchTxt = 'KFC';
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    // searchText is a local variable
    const [seartchText, setSearchText] = useState("");

    // console.log(restaurants);
    
    useEffect(()=>{
        // API Call
        getRestaurants();
    },[]);

    async function getRestaurants(){
        
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // Optional chaining
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    // IF restaurtants is empty => load shimmer UI
    // If restaurants has data => actual data UI

    // Not render component (Early return)
    if(!allRestaurants) return null;

    if(filteredRestaurants?.length==0) return <><h1>No Restaurant match your filter!!!</h1></>
    
    return allRestaurants?.length === 0 ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input 
                    className="search-bar" 
                    type="text" 
                    placeholder="Search Restaurant" 
                    value={seartchText}
                    onChange={(e) => {
                        // e.target.value -> Whatever you write in input
                        setSearchText(e.target.value);
                    }} 
                />
                
                <button className="search-btn" 
                    onClick={()=>{
                        // need to filter the data
                        const data = filterData(seartchText, allRestaurants);
                        // update the state - restaurants
                        setFilteredRestaurants(data);
                    }}
                >Search</button>
            </div>
            <div className='restaurant-list'>
                {/* no key(no acceptable) <<<<< index key(use ONLY if you don't have anything) << unique key(best Practice) */}
                {/* You have to write logic for No restaurant found here */}
                {
                    filteredRestaurants?.length==0 ? <><h1>No Restaurant match your filter!!!</h1></> : filteredRestaurants?.map((restaurant) => {
                      return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                      )
                    })
                }
            </div>
        </>
    )
};

export default Body;