import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={25} />
      </span>
      <button className="h-10 px-7 bg-[#1A73E8] text-sm rounded-md border text-white  hover:bg-[#1866cc] ">
        Sign In
      </button>
      {/* <span className="h-10 w-10 relative flex justify-center items-center">
        <img className="absolute" src={ProfileRing} />
        <span className="h-8 w-8 rounded-full overflow-hidden">
          <img src={Profile} className="h-full w-full object-cover" />
        </span>
      </span> */}
    </div>
  );
};

export default ProfileIcon;
