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
          Art-Inspired Gallery
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
        open={!!previewImage}
        onClose={() => setPreviewImage(null)}
        maxWidth="md"
        PaperProps={{
          style: {
            borderRadius: 16,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          },
        }}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0,0,0,0.6)",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
          }}
        >
          <IconButton onClick={() => setPreviewImage(null)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <img
            src={previewImage}
            alt="Full"
            style={{
              maxWidth: "100%",
              maxHeight: "80vh",
              borderRadius: 12,
              objectFit: "contain",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageArtGrid;
