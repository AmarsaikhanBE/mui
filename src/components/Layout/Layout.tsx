"use client";

import { ReactNode, useEffect } from "react";
import { ThemeContext, useColorMode } from "@/utils/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, colorModeToggler } = useColorMode();

  useEffect(() => {
    if (!localStorage.getItem("mode")) localStorage.setItem("mode", "system");
  }, []);

  return (
    <ThemeContext.Provider value={colorModeToggler}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Main>{children}</Main>
        <ScrollToTop />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Main = styled("main")({
  width: "100%",
  minHeight: "calc(100vh - 4rem)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  overflowX: "hidden",
});
