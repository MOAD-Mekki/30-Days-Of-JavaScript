let base = prompt('Enter base:');
let height = prompt('Enter height:');
let area = 0.5 * base * height ;
console.log('The area of the triangle is ' + area);

let sideA = prompt('Enter side a:');
let sideB = prompt('Enter side b:');
let sideC = prompt('Enter side c:');
let perimeter = sideA + sideC + sideB;
console.log('The perimetre pf the triangle is ' + perimeter);

let radius = prompt('Enter radius:');
const pi = 3.14;
let areaOfCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log('The circle area is ' + areaOfCircle +'and its circumference is ' + circumference);

const slope1 = 2 // the slope of y = 2x -2 
let y_intercept = 2*0 - 2 // that means x = 0
let x_intercept = 1 // by solving (2x-2 = 0) that means y = 0
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const slope2 = (y2 - y1)/(x2 - x1);
let isEqual = slope1 === slope2;
console.log('The slope1 is ' + slope1 + ' and slope2 is ' + slope2 + '. Are they equal? ' + isEqual);

let firstName = 'Moad';
let lastName = 'Mekki';
const isEqual2 = firstName.length === lastName.length;
isEqual2 === true
    ? console.log('Your first name, ' + firstName + ', is equal to your family name, ' + lastName)
    : firstName.length > lastName.length
        ? console.log('Your first name, ' + firstName + ', is longer than your family name, ' + lastName)
        : console.log('Your family name, ' + lastName + ', is longer than your first name, ' + firstName);

let myAge = 250;
let yourAge = prompt('Enter your age:');
let ageDifference = myAge - yourAge;
console.log('I am ' + ageDifference + ' years older than you.');

let birthYear = prompt('Enter your birth year:');
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
userAge >= 18
    ? console.log('You are ' + userAge + '. You are old enough to drive.')
    : console.log('You are ' + userAge + '. You will be allowed to drive after ' + (18 - userAge) + ' years.');

let years = prompt('Enter number of years you live:');
let seconds = years * 365 * 24 * 60 * 60;
console.log('You have lived for ' + seconds + ' seconds.');

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
console.log(year + '-' + month + '-' + date + ' ' + hours + ':' + minutes);
console.log(date + '-' + month + '-' + year + ' ' + hours + ':' + minutes);
console.log(date + '/' + month + '/' + year + ' ' + hours + ':' + minutes);