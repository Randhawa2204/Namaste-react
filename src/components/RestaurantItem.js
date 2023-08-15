import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
//Custom Hook
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantItem = () => {
  const { resId } = useParams();
  const resItem = useRestaurantMenu(resId);

  const [showIndex , setShowIndex] = useState(null)

  if (resItem === null) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    locality,
    areaName,
    costForTwoMessage,
    sla: { slaString, lastMileTravelString },
  } = resItem?.cards[0]?.card?.card?.info;

  const menuItemCards =
    resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = menuItemCards.filter(
    (el) =>
      el.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  //   const menuItem =
  //     menuItemCard?.itemCards || menuItemCard?.categories[0]?.itemCards;

  return (
    <div className="w-6/12 mx-auto">
      <div className=" flex justify-between">
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="text-gray-400 text-sm">{cuisines}</p>
          <p className="text-gray-400 text-sm">
            {locality} , {areaName} , {lastMileTravelString}
          </p>
        </div>
        <button className="border  rounded-md flex flex-col items-center px-3 justify-evenly divide-y">
          <span className="font-bold text-sm text-yellow-400">
            ⭐ {avgRating ? avgRating : "--"}
          </span>
          <span className="text-xs font-bold tracking-[-1px] pt-2">
            {totalRatingsString ? totalRatingsString : "Too few Ratings"}
          </span>
        </button>
      </div>
      <div className="border-b border-dashed my-4" />
      <ul className="flex font-bold text-md">
        <li className="pr-4">🕛 {slaString ? slaString : "--"}</li>
        <li>{costForTwoMessage}</li>
      </ul>
      <div className="border-b border-dashed my-4" />
      {/* Categories */}
      <div className="bg-gray-100">
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category.card.card.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={setShowIndex}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantItem;
