let arr = Array();
console.log(arr);
let array = [1,2,3,4,5,6,7];
let lenght = array.length;
console.log(lenght);
console.log('The first item of the array: ' + array[0]);
console.log('The middle item of the array: ' + array[(lenght-1)/2]);
console.log('The last item of the array: ' + array[lenght-1]);
let mixeDataTypes = [0,'Hello',true,'Hi',2,14.5,false];
console.log(mixeDataTypes.length);
let itCompanies = ['Facebook', 'Google' , 'Microsoft' , 'Apple' , 'IBM' , 'Oracle' ,'Amazon'];
console.log(itCompanies);
let numOfCompanies = itCompanies.length;
console.log('Number of IT Companies: ' + numOfCompanies);
console.log('The first Companie of the array: ' + itCompanies[0]);
console.log('The middle Companie of the array: ' + itCompanies[(numOfCompanies-1)/2]);
console.log('The last Companie of the array: ' + itCompanies[numOfCompanies-1]);
for(let i = 0 ; i<numOfCompanies ;i++){
    console.log(itCompanies[i]);
    console.log(itCompanies[i].toUpperCase());
}
let sentence = itCompanies.toString();
console.log(sentence);
let Companie = 'Apple' ;
itCompanies.includes(Companie) 
    ? console.log(Companie)
    : console.log(Companie + ' not found');
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(numOfCompanies-3,numOfCompanies));
console.log(itCompanies.slice(numOfCompanies-1/2));
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice((numOfCompanies-1/2),1);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
itCompanies.splice();
console.log(itCompanies);