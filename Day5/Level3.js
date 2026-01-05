import countries from "./countries2.js";  

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let minAge = ages[0];
console.log('The minimum age is ' + minAge);
let maxAge = ages[ages.length-1];
console.log('The maximum age is ' + maxAge);
let midian = ages[(Math.floor(ages.length))/2];
console.log('The midian age is ' + midian);
let sum = 0;
for(let i = 0 ; i<ages.length ; i++){
    sum += ages[i];
}
let average = sum/ages.length;
console.log('The average age is ' + average);
let range = maxAge - minAge;
console.log('The range is ' + range);
let MinDiff = Math.abs(minAge - average); 
let MaxDiff = Math.abs(maxAge - average);
console.log(MinDiff); 
console.log(MaxDiff); 
console.log(countries.slice(0,10));
let middleIndex = Math.floor(countries.length / 2);
let middleCountry;
if(middleIndex % 2 === 0){//Even index
    middleCountry = countries.slice(middleIndex-1 , middleIndex+1);
}else{
    middleCountry = countries[middleIndex];
}
console.log(middleCountry);
let firstHalf;
let secondHalf;
if(middleIndex % 2 === 0){
    firstHalf = countries.slice(0 , middleIndex+1);
    secondHalf = countries.slice(middleIndex+1 );
    console.log(firstHalf);
    console.log(secondHalf);
}else{
    firstHalf = countries.slice(0 , middleIndex);
    secondHalf = countries.slice(middleIndex );
    console.log(firstHalf);
    console.log(secondHalf);
}
console.log(firstHalf.length);
console.log(secondHalf.length);