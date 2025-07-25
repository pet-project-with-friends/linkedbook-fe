"use client";
import { Avatar } from "@material-tailwind/react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReportIcon from "@mui/icons-material/Report";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function Page() {
  const [anchorEl, setAnchorEl] = useState(null);

  // ** Handler
  const horizonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHorizon = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" w-full grid grid-cols-2 auto-rows-auto gap-5 bg-boxColor rounded-xl border_element p-[20px]">
      {Array.from(new Array(4)).map((_, idx) => (
        <div
          key={idx}
          className="min-h-[8rem] p-[10px] max-h-[10rem] border_element flex justify-between items-center rounded-xl "
        >
          <div className="flex items-center gap-2">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="xxl"
              variant="rounded"
            />
            <p className="text-base text-title font-bold">Tan Nguyen</p>
          </div>
          <>
            <MoreHorizIcon
              className="cursor-pointer"
              onClick={(e) => horizonClick(e)}
            />

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeHorizon}
              PaperProps={{
                sx: {
                  borderRadius: 2,
                  boxShadow: "none",
                  minWidth: 280,
                  paddingY: 0.5,
                  border: "solid 2px #EEEEEE;",
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                onClick={closeHorizon}
                sx={{
                  alignItems: "flex-start",
                  gap: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Report"
                  secondary="Your friend will going to be reported"
                  primaryTypographyProps={{ fontWeight: 500 }}
                  secondaryTypographyProps={{
                    fontSize: 13,
                    color: "text.secondary",
                  }}
                />
              </MenuItem>

              <MenuItem
                onClick={closeHorizon}
                sx={{
                  alignItems: "flex-start",
                  gap: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <DeleteOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Remove"
                  secondary="Remove this friend from your friend list."
                  primaryTypographyProps={{ fontWeight: 500 }}
                  secondaryTypographyProps={{
                    fontSize: 13,
                    color: "text.secondary",
                  }}
                />
              </MenuItem>
            </Menu>
          </>
        </div>
      ))}
    </div>
  );
}

export default Page;
