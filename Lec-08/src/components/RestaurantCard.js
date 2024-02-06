import {IMG_CDN_URL} from "../config";

const RestaurantCard = ({name, cuisines, costForTwo, totalRatingsString, cloudinaryImageId}) => {
    return (
        <div className='card'>
            <img 
                className='card-image'
                src={IMG_CDN_URL
                + cloudinaryImageId} 
                alt="Restaurant Image" 
            />
            {/* Home Work : Optional Chaining */}
            <h2>{name}</h2>
            <p>{cuisines.join(",")}</p>
            <p>{costForTwo}</p>
            <p>{totalRatingsString}⭐</p>
        </div>
    )
};

export default RestaurantCard;