import PropTypes from "prop-types";

export const UserInfo = ({ name, tweets, followers, className }) => {
  return (
    <ul>
      <li className={className}>{name}</li>
      <li className={className}>{tweets} TWEETS</li>
      <li className={className}>{followers} FOLLOWERS</li>
    </ul>
  );
};

UserInfo.propTypes = {
  name: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  className: PropTypes.string,
};
