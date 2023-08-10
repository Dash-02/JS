const express = require('express')
const { 
    getPost,
    deletePost,
    getEdit,
    editPost,
    addPost,
    getAddPost,
    getPosts
} = require('../controllers/post-controller')

const router = express.Router()

router.get('/posts/:id', getPost)
router.delete('/posts/:id', deletePost)
router.get('/edit/:id', getEdit)
router.put('/edit/:id', editPost)
router.post('/add-post', addPost)
router.get('/add-post', getAddPost)
router.get('/posts', getPosts)

module.exports = router