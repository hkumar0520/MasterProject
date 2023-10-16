import { combineReducers } from "redux";
import posts from './posts';


// useSelector((state) => state.posts)   here we have mentioned posts so in useSelector we did this
export default combineReducers({
    posts,
});