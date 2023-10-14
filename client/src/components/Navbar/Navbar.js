import React, { useState, useEffect }  from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import memories from '../../images/memories.png';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    console.log('Navbar');

    const logout = () => {

      console.log('logout');
      console.log(user);
      dispatch({ type: 'LOGOUT'});
      navigate('/auth');
      setUser(null);
    };

    useEffect(() => {
      const token = user?.token;

      if (token) 
      {
        const decodedToken = jwt_decode(token);
        console.log('inside navbar useeffect')
        console.log(decodedToken);

        // value in milliseconds
        if (decodedToken.exp * 1000 < new Date().getTime()) 
          logout();
      }

      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return(
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer} >
                {/* better fonts for typography */}
                <Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' ></img>
                {/* grow for animation */}
            </div>
            <Toolbar className={classes.toolbar}>
            {user ? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.picture}>{user?.result.name.charAt()}</Avatar>
                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
              </div>
            ) : (
              <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;