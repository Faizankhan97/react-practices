import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import { RES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable = super powerful variable
  const [resData, setResData] = useState([]);
  const [orgiData, setOrgiData] = useState([]);
  // console.log(resDataList);
  // useEffect
  useEffect(() => {
    fetchData();
  }, [resData]);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    setResData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOrgiData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(resData);
  };
  if (resData.length === 0) {
    return <Shimmer />;
  }
  return (
    // <h1>Hello</h1>
    <div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = resData.filter((res) => res.data?.avgRating > 4);
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
            {resData?.map((restaurant) => {
              return (
                <div className="col-md-3">
                  <Restaurant
                    key={restaurant.data?.id}
                    data={restaurant.data}
                  />
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
