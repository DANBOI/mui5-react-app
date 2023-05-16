import React, { useState } from "react";
import {
  styled,
  Box,
  Link,
  AppBar,
  Toolbar,
  InputBase,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Mail, Notifications, AutoAwesome } from "@mui/icons-material";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(0, 10),
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const ExpandedIcons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: 20,
  [theme.breakpoints.up("sm")]: {
    // >600px
    display: "flex",
  },
}));

const CollapsedUserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  [theme.breakpoints.up("sm")]: {
    // >600px
    display: "none",
  },
}));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Link href="/">
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", sm: "block" }, color: "white" }}
          >
            MUI5
          </Typography>
          <AutoAwesome
            sx={{ display: { xs: "block", sm: "none" }, color: "white" }}
          />
        </Link>
        <SearchBar>
          <InputBase placeholder="search..." />
        </SearchBar>
        <ExpandedIcons>
          <Badge badgeContent={3} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_960_720.png"
            onClick={() => setIsOpen(true)}
          />
        </ExpandedIcons>
        <CollapsedUserBox onClick={() => setIsOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_960_720.png"
          />
          <Typography variant="span">Chen</Typography>
        </CollapsedUserBox>
      </StyledToolbar>
      <Menu
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
