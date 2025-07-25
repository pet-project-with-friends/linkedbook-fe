"use client";
import CreatePost from "@/src/@core/component/CreatePost";
import Article from "@/src/views/pages/home-page/cards/Artical";
import ConnectAside from "@/src/views/pages/home-page/cards/ConnectAside";
import PostBlog from "@/src/views/pages/home-page/cards/PostBlog";
import ProfileAside from "@/src/views/pages/home-page/cards/ProfileAside";
import ImageDialog from "@/src/views/pages/home-page/components/ImageDialog";
import { useEffect, useRef, useState } from "react";

const fakePosts = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
    },
    time: "5 minutes ago",
    text: "Đây là đoạn text mô tả bài viết của người dùng.",
    images: [
      { img: "https://picsum.photos/200/300?random=1" },
      { img: "https://picsum.photos/200/300?random=2" },
      { img: "https://picsum.photos/200/300?random=3" },
      { img: "https://picsum.photos/200/300?random=4" },
    ],
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: "https://docs.material-tailwind.com/img/face-3.jpg",
    },
    time: "10 minutes ago",
    text: "Một bài viết khác có ít hình ảnh hơn.",
    images: [
      { img: "https://picsum.photos/200/300?random=1" },
      { img: "https://picsum.photos/200/300?random=2" },
    ],
  },
];

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
  const closingPopupImage = () => {
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
          {fakePosts &&
            fakePosts.map((val) => (
              <Article key={val.id} openImage={openImagePopup} item={val} />
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
      <ImageDialog isOpen={popupImage} isClose={closingPopupImage} />
    </>
  );
}

export default HomePage;
