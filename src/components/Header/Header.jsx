// import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/tweets" end>
          Tweets
        </NavLink>
      </nav>
    </header>
  );
};
