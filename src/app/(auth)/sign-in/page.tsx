'use client';

import { useState, FormEvent } from 'react';
import {
  Alert,
  Button,
  Container,
  Divider,
  Fab,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Slide,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [alert, setAlert] = useState({ open: false, message: '' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    const res = await signIn('credentials', {
      email: data.get('email'),
      password: data.get('password'),
      redirect: false,
    });
    if (res?.error) return setAlert({ open: true, message: res.error });

    router.push('/dashboard');
  };

  return (
    <Container maxWidth="xs" sx={{ py: 4 }}>
      <Paper sx={{ padding: 4 }} elevation={12}>
        <form onSubmit={handleSubmit}>
          <Stack gap={4}>
            <Fab color="success" sx={{ mx: 'auto' }}>
              <Lock />
            </Fab>
            <Typography variant="h4" textAlign="center">
              Sign in
            </Typography>
            <TextField
              name="email"
              label="E-mail"
              fullWidth
              required
              autoFocus
            />
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
            <Button variant="contained" type="submit">
              Sign in
            </Button>
            <Divider>
              <Typography variant="body2" color="error">
                or
              </Typography>
            </Divider>
            <Link href="/sign-up" variant="body2" color="error" mx="auto">
              Don't have an account? Sign Up
            </Link>
          </Stack>
        </form>
      </Paper>
      <Snackbar
        open={alert.open}
        autoHideDuration={10000}
        onClose={() => setAlert({ open: false, message: '' })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={() => setAlert({ open: false, message: '' })}
          severity="error"
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
