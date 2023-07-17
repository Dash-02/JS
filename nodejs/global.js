// ======= Global objects =======

// console.log(global)

// setTimeout(() => {
//     console.log('hi')
// }, 2000)

// console.log(__dirname) // путь к исполняемому файлу
// console.log(__filename) // возвращает весь путь до файла, включая его имя и расширение

// console.log(process.env) //

// массив, который содержит аргументы командной строки
// [ '/usr/bin/node', '/home/dash/Документы/js/nodejs/global' ]
// 1-й элемент это node, 2-й - это исполняемый файл
// console.log(process.argv)

// console.log(`Hi, ${process.argv[2]}`)

const url = new URL('https://nodejs.org/en/docs')
console.log(url.hostname)