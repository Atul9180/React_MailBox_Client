import { useState } from "react";
import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import { SIDEBAR_DATA } from "../../config/sidebar.config";
import ComposeMail from "../ComposeMail";

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 14,
  borderRadius: 15,
  minWidth: 140,
  fontWeight: 600,
  textTransform: "none",
  "& > svg": {
    marginRight: 5,
  },
});

const Container = styled(Box)({
  padding: "10px 8px",
  "& > ul": {
    padding: "10px 0 0 5px",
    fontWeight: 500,
    fontSize: 14,
    cursor: "pointer",
  },
  "& > ul > li > svg": {
    marginRight: 16,
  },
});

const SidebarContent = () => {
  const [openComposeMailDialog, setOpenComposeMailDialog] = useState(false);

  const toggleDialogOpen = () => {
    setOpenComposeMailDialog((prevState) => !prevState);
  };

  return (
    <Container>
      <ComposeButton onClick={toggleDialogOpen}>
        <CreateOutlined fontSize="small" />
        Compose
      </ComposeButton>

      {/* Sidebar ListItems */}
      <List>
        {SIDEBAR_DATA.map((item) => (
          <ListItem key={item?.name}>
            <item.icon fontSize="small" />
            {item?.title}
          </ListItem>
        ))}
      </List>

      {/* composeMail DialogBox */}
      <ComposeMail
        openComposeMailDialog={openComposeMailDialog}
        toggleDialogOpen={toggleDialogOpen}
      />
    </Container>
  );
};

export default SidebarContent;
