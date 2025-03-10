function getNum() {
    const getRandomInt = () => Math.ceil(Math.random() * 5);

    return new Promise((resolve) => {
        setTimeout(() => {
            const result = getRandomInt();
            console.log(result);
            resolve(result);
        }, 3000);
    });
}

async function square() {
    console.log(Math.pow(await getNum(), 2));
}

await square();