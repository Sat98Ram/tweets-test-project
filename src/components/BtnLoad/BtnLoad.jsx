import PropTypes from "prop-types";
import css from "./BtnLoadMore.module.css";

export const BtnLoad = ({ onClick, text }) => {
  return (
    <button type="button" onClick={onClick} className={css.btnLoad}>
      {text}
    </button>
  );
};

BtnLoad.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};
