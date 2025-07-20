"use client";
import { UseCondition } from "@/src/hooks/useCondition.jsx";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";
import Masonry from "react-masonry-css";

const ImageDialog = ({ isOpen, isClose, images = [] }) => {
  const fakeImage = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=2",
  ];
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") isClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Define responsive breakpoints
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <UseCondition isTrue={isOpen}>
      <div
        onClick={(e) => {
          if (e.target.id === "container") isClose();
        }}
        id="container"
        className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center p-4"
      >
        <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-xl overflow-auto p-6">
          {/* Close Button */}
          <button
            onClick={isClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 z-50"
          >
            <CloseIcon fontSize="large" />
          </button>

          <h2 className="text-xl font-semibold text-center mb-4">
            Image Gallery
          </h2>

          {/* Masonry Layout */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {fakeImage?.map((src, index) => (
              <div key={index} className="mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={src}
                  alt={`image-${index}`}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </UseCondition>
  );
};

export default ImageDialog;
