import { Container } from "../Container/Container";
import css from "./Section.module.css";
import PropTypes from "prop-types";

export const Section = ({ children }) => {
  return (
    <section className={css.section}>
      <Container>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
