const arr = [1, 2, 3, 4, 5];

function myFunction(initArr, newData, pos) {
    initArr.splice(pos, 0, ...newData);
}
myFunction(arr, ['a','b'], 1);
myFunction(arr, ['c'], 6);
myFunction(arr, ['e'], 8);

console.log(arr);
