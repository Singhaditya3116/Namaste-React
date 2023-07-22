import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

const Body = () => {
  let searchText = "KFG";

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            searchText = e.target.value;
          }}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="main">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
