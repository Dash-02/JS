// Event Loop

// const tim = setTimeout(() => {
//     console.log('after 2 sec')
// }, 2000)

// clearTimeout(tim)

// setTimeout(() => {
//     console.log('after 4 sec')
// }, 4000)

// setInterval(() => {
    // console.log('hi')
// }, 1000)

function delay(callback, time = 1000) {
    setTimeout(callback, time)
}

delay(() => {
    console.log('timeout')
}, 2000)

const delay1 = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve([4, 5, 6])
            reject('Error in delay')
        }, time)
    })
    return promise
}

delay1(3000).then((data) => {
    console.log('Timeout', data)
    return data.map((x) => x ** 2)
}).then((data) => {
    console.log(data)
}).catch(err => {
    console.log(err)
}).finally(() => console.log('Finally'))

const getData = () => new Promise((resolve) =>
resolve([1, 2, 4])) 

getData().then((array) => console.log(array))

async function asyncEx() {
    try {
        await delay(4000)
        const data = await getData()
        console.log(data)
    } catch (err) {
        
    } finally {
        console.log('Finally')
    }
}

asyncEx()