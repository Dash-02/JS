const arr = [-2, 4, -3, 7, 0, 12, 5, 3, 9, 6]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
           if (arr[i] < arr[j]) {
                let min = arr[i]
                arr[i] = arr[j]
                arr[j] = min
           }
            
        }
        
    }
    return arr;
}

console.log(selectionSort(arr))