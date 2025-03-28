const items = [
    {name:'Kate', age: 18},
    {name:'Sara', age: 28},
    {name:'Milk', age: 18},
    {name:'Kate', age: 28},
    {name:'Nick', age: 38},
];

const result = {};

items.forEach(item => {
    result[item.age] = result[item.age] || [];
    result[item.age].push(item.name);
})

console.log(result);

