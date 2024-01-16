import { restaurantList } from "../config";
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

function filterData(searchText,restaurants) {
    const filterEle = restaurants.filter((ele) =>
        ele.data.name.includes(searchText)
    )
    return filterEle;
}

const Body = () => {
    // const searchTxt = 'KFC';
    const [restaurants, setRestaurants] = useState(restaurantList);
    // searchText is a local variable
    const [seartchText, setSearchText] = useState("");

    
    
    return (
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
                        const data = filterData(seartchText, restaurants);
                        // update the state - restaurants
                        setRestaurants(data);
                    }}
                >Search</button>
            </div>
            <div className='restaurant-list'>
                {/* no key(no acceptable) <<<<< index key(use ONLY if you don't have anything) << unique key(best Practice) */}
                {
                    restaurants.map((restaurant) => {
                      return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>
        </>
    )
};

export default Body;