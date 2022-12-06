import { FC } from "react";

const GetStartedCard: FC = () => {
  return (
    <div className="shadow-md py-10 px-5 rounded-2xl bg-white md:py-[60px]">
      <h1 className="text-sm text-center mb-6 md:text-xl">
        Ready To Build Your Community?
      </h1>
      <div className="grid justify-center">
        <button className="bg-pink rounded-full py-2 text-white w-[220px] md:mx-0 max-w-[300px] md:h-[50px]">
          Get Started For Free
        </button>
      </div>
    </div>
  );
};

export default GetStartedCard;
