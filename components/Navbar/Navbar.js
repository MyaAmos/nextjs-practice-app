import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import Link from "@mui/material/Link";
import navStyles from './Navbar.module.css'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NewspaperIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></NewspaperIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link href='/' color='white' underline='hover' className={navStyles.navlink}>Home</Link>
          <Link href='/posts' color='white' underline='hover' className={navStyles.navlink}>Posts</Link>
          {/* <Link href='/contact' color='white' underline='hover' className={navStyles.navlink}>Contact</Link> */}
          <Link href='/counter' color='white' underline='hover' className={navStyles.navlink}>Counter</Link>
          <Link href='/todo' color='white' underline='hover' className={navStyles.navlink}>Todo</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
