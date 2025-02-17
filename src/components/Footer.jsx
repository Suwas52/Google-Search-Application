import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <div
      className="bg-[#f2f2f2]
  "
    >
      <div className="flex py-[15px] md:px-[30px] border-b border-[#dadce0]  ">
        <span
          className="text-[#70767a]
        text-[15px] leading-none "
        >
          Nepal
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]  ">
        <div className="flex justify-center ">
          {quickLinks.map((left, index) => (
            <span
              key={index}
              className="text-[#70767a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] "
            >
              {left}
            </span>
          ))}
        </div>
        <div className="flex justify-center ">
          {settingMenu.map((right, index) => (
            <span
              key={index}
              className="text-[#70767a] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] "
            >
              {right}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
