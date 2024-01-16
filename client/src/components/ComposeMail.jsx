// import  from 'react'

import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Dialog,
  Box,
  Typography,
  styled,
  InputBase,
  TextField,
  Button,
} from "@mui/material";

const dialogStyles = {
  height: "92%",
  width: "80%",
  maxHeight: "100%",
  maxWidth: "100%",
  boxShadow: "none",
  //padding: 2,
  borderRadius: "10px 10px 0 0 ",
};

const DialogHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": { fontSize: 14, fontWeight: 600 },
  "&>svg": { cursor: "pointer" },
});

const RecipientWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    fontWeight: 600,
    borderBottom: "1px solid gray",
    marginTop: 10,
  },
});

const DialogFooterWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  borderTop: "1px solid gray",
  "& > svg": { cursor: "pointer" },
});

const SendButtonWrapper = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  borderRadius: 18,
  textTransform: "none",
  fontWeight: 600,
  width: 100,
});

const ComposeMail = ({ openComposeMailDialog, toggleDialogOpen }) => {
  const sendMail = () => {
    //e.preventDefault();
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "username",
      Password: "password",
      To: "them@website.com",
      From: "you@isp.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert(message));
    toggleDialogOpen();
  };

  return (
    <Dialog open={openComposeMailDialog} PaperProps={{ sx: dialogStyles }}>
      <DialogHeader>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={toggleDialogOpen} />
      </DialogHeader>

      <RecipientWrapper>
        <InputBase placeholder="Recipient" />
        <InputBase placeholder="Subject" />
      </RecipientWrapper>

      <Box sx={{ width: "100%" }}>
        <TextField
          multiline
          rows={19}
          maxRows={19}
          width="100%"
          maxWidth="100%"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      </Box>

      <DialogFooterWrapper>
        <SendButtonWrapper onClick={() => sendMail()}>Send</SendButtonWrapper>
        <DeleteOutline onClick={toggleDialogOpen} />
      </DialogFooterWrapper>
    </Dialog>
  );
};

export default ComposeMail;
