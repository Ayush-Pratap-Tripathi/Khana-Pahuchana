import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const { name, cuisines, avgRating, deliveryTime, costForTwo, sla } =
      restaurantData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL +
            restaurantData.info.cloudinaryImageId
          }
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h6 className="cuisines">{cuisines.join(", ")}</h6>
        <h6 className="rating">{avgRating}</h6>
        <h6 className="delivery-time">{sla.deliveryTime} minutes</h6>
        <h6 className="costForTwo">{costForTwo}</h6>
      </div>
    );
  };

  export default RestaurantCard;