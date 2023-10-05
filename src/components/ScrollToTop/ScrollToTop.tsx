import { MouseEvent } from "react";
import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

export default function ScrollToTOp() {
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
