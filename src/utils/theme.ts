import { createContext, useEffect, useMemo, useState } from "react";
import { createTheme, PaletteMode, useMediaQuery } from "@mui/material";

export const ModeContext = createContext({
  toggleMode: (selected: PaletteMode | "system") => {},
});

export const useMode = () => {
  const prefersMode: PaletteMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  const [mode, setMode] = useState<PaletteMode | "system">(prefersMode);

  useEffect(() => setMode(localStorage.getItem("mode") as PaletteMode), []);

  const colorMode = useMemo(
    () => ({
      toggleMode: (selected: PaletteMode | "system") =>
        selected === "system"
          ? setMode(prefersMode)
          : setMode(selected as PaletteMode),
    }),
    [prefersMode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: mode === "system" ? prefersMode : mode },
      }),
    [mode, prefersMode]
  );

  return { theme, colorMode };
};
