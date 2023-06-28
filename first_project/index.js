console.log("hello!");
let age = 12;
const a2 = 13;
var a3 = 14;
let name = 'Lily';
console.log(`Hi, ${name}, your age = ${age}`)

let arr = [1, 2, 4, 5, 6];
console.log(arr)

for (let i = 0; i < arr.length; i++)
{
    arr[i] += 1
}

console.log(arr)

arr.forEach(element => {
    element += 4;
    console.log(element);
});

console.log('concat' + arr)

const arr1 = [1,2,3,4]

function pusher(arr1, element){
    return arr1.push(element) 
}

console.log(pusher([1,2,6,7,4], 5))
