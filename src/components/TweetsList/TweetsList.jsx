import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import { selectIsLoading, selectUsers } from "../../redux/selector";
import { Card } from "../Card/Card";
import { useEffect } from "react";
import { getUsers } from "../../redux/operations";
import css from "./TweetsList.module.css";

export const TweetsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, getUsers]);

  return (
    <Container>
      {isLoading && <p>Loading. Please wait</p>}

      <ul className={css.tweetsList}>
        {users.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.user}
            tweets={user.tweets}
            followers={user.followers}
          />
        ))}
      </ul>
    </Container>
  );
};
