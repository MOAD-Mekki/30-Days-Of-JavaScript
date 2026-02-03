for (let i = 0; i < 10; i++) {}
let i = 0;
while (i < 10) {
  i++;
}
i = 0;
do {
  i++;
} while (i < 10);
let n = prompt("Enter a number:");
for (let j = 0; j < n; j++) {}
let pattern = "";

for (let i = 1; i <= 7; i++) {
  pattern += "#";
  console.log(pattern);
}

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

console.log('i  i^2  i^3');
for (let i = 0 ; i <= 10 ; i++){
    console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}
console.log('Even numbers:');
let sumEven = 0;
for (let j = 0 ; j <= 100 ; j++){
    if(j % 2 === 0){
        console.log(j);
        sumEven += j;
    }
}
console.log('Odd numbers:');
let sumOdd = 0;
for (let j = 0 ; j <= 100 ; j++){
    if(j % 2 === 0){
        continue;
    }
    console.log(j);
    sumOdd += j;
}

console.log('Prime numbers:');
for (let j = 2 ; j <= 100 ; j++){
    let isPrime = true;
    for (let k = 2 ; k < j ; k++){
        if(j % k === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(j);
    }
}

let sum = 0;
for (let i = 0 ; i <= 100 ; i++){
    sum += i;
}
console.log('Sum of all numbers from 0 to 100 is ' + sum);
console.log('Sum of even numbers from 0 to 100 is ' + sumEven);
console.log('Sum of odd numbers from 0 to 100 is ' + sumOdd);
console.log('Difference between sum of even and odd numbers is ' + Math.abs(sumEven - sumOdd));
let array = [sumEven,sumOdd];
console.log(array);
let numbers = [];

for (let i = 0 ; i < 5 ; i++){
    numbers.push(Math.floor(Math.random() * 100));
}
console.log(numbers);

numbers = [];
while(numbers.length < 5){
    let randomNum = Math.floor(Math.random() * 100);

    if(numbers.includes(randomNum)){
        continue;
    }
    numbers.push(randomNum);
}
console.log(numbers);

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomId = '';

for (let i = 0 ; i < 6 ; i++){
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomId = randomId + characters[randomIndex];
}
console.log(randomId);
