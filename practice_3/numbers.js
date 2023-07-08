const num = 12 // integer
const float1 = 12.5 // float
const pow = 10e3 // 10 in pow 3
const big = 1_000_000

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53) - 1)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Infinity)
// console.log(1 / 0)
// console.log(Number.isFinite(1 / 0))

// console.log(12 / undefined) // NaN

// const weird = 23 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(21))

const strInt = '34'
const strFloat = '12.5'
// console.log(strInt) // string
// console.log(Number(strInt)) // number
// console.log(Number(strFloat))

// console.log(parseInt(strInt))
// console.log(parseInt(strFloat))
// console.log(parseFloat(strFloat))

// console.log(+strInt, +strFloat)

console.log(+(0.1 + 0.2).toFixed(1))

// BigInt
// console.log(BigInt(Number.MAX_SAFE_INTEGER + 94224980))
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n)
// console.log(-42n)

// console.log(34.78n) // error
// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // 2

// Math