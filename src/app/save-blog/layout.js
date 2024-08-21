import SavedSideBar from "@/src/components/savedSidebar/page.jsx";

const layout = ({ children }) => {
  return (
    <section className="flex h-auto w-[90rem] py-10 gap-5 justify-center">
      <SavedSideBar />
      {children}
    </section>
  );
};

export default layout;
