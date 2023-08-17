import { CLOUDNARY_IMG_URL } from "../utils/constants";
import { useDispatch , useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/redux/slices/cartSlice";


const ItemList = ({ items }) => {

  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.items)


  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }


  const filteredItem = items.filter((value , index ,self) => index === self.findIndex(el => el.card.info.id === value.card.info.id))
  
  
  const handleRemoveItem = (id) => {
    const index = cartItems.findIndex(el => el.card.info.id === id)
    index !== -1 && dispatch(removeItem(index))
  }

  return (
    <>
      {
      filteredItem.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="flex justify-between border-b border-gray-200 mt-4 pt-4 pb-12"
          >
            <div className="w-9/12">
              {item.card.info.isVeg ? (
                <span className=" text-[0.55rem] border-2 border-green-500 p-0.5 w-fit ">
                  🟢
                </span>
              ) : (
                <span className=" text-[0.55rem] border-2 border-red-500 p-0.5 w-fit ">
                  🔴
                </span>
              )}
              {item.card.info.isBestseller && <span className="text-[0.55 rem] text-yellow-400 font-semibold ml-2">⭐Bestseller</span>}
              <h2 className="font-bold">{item.card.info.name}</h2>
              <p>
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="text-sm text-gray-400 mt-4">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-2/12 relative">
              {
                cartItems.find((el) => el.card.info.id === item.card.info.id) ?
                 <div className="bg-white text-green-400 border absolute px-2 py-2 rounded-md mt-24 ml-4">
                    <button className="px-2" onClick={() => handleRemoveItem(item.card.info.id)}>-</button>
                    <span className="px-2">{cartItems.filter(el => el.card.info.id === item.card.info.id).length}</span>
                    <button className="px-2" onClick={() => handleAddItem(item)}>+</button>
                 </div> 
                 : 
                 <button className="bg-white text-green-400 border absolute px-6 py-2 rounded-md mt-24 ml-4"
                onClick={() => handleAddItem(item)}>
                 Add +
               </button>
              }
              
              <img
                src={CLOUDNARY_IMG_URL + item.card.info.imageId}
                className="rounded-xl h-28"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
