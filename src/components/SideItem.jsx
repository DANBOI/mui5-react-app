import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const SideItem = ({ isSwitch, mode, setMode, text, href, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href}>
        <ListItemIcon>{icon}</ListItemIcon>
        {isSwitch ? (
          <Switch
            // color="secondary"
            onChange={() => setMode(mode === "light" ? "dark" : "light")}
          />
        ) : (
          <ListItemText primary={text} />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default SideItem;
