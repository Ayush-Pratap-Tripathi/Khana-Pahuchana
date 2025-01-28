import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import TR from "./tr-logo.webp";

/*
Header
    -Logo
    -Nav Items
Body
    -Search
    -Resturant container
        -Resturant card
            -Image
            -Name of Resturant
            -Star Rating
            -Couisines
            -delivery-time
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img src={TR} alt="The Restaurant" />
      <h3>The Restaurant</h3>
      <h6 className="cuisines">North-Indian, South-Indian, Italian, Mexican, Chinese</h6>
      <h6 className="rating">4.5</h6>
      <h6 className="delivery-time">38 minutes</h6> {/* Ensure this is inside the div */}
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo-container">
        <img className="logo" src={logo} alt="Khana Pahuchana" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
