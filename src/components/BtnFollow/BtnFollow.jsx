import PropTypes from "prop-types";
export const BtnFollow = ({ isFolowing, className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {isFolowing ? <span>Following</span> : <span>Follow</span>}
    </button>
  );
};
BtnFollow.propTypes = {
  isFolowing: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
