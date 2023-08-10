import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//Custom Hook
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantItem = () => {

    const {resId} = useParams();
    const resItem = useRestaurantMenu(resId)

    

    if (resItem === null) return <Shimmer />

    const {name , cuisines , costForTwoMessage , city , areaName} = resItem?.cards[0]?.card?.card?.info

    const menuItemCard = resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    const menuItem = menuItemCard?.itemCards || menuItemCard?.categories[0]?.itemCards

    console.log(menuItem)
    return (
        <div className="">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName} - {city}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    menuItem.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price /100}</li>)
                }
                
            </ul>
        </div>
    )
}

export default RestaurantItem;