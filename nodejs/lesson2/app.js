const fs = require('fs')

// readFile() async function
// чтобы получить данные в виде строки: 1.utf8 or 2.toString()
fs.readFile('./text.txt', 'utf8', (error, data) => {
    // console.log(data.toString())
    // console.log(data)

    fs.mkdir('./files', () => {
      fs.writeFile('./files/text2.txt', `${data} It's new file!`, (error) => {
        error ? console.log(error) : null
     })
   })

   // OR
/* использовать синхронные методы для соблюдения порядкаа выполнения
   fs.mkdirSync('./files', () => {})
   fs.writeFileSync('./files/text2.txt', `${data} It's new file!`, (error) => {
      error ? console.log(error) : null
   })
*/
})

setTimeout(() => {
   if (fs.existsSync('./files/text2.txt')){
      fs.unlink('./files/text2.txt', () => {})
   }
}, 4000)

setTimeout(() => {
   if (fs.existsSync('./files')){
      fs.rmdir('./files', () => {})
   }
}, 6000)