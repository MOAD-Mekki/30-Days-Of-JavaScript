const newSet = new Set();
const setOfNumbers = new Set();
for (let i = 0 ; i <= 10 ; i++){
    setOfNumbers.add(i);
}
console.log(setOfNumbers);

setOfNumbers.delete(5);
console.log(setOfNumbers);

setOfNumbers.clear();
console.log(setOfNumbers);

const string = ['Coffee','Tea','Milk','Water','Soda'];
const stringSet = new Set(string);
console.log(stringSet);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany'
];

const countryCharCount = new Map();

for (const country of countries){
    countryCharCount.set(country , country.length);
}
console.log(countryCharCount);