// Функция логгирования
// на входе принимает некоторое сообщ-е
// Выводит сообщ-е в консоль

const EventEmitter = require('events')

// вместо классического наследования можно воспользоваться модулем util
const util = require('util')

class Logger {
    log = (msg) => {
        console.log(msg)
        this.emit('some_event', { id: 1, text: 'Event test text' })
    }
}

util.inherits(Logger, EventEmitter)

module.exports = Logger

// В app описаны события за кот. следим
// В log происходит вызов данных событий