const arr = [4, 2, 45, 21, 67, 3, 6, 34, 8, 10, 53]
let count = 0

function quickSort (arr) {
    
    let pivotInd = arr.length-1
    let pivot = arr[arr.length-1]
    let min = []
    let max = []

    if (arr.length <= 1) {
        return arr
    }

    for (let i = 0; i < arr.length; i++) {
        count++
        if (i === pivotInd) {
            continue
        }
        if (arr[i] < pivot) {
            min.push(arr[i])
        } else {
            max.push(arr[i])
        }
    }
    return [...quickSort(min), pivot, ...quickSort(max)];
}

console.log(quickSort(arr))
console.log(`count = ${count}`)