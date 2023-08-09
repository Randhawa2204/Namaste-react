import { CLOUDNARY_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData, error } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.info || {};
  return (
    <>
      {error ? (
        <h1 style={{ color: "red", margin: "10px auto" }}>
          Error Getting Data
        </h1>
      ) : (
        <div className="res-card">
          <img src={CLOUDNARY_IMG_URL + cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h5>{cuisines.join(", ")}</h5>
          <h4>{avgRating} Stars</h4>
          <h4>{deliveryTime} Minutes</h4>
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
