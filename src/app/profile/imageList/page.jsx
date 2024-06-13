import React from "react";

function Page() {
  return (
    <div className=" w-full min-h-screen grid grid-cols-5 content-start gap-2 bg-boxColor rounded-xl border_element p-[20px]">
      {Array.from(new Array(10)).map((_, idx) => (
        <div key={idx} className="rounded-xl h-[12rem] ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="image"
            className="w-full h-full rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}

export default Page;
