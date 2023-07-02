// import PropTypes from "prop-types";
import { IconGoIT } from "../Icons/IconGoIT";
import css from "./Card.module.css";

export const Card = () =>
  // { id, name, tweets, followers }
  {
    return (
      <li
        //   key={id}
        className={css.card}
      >
        <IconGoIT className={css.logo} />
        <img src="../../image/picture2.png" />
        {/* <div className={css.topPart} /> */}
        <div className={css.line} />
        {/* <p>{name}</p>
      <p>{tweets} TWEETS</p>
      <p>{followers} FOLLOWERS</p> */}
      </li>
      // <li key={id} className={css.card}>
      //   <p>{name}</p>
      //   <p>{tweets} TWEETS</p>
      //   <p>{followers} FOLLOWERS</p>
      // </li>
    );
  };

// Card.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   tweets: PropTypes.number.isRequired,
//   followers: PropTypes.number.isRequired,
// };
