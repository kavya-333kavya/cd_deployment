import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: '#ffcc00',
    },
  },
  typography: {
    fontFamily: "'Tajawal', sans-serif",
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Indian Insight
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const navigate = useNavigate();
  
  // State to manage form fields
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8088/signup", {
      fname: firstName,
      lname: lastName,
      email: email,
      password: password
    }).then((res) => {
      navigate('/signin');
    });
  };

  // Check if all fields are filled 
  const isFormValid = firstName && lastName && email && password;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/lohri-celebration-india_23-2151150944.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            padding: '30px',
            borderRadius: '15px',
            background: 'linear-gradient(135deg, rgba(255,204,0,0.8), rgba(211,47,47,0.8))',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
            marginTop: '50px',
            marginLeft: '50px',
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e) => setFirstName(e.target.value)} // Update state on change
                    sx={{
                      '& label.Mui-focused': { color: '#fff' },
                      '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: 'secondary.main' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="lastName"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoComplete="family-name"
                    onChange={(e) => setLastName(e.target.value)} // Update state on change
                    sx={{
                      '& label.Mui-focused': { color: '#fff' },
                      '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: 'secondary.main' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)} // Update state on change
                    sx={{
                      '& label.Mui-focused': { color: '#fff' },
                      '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: 'secondary.main' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                    sx={{
                      '& label.Mui-focused': { color: '#fff' },
                      '& .MuiInput-underline:after': { borderBottomColor: 'primary.main' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: 'secondary.main' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!isFormValid} // Disable button if form is not valid
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: 'primary.main',
                  color: '#fff',
                  '&:hover': { backgroundColor: 'secondary.main' },
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2" sx={{ color: '#fff' }}>
                    Already have an account? SignIn
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5, color: '#fff' }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
