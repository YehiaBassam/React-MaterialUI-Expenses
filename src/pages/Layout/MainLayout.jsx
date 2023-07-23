import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = (bool) => {
    setMobileOpen(bool);
  };

  return (
    <>
      <Header drawerWidth={240} handleDrawerToggle={handleDrawerToggle} />
      <Sidebar isMobileOpen={mobileOpen} closeDrawer={handleDrawerToggle} />
      <Box sx={{ width: { sm: `calc(100% - ${280}px)` }, ml: { xs: '20px', sm: '260px' }, mt: '15px'}}>
        {/* {children} // in react-router-dom V5 */}
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
