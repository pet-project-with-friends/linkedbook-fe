"use client";
import Artical from "@/src/components/artical/page.jsx";
import ConnectAside from "@/src/components/connectAside/page.jsx";
import CreatePost from "@/src/components/createPost/page.jsx";
import PopupImage from "@/src/components/popupImage/page.jsx";
import PostBlog from "@/src/components/postBlog/page.jsx";
import ProfileAside from "@/src/components/profileAside/page.jsx";
import { useEffect, useRef, useState } from "react";

function HomePage() {
  const [showPost, setShowPost] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const [popupImage, setPopupImage] = useState(false);

  const scrollToContainer = useRef(null);
  const closePopup = () => {
    setShowPost(false);
  };
  const scrollToPostElement = () => {
    if (!scrollToContainer.current) {
      return;
    }
    scrollToContainer.current.scrollIntoView({ behavior: "smooth" });
  };

  // this is using for controlling the image popup of image
  const openImagePopup = () => {
    setPopupImage(true);
  };

  // this is using for closing the popup image of blog
  const closingPoupImage = () => {
    setPopupImage(false);
  };

  // cancel the scroll if modal is open
  // I wonder that we can use it into the redux
  useEffect(() => {
    if (popupImage || showPost) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [popupImage, showPost]);

  return (
    <>
      <section className="w-[80rem] flex justify-between py-10 ">
        <ProfileAside />
        <div className="w-[700px] flex flex-col items-center gap-5 ">
          <PostBlog
            setShowPost={setShowPost}
            setPopupType={setPopupType}
            scrollToContainer={scrollToContainer}
          />
          <hr className="h-px my-3 bg-gray-400  border-0 dark:bg-gray-700 w-5/6"></hr>
          {Array.from(new Array(5)).map((_, idx) => (
            <Artical key={idx} openImage={openImagePopup} />
          ))}
        </div>
        <ConnectAside triggerScroll={scrollToPostElement} />
      </section>
      <CreatePost
        showPost={showPost}
        type={popupType}
        closeTrigger={closePopup}
        popupType={setPopupType}
      />
      <PopupImage isOpen={popupImage} isClose={closingPoupImage} />
    </>
  );
}

export default HomePage;
