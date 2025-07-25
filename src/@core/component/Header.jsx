"use client";

import logoImage from "@/src/Images/linkedinLogo.jpg";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Header() {
  const router = useRouter();
  const [searching, setSearching] = useState("");
  const [value, setValue] = useState("/homepage");

  const handleChange = (_, newValue) => {
    setValue(newValue);
    router.push(newValue);
  };

  const tabList = [
    {
      name: "Homepage",
      icon: <HomeIcon />,
      path: "/homepage",
    },
    {
      name: "Connection",
      icon: <PeopleIcon />,
      path: "/relationship/acceptList",
    },
    {
      name: "Notifications",
      icon: <NotificationsIcon />,
      path: "/profile/blog",
    },
  ];

  return (
    <header className="w-full h-16 shadow-sm bg-white border-b border-gray-200 flex justify-center">
      <div className="w-full max-w-[80rem] px-2 flex items-center justify-between">
        {/* Left - Logo & Search */}
        <div className="flex items-center gap-4">
          <img
            src={logoImage.src}
            alt="logo"
            className="h-10 w-10 rounded-md object-cover"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#edf3f8",
              borderRadius: 2,
              px: 1.5,
              py: 0.5,
              minWidth: "240px",
            }}
          >
            <SearchIcon sx={{ fontSize: 20, color: "gray" }} />
            <InputBase
              placeholder="Search"
              value={searching}
              onChange={(e) => setSearching(e.target.value)}
              sx={{
                ml: 1,
                flex: 1,
                fontSize: 14,
              }}
            />
          </Box>
        </div>

        {/* Right - Tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#0a66c2", // LinkedIn blue
              height: 3,
              borderRadius: 2,
            },
            "& .MuiTab-root": {
              minWidth: 100,
              textTransform: "none",
              fontWeight: 500,
              fontSize: 13,
              color: "gray",
              "&:hover": {
                color: "#0a66c2",
              },
            },
            "& .Mui-selected": {
              color: "#0a66c2",
            },
          }}
        >
          {tabList.map((item) => (
            <Tab
              key={item.path}
              icon={item.icon}
              label={item.name}
              value={item.path}
              iconPosition="top"
            />
          ))}
        </Tabs>
      </div>
    </header>
  );
}

export default Header;
