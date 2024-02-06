import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL, MENU_LIST_KEY, RESTAURANT_TYPE_KEY, swiggy_menu_api_URL } from "../config";
import MenuHeader from "./MenuHeader";
import RestaurantCard from "./RestaurantCard";

const RestaurantMenu = () => {
  // How to read a dynamic params from url
  // First way to write a dynamic url
  // const params = useParams();
  // const { id } = params;
  // console.log(params);

  // Second way to write a dynamic url
  const {resId} = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [filterMenu, setFilterMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    // const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const data = await fetch(swiggy_menu_api_URL+resId);
    const finalData = await data.json();
    // console.log(
    //   finalData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]
    // );
    // setRestaurant(
    //   finalData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2].info
    // );
    // console.log(finalData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
    const res = finalData?.data?.cards?.map(x => x.card)?.find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
    setRestaurant(res);
    // setFilterMenu(finalData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
  }

  if(restaurant === null){
    return <Shimmer />
  }

  return( 
    <>
       <h2>Restaurant id : {resId}</h2>
       <h2>{restaurant?.name}</h2>
       <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name}/>
       <h4>{restaurant?.itemAttribute?.vegClassifier}</h4>
       <h4>{restaurant?.ratings?.aggregatedRating?.rating}</h4>
        <h4>{restaurant?.totalRatingsString}</h4>
        <h4>{restaurant?.costForTwo}</h4>
        <h4>{restaurant?.cuisines.join(",")}</h4>
    </>
  );
};

export default RestaurantMenu;
