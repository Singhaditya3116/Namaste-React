import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../config.js";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANT_MENU_URL + id);
    const json = await data.json();
    //console.log(json.data.cards[0].card.card.info);
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    setRestaurant(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }

  return restaurant;
};

export default useRestaurant;
