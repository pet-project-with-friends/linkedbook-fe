"use client";
import { Avatar, Button } from "@material-tailwind/react";
import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function CardProfile({ buttonType }) {
  return (
    <div className="border-solid border-border_element border-[1px] min-h-56 max-h-56 flex flex-col justify-between gap-1 rounded-xl pb-2 ">
      <div className="flex flex-col w-full h-32 relative">
        <div className="flex-[1] bg-gradient-to-r from-[#a0b4b7] to-[#c2d8db] rounded-t-xl"></div>
        <div className="flex-[1]"></div>
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-24 w-24 "
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-title text-base font-bold">Tan Nguyen</h1>
        <p className="text-sm text-small_text">nguyen@gmail.com</p>
      </div>
      <div className="w-full flex items-center justify-center">
        {buttonType === "suggess" ? (
          <div className="w-full flex justify-center gap-2 items-center ">
            <Button
              variant="outlined"
              className="py-1 px-1 text-cancel_button text-sm flex items-center justify-center gap-1 border-cancel_button"
            >
              <CancelIcon sx={{ color: "#eb0014", fontSize: "20px" }} />
              Refuse
            </Button>
            <Button
              variant="outlined"
              className="py-1 px-1 text-active_button text-sm flex items-center justify-center gap-1 border-active_button"
            >
              <CheckCircleIcon sx={{ color: "#238766", fontSize: "20px" }} />
              Accept
            </Button>
          </div>
        ) : (
          <Button
            variant="outlined"
            className={`border-solid border-buttonColor border-[1px] py-2 px-3 w-3/4 text-buttonColor text-sm font-bold flex items-center justify-center gap-2 ${
              buttonType === "friend" ? "bg-active_button text-white" : ""
            }`}
          >
            {buttonType === "accept" ? (
              <>
                <PersonAddIcon sx={{ color: "#0a66c2", fontSize: "20px" }} />
                Connect
              </>
            ) : buttonType === "friend" ? (
              <>View</>
            ) : (
              ""
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

export default CardProfile;
