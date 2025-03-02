const arr = [12, 15, 20, 25, 59, 79];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
const average = sum /arr.length;
console.log(average);