import {useEffect , useState} from 'react';
import { RES_ITEM_URL } from "../utils/constants";


const useRestaurantMenu = (resId) => {
  
    const [resInfo , setResInfo] = useState(null)

   
    useEffect(() => {
        fetchApi()
    }, []) 

    const fetchApi = async () => {
        const data = await fetch(RES_ITEM_URL + resId)
        const jsonData = await data.json()
        setResInfo(jsonData?.data)
    }

    return resInfo
}

export default useRestaurantMenu