import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus()

  if(onlineStatus == false){
    return <h1>Look Like you're offline!! Please check your internet connection</h1>
  }

  // if(listOfRestaurant.length == 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="main restur">
      <div className="container">
        <div className="flex">
          <div className="m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
          <div className="search m-4 p-4 flex items-center">
            <button
              className="px-4 py-2 bg-gray-100 rounded-lg"
              onClick={() =>
                setFilterRestaurant(
                  filterRestaurant.filter((res) => res?.info?.avgRating > 4.3)
                )
              }
            >
              Top Rated Restaurant
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filterRestaurant?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurts/" + restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
