import { Link } from "react-router-dom";
import css from "./ProjectDescr.module.css";
import { Section } from "../Section/Section";

export const ProjectDescr = () => {
  return (
    <Section>
      <h1 className={css.mainTitle}>Tweets project</h1>
      <div className={css.textWrap}>
        <p className={css.projectDescr}>
          Discover and explore user profiles like never before with my
          React-based test project. Gain valuable insights into users&apos;
          profiles, including their tweets and followers, all in one place.
          Ready to dive in? Start exploring user profiles on our
          <Link to="/tweets" className={css.tweetLink}>
            TWEETS
          </Link>
          page.
        </p>
      </div>
    </Section>
  );
};
