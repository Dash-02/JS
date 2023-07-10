const dateTime = document.getElementById('output')
const btnFull = document.getElementById('full')
const btnDate = document.getElementById('date')
const btnTime = document.getElementById('time')
let action = 'time'

btnFull.onclick = () => action = 'full'
btnDate.onclick = () => action = 'date'
btnTime.onclick = () => action = 'time'

function dateUpdate() {
    dateTime.textContent = dateFormat(action)
}
dateUpdate()

setInterval(dateUpdate, 1000);

// Pure Function - ф-ция, котор. зависит только от входных параметров
function dateFormat (format) {
    const curTime = new Date()

    switch (format) {
        case 'full':
            return curTime.toLocaleDateString() + ' ' + curTime.toLocaleTimeString()

        case 'date':
            return curTime.toLocaleDateString()

        case 'time':
            return curTime.toLocaleTimeString()
    
        default:
            return curTime.toLocaleTimeString()
    }
}