import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
  const {
    cloudinaryImageId,
    name,
    locality,
    avgRating,
    areaName,
    cuisines,
    costForTwo,
  } = props.data.info;
  // console.log(props.data.info);
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} alt="food" />
      <div className="title">
        <h3>{name}</h3>
        <span className="dish-menu">{cuisines?.join(" , ")}</span>
        <p>{locality}</p>
        <p>{costForTwo}</p>
        <span className="d-f">
          <h4>{avgRating}</h4>
          <h4>{areaName}</h4>
        </span>
      </div>
    </div>
  );
};

export default Restaurant;
