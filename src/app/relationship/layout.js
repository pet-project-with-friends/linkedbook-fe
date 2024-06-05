import SideBar from "@/src/components/relationshipSidebar/page.jsx";

export default function SidebarLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex h-auto w-[90rem] py-10 gap-5 justify-center">
      <SideBar />   
      {children}
    </section>
  );
}
