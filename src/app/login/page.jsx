"use client";
import InputField from "@/src/components/inputField/page.jsx";
import Link from "next/link.js";
import { useState } from "react";

function Login() {
  const [valueFeild, setValueFeild] = useState({
    userName: null,
    password: null,
  });

  const [cancel, setCancel] = useState(null);

  const onSignIn = () => {
    if (cancel || Object.values(valueFeild).every((value) => value === null)) {
      console.log("pls check all field");
      return;
    }
    console.log("call api here");
  };

  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center bg-boxColor">
      <div className="w-[352px] p-[24px] rounded-xl shadow-2xl flex flex-col items-center justify-center gap-5">
        <div className="w-full flex flex-col items-start justify-center">
          <h1 className="text-[40px]">Sign in</h1>
          <p className="text-[14px]">Stay updated on your professinal would</p>
        </div>
        <form className="w-full h-auto flex flex-col gap-1">
          <InputField
            setValueFeild={setValueFeild}
            valueFeild={valueFeild}
            setCancel={setCancel}
          />
          <div className="flex flex-col justify-start gap-4">
            <a
              className="inline-block align-baseline font-bold text-sm text-buttonColor hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
            <button
              className="bg-buttonColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => onSignIn()}
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-[10px] relative after:absolute after:h-[1px] after:w-32 after:bg-blue-300 after:left-5 after:top-1/2 before:absolute before:h-[1px] before:w-32 before:bg-blue-300 before:right-5 before:top-1/2">
          or
        </p>
      </div>
      <div>
        <p className="text-[14px] ">
          New to linkein ?{" "}
          <Link
            href="/register"
            className="text-[16px] text-buttonColor font-bold text-center"
          >
            Join now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
