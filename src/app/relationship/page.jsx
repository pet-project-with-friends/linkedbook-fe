import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

function SideBar() {
  const listChoose = [
    {
      icon: <PersonSearchIcon sx={{ color: "#3f3f3f", fontSize: "20px" }} />,
      name: "Invitation",
    },
    {
      icon: <PersonAddIcon sx={{ color: "#3f3f3f", fontSize: "20px" }} />,
      name: "Suggest",
    },
    {
      icon: <PeopleIcon sx={{ color: "#3f3f3f", fontSize: "20px" }} />,
      name: "Current Friend",
    },
  ];
  return (
    <div className="flex-[2] h-full flex flex-col bg-boxColor shadow-xl">
      <h1 className="text-xl font-bold text-title w-full pl-[0.2rem]">
        Friend
      </h1>
      <div className="h-auto w-full flex flex-col">
        {listChoose.map((vl, idx) => (
          <div
            key={idx}
            className="w-full cursor-pointer px-2 py-2 flex items-center justify-start gap-2 hover:bg-blue-gray-50"
          >
            <div className="rounded-full h-[2rem] w-[2rem] flex items-center justify-center bg-click_title">
              {vl.icon}
            </div>
            <p className="h-max w-max text-xl text-title">{vl.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
