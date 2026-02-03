import countries from "./countries.js";
import webTechs from "./web_techs.js";

console.log(countries);
console.log(webTechs);

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanTxt = text.replace(/[.,]/g , '');
console.log(cleanTxt);
let array = text.split(" ");
console.log(array);
let numOfWords = array.length;
console.log('There are ' + numOfWords +' word');
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.splice(0,0,'Meat');// we can add the item in the end by using push() or at the start by unShift()
console.log(shoppingCart);
shoppingCart.splice(4,1);// shoppingCart.splice(3,1);
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);
shoppingCart.splice(4,1,'Green Tea');
console.log(shoppingCart);
countries.includes('Ethiopia')
    ? console.log('ETHIOPIA')
    : countries.push('Ethiopia');
console.log(countries);
webTechs.includes('Sass')
    ? console.log('Sass is a CSS preprocess')
    : webTechs.splice(2,0,'Sass');
console.log(webTechs);
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);