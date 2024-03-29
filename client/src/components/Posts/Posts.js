import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post.js';
import useStyles from './styles';


const Posts = () => {
    // using state from global store using the provider tag in index.js

const Posts = ({setCurrentId}) => {

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log('component posts1')
    console.log(posts);
    console.log('component posts2')

    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((post) => (
                    <Grid key = {post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
        
    );
}

export default Posts;