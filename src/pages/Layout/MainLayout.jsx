import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey, cyan } from "@mui/material/colors";

const MainLayout = ({ children }) => {
  const currentMode = localStorage.getItem('currentMode') === 'dark' ? 'dark' : 'light';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mode, setMode] = useState(currentMode);
  
  const handleDrawerToggle = (bool) => {
    setMobileOpen(bool);
  };

  const changeMode = () => {
    const currentMode = mode === 'light' ? 'dark' :  'light';
    setMode(currentMode);
    localStorage.setItem('currentMode', currentMode);
  }  

  const currentTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            custom_color_1:  cyan[600],
            custom_white:  grey[900],
            // primary: red,
            // divider: red[200],
            // text: {
            //   primary: red[900],
            //   secondary: red[800],
            // },
          }
          : {
            // palette values for dark mode
            custom_color_1:  cyan[700],
            custom_white:  grey[50],
          }),
    },
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Header drawerWidth={240} handleDrawerToggle={handleDrawerToggle} />
      <Sidebar isMobileOpen={mobileOpen} closeDrawer={handleDrawerToggle} changeMode={changeMode}/>
      <Box sx={{ width: { sm: `calc(100% - ${280}px)` }, ml: { xs: '20px', sm: '260px' }, mt: '15px' }}>
        {/* {children} // in react-router-dom V5 */}
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
