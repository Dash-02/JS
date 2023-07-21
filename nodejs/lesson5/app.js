const http = require('http')
const PORT = 3000

// ф-ция принимает 2 арг. - объект запроса и объект ответа
const server = http.createServer((req, res) => {
    console.log('Server request')
    console.log(req.url, req.method)
    /*
    // передает вспомогательную инфу с кот. можно взаимодействовать в браузере
    res.setHeader('content-Type', 'text/html')

    res.write('<h1>Hello, server</h1>')
    res.write('<p>First server!</p>')

    // end сообщает о том, что все нужные данные были добавлены в ответ, кот. отправляется и контроль можно возвращать браузеру
    res.end()
    */
    res.setHeader('content-Type', 'application/json')

    const data = JSON.stringify([
        { name: 'Mikasa', age: 23 },
        { name: 'Levy', age: 25 },
    ])

    res.end(data)
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

 