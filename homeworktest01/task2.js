let arr = [10, 3, '', undefined, false, 1, undefined, null, 9, 8, NaN, 15];

const findTrueElements = arr => {
    return arr.filter((item) => !!item);

}
arr = findTrueElements(arr);
console.log(arr.sort((a, b) => b-a));




