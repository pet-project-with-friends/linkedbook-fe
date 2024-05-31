import PanoramaIcon from "@mui/icons-material/Panorama";
import { Avatar } from "@mui/material";

function PostBlog({ setShowPost, setPopupType }) {
  const handlePopup = (e) => {
    setShowPost(true);
    if (e.currentTarget.id === "post") {
      setPopupType("post");
    } else {
      setPopupType("image");
    }
  };
  return (
    <div className="w-full px-[20px] pt-4 pb-2 bg-boxColor rounded-xl flex flex-col gap-2">
      <div className="w-full h-10 flex items-center justify-center gap-2">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          size="md"
        />
        <div
          id="post"
          onClick={(e) => handlePopup(e)}
          className="w-full h-11 bg-boxColor cursor-pointer rounded-2xl flex items-center pl-2 hover:bg-[#f7f7f7] border-solid border-border_box border-[1px]"
        >
          <p className="text-base text-title font-medium">Start a post here</p>
        </div>
      </div>
      <div className="w-full pl-10">
        <div
          id="image"
          onClick={(e) => handlePopup(e)}
          className="flex w-24 gap-2 py-2 px-2 hover:bg-blue-gray-50 items-end cursor-pointer"
        >
          <PanoramaIcon sx={{ color: "#0a66c2", fontSize: "25px" }} />
          <p className="text-base text-title">Media</p>
        </div>
      </div>
    </div>
  );
}

export default PostBlog;
