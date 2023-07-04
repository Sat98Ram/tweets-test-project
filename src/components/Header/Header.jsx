import { Container } from "../Container/Container";
import css from "./Header.module.css";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};
