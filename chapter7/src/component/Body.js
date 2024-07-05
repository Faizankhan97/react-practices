import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
        setListOfRestaurant(
          res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilterRestaurant(
          res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
    } catch (error) {
      console.log(error);
    }
  };

  // if(listOfRestaurant.length == 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="main restur">
      <div className="container">
        <div>
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => {
                const filterSearch = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilterRestaurant(filterSearch);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() =>
              setFilterRestaurant(
                filterRestaurant.filter((res) => res?.info?.avgRating > 4.3)
              )
            }
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="row">
          {filterRestaurant?.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurts/" + restaurant?.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
