import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines }) => {
  // const { cloudinaryImageId, name, avgRating, cuisines } = props.restaurant;

  return (
    <div className="card">
      <img alt="Restaurant photo" src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="restaurant-name">
        <h4>{name}</h4>
        <h4>{avgRating} stars</h4>
      </div>
      {/* props.restaurant.info.cuisines.join(",") */}
      <h4 className="cuisine">{cuisines.join(",")}</h4>
    </div>
  );
};

export default RestaurantCard;
