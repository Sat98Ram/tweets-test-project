import { Link } from "react-router-dom";
import css from "./BtnLink.module.css";
import PropTypes from "prop-types";
import { Section } from "../Section/Section";

export const BtnLink = ({ text, endpoint }) => {
  return (
    <Section>
      <Link to={endpoint} className={css.btnLink}>
        {text}
      </Link>
    </Section>
  );
};

BtnLink.propTypes = {
  text: PropTypes.string,
  endpoint: PropTypes.string,
};
