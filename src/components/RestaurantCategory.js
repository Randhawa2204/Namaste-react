import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data , showItems, setShowIndex , index}) => {

    
    const handleClick = () => {
        showItems ? setShowIndex(null) : setShowIndex(index) 
    }

    return (
        <>
            <div className="bg-white my-4 p-4 ">
                {/* Header*/}
                <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                <p className="font-bold text-lg">{data.title} ({data.itemCards.length})</p>
                <span>{showItems ? "🔼" : "🔽"}</span>
                </div>
                {/* Accordian Body*/}
                {
                    showItems ? <ItemList items={data.itemCards}/> : <></>
                }
            </div>
            
        </>
    )   
}

export default RestaurantCategory