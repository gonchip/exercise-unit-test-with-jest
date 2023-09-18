const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3))

module.exports = { sum };


const fromEuroToDollar = function (valueInEuro) {

    let valueInDollar = valueInEuro * 1.2;

    return valueInDollar;
}


const fromDollarToYen = function (valueInDollar) {

    let valueInYen = valueInDollar * 106.58;

    return valueInYen;
}


const fromYenToPound = function (valueInYen) {

    let valueInPound = valueInYen * 0.006251;

    return valueInPound;
}


module.exports = {
    sum, fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}