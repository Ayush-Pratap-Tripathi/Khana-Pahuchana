import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.569482&lng=85.5220799&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")}`  
    );
    // parse the response's contents to json as it is returned in the form of string and it actually contains data from swiggy's api
    const json = await response.json();
    const data = JSON.parse(json.contents);

    setListOfRestaurant(data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  if (listOfRestaurant.length === 0) {
    return (
      <div className="loading">
        <h1>Loading.....</h1>
      </div>
    )
  }
  
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
          {listOfRestaurant?.map((restaurant, index) => (
            <RestaurantCard key={index} restaurantData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;