// const characters = ['Geralt', 'Dandelion', 'Ciri', 'Yennefer']
// const chars = ['d', 'h', 'a', 'w', 'f', 'b']

// добавляет новый элемент в конец массива
//characters.push('Triss')

//добавляет новый элемент в начало массива
//characters.unshift('Triss')

// удаляет/извлекает 1й элемент из массива
//const name1 = characters.shift()

// удаляет/извлекает последний элемент из массива
// const name2 = characters.pop()

//console.log('Characters: ', characters, name2)

// меняет порядок элементов и изменяет изначальный массив
// console.log(characters.reverse())

// не изменяет изначальный массив
//const rever = characters.toReversed()

/*console.log(chars.sort(function (a, b) {
    return a.charCodeAt(0) - b.charCodeAt(0)
})
)*/

// сортировка изначального массива
// console.log(chars.sort())

//сортировка массива, не изменяет изначальный
//console.log(chars.toSorted())

//удаляет элемент из массива (index, count), изменяет изначальный
// console.log(chars.splice(2, 1))

// не изменяет изначальный массив
// console.log(characters.toSpliced(0, 2))

// поиск элемента в массиве
/*const theWitcher = 'Geralt'
const item = characters.indexOf(theWitcher)
characters[item] = 'Geralt from Rivia'
console.log(item)
console.log(characters[item])
console.log(characters)*/
// новый способ, не изменяет исходный массив:
// characters.with(item, 'Geralt from Rivia')

// все элементы преобразовываются в верхний регистр
// возвращает новый массив с изменненными данными

/*const capitalChar = characters.map(function (character, index) {
    //return character.toUpperCase()
    // return character.toLowerCase()
    // утсревший способ (метод with)
    if (index === 0) {
        return 'Geralt from Rivia'
    }
    return character
})*/

/*console.log(characters.includes('Ciri')) // true
// то же самое с помощью indexOf
console.log(characters.indexOf('Ciri')) // index = 2
console.log(characters.indexOf('Ciri') !== -1) // true*/

const people = [
    { name: 'Mike', budget: 2300 },
    { name: 'Walter', budget: 5200 },
    { name: 'Skyler', budget: 4000 },
    { name: 'Jesse', budget: 3200 },
]