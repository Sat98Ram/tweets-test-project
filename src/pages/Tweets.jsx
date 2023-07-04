import { useEffect, useState } from "react";
import { BtnLoadMore } from "../components/BtnLoadMore/BtnLoadMore";
import { TweetsList } from "../components/TweetsList/TweetsList";
import { BtnLink } from "../components/btnLink/btnLink";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/operations";
import { selectIsLoading, selectUsers } from "../redux/selector";
import { BtnReturn } from "../components/BtnReturn/BtnReturn";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";

export const Tweets = () => {
  const [page, setPage] = useState(1);
  const [isBtn, setIsBtn] = useState(true);
  const [followers, setFollowers] = useState();

  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    // const localStorageUsers = JSON.parse(localStorage.getItem("users"));
    // if (localStorageUsers) {
    //   dispatch(getUsers(page));
    // }
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    dispatch(getUsers(newPage));
  };

  const handleReturn = () => {
    setPage((prevState) => prevState - 1);
    const prevPage = setPage((prevState) => prevState - 1);
    dispatch(getUsers(prevPage));
  };

  return (
    <>
      <BtnLink text="Back" endpoint="/" />
      {isLoading && (
        <Container>
          <p>Loading. Please wait</p>
        </Container>
      )}

      <Section>
        <TweetsList page={page} users={users} />
        {isBtn && <BtnLoadMore onClick={handleLoadMore} />}
        {page > 1 && <BtnReturn onClick={handleReturn} />}
      </Section>
    </>
  );
};
