"use client";

import { useState, FormEvent } from "react";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Fab,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      remember: event.currentTarget.remember.checked,
    };
    console.log(data);
  };

  return (
    <Container maxWidth="xs" sx={{ py: 4 }}>
      <Paper sx={{ padding: 4 }} elevation={12}>
        <form onSubmit={handleSubmit}>
          <Stack gap={4}>
            <Fab color="success" sx={{ mx: "auto" }}>
              <Lock />
            </Fab>
            <Typography variant="h4" textAlign="center">
              Sign in
            </Typography>
            <TextField id="email" label="E-mail" fullWidth />
            <TextField
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              label="Remember me"
              control={<Checkbox id="remember" />}
            />
            <Button variant="contained" type="submit">
              Sign in
            </Button>
            <Divider>
              <Typography variant="body2" color="error">
                or
              </Typography>
            </Divider>
            <Stack direction="row" justifyContent="space-between">
              <Button href="/sign-reset">Reset password</Button>
              <Button href="/sign-up">Create account</Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
