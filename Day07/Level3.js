function userIdGeneratedByUser() {
    let numOfCharacters = prompt('Enter the number of characters: ');
    let numOfIds = prompt('Enter the number of ids: ');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < numOfIds; i++) {
        let id = '';
        for (let j = 0; j < numOfCharacters; j++) {
            id += chars[Math.floor(Math.random() * chars.length)];
        }
        console.log(id);
    }
}
userIdGeneratedByUser();

function rgbColorGenerator() {
    let rgb = 'rgb(';
    for (let i = 0; i < 3; i++) {
        rgb += Math.floor(Math.random() * 256);
        if (i < 2) {
            rgb += ' , ';
        } else {
            rgb += ')';
        }
    }
    console.log(rgb);
}
rgbColorGenerator();

function arrayOfHexaColors(number) {
    let hexChars = "0123456789ABCDEF";
    let arrayOfColors = [];

    for (let i = 0; i < number; i++) {
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += hexChars[Math.floor(Math.random() * hexChars.length)];
        }
        arrayOfColors.push(color);
    }
    return arrayOfColors;
}
console.log(arrayOfHexaColors(5));

function arrayOfRgbColors(numberOfElement) {
    let arrayOfRgb = [];

    for (let i = 0; i < numberOfElement; i++) {
        let rgb = 'rgb(';
        for (let j = 0; j < 3; j++) {
            rgb += Math.floor(Math.random() * 256);
            if (j < 2) {
                rgb += ' , ';
            } else {
                rgb += ')';
            }
        }
        arrayOfRgb.push(rgb);
    }
    return arrayOfRgb;
}
console.log(arrayOfRgbColors(5));

function convertHexaToRgb(hexaNumber) {
    let r = parseInt(hexaNumber.slice(1, 3), 16);
    let g = parseInt(hexaNumber.slice(3, 5), 16);
    let b = parseInt(hexaNumber.slice(5, 7), 16);

    return `rgb(${r} , ${g} ,${b})`;
}
console.log(convertHexaToRgb('#FFFFFF'));

function convertRgbToHexa(r, g, b) {
    let red = r.toString(16).padStart(2, '0');
    let green = g.toString(16).padStart(2, '0');
    let bleu = b.toString(16).padStart(2, '0');

    return `${red}${green}${bleu}`.toUpperCase();
}
console.log(convertRgbToHexa(255, 255, 255));

function generateColors(type, number) {
    let colors = [];

    if (type === 'hexa') {
        const hexChars = '0123456789ABCDEF';

        for (let i = 0; i < number; i++) {
            let color = '#';
            for (let j = 0; j < 6; j++) {
                color += hexChars[Math.floor(Math.random() * hexChars.length)];
            }
            colors.push(color);
        }

    } else if (type === 'rgb') {

        for (let i = 0; i < number; i++) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            colors.push(`rgb(${r}, ${g}, ${b})`);
        }

    }

    return colors;
}

function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
        let randomIndex = Math.floor(Math.random() * array.length);

        let temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

const isEmpty = (parameter) => {
    if (parameter.length === 0) {
        console.log('Your element is empty!');
    } else {
        console.log("Your element is not empty!");
    }
}
isEmpty([]);// Your element is empty!

function sumOfArrayItems(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) !== 'number') {
            return 0;
        } else {
            sum += array[i];
        }
    }
    return sum;
}
if (sumOfArrayItems([1, 2, 'Hi', 5]) !== 0) {
    console.log(sumOfArrayItems([1, 2, 'Hi', 5]));
} else {
    console.log('Not all the array element are Numbers.');
}

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) !== 'number') {
            return 0;
        } else {
            sum += array[i];
        }
    }
    return sum / array.length;
}
if (average([1, 2, 'Hi', 5]) !== 0) {
    console.log(average([1, 2, 'Hi', 5]));
} else {
    console.log('Not all the array element are Numbers.');
}

function modifyArray(array) {
    if (array.length < 5) {
        return 0;
    }
    array[4] = array[4].toUpperCase();
    return array;
}
modifyArray(['Hi', 'Hola', 'Halo', 'Salut', 'Hello']) === 0
    ? console.log('Item not found')
    : console.log(modifyArray(['Hi', 'Hola', 'Halo', 'Salut', 'Hello']));

function isPrime(number) {
    let isPrime = true;
    for (let i = 0; i < Math.floor(number / 2); i++) {
        if (number % i === 0) {
            isPrime = false;
            break
        }
    }
    return isPrime;
}
isPrime(5) === true
    ? console.log(`${5} is a prime number.`)
    : console.log(`${5} isn't a prime number.`);

function uniqueRandomNumbers() {
    let randomNumbers = new Set();

    while (randomNumbers.size < 10) {
        randomNumbers.add(Math.floor(Math.random() * 100));
    }

    return Array.from(randomNumbers);
}
console.log(uniqueRandomNumbers());

function isValidVariable(variable) {
    const validVariableRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return validVariableRegex.test(variable);
}
isValidVariable('myVariable1') === true
    ? console.log('It is a valid variable')
    : console.log('It is not a valid variable');

function sevenRandomNumbers() {
    let randomNumbers = new Set();

    while (randomNumbers.size < 7) {
        randomNumbers.add(Math.floor(Math.random() * 100));
    }

    return Array.from(randomNumbers);
}
console.log(sevenRandomNumbers());

function reverseCountries(countries) {
    let reversedCountries = [];
    for (let i = countries.length - 1; i >= 0; i--) {
        reversedCountries.push(countries[i]);
    }
    return reversedCountries;
}
console.log(reverseCountries(['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']));