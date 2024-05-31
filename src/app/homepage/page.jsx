"use client";
import Artical from "@/src/components/artical/page.jsx";
import ConnectAside from "@/src/components/connectAside/page.jsx";
import CreatePost from "@/src/components/createPost/page.jsx";
import PostBlog from "@/src/components/postBlog/page.jsx";
import ProfileAside from "@/src/components/profileAside/page.jsx";
import { useState } from "react";

function HomePage() {
  const [showPost, setShowPost] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const closePopup = () => {
    setShowPost(false);
  };

  return (
    <>
      <section className="w-full flex justify-center gap-5 bg-backdrop py-10">
        <ProfileAside />
        <div className="w-[555px] flex flex-col items-center gap-5">
          <PostBlog setShowPost={setShowPost} setPopupType={setPopupType} />
          {Array.from(new Array(5)).map((_, idx) => (
            <Artical key={idx} />
          ))}
        </div>
        <ConnectAside />
      </section>
      <CreatePost
        showPost={showPost}
        type={popupType}
        closeTrigger={closePopup}
        popupType={setPopupType}
      />
    </>
  );
}

export default HomePage;
