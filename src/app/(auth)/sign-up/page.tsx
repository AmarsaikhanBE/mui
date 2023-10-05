"use client";

import { FormEvent, useState } from "react";
import {
  Button,
  Container,
  Divider,
  Fab,
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
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      firstName: event.currentTarget.firstName.value,
      lastName: event.currentTarget.lastName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
      confirmPassword: event.currentTarget.confirmPassword.value,
    };

    console.log(data);
  };

  return (
    <Container maxWidth="xs" sx={{ py: 4 }}>
      <Paper sx={{ padding: 4 }} elevation={12}>
        <form onSubmit={handleSubmit}>
          <Stack gap={4}>
            <Fab color="warning" sx={{ mx: "auto" }}>
              <Lock />
            </Fab>
            <Typography variant="h4" textAlign="center">
              Create account
            </Typography>
            <TextField id="firstName" label="First name" fullWidth />
            <TextField id="lastName" label="Last name" fullWidth />
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
            <TextField
              id="confirmPassword"
              label="Confirm password"
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" type="submit">
              Sign up
            </Button>
            <Divider>
              <Typography variant="body2" color="error">
                or
              </Typography>
            </Divider>
            <Button href="sign-in">Sign in</Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
