import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { RES_ITEM_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantItem = () => {

    const [resItem , setResItem] = useState(null)
    
    const {resId} = useParams();


    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        const data = await fetch(RES_ITEM_URL + resId)

        const jsonData = await data.json()

        setResItem(jsonData?.data)
    }

    if (resItem === null) return <Shimmer />

    const {name , cuisines , costForTwoMessage , city , areaName} = resItem?.cards[0]?.card?.card?.info

    const menuItem = resItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

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