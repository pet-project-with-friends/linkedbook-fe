"use client";
import { Button } from "@material-tailwind/react";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import { useState } from "react";
import FootSidebar from "../footSidebar/page.jsx";
const themeIcon = {
  color: "#9a95a7",
  fontSize: "25px",
};

const themeIconActive = {
  color: "#238766",
  fontSize: "25px",
};
const SavedSideBar = () => {
  const [searching, setSearching] = useState("");
  const pathname = usePathname();

  const listChoose = [
    {
      icon: (
        <BookmarksIcon
          sx={pathname === "/save-blog/saved" ? themeIconActive : themeIcon}
        />
      ),
      name: "Saved blogs",
      path: "/save-blog/saved",
    },
    {
      icon: (
        <ThumbUpAltIcon
          sx={pathname === "/save-blog/liked" ? themeIconActive : themeIcon}
        />
      ),
      name: "Blogs was liked",
      path: "/save-blog/liked",
    },
    {
      icon: (
        <PeopleIcon
          sx={pathname === "/save-blog/my-blog" ? themeIconActive : themeIcon}
        />
      ),
      name: "Your blogs",
      path: "/save-blog/my-blog",
    },
  ];
  return (
    <div className="w-[20rem]">
      <div className="sticky top-5 flex flex-col gap-4">
        <div className=" h-max w-full flex flex-col gap-2 bg-boxColor rounded-xl pb-[20px] border-solid border-border_element border-[2px]">
          <h1 className="text-base font-bold text-title w-full p-[20px_20px_0_20px]">
            Manage blog saved
          </h1>
          {/* searchin box */}
          <div className="w-full flex items-center gap-1 h-[4rem] p-[0_10px_20px_10px] border-solid border-gray-200 border-b-[1px]">
            <div className="rounded-md h-full flex-[8] bg-[#edf3f8] flex items-center gap-1 px-1">
              <SearchIcon />
              <input
                className="focus:outline-none focus:shadow-outline h-full text-base"
                style={{
                  background: "none",
                }}
                type="text"
                placeholder="Find blog"
                value={searching}
                onChange={(e) => setSearching(e.target.value)}
              />
            </div>
            <Button
              className="h-full flex-[1] border-solid border-buttonColor border-[1px]  text-sm rounded-md text-buttonColor font-bold flex items-center justify-center"
              variant="outlined"
              style={{
                overflow: "unset",
                position: "unset",
              }}
            >
              FIND
            </Button>
          </div>
          {/* ending searching box */}

          {/* tag sidebar */}
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
          {/*ending tag sidebar */}
        </div>
        <FootSidebar />
      </div>
    </div>
  );
};

export default SavedSideBar;
