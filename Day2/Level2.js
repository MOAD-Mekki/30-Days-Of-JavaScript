let quote1 = 'There is no exercise better for the heart than reaching down and lifting people up.';
console.log("The quote: " + quote1 + " by John Holmes teaches us to help one another.");
let quote2 = 'Love is not patronizing and charity isnt about pity, it is about love. Charity and love are the same -- with charity you give love, so dont just give money but reach out your hand instead.';
console.log("The quote: " + quote2 + " by Mother Teresa.");
let check1 = typeof('10') === 10; // false: because the first is a string the second is a number
check1 = Number('10') === 10;
console.log(check1);
let check2 = parseFloat('9.8') === 10;// false: because 10 > 9.8
check2 = Math.ceil(parseFloat('9.8')) === 10;
console.log(check2);
let word1 = 'pyrhon';
let word2 = 'jargon';
console.log(word1.includes('on'));
console.log(word2.includes('on'));
let sentence = 'I hope this course is not full of jargon';
console.log(sentence.includes('jargon'));
const randNum1 = Math.floor(Math.random() * 101);
console.log(randNum1);
const randNum2 = Math.floor( (Math.random()*51)+50);
console.log(randNum2);
const randNum3 = Math.floor((Math.random()*201)+55);
console.log(randNum3);
const random = Math.floor(Math.random()*11)//first we need to creat a random num between 0 and 10 . why 10? because its the length of the string .
let string = 'JavaScript';
console.log(string[random]);
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.substr(31,23));