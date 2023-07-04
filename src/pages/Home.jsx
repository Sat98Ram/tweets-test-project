import { BtnLink } from "../components/BtnLink/BtnLink";
import { ProjectDescr } from "../components/ProjectDescr/ProjectDescr";

export const Home = () => {
  return (
    <>
      <ProjectDescr />
      <BtnLink text="Get started" endpoint="/tweets" />
    </>
  );
};
