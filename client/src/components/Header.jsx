import { AppBar, Box, InputBase, Toolbar, styled } from "@mui/material";
import {
  AccountCircleOutlined,
  AppsOutlined,
  HelpOutlineOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  Tune,
} from "@mui/icons-material";
import { YahooLogo } from "../constants/contants.js";

//AppBar+css=>StyledAppBar , so use it instead of AppBar...
const StyledAppBar = styled(AppBar)({
  background: "#f8f9fa",
  color: "gray",
  //boxShadow: "none",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledBox = styled(Box)({
  alignItems: "center",
  justifyContent: "space-between",
  background: "#e1f1ff",
  padding: "3px 9px",
  borderRadius: 8,
  //handle child div from parent:
  "& > div": {
    width: "89%",
  },
});

const StyledSearch = styled(Search)({});

const Header = ({ toggleSidebar }) => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {/* left align items*/}
        <Box>
          <MenuIcon onClick={toggleSidebar} sx={{ cursor: "pointer" }} />
          <img
            src={YahooLogo}
            alt="brandLogo"
            style={{ width: "115px", marginLeft: "10px" }}
          />
        </Box>

        {/* center align items*/}
        <StyledBox
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { sm: "250px", md: "500px", lg: "600px", xl: "700px" },
          }}
        >
          <StyledSearch />
          <InputBase placeholder="Search mail" />
          <Tune />
        </StyledBox>

        {/* right align items*/}
        <Box sx={{ "&>svg": { marginLeft: "13px" } }}>
          <HelpOutlineOutlined sx={{ display: { xs: "none", sm: "inline" } }} />
          <SettingsOutlined />
          <AppsOutlined sx={{ display: { xs: "none", sm: "inline" } }} />
          <AccountCircleOutlined />
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
