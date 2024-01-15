import { styled, Drawer } from "@mui/material";
import SidebarContent from "./SidebarContent.jsx";

const StyledDrawer = styled(Drawer)({});
const Sidebar = ({ sidebarOpen }) => {
  return (
    <StyledDrawer
      anchor="left"
      open={sidebarOpen}
      hideBackdrop="true"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: { xs: "56px", sm: "64px" }, //3.9rem
          width: 200,
          background: "#f8f9fa",
          borderRight: "none",
          height: { xs: "calc(100vh-55.99px)", sm: "calc(100vh-64px)" },
        },
      }}
    >
      <SidebarContent />
    </StyledDrawer>
  );
};

export default Sidebar;
