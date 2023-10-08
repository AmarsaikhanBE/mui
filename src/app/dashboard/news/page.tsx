"use client";

import Header from "@/components/dashboard/Header";
import { Box, Divider, IconButton, InputBase, Paper } from "@mui/material";
import { Directions, Menu as MenuIcon, Search } from "@mui/icons-material";
import Image from "next/image";

export default function News() {
  return (
    <>
      <Header title="News" action={() => console.log("hello world")} />
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 32,
            width: 50,
            height: 50,
            transform: "translateY(-50%) rotate(5deg)",
          }}
        >
          <Image src="/blog.png" alt="news" fill objectFit="contain" />
        </Box>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: 400,
            ml: "auto",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <Search />
          </IconButton>
        </Paper>
      </Paper>
    </>
  );
}
