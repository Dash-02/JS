const result = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const calculate = document.getElementById('submit')
const calculatePlus = document.getElementById('plus')
const calculateMinus = document.getElementById('minus')
const calculateDiv = document.getElementById('division')
const calculateMult = document.getElementById('multiplication')
const calculatePow = document.getElementById('pow')
let action = '+'

//console.log(typeof sum)

calculatePlus.onclick = function () {
    action = '+'
}
calculateMinus.onclick = function () {
    action = '-'
}
calculateDiv.onclick = function () {
    action = '/'
}
calculateMult.onclick = function () {
    action = '*'
}
calculatePow.onclick = function () {
    action = '^'
}
function printResult(resultElement) {
    if (resultElement < 0) {
        result.style.color = 'red'
    } else {
        result.style.color = 'green'
    }
    result.textContent = resultElement
}

function computeNumbersWithAction (inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    } else if (actionSymbol == '-') {
        return num1 - num2
    } else if (actionSymbol == '/') {
        return num1 / num2
    } else if (actionSymbol == '*') {
        return num1 * num2
    } else if (actionSymbol == '^') {
        return Math.pow(num1, num2)
    }
    //return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

calculate.onclick = function () {
    const resultFunc = computeNumbersWithAction(input1, input2, action)
    printResult(resultFunc)
}