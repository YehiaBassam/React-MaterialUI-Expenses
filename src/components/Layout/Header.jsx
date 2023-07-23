import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Avatar, Link, IconButton } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';

const Header = ({handleDrawerToggle, drawerWidth}) => {
  return (
    <AppBar position="static" sx={{ width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` }, ml: { xs: '0', sm: `${drawerWidth}px`}}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => handleDrawerToggle(true)}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Link href="/" underline="none" sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ color: 'white', "&:hover": {fontSize: '21px'}   }} >
            My Expenses
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" color="white" mr={2}>Yehia Bassam</Typography>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
