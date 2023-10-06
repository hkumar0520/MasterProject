import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) =>  axios.post(url, newPost);
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost);  



// export const createPost = async (newPost) => {
//         axios.post(url, newPost)
//         .then(response => console.log('hires '+response))
//         .catch(error => {
//             console.error('There was an error!', error);
//         });

//         axios.post(url, newPost);
//         const response = await fetch(url, {method: 'POST'}, newPost);
// };
    



