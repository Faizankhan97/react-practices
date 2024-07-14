import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurtMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h2>{resInfo?.cards[2]?.card?.card?.info?.city}</h2>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
      <ul>
        {itemCards?.map((items) => {
          return <li key={items?.card?.info?.id}>{items?.card?.info?.name} - Rs {items?.card?.info?.price / 100 || items?.card?.info?.defaultPrice / 100}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurtMenu;
