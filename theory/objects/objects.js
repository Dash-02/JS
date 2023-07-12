const people = {
    firstName: 'Duck',
    age: 19,
    isHaveWork: true,
    languages: ['en', 'es'],
    address: {
        city: 'Los Angeles',
        street: 'Sunset Strip',
    },
    'complex key': 'complex',
    [1 + 2]: 'computed value',
    greet() {
        console.log('Hello', this)
    },
    // this в arrow function - это глобальный объект window
    // т.к. стрелочные ф-ции не создают свой контекст и поэтому
    // он не перенимает контекст объекта и принимает глобальный контекст

    // глобальные объекты - window, document, navigation
    arrow: () => {
        console.log('arrow', this)
    },
    // this в обычной ф-ции - это текущий объект
    // классические ф-ции создают свой собственный контекст
    // и this относится к тому объекту, в контексте которого
    // они определены
    information() {
        console.log(this)
        console.log(this.firstName)
    },
}

// console.log(people)
// people.greet()
// people.information()

// console.log(people.address)
const addressKey = 'address'
// console.log(people[addressKey]) // динамический ключ
// console.log(people['complex key'])

// people.age++
// people.languages.push('ct')
// console.log(people.languages)

// people.address = undefined // bad
// delete people.address // good

// console.log(people)

// ===== Destructuring ===== Деструктуризация

// const age = people.age
// const firstName = people.firstName
// const languages = people.languages // bad

// firstName = 'Ruby'

const {age, firstName: name1 = 'Robert', languages} = people // good

// console.log(languages, age, firstName)

// когда массив используется for of
// когда объект используется for in
// цикл проходит и по прототипам, поэтому необходима проверка
// для снижения ошибок
/*for (let key in people) {
    if (people.hasOwnProperty(key)) {
        console.log(key) // keys of object
        console.log(people[key]) // values of keys
    }
}*/

// Object.keys(people).forEach((key) => {
    // console.log(people[key])
// })

const logger1 = {
    keys() {
        console.log('Object keys:', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log('key:', key)
            console.log('value:', this[key])
        })
    },
}
// параметр - это контекст (объект)
// logger1.keys.bind(people)
// const bound = logger1.keys.bind({ a: 1, b: 3 })
// bound()

// const bound = logger1.keys.bind({ a: 1, b: 3 })()

// сразу вызывают ф-цию
// logger2.keys.call(people, false, , , )

// если у ф-ции есть параметры, то в call они все перечисляются
// в apply ф-ция принимает 2 параметра, 2-й всегда массив
// logger2.keys.apply(people, [])


// =========== Classes

// классы позволяют создавть объекты
class Human {
    // статичные поля относятся к самому классу, но не к экземплярам
   static isHuman = true
}

class Person extends Human {
    constructor(name2, age1) {
        super() // вызывает родительский констуктор
        this.name2 = name2 ?? 'Undefined name'
        this.age1 = age1 ?? 'Undefined age'
    }

    sayHi() {
        console.log('Hi,', this.name2)
    }
}

const person1 = new Person('Sunny', 24)
const person2 = new Person('Lisa', 25)

// экземпляры класса Person
// person1.sayHi()
// person2.sayHi()

console.log(person1.isHuman) // undefined, тк это экземпляр класса
console.log(Person.isHuman) // true
console.log(Human.isHuman) // true