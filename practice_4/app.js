// const car = {
//     model: 'Tesla',
//     year: 2023,
// }

// const json = JSON.stringify(car)
// console.log(json)

// const parsed = JSON.parse(json)
// console.log(parsed)

const list = document.querySelector('#list')
const filt = document.querySelector('#filter')
let USERS = []

filt.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    //const { value } = event.target
    const filtUsers = USERS.filter((user) => 
        user.name.toLowerCase().includes(value)
    )
    rend(filtUsers)
})

async function start() {
    list.innerHTML = 'Loading...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users') // возвращает promise
        const data = await resp.json()
        setTimeout(() => {
            USERS = data
            rend(data)
        }, 2000)
    } catch (error) {
        list.style.color = 'red'
        list.innerHTML = error.message
    }
}

function rend(users = []) {
    if (users.length === 0) {
        list.innerHTML = 'No matched users('
    } else {
        const html = users.map(toHTML).join('')
        list.innerHTML = html
    }
}

function toHTML(user) {
    return `
    <li class="list-group-item">${user.name}</li>
    `
}
start()