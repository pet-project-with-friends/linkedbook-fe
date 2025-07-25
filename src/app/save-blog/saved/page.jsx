import SavedBlogCard from "@/src/views/pages/save-blog/cards/SavedBlogCard";
import { Pagination } from "@mui/material";

const page = () => {
  return (
    <div className="w-full min-h-90 h-auto bg-boxColor rounded-xl p-[20px] flex flex-col gap-5 border_element">
      <h1 className="text-base font-bold text-title h-max">
        Your blog that you saved before
      </h1>
      <div className="w-full h-auto grid grid-cols-3 auto-rows-max gap-[1rem]">
        {Array.from(new Array(6)).map((_, idx) => (
          <SavedBlogCard key={idx} />
        ))}
      </div>
      <Pagination count={10} color="primary" className="flex justify-center" />
    </div>
  );
};

export default page;
