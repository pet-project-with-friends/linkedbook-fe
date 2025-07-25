"use client";
import { Avatar } from "@material-tailwind/react";
import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import { useRouter } from "next/navigation";

function ProfileAside() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path, { scroll: false });
  };

  const featureList = [
    {
      icon: <BookmarkIcon sx={{ color: "#4B5563", fontSize: 20 }} />,
      path: "/save-blog/saved",
      name: "Saved Items",
    },
    {
      icon: <PersonIcon sx={{ color: "#4B5563", fontSize: 20 }} />,
      path: "/profile/blog",
      name: "Your Profile",
    },
    {
      icon: <PeopleIcon sx={{ color: "#4B5563", fontSize: 20 }} />,
      path: "/relationship/friendList",
      name: "Friends List",
    },
  ];

  return (
    <aside className="w-[240px] h-fit bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {/* Top Banner & Avatar */}
      <div className="relative h-24 bg-gradient-to-r from-[#a0b4b7] to-[#c2d8db]">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          size="xl"
          className="absolute left-1/2 bottom-[-20px] transform -translate-x-1/2 border-[3px] border-white shadow-md"
        />
      </div>

      {/* User Info */}
      <div className="mt-6 pb-2 flex flex-col items-center text-center px-4">
        <h1 className="text-base font-semibold text-gray-800">Tan Nguyen</h1>
        <p className="text-sm text-gray-500">Student at FPT University</p>
      </div>

      <hr className="border-t border-gray-200 mx-4 mb-2" />

      {/* Feature List */}
      <nav className="flex flex-col gap-1 px-2 pb-1">
        {featureList.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {item.icon}
            <span className="text-sm text-gray-700 font-medium">
              {item.name}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default ProfileAside;
