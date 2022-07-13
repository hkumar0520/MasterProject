import * as api from '../api';

// Action Creators - function that returns an action
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