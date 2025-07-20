"use client";
import fakeImage from "@/src/Images/writing.jpg";
import { Button } from "@material-tailwind/react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimerIcon from "@mui/icons-material/Timer";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const MyBlogCard = () => {
  // return random color to make the color of ui
  const randomCorlor = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const listCorlor = ["#254336", "#6B8A7A", "#4F6F52", "#1A4D2E"];

  return (
    <div className="w-full h-[14rem] flex gap-[1rem] rounded-sm border_element shadow-sm p-[0.5rem]">
      {/* image background */}
      <div
        className="h-full max-w-[20rem] w-[20rem] flex-shrink-0 bg-top bg-cover bg-no-repeat rounded-sm relative group cursor-pointer"
        style={{ backgroundImage: `url(${fakeImage.src})` }}
      >
        <span
          className="absolute left-0 top-5 p-[0.1rem_1rem] bg-buttonColor rounded-r-xl group-hover:pl-[2rem] cursor-pointer transition-all duration-700 ease-in-out"
          style={{ backgroundColor: `${randomCorlor(listCorlor)}` }}
        >
          <p className="text-base text-white font-bold">Tên tác giả</p>
        </span>
      </div>
      {/*ending image background */}

      {/* content layout */}
      <div className="h-full w-full flex flex-1 flex-col p-2">
        <div className="w-full flex gap-5 mb-2">
          <div className="flex gap-2 w-max items-center">
            <AccessTimeIcon className="text-[1.5rem] text-active_button" />
            <p className="text-sm text-active_button font-bold">26/12/2001</p>
          </div>
          <div className="flex gap-2 w-max items-center">
            <TimerIcon className="text-[1.5rem] text-buttonColor" />
            <p className="text-sm text-buttonColor font-bold">1 Min Read</p>
          </div>
        </div>
        <div className="w-full h-max">
          <p className="line-clamp-4 break-words text-sm text-small_text">
            this is text talk about the blog that contain into another one when
            i try to access new about something special and in this case I
            allways want to be fresher frontend developer and now this is time i
            want to be good understanding all of the structure of this base.
            this is text talk about the blog that contain into another one when
            i try to access new about something special and in this case I
            allways want to be fresher frontend developer and now this is time i
            want to be good understanding all of the structure of this base.
          </p>
        </div>
        <div className="w-full h-[2rem] flex justify-between gap-5 mt-[auto]">
          <AcUnitIcon className="text-[1.5rem] text-[#219C90]" />
          <Button
            variant="outlined"
            className="py-1 px-1 text-active_button text-sm flex items-center justify-center border-active_button"
          >
            View more
          </Button>
        </div>
      </div>
      {/*ending content layout */}
    </div>
  );
};

export default MyBlogCard;
