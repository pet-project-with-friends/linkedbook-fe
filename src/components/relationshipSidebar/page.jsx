"use client";
import friendImage from "@/src/Images/friend.jpg";
import { Avatar, Button, Input } from "@material-tailwind/react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PeopleIcon from "@mui/icons-material/People";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import FootSidebar from "../footSidebar/page.jsx";
import { useState } from "react";

const themeIcon = {
  color: "#9a95a7",
  fontSize: "25px",
};

const themeIconActive = {
  color: "#238766",
  fontSize: "25px",
};

function SideBar() {
  const [value, setValue] = useState("");
  const pathname = usePathname();

  const listChoose = [
    {
      icon: (
        <PersonSearchIcon
          sx={
            pathname === "/relationship/acceptList"
              ? themeIconActive
              : themeIcon
          }
        />
      ),
      name: "Connection",
      path: "/relationship/acceptList",
    },
    {
      icon: (
        <GroupAddIcon
          sx={
            pathname === "/relationship/suggestList"
              ? themeIconActive
              : themeIcon
          }
        />
      ),
      name: "Suggest",
      path: "/relationship/suggestList",
    },
    {
      icon: (
        <PeopleIcon
          sx={
            pathname === "/relationship/friendList"
              ? themeIconActive
              : themeIcon
          }
        />
      ),
      name: "Current Friend",
      path: "/relationship/friendList",
    },
  ];

  return (
    <div className="w-[20rem] sticky top-5 flex flex-col gap-4">
      <div className="h-max w-full flex flex-col gap-2 bg-boxColor rounded-xl pb-[20px] border-solid border-border_element border-[2px]">
        <h1 className="text-base font-bold text-title w-full p-[20px] border-b-2 border-solid border-gray-200">
          Manage my network
        </h1>
        <div className="h-auto w-full flex flex-col">
          {listChoose.map((vl, idx) => (
            <Link
              href={vl.path}
              key={idx}
              className={`w-full cursor-pointer pl-[25px] py-3 flex items-center justify-start gap-2 ${
                pathname === vl.path
                  ? "bg-active_button bg-opacity-10"
                  : "hover:bg-blue-gray-50"
              }`}
            >
              {vl.icon}
              <p
                className={`h-max w-max text-base font-bold text-click_title  ${
                  pathname === vl.path ? "text-active_button" : ""
                }`}
              >
                {vl.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full min-h-52 rounded-xl bg-boxColor flex flex-col items-center gap-4 p-[20px] border-solid border-border_element border-[2px]">
        <p className="text-small_text text-sm text-center ">
          Remember to update profile to make a change and connect more friend.
        </p>
        <div className="w-full flex justify-center gap-2">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xl"
          />
          <Avatar src={friendImage.src} alt="friend" size="xl" />
        </div>
        <p className="text-click_title text-base">
          Can we change profile of your
        </p>
        <div className="w-full flex justify-center">
          <Button
            className="border-solid border-buttonColor border-[1px] py-2 px-10 text-sm rounded-2xl text-buttonColor font-bold"
            variant="outlined"
          >
            Setup profile
          </Button>
        </div>
      </div>
      <FootSidebar />
    </div>
  );
}

export default SideBar;
