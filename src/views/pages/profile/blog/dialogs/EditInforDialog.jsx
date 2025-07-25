import CloseIcon from "@mui/icons-material/Close";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

export default function ImageDialog({ open, onClose, previewImage }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Profile Preview</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Avatar + Image Banner */}
        <Box
          sx={{
            width: "100%",
            height: 180,
            background: "linear-gradient(135deg, #fc466b, #3f5efb)",
            position: "relative",
            borderRadius: 2,
          }}
        >
          <Avatar
            src={previewImage}
            sx={{
              width: 96,
              height: 96,
              position: "absolute",
              bottom: -48,
              left: "50%",
              transform: "translateX(-50%)",
              border: "4px solid white",
            }}
          />
        </Box>

        <Box mt={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="First name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Last name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone (optional)"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Location" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Current location"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
