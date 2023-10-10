import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

// import { GoogleLogin } from 'react-google-login';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { signin, signup } from '../../actions/auth';
import Icon from './icon';
import jwt_decode from 'jwt-decode';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [form, setform] = useState(initialState);
    const [isSignup, setisSignup] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);

        if (isSignup) {
            dispatch(signup(form, navigate));
          } else {
            dispatch(signin(form, navigate));
          }

    };

    const handleChange = (e) => {
        setform({...form, [e.target.name]: e.target.value})
    }

    const googleSuccess = async (res) => {
        console.log('Auth googleSuccess')
        const result = jwt_decode(res?.credential);
        console.log(res);
        console.log(result);

        // sub is different for every google auth
        const token = result?.sub;
    
        try {
          dispatch({ type: AUTH, data: { result, token } });
    
          navigate('/');
        } catch (error) {
          console.log(error);
        }
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
                    clientId="226288908827-nfqqe4h6bv90khan1b64sogbgsqopnkq.apps.googleusercontent.com">
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



