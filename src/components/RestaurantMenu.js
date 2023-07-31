import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(id);

  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8235&lng=86.2304589&submitAction=ENTER&restaurantId=" +
        id
    );
    const json = await data.json();
    //console.log(json.data.cards[0].card.card.info);
    //setRestaurant(json.data.cards[0].card.card.info);
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setRestaurant(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }

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
