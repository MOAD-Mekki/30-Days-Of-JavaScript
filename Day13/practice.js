import countries from "./countreis";

// Level 1 

console.group('Countries:');
console.table(countries);
console.table(countriesObject); // supposing that there is a countries Object
console.groupEnd();

// Level 2
console.assert(10 > 2*10 , '10 is not grater then 2*10 = 20');
console.warn('This is a warning message');
console.error('We all make mistakes and errors');

// Level 3
console.time('Regular for loop');
for (let i = 0 ; i < countries.length ; i++){
    console.log(countries[i]);
}
console.timeEnd('Regular for loop');

console.time('for of loop');
for (const country of countries){
    console.log(country);
}
console.timeEnd('for of loop');

console.time('forEach loop');
countries.forEach(country => console.log(country));
console.timeEnd('forEach loop');