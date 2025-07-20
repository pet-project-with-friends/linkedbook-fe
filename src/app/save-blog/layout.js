import SavedSideBar from "@/src/views/pages/save-blog/cards/SavedSidebar";

const layout = ({ children }) => {
  return (
    <section className="flex h-auto w-[90rem] py-10 gap-5 justify-center">
      <SavedSideBar />
      {children}
    </section>
  );
};

export default layout;
