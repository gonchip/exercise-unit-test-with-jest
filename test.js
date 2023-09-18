const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
 
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1. dollars", function(){

    const { fromEuroToDollar } = require('./app.js')
    
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})



const { fromDollarToYen } = require('./app');


test("One dollar should be 106.58 yen", function(){
    
    const result = fromDollarToYen(1);
    
    
    expect(result).toBe(106.58); 
})


const { fromYenToPound } = require('./app');


test("One yen should be 0.006251 pounds", function(){
    
    const result = fromYenToPound(1);
    
    
    expect(result).toBe(0.006251); 
})