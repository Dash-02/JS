const arr = [4, 2, 45, 21, 67, 3, 6, 34, 8, 10, 53]
const arrMin = []
const arrMax = []
let count = 0

function quickSort (arr) {
    const lastEl = arr[arr.length-1]
    /*for (let i = 0; i < arr.length; i++) {
      if (lastEl < arr[i]) {
        arrMax[i] = arr[i]
      } else {
        arrMin[i] = arr[i]
      }
    }*/

    for (let i = 0; i < arr.length; i++) {
        count++
        for (let j = 0; j < arr.length; j++) {
           if (lastEl < arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
           }
        }
    }
    return arr;
}

console.log(quickSort(arr))
console.log(`count = ${count}`)