import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurtCategory from "./RestaurtCategory";

const RestaurtMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h3 className="font-bold mb-6">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
      </h3>
      {categories.map((category) => (
        <RestaurtCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurtMenu;
