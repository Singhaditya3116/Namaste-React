import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { API_URL } from "../config";

import { useEffect, useState } from "react";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
}

const Body = () => {
  // let searchText = "KFG";
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  // console.log("render");

  async function getRestaurants() {
    const data = await fetch(API_URL);
    const json = await data.json();
    // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setRestaurants(json.data.cards[2].data.data.cards);
  }

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurantList);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="main">
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
