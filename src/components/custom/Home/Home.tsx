import { FC } from "react";
import Layout from "../../core/Layout/Layout";
import HeroComponent from "../HeroComponent/HeroComponent";

const Home: FC = () => {
  return (
    <Layout>
      <HeroComponent></HeroComponent>
    </Layout>
  );
};

export default Home;
