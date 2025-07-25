import SideBar from "@/src/views/pages/relationship/cards/SideBar";
import { Box } from "@mui/material";

export default function SidebarLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="flex h-fit w-[80rem] py-10 gap-5 justify-between flex-row">
      <SideBar />
      <Box sx={{ display: "flex", flex: 3, width: "100%" }}>{children}</Box>
    </section>
  );
}
