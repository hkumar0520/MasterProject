import axios from 'axios';

const url = 'http://localhost:5000/posts/';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => {
    // console.log(newPost);
    // console.log('hiapitwo')
// axios.post(url, newPost)
// .then(response => console.log(response))
//         .catch(error => {
//             console.error('There was an error!', error);
//         });
axios.post(url, newPost);
// console.log("hi")
};
    



