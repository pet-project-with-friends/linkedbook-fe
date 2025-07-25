"use client";
import React, { useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useMediaQuery,
  Slide,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const fakeImage = [
  "https://picsum.photos/400/600?random=1",
  "https://picsum.photos/400/600?random=2",
  "https://picsum.photos/400/600?random=3",
  "https://picsum.photos/400/600?random=4",
  "https://picsum.photos/400/600?random=5",
  "https://picsum.photos/400/600?random=6",
  "https://picsum.photos/400/600?random=7",
  "https://picsum.photos/400/600?random=8",
  "https://picsum.photos/400/600?random=9",
  "https://picsum.photos/400/600?random=10",
];

const ImageArtGrid = ({ isOpen, isClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Image preview dialog state
  const [previewImage, setPreviewImage] = useState(null);

  const handleClose = () => {
    setPreviewImage(null);
  };

  const handleOpenPreview = (urlImage) => {
    setPreviewImage(urlImage);
  };
  // **Hook
  const layout = useMemo(() => {
    return fakeImage.map(() => {
      const colSpan = [1, 2][Math.floor(Math.random() * 2)];
      const rowSpan = [1, 2][Math.floor(Math.random() * 2)];
      return { colSpan, rowSpan };
    });
  }, []);

  return (
    <>
      {/* Gallery Dialog */}
      <Dialog
        open={isOpen}
        onClose={isClose}
        fullScreen={fullScreen}
        maxWidth="lg"
        PaperProps={{
          style: {
            borderRadius: 20,
            background: "white",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
            maxHeight: "85vh",
            minHeight: "60vh",
          },
        }}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0,0,0,0.3)",
          },
        }}
        TransitionComponent={Slide}
      >
        {/* Header */}
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
            fontWeight: 600,
            fontSize: "18px",
            color: "#333",
          }}
        >
          UserName's post
          <IconButton onClick={isClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* Image Grid */}
        <DialogContent
          dividers
          sx={{
            p: 2,
            overflowY: "auto",
          }}
        >
          <div className="grid grid-cols-3 gap-3 auto-rows-[130px]">
            {fakeImage.map((src, index) => {
              const { colSpan, rowSpan } = layout[index];
              const colSpanClass = colSpan === 2 ? "col-span-2" : "col-span-1";
              const rowSpanClass = rowSpan === 2 ? "row-span-2" : "row-span-1";
              return (
                <div
                  key={index}
                  onClick={() => handleOpenPreview(src)}
                  className={`relative ${colSpanClass} ${rowSpanClass} overflow-hidden rounded-xl shadow hover:shadow-md transition`}
                >
                  <img
                    src={src}
                    alt={`img-${index}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Preview Dialog */}
      <Dialog
        open={Boolean(previewImage)}
        onClose={handleClose}
        fullScreen
        PaperProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#fff",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            overflow: "auto",
            p: 2,
          }}
        >
          <img
            src={previewImage}
            alt="Preview"
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "none",
              maxHeight: "none",
              objectFit: "contain",
              borderRadius: 8,
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageArtGrid;
