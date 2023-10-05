"use client";

import { ReactNode, useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BarChart,
  ChevronLeft,
  Dashboard,
  Layers,
  Menu as MenuIcon,
  Notifications,
  People,
  ShoppingCart,
} from "@mui/icons-material";

export default function Layout({ children }: { children: ReactNode }) {
  const { breakpoints, spacing, transitions, zIndex } = useTheme();
  const [open, setOpen] = useState<boolean>(true);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <AppBar
        position="absolute"
        color="secondary"
        sx={{
          zIndex: zIndex.drawer + 1,
          transition: transitions.create(["width", "margin"], {
            easing: transitions.easing.sharp,
            duration: transitions.duration.leavingScreen,
          }),
          ...(open && {
            marginLeft: 240,
            width: `calc(100% - 240px)`,
            transition: transitions.create(["width", "margin"], {
              easing: transitions.easing.sharp,
              duration: transitions.duration.enteringScreen,
            }),
          }),
        }}
      >
        <Toolbar sx={{ pr: 3 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="warning">
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          "& .MuiDrawer-paper": {
            position: "relative",
            whiteSpace: "nowrap",
            width: 240,
            transition: transitions.create("width", {
              easing: transitions.easing.sharp,
              duration: transitions.duration.enteringScreen,
            }),
            boxSizing: "border-box",
            ...(!open && {
              overflowX: "hidden",
              transition: transitions.create("width", {
                easing: transitions.easing.sharp,
                duration: transitions.duration.leavingScreen,
              }),
              width: spacing(7),
              [breakpoints.up("sm")]: {
                width: spacing(9),
              },
            }),
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <ListItemButton>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItemButton>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar id="header" />
        <Container maxWidth="lg" sx={{ my: 4 }}>
          {children}
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            pt={4}
          >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
