const array = [10, 20, 30, 40, 50];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("The sum of the array elements is:", sum);
array.forEach(num => {
    console.log("Array element:", num);
});
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));
products.forEach(product => console.log(product));

const upperCountry = countries.map(country => country.toUpperCase());
console.log(upperCountry);
const countryLength = countries.map(country => country.length);
console.log(countryLength);
const squareNumber = numbers.map(num => num * num);
console.log(squareNumber);
const upperName = names.map( name => name.toUpperCase());
console.log(upperName);
const productPrice = products.map( product => product.price);
console.log(productPrice);

const countryIncludesLand = countries.filter( country => country.includes('land'));
console.log(countryIncludesLand);
const sixCharCountry = countries.filter( country => country.length === 6);
console.log(sixCharCountry);
const moreThenSixCharCountry = countries.filter( country => country.length > 6);
console.log(moreThenSixCharCountry);
const countryStartWithE = countries.filter( country => country.startsWith('E'));
console.log(countryStartWithE);
const pricesWithValue = products.filter( product => typeof(product.price) === 'number');
console.log(pricesWithValue);

function getStringLists(array){
    const stringArray = array.filter( element => typeof(element) === 'string');
    return stringArray;
}
console.log(getStringLists([1,2,'Hi','Hello','Nan',true]));

const sumOfNumbers = numbers.reduce((prev,num) => prev + num,0);
console.log(sumOfNumbers);
const concatCountrys = countries.reduce((prev,curr) => prev + ',' + curr);
console.log(concatCountrys);

/*
    some() -> Is there at least one ?
    every() -> Do all elements ?
*/
const isNameLongerThen7 = names.some( name => name.length >= 7);
console.log(isNameLongerThen7);
const allCountrysContainLand = countries.every( country => country.includes('land'));
console.log(allCountrysContainLand);

const first6CharCountry = countries.find( country => country.length === 6);
console.log(first6CharCountry);
const first6CharCountryIndex = countries.findIndex( country => country.length === 6);
console.log(first6CharCountryIndex);
const norwayIndex = countries.findIndex( country => country === 'Norway');
console.log(norwayIndex);
const russiaIndex = countries.findIndex( country => country === 'Russia');
console.log(russiaIndex);