"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";

function InputField({
  register = false,
  setValueFeild,
  valueFeild,
  setCancel,
}) {
  const [showText, setShowText] = useState(false);
  const [error, setError] = useState({
    email: "",
    userName: "",
    password: "",
    repassword: "",
  });

  // show and hide password
  const handleShowText = () => {
    setShowText((prev) => !prev);
  };

  const listRegister = [
    {
      name: "Email",
      id: "email",
      type: "text",
      error: error.email || "",
    },
    {
      name: "User Name",
      id: "userName",
      type: "text",
      error: error.userName || "",
    },
    {
      name: "Password",
      id: "password",
      type: "password",
      error: error.password || "",
    },
    {
      name: "Repassword",
      id: "repassword",
      type: "password",
      error: error.repassword || "",
    },
  ];

  const listSignIn = [
    {
      name: "User Name",
      id: "userName",
      type: "text",
      error: error.userName || "",
    },
    {
      name: "Password",
      id: "password",
      type: "password",
      error: error.password || "",
    },
  ];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // vlaidation when typing
  const onChangeField = (value, key) => {
    setValueFeild((prev) => ({ ...prev, [key]: value }));
  };

  const validationField = (value) => {
    let errors = {};

    if (value?.email !== null && !emailRegex.test(value?.email)) {
      errors.email = "Email is not correct form";
    }

    if (value?.userName !== null && value?.userName.length > 20) {
      errors.userName = "User name must contain in 5 to 20 characters";
    }

    if (
      value?.password !== null &&
      !(
        value?.password.length >= 8 &&
        /[a-z]/.test(value.password) &&
        /[A-Z]/.test(value.password) &&
        /\d/.test(value.password)
      )
    ) {
      errors.password =
        "Password must contain both uppercase lowercase and number, and at least 8 characters";
    }

    if (value?.repassword !== null && value?.repassword !== value?.password) {
      errors.repassword = "Repassword must match";
    }

    setError(Object.keys(errors).length > 0 ? errors : "");
    setCancel(Object.keys(errors).length > 0);
  };

  useEffect(() => {
    validationField(valueFeild);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueFeild]);

  return (
    <>
      {(register ? listRegister : listSignIn).map((vl, idx) => (
        <div key={idx}>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={vl.id}
          >
            {vl.name}
          </label>
          {vl.name === "Password" || vl.name === "Repassword" ? (
            <>
              <div
                className={`shadow appearance-none border ${
                  vl.error !== "" ? "border-red-500" : ""
                }  rounded w-full text-gray-700  mb-3 focus:outline-none focus:shadow-outline flex items-center h-max`}
              >
                <input
                  className="flex-[4] rounded px-3 h-full text-gray-700 leading-tight py-2 focus:outline-none focus:shadow-outline"
                  id={vl.id}
                  type={showText ? "text" : "password"}
                  placeholder={vl.name}
                  onChange={(e) => onChangeField(e.target.value, vl.id)}
                />
                {showText ? (
                  <RemoveRedEyeIcon
                    className="flex-[1] cursor-pointer"
                    onClick={() => handleShowText()}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="flex-[1] cursor-pointer"
                    onClick={() => handleShowText()}
                  />
                )}
              </div>
              <p className="text-red-500 text-sm italic">{vl.error}</p>
            </>
          ) : (
            <>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  vl.error !== "" ? "border-red-500" : ""
                } `}
                id={vl.id}
                type={vl.type}
                placeholder={vl.name}
                onChange={(e) => onChangeField(e.target.value, vl.id)}
              />
              <p className="text-red-500 text-sm italic">{vl.error}</p>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default InputField;
