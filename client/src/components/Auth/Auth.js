import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
// import { GoogleLogin } from 'react-google-login';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Icon from './icon';

const Auth = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setisSignup] = useState(false);
    const classes = useStyles();


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const googleSuccess = async (res) => {
        console.log('hi')
        console.log(res);
        console.log(res.profielobj)
    }

    const googleError = (error) => {
        console.log('hi')
        console.log(error);
        console.log('Google Sign In was unsuccessful. Try again later');
    }

    const switchMode = () => {

        console.log(isSignup);
        setisSignup((previsSignup) => !previsSignup);
        setShowPassword(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                            <>
                              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <GoogleOAuthProvider 
                    clientId="226288908827-67tb8pgf1k8vv8klk948astjcgssbp8t.apps.googleusercontent.com">
                    <GoogleLogin
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                    </GoogleOAuthProvider>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                          </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;



