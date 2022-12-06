import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="py-4 px-4 sm:px-0 absolute left-0 right-0">
      <div className="container flex justify-between items-center">
        <img src="/images/logo.svg" className="max-h-[20px]"></img>
        <button
          className="shadow-md bg-white text-[12px] h-[28px] font-semiBold 
        md:text-sm md:h-[40px] md:font-normal w-[110px] rounded-full hover:font-semiBold hover:shadow-lg sm:w-[160px]"
        >
          Try it Free
        </button>
      </div>
    </div>
  );
};

export default Header;
