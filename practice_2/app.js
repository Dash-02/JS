/* Theory

const array = [1, 2, 3, 4, 5]
const arrStr = ['a', 'b', 'd', null, 15]
const array1 = new Array (1, 2, 3, 4, 5)
console.log(array.length)
console.log(array[0])
console.log(array[array.length]) // undefined array[5]
console.log(array[array.length - 1]) // undefined array[5 - 1]
array[0] = 'Privet'
array[array.length] = 'sweet'
console.log(array)
*/

const inputText = document.getElementById('titleNote')
const addBtn = document.getElementById('adding')
const listEl = document.getElementById('list')

const arrNotes = ['note 1', 'note 2']

function rend () {

    for (let i = 0; i < arrNotes.length; i++) {
        listEl.insertAdjacentHTML('beforeend', getNoteTemplate(arrNotes[i]))    
    }
}

rend()

addBtn.onclick = function () {

    if (inputText.value.length === 0) {
        return
    }
    listEl.insertAdjacentHTML('beforeend', 
        getNoteTemplate(inputText.value)
    )
    inputText.value = ''
}

function getNoteTemplate(title) {
    return `
    <li>
        <span>${title}</span>
        <span>
            <span>&check;</span>
            <span>&times;</span>
        </span>
    </li>
`
}

/* Object Theory

const human = {
    firstName: 'Sam',
    lastName: 'Lee',
    year: 2005,
    hasGirlfriend: true,
    languages: ['ct', 'ru', 'en'],
    getFullName: function () {
        console.log(human.firstName)
    },
}
console.log(human.year)
console.log(human['languages'])
const key = 'hasGirlfriend'
console.log(human[key])
*/

const notes = [
    {
        title: 'note_1',
        completed: false,
    },
    {
        title: 'note_2',
        completed: false,
    },
]