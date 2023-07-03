import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import css from "./BtnLink.module.css";
import PropTypes from "prop-types";

export const BtnLink = ({ text, endpoint }) => {
  return (
    <Container>
      <Link to={endpoint} className={css.btnLink}>
        {text}
      </Link>
    </Container>
  );
};

BtnLink.propTypes = {
  text: PropTypes.string,
  endpoint: PropTypes.string,
};
