import { BtnLoadMore } from "../components/BtnLoadMore/BtnLoadMore";
import { TweetsList } from "../components/TweetsList/TweetsList";
import { BtnLink } from "../components/btnLink/btnLink";

export const Tweets = () => {
  return (
    <>
      <BtnLink text="Back" endpoint="/" />
      <TweetsList />
      <BtnLoadMore />
    </>
  );
};
