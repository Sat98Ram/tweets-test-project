import PropTypes from "prop-types";

import css from "./BtnReturn.module.css";

export const BtnReturn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.BtnReturn}>
      Return
    </button>
  );
};

BtnReturn.propTypes = {
  onClick: PropTypes.func.isRequired,
};