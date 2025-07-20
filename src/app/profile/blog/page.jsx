"use client";

import Article from "@/src/@core/component/Ariticle";
import CreatePost from "@/src/@core/component/CreatePost";
import PostBlog from "@/src/views/pages/profile/blog/card/PostBlog";
import SidebarProfile from "@/src/views/pages/profile/blog/card/SidebarProfile";
import { useState } from "react";
import Sticky from "react-stickynode";

function Page() {
  const [showPost, setShowPost] = useState(false);
  const [popupType, setPopupType] = useState(null);

  const closePopup = () => {
    setShowPost(false);
  };

  return (
    <div className="w-full flex gap-[1rem]">
      <div className="flex-[4]">
        <Sticky top={20}>
          <SidebarProfile />
        </Sticky>
      </div>
      <div className="flex-[6] flex flex-col gap-5">
        <PostBlog setShowPost={setShowPost} setPopupType={setPopupType} />
        {Array.from(new Array(5)).map((_, idx) => (
          <Article key={idx} />
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
