import { Link } from "react-router-dom";
import { Container } from "../components/Container/Container";
import { BtnLink } from "../components/btnLink/btnLink";
import css from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <Container>
        <h1>Tweets project</h1>
        <p>
          Discover and explore user profiles like never before with my
          React-based test project. Gain valuable insights into users&apos;
          profiles, including their tweets and followers, all in one place.
          Ready to dive in? Start exploring user profiles on our
          <Link to="/tweets" className={css.tweetLink}>
            TWEETS
          </Link>
          page.
        </p>
      </Container>

      <BtnLink text="Get started" endpoint="/tweets" />
    </>
  );
};
