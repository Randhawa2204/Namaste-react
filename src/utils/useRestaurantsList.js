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
      setListOfRestaurants(
        jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfFilteredRestaurants(
        jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
        setListOfFilteredRestaurants([{ error: true }]);
    }
  };

  return [listOfRestaurants , listOfFilteredRestaurants, setListOfRestaurants, setListOfFilteredRestaurants]

};

export default useRestaurantsList;
