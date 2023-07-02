import { useSelector } from "react-redux";
import { Container } from "../Container/Container";
import { selectIsLoading, selectUsers } from "../../redux/selector";
import { Card } from "../Card/Card";

export const TweetsList = () => {
  const isLoading = useSelector(selectIsLoading);
  //   const users = useSelector(selectUsers);

  return (
    <Container>
      {isLoading && <p>Loading. Please wait</p>}

      <ul>
        <Card />
        {/* {users.map((user, index) => (
          <Card
            key={index}
            name={user.user}
            tweets={user.tweets}
            followers={user.followers}
            id={user.id}
          />
        ))} */}
      </ul>
    </Container>
  );
};
