import { Container } from "../components/Container/Container";
import { BtnLink } from "../components/btnLink/btnLink";

export const Home = () => {
  return (
    <>
      <Container>
        <h1>Tweets project</h1>
        <p>
          It ia a test project based on React. With this app you can easily get
          brief view of users profiles with number of their tweets and
          followers. To give it a try you might want to proceed to TWEETS page.
        </p>
      </Container>

      <BtnLink text="Get started" endpoint="/tweets" />
    </>
  );
};
