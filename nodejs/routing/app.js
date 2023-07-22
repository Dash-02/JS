const http = require('http')
const fs = require('fs') // нужен для работы с файлами, кот. будут возвращать в браузер
const path = require('path') // чтобы формировать корректный путь

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log('Server request')
  
    res.setHeader('Content-Type', 'text/html')

    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

    let basePath =''

    switch (req.url) {
        case '/':
            basePath = createPath('index')
            break;

        case '/contacts':
            basePath = createPath('contacts')
            break;
    
        default:
            basePath = createPath('contacts')
            break;
    }

    // проверка адреса, приходящего запроса
    
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
         } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})