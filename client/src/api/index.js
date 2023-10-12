import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) =>  API.post('/posts', newPost);
export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost);  
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

// export const createPost = async (newPost) => {
//         axios.post(url, newPost)
//         .then(response => console.log('hires '+response))
//         .catch(error => {
//             console.error('There was an error!', error);
//         });

//         axios.post(url, newPost);
//         const response = await fetch(url, {method: 'POST'}, newPost);
// };
    



