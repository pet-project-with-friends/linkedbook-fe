import { Avatar } from "@material-tailwind/react";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";

const CreateComment = (props) => {
  const textAreaRef = useRef(null);
  const [textField, setTextField] = useState("");

  const resizeTextArea = (value) => {
    if (textAreaRef.current) {
      if (value?.length === 0) {
        textAreaRef.current.style.height = "auto"; // Reset height to recalculate properly
      }
      textAreaRef.current.style.height = "auto"; // Reset height to recalculate properly
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set height to match content
    }
  };

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
          <textarea
            className="text-base text-des_text h-auto w-full resize-none overflow-hidden p-[20px] outline-0 break-words"
            ref={textAreaRef}
            value={textField}
            placeholder="Giving your comment here !...."
            onChange={(e) => {
              resizeTextArea(e.target.value);
              setTextField(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="w-full flex flex-row justify-end gap-5 absolute bottom-2 right-0 pr-[0.4rem]">
          <SendIcon
            sx={{ color: "#0a66c2", fontSize: "25px", cursor: "pointer" }}
            className="hover:scale-110 transition-all ease-linear duration-150"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
