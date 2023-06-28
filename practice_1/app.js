/*
let number = 42
let myName = 'Dasha'
const Proger = true
*/
// Proger = false // error because of const

/* Can do
let $ = 'test'
let $number = 12
let number$ = 21
let _ = 34
let _n = 34
let n_ = 34

let first_name = 'Joe' // bad
let firstName = 'John' // good
*/

//alert(myName)
//console.log('Your name: ', myName, number)

/*console.log(number + 10)
console.log(number - 10)
console.log(number * 10)
console.log(number / 10)
console.log(number)*/

/*let number2 = number + 10

console.log(number, number2)

number = number2 - number
console.log(number, number2)

let number3 = (number + 20)
console.log(number3)
*/
//const fullName = myName + ' Sem'
//console.log(fullName)

//console.log(result.textContent)
//result.textContent = 42

const result = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const calculate = document.getElementById('submit')
const calculatePlus = document.getElementById('plus')
const calculateMinus = document.getElementById('minus')
let action = '+'

//console.log(typeof sum)

calculatePlus.onclick = function () {
    action = '+'
}
calculateMinus.onclick = function () {
    action = '-'
}
calculate.onclick = function () {

    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        result.textContent = sum
    }

    if (action == '-') {
        const difference = Number(input1.value) - Number(input2.value)
        result.textContent = difference
    }
}