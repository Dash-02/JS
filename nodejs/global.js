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

const url = new URL('https://nodejs.org/en/docs#name')
console.log(url.hostname) // получение сведений о хосте
console.log(url.href) // получение полной ссылки
console.log(url.pathname) // получение пути (при указании # в url)
console.log(url.hash) // получение доступа (при указании # в url)