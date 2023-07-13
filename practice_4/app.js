// const car = {
//     model: 'Tesla',
//     year: 2023,
// }

// const json = JSON.stringify(car)
// console.log(json)

// const parsed = JSON.parse(json)
// console.log(parsed)

const list = document.querySelector('#list')
async function start() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users') // возвращает promise
        const data = await resp.json()
        console.log(data)
    } catch (error) {
        
    }
}
start()

function rend() {

}