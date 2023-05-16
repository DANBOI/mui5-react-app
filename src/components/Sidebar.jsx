import React from "react";
import { Box, List } from "@mui/material";

import {
  Home,
  Article,
  Group,
  Storefront,
  Person,
  Settings,
  AccountBox,
  Brightness4,
} from "@mui/icons-material";

import SideItem from "./SideItem";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <SideItem text="Homepage" href="/Homepage" icon={<Home />} />
          <SideItem text="Pages" href="/Pages" icon={<Article />} />
          <SideItem text="Groups" href="/Groups" icon={<Group />} />
          <SideItem
            text="Marketplace"
            href="/Marketplace"
            icon={<Storefront />}
          />
          <SideItem text="Friends" href="/Friends" icon={<Person />} />
          <SideItem text="Settings" href="/Settings" icon={<Settings />} />
          <SideItem text="Profile" href="/Profile" icon={<AccountBox />} />
          <SideItem isSwitch icon={<Brightness4 />} />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
