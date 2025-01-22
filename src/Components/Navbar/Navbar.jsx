import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    // this this the wrapper class for the entire navbar. It is divided into 2 parts left and right
    <div className="n-wrapper">
      {/* left has 2 parts fname and surname */}
      <div className="n-left">
        <div className="fname">Atharva</div>
        {/* <div className="toggle">toggle</div> */}
      </div>
      <div className="n-right">
        {/* We have a list of elements */}
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Experience</li>
            <li>Services</li>
            <li>Portfolio</li>
            <button className="button n-button">Contact Me</button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
