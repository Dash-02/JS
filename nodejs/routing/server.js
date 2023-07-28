const express = require('express')
const path = require('path')

const app = express()

const PORT = 3000

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

app.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

app.get('/', (req, res) => {
    // вместо res.write и res.end - res.send
    // res.send('<h1>hi</h1>') // передаются данные, которые нужно отправить браузеру
    res.sendFile(createPath('index'))
})

app.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts'))
})

app.get('/about_us', (req, res) => {
    res.redirect('contacts')
})

app.get('/posts/:id', (req, res) => {
    res.sendFile(createPath('post'))
})

app.get('/add-post', (req, res) => {
    res.sendFile(createPath('add-post'))
})

app.get('/posts', (req, res) => {
    res.sendFile(createPath('posts'))
})

app.use((req, res) => {
    // res.statusCode = 404
    res
        .status(404)
        .sendFile('error')
})