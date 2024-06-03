import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // State Variable = super powerful variable
  const [resData, setResData] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body");
  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  // if (resData.length === 0) {
  //   return <Shimmer />;
  // }
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRest = resData.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase())
              );
              setFilteredRest(filteredRest);
              // console.log(resFilter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resData.filter(
              (res) => res.info?.avgRating > 4
            );
            setResData(filteredList);
            console.log("List", filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restur">
        <div className="container">
          <div className="row">
            {filteredRest?.map((data) => {
              return (
                <div className="col-md-3">
                  <Link key={data.info.id} to={"/restaurants/" + data.info.id}>
                    <Restaurant data={data} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
