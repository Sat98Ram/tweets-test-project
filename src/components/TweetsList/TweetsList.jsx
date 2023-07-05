import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import css from "./TweetsList.module.css";

export const TweetsList = ({ users }) => {
  return (
    <ul className={css.tweetsList}>
      {users.map((user) => (
        <Card key={user.id} {...user} name={user.user} />
      ))}
    </ul>
  );
};

TweetsList.propTypes = {
  users: PropTypes.array.isRequired,
};
