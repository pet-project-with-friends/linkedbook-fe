"use client";
import HerosProfile from "@/src/components/herosProfile/page.jsx";

export default function ProfileLayout({ children }) {
  return (
    <section className="w-full h-max flex flex-col items-center gap-5 ">
      <HerosProfile />
      <div className="w-[80rem] h-max flex justify-center px-[5rem] pb-[2rem] ">
        {children}
      </div>
    </section>
  );
}
