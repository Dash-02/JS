// текущая дата
const nowTime = new Date()

// в скобках передается кол-во мс
const start = new Date(1000 * 60 * 60 * 24 * 365)

const date = new Date(2011, 0, 1, 12, 35, 11)

// получение текущей даты и времени
console.log(nowTime.getFullYear())
// console.log(nowTime.getMonth())
// console.log(nowTime.getDate())
// console.log(nowTime.getHours())
// console.log(nowTime.getMinutes())

// указание даты
nowTime.setFullYear(2024)

console.log(nowTime.toDateString()) // только дата
console.log(nowTime.toTimeString()) // только время
// console.log(nowTime.toLocaleDateString())
// console.log(nowTime.toLocaleTimeString())