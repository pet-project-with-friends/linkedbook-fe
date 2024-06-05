"use client";
import logoImage from "@/src/Images/logo.svg";

function FootSidebar() {
  const listFeature = [
    {
      name: "About",
      path: null,
    },
    {
      name: "Accessibility",
      path: null,
    },
    {
      name: "Help center",
      path: null,
    },
    {
      name: "Ad choice",
      path: null,
    },
    {
      name: "Advertising",
      path: null,
    },
    {
      name: "Get the Linkedin app",
      path: null,
    },
    {
      name: "More",
      path: null,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full px-5 flex flex-wrap justify-center">
        {listFeature.map((vl, idx) => (
          <div
            key={idx}
            className="px-2 hover:underline hover:text-buttonColor cursor-pointer text-small_text text-sm"
          >
            {vl.name}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center gap-2 items-center ">
        <div className="w-[3.25rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoImage.src} alt="Logo" className="object-cover w-full" />
        </div>
        <p className=" text-small_text text-sm">LinkedIn Corporation © 2024</p>
      </div>
    </div>
  );
}

export default FootSidebar;
