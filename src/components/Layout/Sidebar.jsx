import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Brightness7, Brightness4, Home, Create } from '@mui/icons-material';
// import { Brightness7, Home, Create, Person, Settings, Logout } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';

const drawerWidth = 240;
const drawerItems = [
  {name: 'Home', icon: <Home />, link: ''},
  {name: 'Create', icon: <Create />, link: 'create'},
  // {name: 'Profile', icon: <Person />, link: 'profile'},
  // {name: 'Settings', icon: <Settings />, link: 'settings'},
  // {name: 'Logout', icon: <Logout />, link: 'logout'},
]

const Sidebar = (props) => {
  const { window } = props;
  const navigate = useNavigate();
  const theme = useTheme();

  const drawer = (
    <div>
      <Toolbar >
        <IconButton sx={{ margin: 'auto' }} onClick={() => props.changeMode()} color={ theme.palette.mode === 'dark' ? 'neutral' : 'warning'}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {drawerItems.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => navigate(`${item.link}`)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={props.isMobileOpen}
          onClose={() => props.closeDrawer(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    </>
  )
}

export default Sidebar