// Функция логгирования
// на входе принимает некоторое сообщ-е
// Выводит сообщ-е в консоль

const EventEmitter = require('events')

class Logger extends EventEmitter{
    log = (msg) => {
        console.log(msg)
        this.emit('some_event', { id: 1, text: 'Event test text' })
    }
}

module.exports = Logger

// В app описаны события за кот. следим
// В log происходит вызов данных событий