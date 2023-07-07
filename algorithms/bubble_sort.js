const arr = [-2, 4, -3, 7, 0, 12, 5, 3, 9, 6]
let count = 0

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
           if (arr[j + 1] < arr[j]) {
                let tmp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = tmp
           }
           count++
        }
    }
    return arr;
}

console.log(selectionSort(arr))
console.log(count)