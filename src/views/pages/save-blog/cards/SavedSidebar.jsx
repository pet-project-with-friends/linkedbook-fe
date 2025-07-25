"use client";
import FootSidebar from "@/src/@core/component/FootSidebar";
import { Button } from "@material-tailwind/react";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import { useState } from "react";
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
    <div className="w-[20rem] flex-1">
      <div className="sticky top-5 flex flex-col gap-4">
        <div className=" h-max w-full flex flex-col gap-2 bg-boxColor rounded-xl pb-[20px] border-solid border-border_element border-[2px]">
          <h1 className="text-base font-bold text-title w-full p-[20px_20px_0_20px]">
            Manage blog saved
          </h1>
          {/* searching box */}
          <div className="w-full px-5 pb-5 border-b border-gray-200">
            <div className="flex items-center gap-2 bg-[#edf3f8] rounded-lg px-3 py-2">
              <SearchIcon sx={{ color: "#6B7280", fontSize: 20 }} />
              <input
                type="text"
                placeholder="Search blog..."
                value={searching}
                onChange={(e) => setSearching(e.target.value)}
                className="flex-1 bg-transparent text-sm text-gray-700 focus:outline-none"
              />
              <Button
                variant="outlined"
                size="sm"
                className="!border-buttonColor text-buttonColor text-xs font-semibold px-3 py-1 rounded-md"
              >
                FIND
              </Button>
            </div>
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
