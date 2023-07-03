// import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <NavLink to="/" end className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/tweets" end className={css.navLink}>
            Tweets
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};
