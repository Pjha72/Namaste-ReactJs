import { restaurantList , swiggy_api_URL} from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';

function filterData(searchText, restaurants) {
  const filterEle = restaurants.filter((ele) =>
    ele?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterEle;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const searchTxt = 'KFC';
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // searchText is a local variable
  const [seartchText, setSearchText] = useState("");

  // console.log(restaurants);

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      swiggy_api_URL
    );
    const json = await data.json();
    // console.log(json);
    // Optional chaining
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {

        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }
    const resData = await checkJsonData(json);
    setAllRestaurants(
      resData
    );
    setFilteredRestaurants(
      resData
    );
  }

  // Conditional Rendering
  // IF restaurtants is empty => load shimmer UI
  // If restaurants has data => actual data UI

  // Not render component (Early return)
  if (!allRestaurants) return null;

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

        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(seartchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* no key(no acceptable) <<<<< index key(use ONLY if you don't have anything) << unique key(best Practice) */}
          {/* You have to write logic for No restaurant found here */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
