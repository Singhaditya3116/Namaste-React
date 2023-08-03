import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantList } from "../config";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { useEffect, useState } from "react";

const Body = () => {
  // let searchText = "KFG";
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // console.log(useState());

  useEffect(() => {
    getRestaurants();
  }, []);

  // console.log("render");

  async function getRestaurants() {
    const data = await fetch(API_URL);
    const json = await data.json();
    // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // json?.data?.cards[2]?.data?.data?.cards
    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // Avoid rendering component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="main">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurants match your filter</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
