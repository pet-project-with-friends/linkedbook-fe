"use client";
import fakeImage from "@/src/Images/writing.jpg";
import { Button } from "@material-tailwind/react";

const SavedBlogCard = () => {
  // return random color to make the color of ui
  const randomCorlor = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const listCorlor = ["#254336", "#6B8A7A", "#4F6F52", "#1A4D2E"];

  return (
    <div className="grid grid-rows-subgrid row-span-3  gap-0 rounded-md shadow-sm border-solid border-border_element border-[1px]">
      {/* image */}
      <div
        className="w-full max-h-[20rem] h-[8rem] bg-no-repeat bg-top bg-cover  rounded-t-md relative group cursor-pointer"
        style={{
          backgroundImage: `url(${fakeImage.src})`,
          borderImage: "fill 0 linear-gradient(#0001, #000)",
        }}
      >
        <span
          className="absolute left-0 bottom-5 p-[0.1rem_1rem] bg-buttonColor rounded-r-xl group-hover:pl-[2rem] cursor-pointer transition-all duration-700 ease-in-out"
          style={{ backgroundColor: `${randomCorlor(listCorlor)}` }}
        >
          <p className="text-base text-white font-bold">Tên tác giả</p>
        </span>
      </div>
      {/*ending image */}

      {/* content */}
      <div className="w-full h-max p-[10px] ">
        <p className="text-sm text-small_text text-center break-words">
          hello everybody today i will showing this text and all i want is to be
          the good thing than i ever try before dont be stupid.
        </p>
      </div>
      {/*ending content */}

      {/* btn space */}
      <div className="w-full h-max flex justify-center p-[10px] ">
        <Button
          variant="outlined"
          className="py-1 px-1 text-active_button text-sm flex items-center justify-center border-active_button"
        >
          View more
        </Button>
      </div>
      {/*ending btn space */}
    </div>
  );
};

export default SavedBlogCard;
