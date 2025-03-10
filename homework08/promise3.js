function getNum(min = 1, max = 5, sec = 3) {
    const getRandomInt = () => Math.ceil(Math.random() * (max - 1)) + min;

    return new Promise((resolve) => {
        setTimeout(() => {
            const result = getRandomInt();
            console.log(result);
            resolve(result);
        }, sec * 1000);
    });
}

async function getSum() {
    const num1 = await getNum();
    const num2 = await getNum(6, 10, 5);
    console.log(num1 + num2);
}

await getSum();