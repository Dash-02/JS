const arr = [-2, 4, -3, 7, 0, 12, 5, 3, 9, 6]
let count = 0

function selectionSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
           if (arr[j] < arr[min]) {
                min = j
           }
           count++
        }
        let tmp = arr[i]
        arr[i] = arr[min]
        arr[min] = tmp
    }
    return arr;
}

function selectionSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
           if (arr[j] < arr[i]) { 
                let tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
           }
           count++
        }
    }
    return arr;
}

console.log(selectionSort2(arr))
console.log(count)