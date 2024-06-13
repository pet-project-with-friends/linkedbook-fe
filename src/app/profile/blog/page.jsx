"use client";
import Artical from "@/src/components/artical/page.jsx";
import CreatePost from "@/src/components/createPost/page.jsx";
import PostBlog from "@/src/components/postBlog/page.jsx";
import SidebarProfile from "@/src/components/sidebarProfile/page.jsx";
import { useState } from "react";
import Sticky from "react-stickynode";

function Page() {
  const [showPost, setShowPost] = useState(false);
  const [popupType, setPopupType] = useState(null);

  const closePopup = () => {
    setShowPost(false);
  };

  return (
    <div className="w-full flex gap-[1rem] ">
      <div className="flex-[4]">
        <Sticky top={20}>
          <SidebarProfile />
        </Sticky>
      </div>
      <div className="flex-[6] flex flex-col gap-5">
        <PostBlog setShowPost={setShowPost} setPopupType={setPopupType} />
        {Array.from(new Array(5)).map((_, idx) => (
          <Artical key={idx} />
        ))}
      </div>
      {/* popup */}
      <CreatePost
        showPost={showPost}
        type={popupType}
        closeTrigger={closePopup}
        popupType={setPopupType}
      />
    </div>
  );
}

export default Page;
