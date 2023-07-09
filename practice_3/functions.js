// =========== Function Declaration
// можно вызывать ф-цию до ее объявления
/*function d (name) {
    console.log('Hello -', name)
}
d('Dash')
*/
// =========== Function Expression

const a = function (name) {
    console.log('2 Hello -', name)
}
a('Dash')

// console.dir(a)

// выполняет код с задержкой. 1500 - 1.5 sec

// setTimeout(a, 1500)
/*
setTimeout(function() {
    d ('Dash')
}, 1500)

let counter = 0
// выполняет ф-цию через каждый указанный интервал
const interval = setInterval(function() {
    if (counter === 5) {
       clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 2000)
*/
// =========== Arrow Function

const arrow = (name) => {
    console.log('Hello -', name)
}

const arrow2 = (name) => console.log('Hello -', name)

arrow2('Dash')

function pow(num, exp) {
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow2(4, 2))

// ========== Default Parameters

// const sum = (a = 1, b = 6) => a + b

// console.log(sum(40, 5))
// console.log(sum())

// ... - оператор rest
function sum1 (... numbers) {
    // let res = 0
    // for (let num of numbers) {
    //     res += num
    // }
    // return res
    return numbers.reduce((acc, cur) => (acc += cur), 0)
}
console.log(sum1(1, 3, 5, 6, 7))

// =========== Closures

// ф-ция в которой есть другая ф-ция
function createPerson (name) {
    return function(lastname) {
        console.log(name + ' ' + lastname)
    }
}

const addLastName = createPerson('Dash')
addLastName('Lee')