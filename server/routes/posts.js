// direct does not require name should be same, can use import expressss from 'express'
import express from 'express'
// within {} name should be same from where we getting those functions
import {getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;