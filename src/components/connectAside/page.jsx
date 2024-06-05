import { Avatar, Button } from "@material-tailwind/react";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import writingImage from "@/src/Images/writing.jpg";
import FootSidebar from "../footSidebar/page.jsx";

function ConnectAside() {
  return (
    <div className="w-[300px] h-auto flex flex-col gap-4">
      <div className="w-full min-h-40 rounded-xl bg-boxColor flex flex-col gap-3 p-[20px] border-solid border-border_element border-[2px]">
        <h1 className="w-full text-base font-bold text-title">
          Add to your feed
        </h1>
        <div className="w-full flex flex-col gap-3">
          {Array.from(new Array(4)).map((_, idx) => (
            <div key={idx} className="w-full flex justify-start gap-2 ">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="md"
              />

              <div className="flex flex-col gap-1">
                <p className="text-base font-bold text-title">Tan Nguyen</p>
                <p className="text-sm text-small_text">nguyen@gmail.com</p>
                <Button
                  className="py-1 px-3 text-sm rounded-2xl flex items-center gap-2 text-click_title"
                  variant="outlined"
                >
                  <AddIcon sx={{ color: "#9a95a7", fontSize: "20px" }} />
                  Adding
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center w-10/12 gap-1 py-1 px-1 rounded-sm hover:bg-blue-gray-50 cursor-pointer">
          <p className="text-sm text-click_title font-bold">
            View all recommendations
          </p>
          <ArrowRightAltIcon sx={{ color: "black", fontSize: "20px" }} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 sticky top-5 ">
        <div className="w-full min-h-52 rounded-xl bg-boxColor flex flex-col items-center gap-4 p-[20px] border-solid border-border_element border-[2px]">
          <p className="text-small_text text-sm text-center ">
            More post more chance, writing your own post and sharing to all
            people.
          </p>
          <div className="w-full flex justify-center gap-2">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="xl"
            />
            <Avatar src={writingImage.src} alt="avatar" size="xl" />
          </div>
          <p className="text-click_title text-base">
            Tan Nguyen, lets finish your post
          </p>
          <div className="w-full flex justify-center">
            <Button
              className="border-solid border-buttonColor border-[1px] py-2 px-10 text-sm rounded-2xl text-buttonColor font-bold"
              variant="outlined"
            >
              Finish my post
            </Button>
          </div>
        </div>
        <FootSidebar />
      </div>
    </div>
  );
}

export default ConnectAside;
