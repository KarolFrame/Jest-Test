const { fromEuroToDollar, fromDollarToYen,  fromYenToPound  } = require('./app.js');

test('One euro should be 1.07 dollars', () => {
    let euros = 1;
    expect(fromEuroToDollar(euros)).toBe(1.07);
});

test('1.07 dollar should be 156.5 yens', () => {
    let dollars = 1.07;
    expect(fromDollarToYen(dollars)).toBe(156.5);
});

test('156.5 yens should be 0.87 GBP', () => {
    let yens = 156.5;
    expect(fromYenToPound(yens)).toBe(0.87);
});