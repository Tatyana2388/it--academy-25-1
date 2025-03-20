function divideNumber(number, parts) {

    let rest = number;
    for (let i = 0; i < parts - 1; i++) {
        const part = ((rest - (parts - i)) * Math.random()).toFixed(2);
        rest -= part;
        console.log(part);
    }

    console.log(rest);

}
divideNumber(15,3);