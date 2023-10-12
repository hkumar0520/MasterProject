import * as api from '../api';
import { AUTH } from '../constants/actionTypes'


export const signin = (formdata, navigate) => async(dispatch) => {
    try{
        // login to the user
        const { data } = await api.signIn(formdata);

        dispatch({ type : AUTH, data});

        navigate('/');
    } 
    catch (error)
    {
        console.log(error);
    }
};

export const signup = (formdata, navigate) => async(dispatch) => {
    try{
        // logout to the user
        const { data } = await api.signUp(formdata);

        dispatch({ type : AUTH, data});

        navigate('/');
    } 
    catch (error)
    {
        console.log(error);
    }
};
