import { Avatar } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";

const CreateComment = (props) => {
  const textAreaRef = useRef(null);
  const [textField, setTextField] = useState("");

  // ! In this line must fix the error:
  // !- When user try to clear all text -> the text box not resize to default size
  const resizeTextArea = () => {
    if (!textAreaRef.current) {
      return;
    }
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);
  }, []);

  return (
    <div className="w-full min-h-[10rem] flex flex-row  gap-2">
      <div className="h-max w-max shrink-0">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          size="lg"
        />
      </div>
      <div className="grow h-full p-[0.4rem] rounded-xl border-solid border-backdrop border-2 relative">
        <div className="w-full h-auto">
          {/* 
          //!In this tag must fix:
          //!- Making the line that splice the comment and the post in the upper body
          */}
          <textarea
            className="text-base text-des_text h-auto w-full resize-none overflow-hidden p-[20px] outline-0 break-words "
            ref={textAreaRef}
            value={textField}
            placeholder="Giving your comment here !...."
            onChange={(e) => {
              resizeTextArea();
              setTextField(e.target.value);
            }}
          >
          </textarea>
        </div>
        {/* 
        //!- Adding more button to send the post to comment list (ongoing)
        */}
        <div className="w-full flex flex-row justify-end gap-5 absolute bottom-0">
          <div className="border-solid border-black border-2"></div>
          <div className="border-solid border-black border-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
