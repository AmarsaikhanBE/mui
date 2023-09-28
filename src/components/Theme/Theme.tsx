"use client";

import { ReactNode, useEffect } from "react";
import { ModeContext, useMode } from "@/utils/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";

export default function Theme({ children }: { children: ReactNode }) {
  const { theme, colorMode } = useMode();

  useEffect(() => {
    if (!localStorage.getItem("mode")) localStorage.setItem("mode", "system");
  }, []);

  return (
    <ModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main>{children}</Main>
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

const Main = styled("main")({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflowX: "hidden",
});
