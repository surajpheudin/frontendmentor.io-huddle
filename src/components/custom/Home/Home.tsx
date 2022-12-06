import { FC } from "react";
import Layout from "../../core/Layout/Layout";
import ContentCard from "../ContentCard/ContentCard";
import GetStartedCard from "../GetStartedCard/GetStartedCard";
import HeroComponent from "../HeroComponent/HeroComponent";

const Home: FC = () => {
  return (
    <Layout>
      <HeroComponent></HeroComponent>
      <div className=" grid gap-10 z-50 relative container px-4 py-12 pb-[220px]">
        <ContentCard
          image="/images/illustration-grow-together.svg"
          body="Generate meaningful discussions with your audience and build a strong,
              loyal community. Think of the insightful conversations you miss out on
              with feedback form."
          title="Grow Together"
        ></ContentCard>
        <ContentCard
          image="/images/illustration-flowing-conversation.svg"
          body="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          title="Flowing Conversations"
          inverse
        ></ContentCard>
        <ContentCard
          image="/images/illustration-your-users.svg"
          body="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
          title="Your Users"
        ></ContentCard>
        <div className="absolute bottom-0 left-[50%] w-[350px] md:w-[600px] translate-x-[-50%] translate-y-[50%]">
          <GetStartedCard></GetStartedCard>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
