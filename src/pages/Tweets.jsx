import { useEffect, useState } from "react";
import { BtnLoad } from "../components/BtnLoad/BtnLoad";
import { TweetsList } from "../components/TweetsList/TweetsList";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/operations";
import { selectIsLoading, selectUsers } from "../redux/selector";
import { Section } from "../components/Section/Section";
import { BtnLink } from "../components/BtnLink/BtnLink";

export const Tweets = () => {
  const [page, setPage] = useState(1);
  const [isBtn, setIsBtn] = useState(true);
  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    dispatch(getUsers(newPage));
    if (newPage === 5) {
      setIsBtn(false);
    }
  };

  const handleReturn = () => {
    const prevPage = page - 1;
    setPage(prevPage);
    dispatch(getUsers(prevPage));
    if (prevPage === 4) {
      setIsBtn(true);
    }
  };

  return (
    <>
      <BtnLink text="Back" endpoint="/" />

      <Section>
        {isLoading && <p>Loading. Please wait</p>}
        <TweetsList page={page} users={users} />
        {page > 1 && <BtnLoad onClick={handleReturn} text={`Prev page`} />}
        {isBtn && <BtnLoad onClick={handleLoadMore} text={`Next page`} />}
      </Section>
    </>
  );
};
