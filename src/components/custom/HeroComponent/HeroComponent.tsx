import { FC } from "react";

const HeroComponent: FC = () => {
  return (
    <div className="bg-veryPaleCyan min-h-[100vh] bg-[url('/images/bg-hero-mobile.svg')] md:bg-[url('/images/bg-hero-desktop.svg')] grid content-center pb-[100px] md:pb-0">
      <div className="container px-8 grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-2 ">
        <div className="grid gap-8 h-fit max-w-[500px] p-4 mt-[100px] md:mt-0">
          <h1 className="text-2xl md:text-4xl text-center md:text-left">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-center md:text-left">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="bg-pink rounded-full py-2 text-white w-[220px] mx-auto md:mx-0 max-w-[300px] md:h-[50px]">
            Get Started For Free
          </button>
        </div>
        <div>
          <img
            src="/images/illustration-mockups.svg"
            className="w-full max-w-[80%] mx-auto md:max-w-[600px]"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
