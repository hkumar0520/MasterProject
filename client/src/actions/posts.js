import * as api from '../api';

// Action Creators - function that returns an action
export const getPosts = () => async (dispatch) => {

    // const action = {type: 'FETCH_ALL', payload: []}
    // dispatch(action);
    // return action;

    try{
        console.log('getPosts1');
        const { data }  = await api.fetchPosts();

        console.log('getPosts2');
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error)
        // console.log(error.message)
    }
}


export const createPost = (post) => async (dispatch) => {
    try{
        console.log('createPost1');
        const { data } = await api.createPost(post);
        
        console.log('createPost2');
        dispatch({ type: 'CREATE', payload: data});

    } catch (error) {
        console.log(error)
        // console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) =>{
    try{
        console.log('updatepost1');
        const {data} = await api.updatePost(id, post);

        console.log('updatepost2');

        dispatch({type: 'UPDATE', payload: data})
    } catch(error){
        console.log(error.message)
        // console.log(error.message);
    }
}










