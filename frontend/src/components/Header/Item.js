import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Tab, Icon, styled, useMediaQuery, Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BACKGROUND } from "theme/colors";

const NavIcon = ({ icon, isActive, isTablet }) => (
  <Icon
    sx={{
      display: "flex",
      height: "inherit",
      width: "inherit",
      mr: 1,
      mb: 0.6,
      filter: isActive
        ? "invert(50%) sepia(94%) saturate(887%) hue-rotate(348deg) brightness(101%) contrast(92%)"
        : BACKGROUND.black,
    }}
  >
    <Box
      component="img"
      src={icon}
      margin="auto"
      pl={1}
      width={!isTablet ? 20 : 30}
      height={!isTablet ? 20 : 30}
    />
  </Icon>
);

const Item = ({
  label,
  icon,
  to,
  isActive = false,
  index,
  handleDrawerClose,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleNavigate = (route) => {
    navigate(route);
    handleDrawerClose();
  };
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", 1110));
  return (
    <ListItem key={index} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={() => handleNavigate(to)}
      >
        <ListItemIcon
          component="img"
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          <NavIcon icon={icon} isActive={isActive} isTablet={isTablet} />
        </ListItemIcon>
        <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default Item;
