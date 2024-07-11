import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="main restur">
      <div className="container">
        <div>
          <button
            className="filter-btn"
            onClick={() =>
              setListOfRestaurant(
                listOfRestaurant.filter((res) => res?.data?.avgRating > 4.3)
              )
            }
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="row">
          {listOfRestaurant?.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
