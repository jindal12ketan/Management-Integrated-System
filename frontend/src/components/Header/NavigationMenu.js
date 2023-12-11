// import { Children } from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Tabs } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import HeaderLogo from "assets/HeaderLogo.png";
// import matchPathWithParams from "utils/matchPathWithParams";

// // import NavItem from "./NavItem";

// const NavigationMenu = () => {
  //   const location = useLocation();
  //   const { pathname } = location;
  
  //   const [dropItems, profileItems] = [
    //     dropDownItems(),
    //     profileDropDownItems(),
    //   ];
    // //   const activeIndex = navbarItem.findIndex(
      // //     ({ childList }) => childList && childList.some((childPath) => matchPathWithParams(pathname, childPath)),
      // //   );
      //   return (
        //     <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" height={65}>
        //       <Box component="img" alt="manapp_logo" src={HeaderLogo} pl={1.5} width={100} />
        //       {/* <Box justifyContent="space-evenly" sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
        //         <Tabs
        //           sx={{
          //             "& .MuiTabs-indicator": {
            //               backgroundColor: "background.white",
            //             },
            //             alignItems: "center",
            //             justifyContent: "space-between",
            //           }}
            //           value={activeIndex}
            //         >
            //           {Children.toArray(
              //             navbarItem.map((navItem, index) => {
                //               const { title, route, icon, permission } = navItem;
                
                //               if (!permission) {
//                 return null;
//               }

//               return <NavItem isActive={index === activeIndex} icon={icon} label={title} to={route} index={index} />;
//             }),
//           )}
//         </Tabs>
//       </Box>

//       <Box justifyContent="end" sx={{ flexGrow: 1, display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}>
//         <MenuButton iconType={<MenuIcon />} items={mobileItems} />
//       </Box> */}

//       <Box display="flex" sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
//         <MenuButton iconType={<MoreHorizIcon />} items={dropItems} />
//         <MenuButton iconType={<AccountCircle />} items={profileItems} isHandleLogout />
//       </Box>
//     </Box>
//   );
// };

// export default NavigationMenu;

import * as React from "react";
import { Children } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { AccountCircle } from "@mui/icons-material";
import {
  navbarItems,
  dropDownItems,
  profileDropDownItems,
  mobileDropDownItems,
} from "./menuItems";
import MenuButton from "./MenuButton";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Item from "./Item";
import matchPathWithParams from "utils/matchPathWithParams";
import { useLocation } from "react-router-dom";
import { Divider } from "@mui/material";
const drawerWidth = 175;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [navbarItem, dropItems, profileItems] = [
    navbarItems(),
    dropDownItems(),
    profileDropDownItems(),
  ];
  const activeIndex = navbarItem.findIndex(
    ({ childList }) =>
      childList &&
      childList.some((childPath) => matchPathWithParams(pathname, childPath))
  );
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open ? (
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            // sx={{ mr: 0.25 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <List>
        {Children.toArray(
          navbarItem.map((navItem, index) => {
            const { title, route, icon, permission } = navItem;
            if (!permission) {
              return null;
            }
            return (
              <Item
                isActive={index === activeIndex}
                icon={icon}
                label={title}
                to={route}
                index={index}
                handleDrawerClose={handleDrawerClose}
              />
            );
          })
        )}
      </List>
      <Divider />
      <List>
        <ListItem>
          <MenuButton iconType={<MoreHorizIcon />} items={dropItems} />
        </ListItem>
        <ListItem>
          <MenuButton
            iconType={<AccountCircle />}
            items={profileItems}
            isHandleLogout
          />
        </ListItem>
      </List>
    </Drawer>
  );
};
export default DrawerMenu;
