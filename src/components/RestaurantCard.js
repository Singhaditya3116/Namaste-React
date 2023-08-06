import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines }) => {
  // const { cloudinaryImageId, name, avgRating, cuisines } = props.restaurant;

  return (
    <div className="card w-64 h-72 m-4 bg-orange-300 rounded shadow-md">
      <img
        className="rounded h-48 w-full"
        alt="Restaurant photo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div className="font-bold flex justify-between mx-2 mt-2">
        <h4 className="text-xl">{name}</h4>
        <h4>{avgRating} stars</h4>
      </div>
      {/* props.restaurant.info.cuisines.join(",") */}
      <h4 className="mx-2">{cuisines.join(",")}</h4>
    </div>
  );
};

export default RestaurantCard;
