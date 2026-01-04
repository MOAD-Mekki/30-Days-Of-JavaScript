let age = prompt("Please enter your age:");
if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You need to wait ${yearsLeft} more year(s) to drive.`);
}

let myAge = 18;
let yourAge = prompt("Enter your age: ");
if(yourAge > myAge){
    let ageDeffrence = yourAge - myAge;
    console.log('You are ' + ageDeffrence + ' years older then me');
}else if(myAge > yourAge){
    let ageDeffrence = myAge - yourAge;
    console.log('I am ' + ageDeffrence + ' years older then you');
}else{
    console.log('We have the same age');
}

// Using if else
let a = prompt('A: ');
let b = prompt('B: ');
if(a > b){
    console.log(a + ' is greater then ' + b);
}else{
    console.log(b + ' is greater then ' + a);
}
// Using ternary operator
a > b === true 
    ? console.log(a + ' is greater then ' + b)
    : console.log(b + ' is greater then ' + a);

let number = prompt('Enter a number:');
(number % 2 === 0) = true
    ? console.log(number + ' is an even number')
    : console.log(number + ' is an odd number');