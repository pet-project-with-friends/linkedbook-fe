"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "@/src/redux/store.js";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full min-h-screen h-auto flex justify-center bg-backdrop">
            {children}
          </div>
        </body>
      </html>
    </Provider>
  );
}
