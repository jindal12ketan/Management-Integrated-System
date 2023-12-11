// import { AppBar, Box } from "@mui/material";

// import NavigationMenu from "./NavigationMenu";

// const Header = () => (
//   <Box display="block" mb={6.5}>
//     <AppBar position="fixed" sx={{ backgroundColor: "background.white", boxShadow: "none" }}>
//       <NavigationMenu />
//     </AppBar>
//   </Box>
// );

// export default Header;

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import DrawerMenu from "./NavigationMenu";
const Header = ({ children }) => {
  

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <DrawerMenu/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Header;
