import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(id);
  const restaurant = useRestaurant(id);

  if (!restaurant) {
    return null;
  }
  return (
    <div>
      <h1>Restaurant id : {id}</h1>
      {/* <div>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.city}</h3>
      </div>
      <div>
        <h2>{restaurant.avgRating} Rating</h2>
      </div> */}

      <h2>Menu</h2>
      <ul>
        {restaurant.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;