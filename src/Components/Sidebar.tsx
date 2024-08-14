import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineSubscriptions, MdWatchLater } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { PiFilmSlateLight } from "react-icons/pi";

import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdWatchLater />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch Later",
      icon: <MdWatchLater />,
    },
    {
      id: 6,
      name: "Likes Videos",
      icon: <GiLinkedRings />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <MdWatchLater />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "youtube premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  const sidebarItems5 = [
    {
      id: 1,
      name: "Setting",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <MdOutlinedFlag />,
    },
    {
      id: 3,
      name: "Help",
      icon: <IoIosHelpCircleOutline />,
    },
    {
      id: 4,
      name: "Send feedback",
      icon: <MdOutlineFeedback />,
    },
  ];

  return (
    <div className="px-4 w-[25%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden  ">
      {/*  Home */}
      <div className="space-y-3 items-center">
        {sidebarItems.map((item) => {
          return (
            <div className=" flex items-center space-x-6  hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/*you*/}
      <div className=" mt-4 space-y-3 items-center">
        <div className="flex items-center space-x-2">
          <h1>You </h1>
          <FaAngleRight />
        </div>
        {sidebarItems2.map((item) => {
          return (
            <div key={item.id} className=" flex items-center space-x-6  hover:bg-gray-300 duration-300 rounded-xl p-2">
              <div className="text-xl cursor-pointer"> {item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/*Explore*/}
      <div className=" mt-4 space-y-3 items-center">
        <div className=" items-center space-x-2">
          <h1 className="font-semibold">Explore </h1>
        </div>
        {sidebarItems3.map((item) => {
          return (
            <div key={item.id} className=" flex items-center space-x-6  hover:bg-gray-300 duration-300 rounded-xl p-2">
              <div className="text-xl cursor-pointer"> {item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/*MORE section*/}
      <div className=" mt-4 space-y-1 items-center">
        <div className="flex items-center space-x-2">
          <h1>More From Youtube </h1>
        </div>
        {sidebarItems4.map((item) => {
          return (
            <div key={item.id} className=" flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-2">
              <div className="text-xl cursor-pointer  text-red-500">
                {" "}
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* setting*/}
      <div className=" mt-4 space-y-1 items-center">
        <div className="flex items-center space-x-2">
          <h1>More From Youtube </h1>
        </div>
        {sidebarItems5.map((item) => {
          return (
            <div key={item.id} className=" flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-2">
              <div className="text-xl cursor-pointer "> {item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
        <hr />
      </div> 
      <br />
      <span className="text-sm font-semibold text-gray-500">
        About press Copyright <br /> Contact usCreators <br />
        Advertise Developers <br /> <br />
        <p>
          Terms Privacy Policy & Safety <br /> How Youtube works <br /> Test new
          features
        </p>
      </span> 
      <br /> 
      <p className="text-xs text-gray-800 mt-4">© 2024 SUNNY RAJ</p>
    </div>
  );
}

export default Sidebar;
