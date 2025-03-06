const playersCount = 5;
const attempts = 10;
const results = [];

const getRandomInt = () => Math.ceil(Math.random() * 6);
const calcPlayerResult = () => Array(attempts).fill(0).reduce((res) => res + getRandomInt(), 0);

for (let i = 0; i < playersCount; i++) {

    results.push(calcPlayerResult());

}

const maxResult = Math.max(...results);
const onlyOneWinner = results.filter((res) => res === maxResult).length === 1;

console.log(results);
if (onlyOneWinner) {
    const winner = results.indexOf(maxResult);
    console.log(`Победил игрок ${winner + 1}`);
} else {
    console.log('Ничья')
}
