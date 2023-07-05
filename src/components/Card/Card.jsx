import PropTypes from "prop-types";
import { IconGoIT } from "../Icons/IconGoIT";
import css from "./Card.module.css";

import { useDispatch } from "react-redux";
import bgImage from "../../images/bg2x.png";
import { UserInfo } from "../UserInfo/UserInfo";
import { followUserById, unfollowUserById } from "../../redux/slice";
import { followUser } from "../../redux/operations";
import { BtnFollow } from "../BtnFollow/BtnFollow";

export const Card = ({ id, name, tweets, followers, avatar, isFolowing }) => {
  const dispatch = useDispatch();

  const handleFollow = () => {
    if (isFolowing) {
      dispatch(unfollowUserById(id));
    } else {
      dispatch(followUserById(id));
    }
    const updatedFollowersCount = isFolowing ? followers - 1 : followers + 1;
    dispatch(followUser({ userId: id, followers: updatedFollowersCount }));
  };

  return (
    <li className={css.card}>
      <IconGoIT className={css.logo} />
      <img src={bgImage} className={css.bgImage} />
      <div className={css.line} />
      <img src={avatar} className={css.avatar} />
      <UserInfo
        name={name}
        tweets={tweets}
        followers={followers}
        className={css.cardText}
      />

      <BtnFollow
        className={isFolowing ? `${css.btnFollowing}` : `${css.btnFollow}`}
        onClick={handleFollow}
        isFolowing={isFolowing}
      />
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  isFolowing: PropTypes.bool.isRequired,
};
