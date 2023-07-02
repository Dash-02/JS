const arr = [1,3,4,7,4,8,9,10,2,17,59]
let count = 0
function linearSearch (arr, item) {
    for (let i = 0; i < arr.length; i++) {
        count++
        if (arr[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(arr, 59))
console.log(count)