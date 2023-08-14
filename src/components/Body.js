import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantList } from "../config";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { useEffect, useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // console.log(useState());

  const { user, setUser } = useContext(UserContext);

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
      <div className="search-container p-4 bg-orange-400">
        <input
          data-testid="search-input"
          className="h-8 border-4 rounded px-2 focus:bg-orange-600"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="bg-orange-300 hover:bg-orange-400 mx-2 py-1 px-3 rounded"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div
        className="main flex flex-wrap bg-orange-500"
        data-testid="restaurant-list"
      >
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
