"use client";

import { ReactNode, useEffect } from "react";
import { ModeContext, useMode } from "@/utils/theme";
import { CssBaseline, ThemeProvider as MUIProvider } from "@mui/material";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, colorMode } = useMode();

  useEffect(() => {
    if (!localStorage.getItem("mode")) localStorage.setItem("mode", "system");
  }, []);

  return (
    <ModeContext.Provider value={colorMode}>
      <MUIProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIProvider>
    </ModeContext.Provider>
  );
}
