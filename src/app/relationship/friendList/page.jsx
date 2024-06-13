import CardProfile from "@/src/components/cardProfile/page.jsx";
import { Pagination } from "@mui/material";
import SidebarLayout from "../layout.js";

export default function page() {
  let typeButton = "friend";
  return (
    <div className="w-[60%] min-h-90 h-auto bg-boxColor rounded-xl p-[20px] flex flex-col gap-5 border_element ">
      <h1 className="text-base font-bold text-title h-max">All your friend</h1>
      <div className="flex flex-col w-full h-auto gap-3">
        <div className="grid grid-cols-4 auto-rows-fr gap-5 w-full min-h-[30rem] h-auto">
          {Array.from(new Array(8)).map((_, idx) => (
            <CardProfile key={idx} buttonType={typeButton} />
          ))}
        </div>
        <Pagination
          count={10}
          color="primary"
          className="flex justify-center"
        />
      </div>
    </div>
  );
}
