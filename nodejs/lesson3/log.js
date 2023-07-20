// Функция логгирования
// на входе принимает некоторое сообщ-е
// Выводит сообщ-е в консоль

const EventEmitter = require('events')
const emitter = new EventEmitter()

const log = (msg) => {
    console.log(msg)
    emitter.emit('some_event', { id: 1, text: 'Event test text' })
}

module.exports = log

// В app описаны события за кот. следим
// В log происходит вызов данных событий