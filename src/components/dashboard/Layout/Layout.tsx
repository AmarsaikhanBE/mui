"use client";

import { ReactNode, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BarChart,
  Category,
  ChevronLeft,
  Dashboard,
  Layers,
  Logout,
  Menu as MenuIcon,
  Newspaper,
  People,
  ShoppingCart,
} from "@mui/icons-material";
import Copyright from "@/components/Copyright";

export default function Layout({ children }: { children: ReactNode }) {
  const { breakpoints, spacing, transitions, zIndex } = useTheme();
  const checkComputer = useMediaQuery(breakpoints.up("md"));
  const [open, setOpen] = useState<boolean>(true);
  const { data: session, status } = useSession();
  const [profileMenu, setProfileMenu] = useState<null | HTMLElement>(null);

  useEffect(() => setOpen(checkComputer), [checkComputer]);

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
          <Button
            id="profile-menu"
            startIcon={
              status === "loading" ? (
                <CircularProgress size={24} color="inherit" />
              ) : session?.user?.image ? (
                <Avatar alt="avatar" src={session.user.image} />
              ) : (
                <Avatar>{session?.user?.name && session?.user?.name[0]}</Avatar>
              )
            }
            sx={{ color: "whitesmoke" }}
            onClick={(event) => setProfileMenu(event.currentTarget)}
          >
            <Typography sx={{ display: { xs: "none", sm: "block" } }}>
              {status === "loading" && "Loading ..."}
              {session && session.user?.name}
            </Typography>
          </Button>
          <Menu
            anchorEl={profileMenu}
            open={Boolean(profileMenu)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            MenuListProps={{ "aria-labelledby": "profile-menu" }}
            PaperProps={{
              sx: {
                mt: 1,
                overflow: "visible",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: "50%",
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translate(50%, -50%) rotate(45deg)",
                },
              },
            }}
            onClose={() => setProfileMenu(null)}
          >
            <MenuItem
              sx={{ gap: 2 }}
              onClick={() => {
                setProfileMenu(null);
                signOut();
              }}
            >
              <Logout />
              Sign out
            </MenuItem>
          </Menu>
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
          <ListItemButton href="/dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="body2"
            display={open ? "block" : "none"}
            width="fit-content"
            mx="auto"
          >
            News
          </Typography>
          <ListItemButton href="/dashboard/news">
            <ListItemIcon>
              <Newspaper />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItemButton>
          <ListItemButton href="/dashboard/news/categories">
            <ListItemIcon>
              <Category />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItemButton>
          <Divider sx={{ my: 2 }} />
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
        <Container maxWidth="lg">
          <Stack gap={5} py={5} sx={{ minHeight: "calc(100vh - 120px)" }}>
            {children}
          </Stack>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
