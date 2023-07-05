import PropTypes from "prop-types";

export const UserInfo = ({ name, tweets, followers, className }) => {
  const formatFollowers = new Intl.NumberFormat("en-US").format(followers);

  return (
    <ul>
      <li className={className}>{name}</li>
      <li className={className}>{tweets} TWEETS</li>
      <li className={className}>{formatFollowers} FOLLOWERS</li>
    </ul>
  );
};

UserInfo.propTypes = {
  name: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  className: PropTypes.string,
};
