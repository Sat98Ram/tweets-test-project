import PropTypes from "prop-types";
import { IconGoIT } from "../Icons/IconGoIT";
import css from "./Card.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { followUser } from "../../redux/operations";
import bgImage from "../../images/bg2x.png";
import { UserInfo } from "../UserInfo/UserInfo";

export const Card = ({ id, name, tweets, followers, avatar }) => {
  const [isFollow, setIsFollow] = useState(false);
  const [followersCount, setFollowersCount] = useState(followers);
  const dispatch = useDispatch();

  const handleFollow = () => {
    const updatedFollowersCount = isFollow
      ? followersCount - 1
      : followersCount + 1;
    setIsFollow(!isFollow);
    setFollowersCount(updatedFollowersCount);
    dispatch(followUser({ userId: id, followers: updatedFollowersCount }));
  };

  const btnClass = isFollow ? "btnFollowing" : "btnFollow";

  return (
    <li key={id} className={css.card}>
      <IconGoIT className={css.logo} />
      <img src={bgImage} className={css.bgImage} />
      <div className={css.line} />
      <img src={avatar} className={css.avatar} />
      <UserInfo
        name={name}
        tweets={tweets}
        followers={followersCount}
        className={css.cardText}
      />

      <button type="button" className={btnClass} onClick={handleFollow}>
        {isFollow ? <span>Following</span> : <span>Follow</span>}
      </button>
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
