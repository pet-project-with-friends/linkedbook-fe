"use client";
import InputField from "@/src/components/inputField/page.jsx";
import { Button } from "@material-tailwind/react";
import Link from "next/link.js";
import React from "react";

function Register() {
  return (
    <div className="bg-backdrop w-full h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-[40px] max-w-fit">
        Make the most of your professional life
      </h1>
      <div className="w-[352px] p-[24px] bg-boxColor rounded-xl shadow-2xl flex flex-col items-center justify-center gap-5">
        <form className="w-full h-auto ">
          <InputField />
        </form>
        <button
          className="w-full bg-buttonColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign Up
        </button>
        <p className="text-[10px] relative after:absolute after:h-[1px] after:w-32 after:bg-blue-300 after:left-5 after:top-1/2 before:absolute before:h-[1px] before:w-32 before:bg-blue-300 before:right-5 before:top-1/2">
          or
        </p>
        <Button
          size="sm"
          variant="outlined"
          color="blue-gray"
          className="flex justify-center items-center gap-3 w-full rounded-xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>
        <p className="text-[14px] ">
          Allready to linkein ?{" "}
          <Link
            href="/login"
            className="text-[16px] text-purple font-bold text-center"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
