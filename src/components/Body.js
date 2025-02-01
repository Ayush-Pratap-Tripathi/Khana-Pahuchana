import restaurantList from "../API/restaurantList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {restaurantList.map((restaurant, index) => (
            <RestaurantCard key={index} restaurantData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;