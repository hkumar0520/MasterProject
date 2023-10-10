import * as api from '../api';
import { AUTH } from '../constants/actionTypes'


export const signin = (formdata, navigate) => async(dispatch) => {
    try{
        // login to the user

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

        navigate('/');
    } 
    catch (error)
    {
        console.log(error);
    }
};
