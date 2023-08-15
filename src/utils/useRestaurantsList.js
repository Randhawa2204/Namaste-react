import { useEffect, useState } from "react";
import { RES_LIST_URL } from "./constants";
import useOnlineStatus from './useOnlineStatus';

const useRestaurantsList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    []
  );
  const status = useOnlineStatus()

  useEffect(() => {
    if(status) fetchApi();
  }, [status]);

  const fetchApi = async () => {
    try {
      const data = await fetch(RES_LIST_URL);
      const jsonData = await data.json();

      // setListOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
      // setListOfFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
      const dataArary = jsonData?.data?.cards.find(el => el.card.card.id === "restaurant_grid_listing")
      setListOfRestaurants(
        dataArary.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfFilteredRestaurants(
        dataArary.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
        setListOfFilteredRestaurants([{ error: true }]);
    }
  };

  return [listOfRestaurants , listOfFilteredRestaurants, setListOfRestaurants, setListOfFilteredRestaurants]

};

export default useRestaurantsList;
