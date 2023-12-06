import { AppBar, Box } from "@mui/material";
 
import NavigationMenu from "./NavigationMenu";
 
const Header = () => (
  <Box display="block" mb={6.5}>
    <AppBar position="fixed" sx={{ backgroundColor: "background.white", boxShadow: "none" }}>
      <NavigationMenu />
    </AppBar>
  </Box>
);
 
export default Header;