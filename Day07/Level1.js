function fullName(){
    let firstName = 'Moad';
    let lastName = 'Mekki';
    const space = ' ';
    let fullName = firstName + space + lastName;
    console.log(fullName);
}
fullName();

function FullName(firstName,lastName){
    const space= ' ';
    let fullName = firstName + space + lastName;
    return fullName;
}
console.log(FullName('Moad','Mekki'));

const addNumbers = (num1 , num2) => {
    let sum = num1 + num2;
    return sum;
}
console.log('The sum of the two numbers ' + addNumbers(10,15));

const areaOfRectangle = (lenght , width) => {
    let area = lenght * width ;
    return area;
}
console.log('The area of the rectangle is ' + areaOfRectangle(10,10));

function volumeOfRectPrism (lenght , width , height) {
    return lenght * width * height;
}
console.log('The volume is ' + volumeOfRectPrism(10,5,2));

function speed (distance , timeTaken) {
    return distance / timeTaken;
}
console.log('The speed is ' + speed(100,2) + ' km/h');

const convertCelsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log('The temperature in Fahrenheit is ' + convertCelsiusToFahrenheit(25) + '°F');

function bmi (weight , height) {
    return weight / (height * height);
}
console.log('The BMI is ' + bmi(70,1.75).toFixed(2));
const value = bmi(70, 1.75);

switch (true) {
  case value < 18.5:
    console.log('Underweight');
    break;
  case value < 24.9:
    console.log('Normal weight');
    break;
  case value <= 29.9:
    console.log('Overweight');
    break;
  default:
    console.log('Obese');
}

function checkSeason(month) {
    let season;
    switch (month) {
        case 'September':
        case 'October':
        case 'November':
            season = 'Autumn';
            break;
        case 'December':
        case 'January':
        case 'February':
            season = 'Winter';
            break;
        case 'March':
        case 'April':
        case 'May':
            season = 'Spring';
            break;
        case 'June':
        case 'July':
        case 'August':
            season = 'Summer';
            break;
        default:
            season = 'Invalid month';
    }
    return season;
}
console.log(checkSeason('April'));

function findMax(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
console.log('The maximum number is ' + findMax(10, 25, 15));