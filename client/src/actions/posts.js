import * as api from '../api';

// Action Creators - function that returns an action(object)
// redux thunk allows us to pass an additional dispatch function for asynchronous actions allowed
export const getPosts = () => async (dispatch) => {

    // const action = {type: 'FETCH_ALL', payload: []}
    // dispatch(action);
    // return action;

    try{
        const { data }  = await api.fetchPosts();

        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}


export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post);
        
        dispatch({ type: 'CREATE', payload: data});

    } catch (error) {
        console.log(error.message)
    }
}