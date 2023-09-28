"use client";

import { useState } from "react";
import { Container, IconButton, Typography } from "@mui/material";
import { VolumeUp, VolumeOff } from "@mui/icons-material";

export default function Home() {
  const [playing, setPlay] = useState<boolean>(true);
  const [muted, setMute] = useState<boolean>(true);

  if (playing)
    return (
      <>
        <video
          src="/video.mp4"
          autoPlay
          muted={muted}
          width="100%"
          style={{ marginBottom: -7 }}
          onEnded={() => setPlay(false)}
        />
        <IconButton
          sx={{
            position: "fixed",
            top: 48,
            left: 48,
            color: "Highlight",
          }}
          onClick={() => setMute(!muted)}
        >
          {muted ? <VolumeOff /> : <VolumeUp />}
        </IconButton>
      </>
    );

  return (
    <Container maxWidth="sm">
      <Typography variant="h2">Hello world</Typography>
    </Container>
  );
}
