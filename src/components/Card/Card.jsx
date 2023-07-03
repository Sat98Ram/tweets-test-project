import PropTypes from "prop-types";
import { IconGoIT } from "../Icons/IconGoIT";
import css from "./Card.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../redux/operations";
import { selectFollowersCountById } from "../../redux/selector";
import bgImage from "../../images/bg2x.png";
import { UserInfo } from "../UserInfo/UserInfo";

export const Card = ({ id, name, tweets, followers }) => {
  const [isFollow, setIsFollow] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    const updatedFollowers = isFollow ? followers - 1 : followers + 1;
    setIsFollow(!isFollow);
    dispatch(followUser({ userId: id, followers: updatedFollowers }));
  };

  const updatedFollowers = useSelector((state) =>
    selectFollowersCountById(state, id)
  );

  return (
    <li key={id} className={css.card}>
      <IconGoIT className={css.logo} />
      <img src={bgImage} className={css.bgImage} />
      <div className={css.line} />
      <UserInfo
        name={name}
        tweets={tweets}
        followers={updatedFollowers}
        className={css.cardText}
      />
      {/* <p className={css.cardText}>{name}</p>
      <p className={css.cardText}>{tweets} TWEETS</p>
      <p className={css.cardText}>{updatedFollowers} FOLLOWERS</p> */}

      <button type="button" className={css.btnFollow} onClick={handleFollow}>
        {isFollow ? <span>Following</span> : <span>Follow</span>}
      </button>
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
};
