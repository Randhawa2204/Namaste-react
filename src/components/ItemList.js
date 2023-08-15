import { CLOUDNARY_IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
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
              <button className="bg-white text-green-400 border absolute px-6 py-2 rounded-md mt-24 ml-4 ">
                Add +
              </button>
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
