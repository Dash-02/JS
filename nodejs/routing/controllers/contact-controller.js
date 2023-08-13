const Post = require('../models/post')
const createPath = require('../helpers/create-path')


getContacts = (req, res) => {
    const title = 'Contacts'
    Contact
        .find()
        .then((contacts) => res.render(createPath('contacts'), { contacts, title }))
        .catch((error) => handleError(res, error))
}

getAboutUs = (req, res) => {
    res.redirect('contacts')
}

module.exports = {
    getContacts,
    getAboutUs
}