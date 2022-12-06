import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="bg-veryDarkCyan py-20 text-gray-100 pt-[150px]">
      <div className="container p-4 md:p-0">
        <img
          src="/images/logo.svg"
          className="max-h-[24px] mb-8"
          style={{
            filter: "brightness(0) invert(1)",
          }}
        ></img>
        <div className="grid grid-cols-1 lg:grid-cols-footer gap-8">
          <div className="grid gap-4 h-fit">
            <div className="flex items-start gap-4">
              <img
                src="/images/icon-location.svg"
                className="object-contain min-w-[20px] mt-1"
              ></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>

            <div className="flex items-start gap-4">
              <img
                src="/images/icon-phone.svg"
                className="object-contain min-w-[20px] mt-1"
              ></img>
              <p>+1-543-123-4567</p>
            </div>

            <div className="flex items-start gap-4">
              <img
                src="/images/icon-email.svg"
                className="object-contain min-w-[20px] mt-1"
              ></img>
              <p>example@huddle.com</p>
            </div>
          </div>
          <div>
            <ul>
              {MENU_1.map((menu) => (
                <li key={menu} className="mb-3">
                  <a href="#">{menu}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {MENU_2.map((menu) => (
                <li key={menu} className="mb-3">
                  <a href="#">{menu}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid justify-items-center md:justify-items-start">
            <div className="flex gap-4 h-fit max-w-fit">
              {SOCIAL_MEDIAS.map((social) => (
                <div
                  key={social}
                  className="border-solid border-[1px] border-white p-2 rounded-full cursor-pointer"
                >
                  <a href="#">
                    <img className="h-[16px] w-[16px]" src={social}></img>
                  </a>
                </div>
              ))}
            </div>
            <div className="flex items-baseline gap-1 mt-8 lg:mt-[200px]">
              <img
                className="h-[12px] w-[12px]"
                src="/images/copyright-regular.svg"
              ></img>
              <p className="text-xs">
                Copyright 2018 Huddle. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const MENU_1 = ["About Us", "What We Do", "FAQ"];
const MENU_2 = ["Career", "Blog", "Contact Us"];
const SOCIAL_MEDIAS = [
  "/images/facebook-f.svg",
  "/images/twitter.svg",
  "/images/instagram.svg",
];
