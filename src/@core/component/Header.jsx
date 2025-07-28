"use client";

import logoImage from "@/src/Images/linkedinLogo.jpg";
import { Avatar } from "@material-tailwind/react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, Popover, Tab, Tabs, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const mockNotifications = [
  {
    id: 1,
    title: "Nguyễn Văn A đã thích bài viết của bạn",
    time: "2 phút trước",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    title: "Trần Thị B đã gửi lời mời kết bạn",
    time: "10 phút trước",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    title: 'Lê C vừa bình luận: "Rất hay!"',
    time: "1 giờ trước",
    avatar: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    id: 4,
    title: 'Lê C vừa bình luận: "Rất hay!"',
    time: "1 giờ trước",
    avatar: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    id: 5,
    title: 'Lê C vừa bình luận: "Rất hay!"',
    time: "1 giờ trước",
    avatar: "https://randomuser.me/api/portraits/men/58.jpg",
  },
];

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [searching, setSearching] = useState("");
  const [value, setValue] = useState("/homepage");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopover, setOpenPopover] = useState(false);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    if (newValue) {
      setOpenPopover(false);
      router.push(newValue);
    }
  };

  useEffect(() => {
    setValue(pathname);
  }, [pathname]);

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
  ];

  return (
    <>
      <header className="w-full h-16 shadow-sm bg-white border-b border-gray-200 flex justify-center">
        <div className="w-full max-w-[80rem] px-4 flex items-center justify-between">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoImage.src}
              alt="logo"
              className="h-8 w-8 rounded object-cover"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#edf3f8",
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                minWidth: 200,
                height: 36,
              }}
            >
              <SearchIcon sx={{ fontSize: 18, color: "gray" }} />
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

          {/* Right: Tabs + Notification */}
          <div className="flex items-center gap-4">
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                minHeight: "unset",
                "& .MuiTabs-indicator": {
                  backgroundColor: "#0a66c2",
                  height: 3,
                  borderRadius: 2,
                },
                "& .MuiTab-root": {
                  minHeight: "unset",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: 13,
                  padding: "6px 12px",
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
                  key={item.name}
                  icon={item.icon}
                  label={item.name}
                  value={item.path}
                  iconPosition="top"
                  sx={{ paddingBottom: "2px" }}
                />
              ))}
            </Tabs>

            {/* Notification Button */}
            <Box
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
                setOpenPopover((prev) => !prev);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#f3f3f3",
                  cursor: "pointer",
                },
              }}
            >
              <NotificationsIcon sx={{ color: "#555" }} />
            </Box>
          </div>
        </div>
      </header>

      <Popover
        open={openPopover}
        anchorEl={anchorEl}
        onClose={() => setOpenPopover(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            mt: 1,
            width: 320,
            maxHeight: 400,
            overflowY: "auto",
            borderRadius: 2,
            boxShadow: 3,
            p: 1,
          },
        }}
      >
        <Typography sx={{ px: 1, fontWeight: 600, mb: 1 }}>
          Thông báo
        </Typography>
        {mockNotifications.map((noti) => (
          <Box
            key={noti.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              p: 1,
              borderRadius: 1.5,
              "&:hover": {
                backgroundColor: "#f0f2f5",
                cursor: "pointer",
              },
            }}
          >
            <Avatar src={noti.avatar} sx={{ width: 40, height: 40 }} />
            <Box>
              <Typography fontSize={14}>{noti.title}</Typography>
              <Typography fontSize={12} color="gray">
                {noti.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </Popover>
    </>
  );
}

export default Header;
