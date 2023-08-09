const express = require('express')
const Contact = require('../models/contact')
const createPath = require('../helpers/create-path')

const router = express.Router()

router.get('/contacts', (req, res) => {
    const title = 'Contacts'
    Contact
        .find()
        .then((contacts) => res.render(createPath('contacts'), { contacts, title }))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error', { title: 'Error' }))
        })
})

router.get('/about_us', (req, res) => {
    res.redirect('contacts')
})

module.exports = router