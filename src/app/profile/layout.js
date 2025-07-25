"use client";
import useActions from "@/src/hooks/useAction";
import { useShallowSelectore } from "@/src/hooks/useShallowSelectore.js";
import { popupAction } from "@/src/redux/reducer/popupReducer";
import HerosProfile from "@/src/views/pages/profile/blog/card/HerosProfile";
import UserInfoDialog from "@/src/views/pages/profile/blog/dialogs/EditInforDialog";
import { useEffect } from "react";

export default function ProfileLayout({ children }) {
  // access to the redux store, get the state and using value of that state
  const { isOpen } = useShallowSelectore((state) => state.popup);
  const { popup } = useActions(popupAction);

  // cancel the scroll if modal is open
  // I wonder that we can use it into the redux ?
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  const setCloseEdit = () =>{
    popup(false)
  }

  return (
    <>
      <section className="w-full h-max flex flex-col items-center gap-5 ">
        <HerosProfile />
        <div className="w-[80rem] h-max flex justify-between pb-[2rem] ">
          {children}
        </div>
      </section>
      <UserInfoDialog open={isOpen} onClose={setCloseEdit}/>
    </>
  );
}
