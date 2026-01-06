import countries from "./countries.js";

const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];
let copyOfCountries = countries2.slice();
let sortedCountries = copyOfCountries.sort();
console.log(copyOfCountries);
console.log(sortedCountries);

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
const sortedWebTechs= webTechs.sort();
const sortedMernStack = mernStack.sort();
console.log(sortedMernStack);
console.log(sortedWebTechs);
let countriesWithLand = [];
for (let i = 0 ; i < countries.length ; i++){
    if (countries[i].includes('land')){
        countriesWithLand.push(countries[i]);
    }
}
console.log(countriesWithLand);

let highestCharacters = countries[0];
for (let i = 1 ; i < countries.length ; i++){
    if (countries[i].length > highestCharacters.length){
        highestCharacters = countries[i];
    }
}
console.log(highestCharacters);

let onlyFourCharacters = [];
for ( let i = 0; i < countries.length ; i++){
    if ( countries[i].length === 4){
        onlyFourCharacters.push(countries[i]);
    }
}
console.log(onlyFourCharacters);

let countriesWithTwoWords = [];
for (let i = 0; i < countries.length ; i++){
    if (countries[i].includes(' ')){
        countriesWithTwoWords.push(countries[i]);
    }
}
console.log(countriesWithTwoWords);

let countriesReversed = countries.slice().reverse();
let result = [];
for (let i = 0 ; i < countries.length ; i++){
    result.push(countriesReversed[i].toUpperCase());
}
let sortedRversedCountries = countriesReversed.sort();
console.log(result);