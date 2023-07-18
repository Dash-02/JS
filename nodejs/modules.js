// импорт
const os = require('os')
const { firstName: user, sayHello } = require('./test1')

const name = 'Rain'

// console.log(sayHello(name))

module.exports = name

console.log(os.platform(), os.release())