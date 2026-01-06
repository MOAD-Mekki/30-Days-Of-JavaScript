let length = prompt('Enter the code length: ');
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomId = '';
for (let i = 0; i < length ; i++){
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
}
console.log(randomId);

let hexCharacters = "0123456789ABCDEF";
let hexColor = '#';
for (let i = 0; i < 6 ; i++){
    let randomIndex = Math.floor(Math.random() * hexCharacters.length);
    hexColor += hexCharacters[randomIndex];
}
console.log(hexColor);

let rgbColor = 'rgb(';
for (let i = 0 ; i < 3 ; i++){
    let randomValue = Math.floor(Math.random() * 256);
    rgbColor += randomValue;
    if( i < 2){
        rgbColor += ' , ';
    }else{
        rgbColor += ')';
    }
}
console.log(rgbColor);

let countries = [
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

let countriesLength = [];
for (let i = 0; i < countries.length ; i++){
    countriesLength.push(countries[i].length);
}
console.log(countriesLength);

let arrayOfArray = [];
for (let i = 0 ; i < countries.length ; i++){
    let arrayElement = [countries[i] , countries[i].slice(0,3).toUpperCase() , countries[i].length ];
    arrayOfArray.push(arrayElement);
}
console.log(arrayOfArray);

let countriesContainAi = [];
for (let i = 0; i < countries.length ; i++){
    if (countries[i].endsWith('ia')){
        countriesContainAi.push(countries[i]);
    }
}
countriesContainAi.length === 0
    ? console.log('These are countries ends without ia')
    : console.log(countriesContainAi);

let moreCharacter = countries[0];
for (let i = 1 ; i < countries.length ; i++){
    if (countries[i].length > moreCharacter.length){
        moreCharacter = countries[i];
    }
}
console.log(moreCharacter);

let only5Characters = [];
for (let i = 0 ; i < countries.length ; i++){
    if(countries[i].length === 5){
        only5Characters.push(countries[i]);
    }
}
console.log(only5Characters);
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let longestWord = webTechs[0];
for (let i = 1; i < webTechs.length ; i++){
    if(longestWord.length < webTechs[i].length){
        longestWord = webTechs[i];
    }
}
console.log(longestWord);

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = '';
for (let i = 0 ; i < mernStack.length ; i++){
    acronym += mernStack[i].slice(0,1);
}
console.log(acronym);

let array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] ;
for (const tech of array){
    console.log(tech);
}

let fruit = ['banana', 'orange', 'mango', 'lemon'];
for ( let i = 0 ; i < fruit.length ; i++){
    if ( i === Math.floor((fruit.length-1)/2)){
        break;
    }
    if ( i >= fruit.length / 2){
        continue;
    }
    let temp = fruit[i];
    fruit[i] = fruit[fruit.length-1-i];
    fruit[fruit.length-1-i] = temp; 
}
console.log(fruit);

let fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];