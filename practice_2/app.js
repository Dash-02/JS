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

//const arrNotes = ['note 1', 'note 2']
/*
// function rend () {

//     for (let i = 0; i < arrNotes.length; i++) {
//         listEl.insertAdjacentHTML('beforeend', getNoteTemplate(arrNotes[i]))    
//     }
// }

// rend()

addBtn.onclick = function () {

    if (inputText.value.length === 0) {
        return
    }

    // insertAdjacentHTML() разбирает указанный текст как HTML или XML и 
    // вставляет полученные узлы (nodes) в DOM дерево в указанную позицию
    // 'beforeend': сразу перед закрывающим тегом element (после последнего потомка)

    listEl.insertAdjacentHTML('beforeend', 
        getNoteTemplate(inputText.value))
    inputText.value = ''
}
*/

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

// массив из объектов
const arrNotes = [
    {
        title: 'note_1',
        completed: false,
    },
    {
        title: 'note_2',
        completed: true,
    },
]

function rend () {
    listEl.innerHTML = ""
    if (arrNotes.length === 0) {
        listEl.innerHTML = '<p>No notes</p>'
    }
    for (let i = 0; i < arrNotes.length; i++) {
        listEl.insertAdjacentHTML('beforeend', getNoteTemplate(arrNotes[i], i))    
    }
}

rend()

addBtn.onclick = function () {
    if (inputText.value.length === 0) {
        return
    }
    const newText = {
        title: inputText.value,
        completed: false,
    }
    arrNotes.push(newText)
    rend()
    inputText.value = ''
}

listEl.onclick = function (event) {
    //console.log(event.target.dataset.index)
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'target') {
            arrNotes[index].completed = !arrNotes[index].completed
        } else if (type === 'remove') {
            arrNotes.splice(index, 1)
        }
        rend()
    }
}

function getNoteTemplate(arrNotes, index) {
    return `
    <li 
        class="list-group-item d-flex justify-content-between 
        align-items-center"
    >
        <span class ="${arrNotes.completed ? 'text-decoration-line-through' : ''}">${arrNotes.title}</span>
        <span>
            <span class="btn btn-small btn-${arrNotes.completed ? 'warning' : 'success'}" data-index="${index}" data-type="target">
                &check;
            </span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">
                &times;
            </span>
        </span>
    </li>
`
}