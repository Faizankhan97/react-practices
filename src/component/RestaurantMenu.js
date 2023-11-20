import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const result = await data.json();
    setResInfo(result.data);
    console.log(result.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div>
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <h3>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")}</h3>
      <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info}>
            {item.card.info.name}
            {item.card.info.price || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
