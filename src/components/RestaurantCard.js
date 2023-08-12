import { CLOUDNARY_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData, error } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla : {deliveryTime} } =
    resData?.info || {};
  return (
    <>
      {error ? (
        <h1 style={{ color: "red", margin: "10px auto" }}>
          Error Getting Data
        </h1>
      ) : (
        <div className="rounded overflow-hidden shadow-lg w-[250px] h-[350px] mr-6 mb-4 ">
          <img
            className="w-full h-44"
            src={CLOUDNARY_IMG_URL + cloudinaryImageId}
          ></img>
          <div className="px-6 pt-4 flex flex-col ">
            <h3 className="font-bold">{name}</h3>
            <h5 className="text-sm text-gray-400 hyphens-auto ">{cuisines.join(", ")}</h5>
            <h4>⭐ {avgRating}</h4>
            <h4>🕑 {deliveryTime} Minutes</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantCard;

// (<div className="res-card">
//       <img src={CLOUDNARY_IMG_URL + cloudinaryImageId}></img>
//       <h3>{name}</h3>
//       <h5>{cuisines.join(", ")}</h5>
//       <h4>{avgRating} Stars</h4>
//       <h4>{deliveryTime} Minutes</h4>
//     </div>)
