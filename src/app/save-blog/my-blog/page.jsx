import MyBlogCard from "@/src/components/myblogCard/page.jsx";
import SavedBlogCard from "@/src/components/savedBlogCard/page.jsx";
import { Pagination } from "@mui/material";

const page = () => {
  return (
    <div className="w-[60%] min-h-90 h-auto bg-boxColor rounded-xl p-[20px] flex flex-col gap-5 border_element">
      <h1 className="text-base font-bold text-title h-max">
        Your blog that you created
      </h1>
      <div className="w-full h-auto grid grid-cols-1 gap-[1rem]">
        {Array.from(new Array(4)).map((_, idx) => (
          <MyBlogCard key={idx} />
        ))}
      </div>
      <Pagination count={10} color="primary" className="flex justify-center" />
    </div>
  );
};

export default page;
