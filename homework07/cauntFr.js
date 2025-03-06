// function printElapsedTime(testFn) {
//     const startTime = Date.now();
//     const result = testFn();
//     const endTime = Date.now();
//
//     console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
//     return result;
// }
//
// const yourFunctionReturn = printElapsedTime(yourFunction);
function numberOfFriday13(startYear) {
    let count = 0;
    let currentDate = new Date();

    for (let year=startYear; year <= currentDate.getFullYear(); year++) {
        for (let month=0; month<12; month++) {
            let date = new Date(year,month,13);
            if (date < currentDate && date.getDay() === 5) {
                count++;
            }
        }
    }
    return count;
}


console.log(numberOfFriday13(2022));
