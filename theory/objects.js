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
for (let key in people) {
    console.log(key) // keys of object
    console.log(people[key]) // values of keys
}