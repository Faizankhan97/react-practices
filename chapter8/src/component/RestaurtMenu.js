import axios from "axios";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurtMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await axios.get(MENU_API + resId + "&submitAction=ENTER");
    setResInfo(data?.data?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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
          return <li key={items.key}>{items?.card?.info?.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurtMenu;
