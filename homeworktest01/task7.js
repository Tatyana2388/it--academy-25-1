const arr = [
    '1', '2', '3', '4', '5',
];

const transform = (arr, transformMethod) => {

    const result = {};
    arr.forEach(item => {

        result[item] = transformMethod(item);

    });

    console.log(result);

}

transform(arr, (item) => parseInt(item) * 10);