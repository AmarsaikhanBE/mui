'use client';

import { FormEvent, useState } from 'react';
import {
  Button,
  Container,
  Divider,
  Fab,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
    });
  };

  return (
    <Container maxWidth="xs" sx={{ py: 4 }}>
      <Paper sx={{ padding: 4 }} elevation={12}>
        <form onSubmit={handleSubmit}>
          <Stack gap={4}>
            <Fab color="warning" sx={{ mx: 'auto' }}>
              <Lock />
            </Fab>
            <Typography variant="h4" textAlign="center">
              Create account
            </Typography>
            <TextField
              name="firstName"
              label="First name"
              fullWidth
              required
              autoFocus
            />
            <TextField name="lastName" label="Last name" fullWidth />
            <TextField name="email" label="E-mail" fullWidth required />
            <TextField
              name="password"
              label="Password"
              required
              type={showPassword ? 'text' : 'password'}
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
              name="confirmPassword"
              label="Confirm password"
              required
              type={showConfirmPassword ? 'text' : 'password'}
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
            <Link href="/sign-in" variant="body2" mx="auto">
              Already have an account? Sign In
            </Link>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
