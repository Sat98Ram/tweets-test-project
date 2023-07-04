import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" end className={css.navLink}>
        Home
      </NavLink>
      <NavLink to="/tweets" end className={css.navLink}>
        Tweets
      </NavLink>
    </nav>
  );
};
