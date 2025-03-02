const arr = [1, 2, 3, 4, 5];

function myFunction(initArr, newData, pos) {
    initArr.splice(pos, 0, ...newData);
    console.log(initArr);
}
myFunction(arr, ['a','b','c'], 3);
