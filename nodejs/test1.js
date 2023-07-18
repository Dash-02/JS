const firstName = 'Dash'

const sayHello = (firstName) => `Hello, my name is ${firstName}`

// запись переменной в св-ва глобального объекта модуль
module.exports = {
    firstName,
    sayHello,  
} 