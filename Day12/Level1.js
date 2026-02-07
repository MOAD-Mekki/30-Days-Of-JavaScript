const str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const digitArray = str.match(/\d+/g);
console.log(digitArray);
const annualIncome = Number(digitArray[0])*12 + Number(digitArray[1]) + Number(digitArray[2])*12;
console.log(`The annual income is ${annualIncome} Euros`);

const txt = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction';
const extractDigits = txt.match(/-?\d+/g);
console.log(extractDigits);
const distance = Number(extractDigits[extractDigits.length-1]) - Number(extractDigits[0]);
console.log(`The distance between the furthest particles is ${distance}`);

const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/ig;
console.log(pattern.test('1first_name'));
console.log(pattern.test('first_name'));
