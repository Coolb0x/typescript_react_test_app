import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TopNavigationProps {
  pageName: string;
  topNavigationPageName: (pageName: string) => void;
}

export default function TopNavigation({ pageName, topNavigationPageName }: TopNavigationProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (selectedPage: string) => {
    topNavigationPageName(selectedPage);
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ borderRadius: "9px" }} position='static'>
        <Toolbar>
          <IconButton
            onClick={handleMenu}
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            aria-haspopup='true'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={() => handleMenuItemClick("/")}>
              <Link to='/'>Home</Link>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/dragdropproject")}>
              <Link to='/dragdropproject'>Drag & Drop Project</Link>
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("/anotherpage")}>
              <Link to='/users'>Another Page</Link>
            </MenuItem>
          </Menu>
          <Typography align='left' variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
