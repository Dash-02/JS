const express = require('express')
const { 
    getContacts,
    getAboutUs
} = require('../controllers/post-controller')

const router = express.Router()

router.get('/contacts', getContacts)
router.get('/about_us', getAboutUs)

module.exports = router