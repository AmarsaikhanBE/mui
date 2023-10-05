import { createContext, useEffect, useMemo, useState } from "react";
import { PaletteMode, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin", "cyrillic"] });

export const ThemeContext = createContext({
  toggleColorMode: (selected: PaletteMode | "system") => {},
});

export const useColorMode = () => {
  const prefersMode: PaletteMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  const [mode, setMode] = useState<PaletteMode | "system">(prefersMode);

  useEffect(() => setMode(localStorage.getItem("mode") as PaletteMode), []);

  const colorModeToggler = useMemo(
    () => ({
      toggleColorMode: (selected: PaletteMode | "system") =>
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
        typography: { fontFamily: font.style.fontFamily },
      }),
    [mode, prefersMode]
  );

  return { theme, colorModeToggler };
};
