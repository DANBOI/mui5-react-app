import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const SideItem = ({ isSwitch, text, href, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href}>
        <ListItemIcon>{icon}</ListItemIcon>
        {isSwitch ? <Switch /> : <ListItemText primary={text} />}
      </ListItemButton>
    </ListItem>
  );
};

export default SideItem;
