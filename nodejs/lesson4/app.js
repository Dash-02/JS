// типы потоков:
// 1. читающий
// 2. пишущий
// 3. дуплексный (и чтение и запись)
// 4. преобразующий (аналогичен 3., но позволяет менять читаемые или записываемые данные)

// подключение модулей
const fs = require('fs')
const zlib = require('zlib')

// создание читающего потока
const readStream = fs.createReadStream('./text.txt')
// создание пишущего потока
const writeStream = fs.createWriteStream('./new-text.txt')
// создание преобразующего (сжимающего) потока
const compressStream = zlib.createGzip()

// callback принимает порции данных - chunks
/*
readStream.on('data', (chunk) => {
    // console.log('-----') // чтение
    // console.log(chunk.toString())

    writeStream.write('\n---start---\n')
    writeStream.write(chunk)
    writeStream.write('\n---end---\n')
})
*/

// дуплексный поток
// pipe осуществляет чтение получаемых данных из readStream и передает их в метод writeStream
// readStream.pipe(writeStream)

// ф-ция перехвата ошибок при чтении или записи
const handleError = () => {
    console.log('Error')
    readStream.destroy() // уничтожает читающий поток, т.к. поврежденные данные не нужны
    // end() добавляет в конце строку
    writeStream.end('Finished with error...') // в записывающий поток добавим инфу об ошибке при чтении
}

// добавялем handleError между операциями чтения и записи
readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError)