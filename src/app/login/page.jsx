"use client";
import InputField from "@/components/inputField/page.jsx";
import { Button } from "@material-tailwind/react";
import Link from "next/link.js";

function Login() {
  return (
    <div className="w-full h-screen flex flex-col gap-10 items-center justify-center bg-boxColor">
      <div className="w-[352px] p-[24px] rounded-xl shadow-2xl flex flex-col items-center justify-center gap-5">
        <div className="w-full flex flex-col items-start justify-center">
          <h1 className="text-[40px]">Sign in</h1>
          <p className="text-[14px]">Stay updated on your professinal would</p>
        </div>
        <form className="w-full h-auto ">
          <InputField />
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
            >
              Sign In
            </button>
          </div>
        </form>
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
