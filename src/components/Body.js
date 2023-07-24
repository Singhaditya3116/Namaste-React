import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

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

  console.log("render");

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1550547&lng=72.94088909999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
