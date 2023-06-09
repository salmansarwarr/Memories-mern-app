import express from 'express';

import { commentPost, getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.get('/search', getPostsBySearch);
router.get('/:id', getPost);
router.put('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost);
router.put('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);


export default router;