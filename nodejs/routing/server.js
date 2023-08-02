const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()

const PORT = 3000

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

app.get('/', (req, res) => {
    const title = 'Home'
    // вместо res.write и res.end - res.send
    // res.send('<h1>hi</h1>') // передаются данные, которые нужно отправить браузеру

    // res.sendFile(createPath('index'))
    res.render(createPath('index'), { title })
})

app.get('/contacts', (req, res) => {
    const title = 'Contacts'
    const contacts = [
        { name: 'Github', link: 'https://github.com/Dash-02' },
    ]
    res.render(createPath('contacts'), { contacts, title })
})

app.get('/about_us', (req, res) => {
    res.redirect('contacts')
})

app.get('/posts/:id', (req, res) => {
    const title = 'Post'
    const post = {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
        title: 'Post title',
        date: '28.07.2023',
        author: 'Author',
    }
    res.render(createPath('post'), { title, post })
})

app.post('/add-post', (req, res) => {
    const { title, author, text } = req.body
    const post = {
        id: new Date(),
        date: (new Date()).toLocaleDateString(),
        title,
        author,
        text,
    }
    res.render(createPath('post'), { post, title })
})

app.get('/add-post', (req, res) => {
    const title = 'Add post'
    res.render(createPath('add-post'), { title })
})

app.get('/posts', (req, res) => {
    const title = 'Posts'
    const posts = [
        {
            id: '1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
            title: 'Post title',
            date: '28.07.2023',
            author: 'Author',
        }
    ]
    res.render(createPath('posts'), { title, posts })
})

app.use((req, res) => {
    const title = 'Error Page'
    // res.statusCode = 404
    res
        .status(404)
        .render(createPath('error'), { title })
})