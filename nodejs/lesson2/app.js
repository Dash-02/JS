const fs = require('fs')

// readFile() async function
// чтобы получить данные в виде строки: 1.utf8 or 2.toString()
fs.readFile('./text.txt', 'utf8', (error, data) => {
    // console.log(data.toString())
    // console.log(data)

     fs.writeFile('./files/text3.txt', `${data} It's new file!`, (error) => {
        error ? console.log(error) : null
     })
})

fs.mkdir('./files', () => {
    
})