const arr = [
    {name: 'Kate', age: 20},
    {name: 'Peter', age: 20},
    {name: 'Jhon', age: 25},
    {name: 'Nick', age: 28},
    {name: 'Kate', age: 25},
    {name: 'Jhon', age: 25},
    {name: 'Kate', age: 20},
];

const findUniqueByMethod = (arr, isEqual) => {

    const result = [];
    arr.reverse().forEach(initialItem => {

        let isUnique = true;
        result.forEach((resultItem) => {

            if (isEqual(initialItem, resultItem)) {

                isUnique = false;

            }

        });

        if (isUnique) {
            result.push(initialItem);
        }

    });

    return result;
}

const isEqual = (a, b) => a.age === b.age;
const result = findUniqueByMethod(arr, isEqual);
console.log(result);
