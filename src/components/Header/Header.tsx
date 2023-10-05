"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const navItems = ["Home", "About", "Contact"];

export default function Header() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return null;
  if (pathname.startsWith("/sign")) return null;

  const trigger = useScrollTrigger();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <>
      <Slide direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Project name
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "primary.contrastText" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar id="header" />
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Typography variant="h6" sx={{ my: 1.5, textAlign: "center" }}>
          Project name
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
