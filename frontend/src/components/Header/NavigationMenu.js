import { Children } from "react";
import { useLocation } from "react-router-dom";
import { Box, Tabs } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderLogo from "assets/HeaderLogo.png";
import matchPathWithParams from "utils/matchPathWithParams";
import { navbarItems, dropDownItems, profileDropDownItems, mobileDropDownItems } from "./menuItems";
import MenuButton from "./MenuButton";
// import NavItem from "./NavItem";
import { AccountCircle } from "@mui/icons-material";

const NavigationMenu = () => {
  const location = useLocation();
  const { pathname } = location;

  const [dropItems, profileItems] = [
    dropDownItems(),
    profileDropDownItems(),
  ];
//   const activeIndex = navbarItem.findIndex(
//     ({ childList }) => childList && childList.some((childPath) => matchPathWithParams(pathname, childPath)),
//   );
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" height={65}>
      <Box component="img" alt="manapp_logo" src={HeaderLogo} pl={1.5} width={100} />
      {/* <Box justifyContent="space-evenly" sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
        <Tabs
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "background.white",
            },
            alignItems: "center",
            justifyContent: "space-between",
          }}
          value={activeIndex}
        >
          {Children.toArray(
            navbarItem.map((navItem, index) => {
              const { title, route, icon, permission } = navItem;

              if (!permission) {
                return null;
              }

              return <NavItem isActive={index === activeIndex} icon={icon} label={title} to={route} index={index} />;
            }),
          )}
        </Tabs>
      </Box>

      <Box justifyContent="end" sx={{ flexGrow: 1, display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}>
        <MenuButton iconType={<MenuIcon />} items={mobileItems} />
      </Box> */}

      <Box display="flex" sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
        <MenuButton iconType={<MoreHorizIcon />} items={dropItems} />
        <MenuButton iconType={<AccountCircle />} items={profileItems} isHandleLogout />
      </Box>
    </Box>
  );
};

export default NavigationMenu;
