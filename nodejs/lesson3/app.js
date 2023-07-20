// Модуль событий. С его помощью осуществляется реагирование на 
// EventEmitter это конструктор, чтобы пользоваться событиями нужно создать его экземпляр

const Logger = require('./log')
const logger = new Logger()

// метод on - слежение за событием
// создание события
logger.on('some_event', (args) => {
    const { id, text } = args // деструктуризация
    console.log(id, text)
})

// emit для вызова события, кот. создали
// 1й аргумент - имя события, 2й арг. - данные
// emitter.emit('some_event', { id: 1, text: 'Event test text' }) // перенесен в log

logger.log('Logged!')