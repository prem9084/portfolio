import React from "react";

const NavBar = () => {
  return (
    <div
      className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="left  nav_items">PortFolieo</div>

      <div className="right">
        {" "}
        <a href="" className="nav_items">
          Home
        </a>
        <a href="" className="nav_items">
          Exprence
        </a>
        <a href="" className="nav_items">
          Skilles
        </a>
        <a href="" className="nav_items">
          Projects
        </a>
        <a href="" className="nav_items">
          Contect
        </a>
      </div>
    </div>
  );
};

export default NavBar;
