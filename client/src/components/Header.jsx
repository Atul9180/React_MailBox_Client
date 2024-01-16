import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  styled,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  Login,
  Logout,
  Tune,
} from "@mui/icons-material";
import { YahooLogo } from "../constants/contants.js";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../redux/slices/authSlice";
import { useLogoutMutation } from "../redux/slices/usersApiSlice";

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
  const { userInfo } = useSelector((state) => state.auth);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = async () => {
    try {
      //destroy cookie
      handleCloseUserMenu();
      await logoutApiCall().unwrap();
      //destroy local storage auth data
      dispatch(logout());
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  const validateSidebarToggle = () => {
    {
      userInfo ? toggleSidebar() : toast.error("Please Login");
    }
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {/* left align items*/}
        <Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#3C3C3C" }}
          >
            <MenuIcon onClick={validateSidebarToggle} />
          </IconButton>
          <img
            src={YahooLogo}
            alt="brandLogo"
            style={{ width: "110px", marginLeft: "6px" }}
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
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="NewUser" src="/static/images/avatar/2.jpg" />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {userInfo ? (
              <>
                <MenuItem as={Link} to="/profile">
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={logoutHandler}>
                  <Logout fontSize="small" />
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem as={Link} to="/login">
                  <Login fontSize="small" />
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem as={Link} to="/signup">
                  <Logout fontSize="small" />
                  <Typography textAlign="center">Signup</Typography>
                </MenuItem>
              </>
            )}
          </Menu>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
