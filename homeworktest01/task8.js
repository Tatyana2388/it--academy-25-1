async function callPromises (promises) {

    Promise.all(promises).then((result) => {
        console.log(result);
    })

}

const promise1 = new Promise(resolve => setTimeout(() => resolve(1000), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve(4000), 4000));
const promise3 = new Promise(resolve => setTimeout(() => resolve(3000), 3000));
const promise4 = new Promise(resolve => setTimeout(() => resolve(2000), 2000));
const promise5 = new Promise(resolve => setTimeout(() => resolve(5000), 5000));

await callPromises([promise1, promise2, promise3, promise4, promise5]);