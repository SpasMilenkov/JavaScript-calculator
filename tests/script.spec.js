const calcValue = require('./testing-copy');

test('various operators', () => {
    expect(calcValue('3 * 5 + 2 + 6 * -2 + 10')).toBe(15);
});
test('big numbers', () => {
    expect(calcValue('9000000000000 / 9')).toBe(1000000000000);
});
test('result is zero', () => {
    expect(calcValue('300 / 3 + 1 - 101 / 1')).toBe(0);
});
test('negative result', () => {
    expect(calcValue('5 * 5 + 2 - 7 * 5')).toBe(-8);
});
test('various operators', () => {
    expect(calcValue('9 - 8 * 1 - 2 + 1')).toBe(0);
});
test('various operators', () => {
    expect(calcValue('10 * 10 - 10 - 90 + 90')).toBe(90);
});
test('various operators', () => {
    expect(calcValue('5 * 3 - 15 * 1 / 3')).toBe(10);
});



