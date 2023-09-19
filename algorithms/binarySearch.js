const array = [2, 4, 7, 12, 23, 45]
let count = 0
let mid = array.length / 2
let lim = array.length - 1

let num = 45

function binarySearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        count++
        if (arr[mid] > n){
            arr[lim] = arr[mid]
            mid /= 2
        }
        return arr[mid];
    }
    return null;
}

console.log(binarySearch(array, num))
console.log(count)