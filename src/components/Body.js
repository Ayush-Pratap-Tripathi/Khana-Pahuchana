import { useState } from "react";
import restaurantList from "../API/restaurantList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
    return (
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfRestaurant(filteredList);
              console.log(listOfRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {listOfRestaurant.map((restaurant, index) => (
            <RestaurantCard key={index} restaurantData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;