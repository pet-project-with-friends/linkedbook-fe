import SavedSideBar from "@/src/views/pages/save-blog/cards/SavedSidebar";
import { Box } from "@mui/material";

const layout = ({ children }) => {
  return (
    <section className="flex h-fit w-[80rem] py-10 gap-5 justify-between flex-row">
      <SavedSideBar />
      <Box sx={{ display: "flex", flex: 3, width: "100%" }}>{children}</Box>
    </section>
  );
};

export default layout;
