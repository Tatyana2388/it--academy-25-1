new Promise(function(resolve) {
     resolve(5);
}).then(function(result) {

    return new Promise(function(resolve) {
        setTimeout(() => resolve(result * result),  3000);
    })

}).then(function(result) {

    return new Promise(function(resolve) {
        setTimeout(() => resolve(result * result),  3000);
    })

}).then(function(result) {
    console.log(result);
})
