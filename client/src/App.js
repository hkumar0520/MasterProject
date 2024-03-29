import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';

import memories from './images/memories.png';

const App = () =>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container maxwidth = "lg">
            <AppBar className={classes.appBar} position='static' color='inherit'>
                {/* better fonts for typography */}
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' ></img>
                {/* grow for animation */}
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent = "space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form setCurrentId = {setCurrentId} currentId={currentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;