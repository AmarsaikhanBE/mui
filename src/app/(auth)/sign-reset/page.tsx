"use client";

import { FormEvent } from "react";
import {
  Button,
  Container,
  Divider,
  Fab,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Lock } from "@mui/icons-material";

export default function SignIn() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("sorry");
  };

  return (
    <Container maxWidth="xs" sx={{ py: 4 }}>
      <Paper sx={{ padding: 4 }} elevation={12}>
        <form onSubmit={handleSubmit}>
          <Stack gap={4}>
            <Fab color="error" sx={{ mx: "auto" }}>
              <Lock />
            </Fab>
            <Typography variant="h4" textAlign="center">
              Reset password
            </Typography>
            <Typography variant="body1">Not available</Typography>
            <Divider>
              <Typography variant="body2" color="error">
                or
              </Typography>
            </Divider>
            <Stack direction="row" justifyContent="space-between">
              <Button href="sign-in">Sign in</Button>
              <Button href="/sign-up">Create account</Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
