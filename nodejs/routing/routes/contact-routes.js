const express = require('express')
const { 
    getContacts,
    getAboutUs
} = require('../controllers/contact-controller')

const router = express.Router()

router.get('/contacts', getContacts)
router.get('/about_us', getAboutUs)

module.exports = router