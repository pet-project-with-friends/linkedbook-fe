"use client";
import { store } from "@/src/redux/store.js";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";
import Header from "../components/header/page.jsx";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={`${roboto.className} flex flex-col`}>
          <Header />
          <div className="w-full min-h-screen h-max flex justify-center bg-backdrop">
            {children}
          </div>
        </body>
      </html>
    </Provider>
  );
}
