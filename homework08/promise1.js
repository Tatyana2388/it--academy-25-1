const generatePromise = (result) => {
    return new Promise((resolve) => {

        const timer = Math.floor(Math.random() * 4) + 1;
        setTimeout(() => {
            resolve(result);
        }, timer * 1000);
    })
}

Promise.race([generatePromise(1), generatePromise(2), generatePromise(3)])
       .then(value => console.log(value));

