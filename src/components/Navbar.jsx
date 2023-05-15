import {
  styled,
  Box,
  AppBar,
  Toolbar,
  InputBase,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
// import {
//   MailIcon,
//   NotificationsIcon,
//   AutoAwesomeIcon,
// } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

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
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI5
        </Typography>
        <AutoAwesomeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="search..." />
        </SearchBar>
        <ExpandedIcons>
          <Badge badgeContent={3} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_960_720.png"
          />
        </ExpandedIcons>
        <CollapsedUserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_960_720.png"
          />
          <Typography variant="span">Chen</Typography>
        </CollapsedUserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;