"use client";
import logoImage from "@/src/Images/linkedinLogo.jpg";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import { Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/navigation.js";
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
      name: (
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          Homepage
        </Typography>
      ),
      icon: <HomeIcon />,
      path: "/homepage",
    },
    {
      name: (
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          Connection
        </Typography>
      ),
      icon: <PeopleIcon />,
      path: "/relationship/acceptList",
    },
    {
      name: (
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          Notifications
        </Typography>
      ),
      icon: <NotificationsIcon />,
      path: "/profile/blog",
    },
  ];
  return (
    <header className="w-full h-[4rem] bg-boxColor border_element flex justify-center">
      <div className="w-[80rem] h-full flex items-center justify-between">
        {/* searching */}
        <div className="h-[50%] flex items-center gap-2">
          <div className="h-full w-[2rem]">
            {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
            <img
              src={logoImage.src}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-md h-full min-w-[15rem] bg-[#edf3f8] flex items-center gap-1 px-1">
            <SearchIcon />
            <input
              className="focus:outline-none focus:shadow-outline h-full text-base"
              style={{
                background: "none",
              }}
              type="text"
              placeholder="Searching"
              value={searching}
              onChange={(e) => setSearching(e.target.value)}
            />
          </div>
        </div>
        {/* ending searching */}

        {/* tab ui */}
        <div className="h-full flex ">
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#3f3f3f",
                height: "2px",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#3f3f3f",
              },
            }}
            aria-label="icon label tabs example"
          >
            {tabList.map((vl, idx) => (
              <Tab key={idx} icon={vl.icon} label={vl.name} value={vl.path} />
            ))}
          </Tabs>
        </div>
        {/* end tab ui */}
      </div>
    </header>
  );
}

export default Header;
