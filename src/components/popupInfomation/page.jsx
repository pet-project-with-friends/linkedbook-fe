"use client";

import useActions from "@/src/hooks/useAction.js";
import { UseCondition } from "@/src/hooks/useCondition.jsx";
import { popupAction } from "@/src/redux/reducer/popupReducer.js";
import { isValidName, isVietnamesePhoneNumber } from "@/src/utils/index.js";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const EditInforPopup = ({ open }) => {
  const { popup } = useActions(popupAction);
  const [inputField, setInputField] = useState({
    fullName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    location: "",
    currentLocation: "",
  });

  // handle Error
  const [errorField, seterrorField] = useState({
    fullName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    location: "",
    currentLocation: "",
  });

  const listInput = [
    {
      name: "fullName",
      value: inputField.fullName,
      isReading: false,
    },
    {
      name: "gender",
      value: inputField.gender,
      isReading: false,
    },
    {
      name: "phoneNumber",
      value: inputField.phoneNumber,
      isReading: false,
    },
    {
      name: "email",
      value: inputField.email,
      isReading: true,
      required: true,
    },
    {
      name: "location",
      value: inputField.location,
      isReading: false,
    },
    {
      name: "currentLocation",
      value: inputField.currentLocation,
      isReading: false,
    },
  ];

  //validation input func
  const validationFullName = (val) => {
    if (!isValidName(val)) {
      return "Name must contain 3-30 character without special character";
    }
    return "";
  };

  const validationEmail = (val) => {
    if (!isEmailValid(val)) {
      return "Email is not valid";
    }
    return "";
  };

  const validationPhoneNumber = (val) => {
    if (!isVietnamesePhoneNumber(val)) {
      return "Number phone is not correct";
    }
  };

  const validationLoaction = (val) => {
    if (val.length < 3 || val.length > 200) {
      return "Location must contain 3-200 characters";
    }
    return "";
  };

  const validationGender = (val) => {
    if (val.length < 3 || val.length > 50) {
      return "Gender must contain 3-50 characters";
    }
    return "";
  };
  // ending validation input func

  //   check all field in one time and then showing to the screen
  //   can we do something to optimism this code
  const validationAllField = (index, val) => {
    if (index === "fullName") {
      seterrorField((prv) => ({ ...prv, fullName: validationFullName(val) }));
    }
    if (index === "gender") {
      seterrorField((prv) => ({ ...prv, gender: validationGender(val) }));
    }
    if (index === "email") {
      seterrorField((prv) => ({ ...prv, email: validationEmail(val) }));
    }
    if (index === "phoneNumber") {
      seterrorField((prv) => ({
        ...prv,
        phoneNumber: validationPhoneNumber(val),
      }));
    }
    if (index === "location") {
      seterrorField((prv) => ({ ...prv, location: validationLoaction(val) }));
    }
    if (index === "currentLocation") {
      seterrorField((prv) => ({
        ...prv,
        currentLocation: validationLoaction(val),
      }));
    }
  };

  //  onchange txt while input
  const changeTxt = (e) => {
    const { name, value } = e.target;
    setInputField((prv) => ({ ...prv, [name]: value }));
    validationAllField(name, value);
  };

  // cheking if user click on right place
  const closePopup = (e) => {
    if (e.target.id === "container") {
      popup(false);
    }
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let index in errorField) {
      return errorField[index];
    }
    console.log("no error");
    popup(false);
  };

  return (
    <>
      <UseCondition isTrue={open}>
        <div
          onClick={(e) => closePopup(e)}
          id="container"
          className="fixed pt-5 inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center "
        >
          <div className="p-[20px] min-h-[10rem] h-max w-[727px] bg-boxColor rounded-xl flex flex-col justify-start gap-2">
            <form
              onSubmit={handleSubmit}
              className="w-full h-max flex flex-col gap-3"
            >
              {listInput.map((val, idx) => (
                <div
                  key={idx}
                  className="w-full flex flex-col gap-1 items-start"
                >
                  <p className="font-bold text-base text-title">{val.name}</p>
                  <div className="w-full h-[2rem] rounded-md border_element">
                    <input
                      type="text"
                      value={val.value}
                      name={val.name}
                      readOnly={val.isReading}
                      className="w-full h-full rounded-md outline-none border-none pl-[0.5rem] text-sm text-title"
                      onChange={(e) => changeTxt(e)}
                    />
                  </div>
                  {errorField[val.name] !== "" && (
                    <span className="text-error_txt text-sm">
                      {errorField[val.name]}
                    </span>
                  )}
                </div>
              ))}
              <div className=" flex justify-end w-full gap-5">
                <Button
                  variant="outlined"
                  className=" border-none py-2 px-3  text-sm font-bold flex items-center justify-center gap-2 bg-cancel_button text-white"
                >
                  CANCEL
                </Button>
                <Button
                  variant="outlined"
                  className=" border-none py-2 px-3  text-sm font-bold flex items-center justify-center gap-2 bg-active_button text-white"
                >
                  SAVE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </UseCondition>
    </>
  );
};

export default EditInforPopup;
