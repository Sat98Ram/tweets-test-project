// import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/tweets" end>
            Tweets
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};
