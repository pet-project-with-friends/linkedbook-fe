"use client";
import backdropImage from "@/src/Images/friend.jpg";
import {
  Avatar,
  Button,
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

function HerosProfile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Blog");

  const listTabs = [
    { value: "Blog", path: "/profile/blog" },
    { value: "Friends", path: "/profile/friends" },
    { value: "Image", path: "/profile/imageList" },
  ];

  const handleClickTabs = (value, path) => {
    setActiveTab(value);
    // navigate to another page
    router.push(`${path}`, { scroll: false });
  };
  return (
    <div className="w-full h-auto flex justify-center bg-gradient-profile shadow-sm">
      <div className="w-[80rem] h-auto flex flex-col">
        {/* background image for user */}
        <div className="w-full h-[25rem]">
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={backdropImage.src}
            alt="background Image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* ending background image for user */}
        <div className="h-auto w-ful  flex flex-col">
          <div className="flex h-[10rem] w-full justify-between items-center px-10">
            <div className="h-max gap-3 flex">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                className="translate-y-[-25%] h-[10rem] w-[10rem] border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
              />
              <div className="w-max h-max flex flex-col mt-5">
                <p className="text-2xl text-title font-bold">Tan nguyen </p>
                <p className="text-base text-click_title">12n friend</p>
              </div>
            </div>
            <Button
              size="sm"
              className="text-base font-semibold bg-blue-gray-50 text-title flex items-center gap-2"
            >
              <EditIcon />
              edit your profile
            </Button>
          </div>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="w-[50%]">
            <Tabs value={activeTab}>
              <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                  className:
                    "bg-transparent border-b-2 border-buttonColor shadow-none rounded-none",
                }}
              >
                {listTabs.map(({ value, path }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => handleClickTabs(value, path)}
                    className={`${
                      activeTab === value ? "text-buttonColor" : ""
                    }  font-bold text-base`}
                  >
                    {value}
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HerosProfile;
