const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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

const totalPrice = products
    .filter( product => typeof(product.price) === 'number')
    .map(product => product.price)
    .reduce((sum,price) => sum + price,0);
console.log(totalPrice);

const reduceTotalPrice = products.reduce((sum,product) => sum + product.price,0);
console.log(reduceTotalPrice);

function categorizeCountries(countries){
    const patterns = ['land', 'ia', 'island', 'stan'];

    return countries.filter(country => patterns.some(pattern => country.toLowerCase().includes(pattern)));
}
console.log(categorizeCountries(['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']));

function countCountriesByFirstLetter(countries){
    return countries.reduce( (acc , country) => {
        const letter = country[0].toUpperCase();
        const existing = acc.find( item => item.letter === letter);
        if (existing){
            existing.count++;
        }else{
            acc.push({letter , count: 1});
        }
        return acc;
    },[]) 
}
console.log(countCountriesByFirstLetter(['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand' , 'Algeria' , 'Albania']));

function getFirstTenCountries(countries){
   const array = countries.reduce((acc,country,index) => {
    if (index < 10){
        acc.push(country);
    }
    return acc;
   },[]); 
}
console.log(getFirstTenCountries(countries));

function getLastTenCountries(countries){
    return countries.reduce((acc,country,index) => {
        if (index >= countries.length - 10) acc.push(country);
        return acc;
    },[]);
}
console.log(getLastTenCountries(countries));

function mostCommonInitial(countries){
    const counts = countCountriesByFirstLetter(countries);

    return counts.reduce((max,current) => {
        return current.count > max.count ? current : max;
    });
}
console.log(mostCommonInitial(countries));