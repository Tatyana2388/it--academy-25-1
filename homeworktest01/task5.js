const arr = [1, 2, [3, [8, 9]], [1, [2, 4, 5]], 5, 6];
const countSum = arr => arr.flat(Infinity).reduce((a, b) => a + b);
console.log(countSum(arr));
