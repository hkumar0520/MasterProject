// direct does not require name should be same, can use import expressss from 'express'
import express from 'express'
// within {} name should be same from where we getting those functions
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js'

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likepost', auth, likePost);

export default router;

// router.get('/', getPosts);
// router.post('/', createPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likepost', likePost);