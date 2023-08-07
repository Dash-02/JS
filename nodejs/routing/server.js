const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Post = require('./models/post')
const Contact = require('./models/contact')

const app = express()

const PORT = 3000
const db = 'mongodb+srv://user01:12345pass@cluster0.gxwydcl.mongodb.net/blog_nodejs?retryWrites=true&w=majority'

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error))

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`)

// шаблонизатор (вместо статики)
app.set('view engine', 'ejs')

app.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

// app.use((req, res, next) => {
//     console.log(`path: ${req.path}`)
//     console.log(`method: ${req.method}`)
//     next()
// })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded({ extended: false }))

app.use(express.static('styles'))

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    const title = 'Home'
    // вместо res.write и res.end - res.send
    // res.send('<h1>hi</h1>') // передаются данные, которые нужно отправить браузеру

    // res.sendFile(createPath('index'))
    res.render(createPath('index'), { title })
})

app.get('/contacts', (req, res) => {
    const title = 'Contacts'
    // const contacts = [
    //     { name: 'Github', link: 'https://github.com/Dash-02' },
    // ]
    // res.render(createPath('contacts'), { contacts, title })
    Contact
        .find()
        .then((contacts) => res.render(createPath('contacts'), { contacts, title }))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error', { title: 'Error' }))
        })
})

app.get('/about_us', (req, res) => {
    res.redirect('contacts')
})

app.get('/posts/:id', (req, res) => {
    const title = 'Post'
    // const post = {
    //      id: '1',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
    //     title: 'Post title',
    //     date: '28.07.2023',
    //     author: 'Author',
    // }
    // res.render(createPath('post'), { title, post })
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('post'), { post, title }))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error', { title: 'Error' }))
        })
})

app.delete('/posts/:id', (req, res) => {
    const title = 'Post'
    Post
        .findByIdAndDelete(req.params.id)
        .then(result => { res.sendStatus(200) })
        .catch((error) => {
            console.log(error)
            res.render(createPath('error', { title: 'Error' }))
        })
})

app.get('/edit/:id', (req, res) => {
    const title = 'Edit Post'
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('edit-post'), { post, title }))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error', { title: 'Error' }))
        })
})

app.put('/edit/:id', (req, res) => {
    const { title, author, text } = req.body
    const { id } = req.params
    Post
        .findByIdAndUpdate(id, { title, author, text })
        .then(result => res.redirect(`/posts/${id}`))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error', { title: 'Error' }))
        })
})

app.post('/add-post', (req, res) => {
    const { title, author, text } = req.body
    const post = new Post({ title, author, text })
    post
        .save()
        .then((result) => res.redirect('/posts'))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error', { title: 'Error' }))
        })
})

app.get('/add-post', (req, res) => {
    const title = 'Add post'
    res.render(createPath('add-post'), { title })
})

app.get('/posts', (req, res) => {
    const title = 'Posts'
    // const posts = [
    //     {
    //         id: '1',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
    //         title: 'Post title',
    //         date: '28.07.2023',
    //         author: 'Author',
    //     }
    // ]
    // res.render(createPath('posts'), { title, posts })
    Post
        .find()
        .sort({ createdAt: -1 })
        .then((posts) => res.render(createPath('posts'), { posts, title }))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error', { title: 'Error' }))
        })
})

app.use((req, res) => {
    const title = 'Error Page'
    // res.statusCode = 404
    res
        .status(404)
        .render(createPath('error'), { title })
})