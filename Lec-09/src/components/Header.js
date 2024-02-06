import { useState, useEffect } from "react";
import Logo from "../assets/img/foodVilla.png";
import { Link } from "react-router-dom";

const loggedinUser = () => {
  // API Call to check authentiocation

  return true;
};

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Logo"
      // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7y_0Rb9se-3D9g-QeQgQP8w9rBVnw3hwZg&usqp=CAU"
      src={Logo}
    />
  </a>
);

// Haeder Component
const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(true);

  // let title = "Food Villa";

  // Reconcilation process
  // const [title, setTitle] = useState("Food Villa");
  // console.log('render()');

  return (
    <div className="header">
      <Title />
      {/* <h1>{title}</h1>
            <button value={title} onClick={()=> (setTitle("New Title"))}>Change Titile</button> */}

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {
        // JS Expression Only work
        isLoggedin ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )
      }
    </div>
  );
};

export default Header;
