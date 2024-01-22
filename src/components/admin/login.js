import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { useAuth } from '../authContex';


const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '91vh',
  maxHeight: '100vh',
  background: '#F8F8F8',
  padding: '30px',

});

const StyledHeading = styled(Typography)({
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#333333',
  marginBottom: '70px',
});

const StyledDescription = styled(Typography)({
  fontSize: '20px',
  color: '#575757',
  marginBottom: '30px'
});

const AlertError = () => {
  return (
    <Alert severity="error">The details are wrong!</Alert>
  );
};

const LoginForm = () => {
  const { register, handleSubmit, reset, setError } = useForm();
  const setIsAdmin = useAuth().setIsAdmin;
  const [loginErorr, setLoginError] = useState(false);

  const checkDetails = async (data) => {
    try {
      const sendBody = {
        name: data.name,
        password: data.password,
      };

      const response = await fetch('http://localhost:8787/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendBody),
      });

      if (response.status === 200) {
        console.log('Correct details');
        setIsAdmin(true);
      } else {
        console.error('Incorrect details');
        setLoginError(true);
        reset();
        setError('password', {
          type: 'manual',
          message: 'Incorrect password',
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (<>
    {loginErorr && <AlertError />}
    <form onSubmit={handleSubmit(checkDetails)}>
      <TextField
        label="Name"
        variant="outlined"
        {...register('name')}
        color="primary"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        {...register('password')}
        color="primary"
        fullWidth
        type="password"
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  </>
  );
};

const Login = () => {
  return (
    <StyledContainer>
      <>
        <StyledHeading variant="h1">REAL-ESTATE</StyledHeading>
        <StyledDescription variant="body1">
          entre your user name and password
        </StyledDescription>
        <LoginForm />
      </>
    </StyledContainer>
  );
};

export default Login;
