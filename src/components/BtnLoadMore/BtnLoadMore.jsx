import PropTypes from "prop-types";
import css from "./BtnLoadMore.module.css";

export const BtnLoadMore = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.btnLoad}>
      Next page
    </button>
  );
};

BtnLoadMore.propTypes = {
  onClick: PropTypes.func,
};
