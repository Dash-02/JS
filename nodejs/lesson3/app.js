// Модуль событий. С его помощью осуществляется реагирование на 

const EventEmitter = require('events') // класс
const log =require('./log')

const emitter = new EventEmitter()

// метод on - слежение за событием
// создание события
emitter.on('some_event', (args) => {
    const { id, text } = args // деструктуризация
    console.log(id, text)
})

// emit для вызова события, кот. создали
// 1й аргумент - имя события, 2й арг. - данные
// emitter.emit('some_event', { id: 1, text: 'Event test text' }) // перенесен в log

log('Logged!')