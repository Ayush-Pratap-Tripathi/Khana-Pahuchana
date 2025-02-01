import logo from "../utils/logo.png";

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

  export default Header;