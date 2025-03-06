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
