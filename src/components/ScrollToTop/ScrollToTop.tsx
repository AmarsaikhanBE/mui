"use client";

import { MouseEvent } from "react";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { usePathname } from "next/navigation";

export default function ScrollToTOp() {
  const pathname = usePathname();

  if (pathname.startsWith("/sign")) return null;

  const trigger = useScrollTrigger();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#header");
    if (anchor) anchor.scrollIntoView({ block: "center" });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Fade>
  );
}
