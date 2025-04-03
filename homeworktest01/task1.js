function toFormatCurrency(arr){
    arr.forEach(function(item) {
        const itemAsNumber = parseInt(item, 10);
        if (itemAsNumber) {
            console.log('$' + itemAsNumber.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

        } else {
            console.log('Can\'t recognize string: ', item);
        }
    })
}
const arr = ['123', '686787', '87898789', '7797', '12', 'a2'];

toFormatCurrency(arr);