function solveLinEquation(x, y, a = 1, b = 1, c = 0) {
    const result = a * x + b * y + c;
    return result;
}
console.log(solveLinEquation(2, 3)); // Default a=1, b=1, c=0
console.log(solveLinEquation(2, 3, 2, 3, 4)); // Custom a=2, b=3, c=4

function solveQuadEquation(a , b , c){
    let solution = [];
    if(a === 0 && b === 0){
        solution = null;
        return solution;
    }
    if(a === 0){
        solution.push(-c / b);
        return solution;
    }

    let delta  = (b ** 2) - (4 * a * c);
    if (delta > 0){
        let x1 = ((-b) - Math.sqrt(delta))/(2 * a);
        let x2 = ((-b) + Math.sqrt(delta))/(2 * a);
        solution.push(x1,x2);
        return solution;
    }else if(delta === 0){
        let x = (-b)/c;
        solution.push(x);
        return solution;
    }else{
        return solution;
    }
}
console.log(solveQuadEquation(1,-1,0));

function printArray(arr){
    for ( let i = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
    }
}
printArray([1,2,3]);

function showDateTime(){
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    day = day < 10 ? '0' + day : day ;
    month = month < 10 ? '0' + month : month ;
    minutes = minutes < 10 ? '0' + minutes : minutes ;
    hours = hours < 10 ? '0' + hours : hours ;
    
    console.log(day + '/' + month + '/' + year + '\t' + hours + ':' + minutes);
}
showDateTime();

function capitalizeArray(array){
    for ( let i = 0 ; i < array.length ; i++){
         array[i] = array[i].toUpperCase();
    }
    console.log(array);
}
capitalizeArray(['mekki','moad','ahmed']);

function addItem ( item ){
    let items = ['Coffee' , 'Tea' , 'Milk'];
    items.push(item);
    return items;
}
console.log(addItem('Water'));

function removeItem ( item ){
    let items = ['Coffee' , 'Tea' , 'Milk'];
    let index = items.indexOf(item);
    if (index !== -1){
    items.splice(index,1);
    return items;
    }
    return null
}
console.log(removeItem('Coffee'));

function sumOfNumbers(number){
    let sum = 0;
    for (let i = 0 ; i <= number ; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(5));

function sumOfOdds(num){
    let sum = 0;
    for (let i = 0 ; i <= num ; i++){
        if (i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOdds(5));

function evensAndOdds(integer){
    let evens = 0;
    let odds = 0;
    for (let i = 1; i <= integer ; i++){
        if (i % 2 === 0){
            odds++;
        }else{
            evens++;
        }
    }
    console.log('The number of odds are ' + odds);
    console.log('The number of evens are ' + evens);
}
evensAndOdds(100);

const sum = (...arg) => {
    let sum = 0;
    for (const element of arg){
        sum += element;
    }
    return sum;
}
console.log(sum(1,2,3));

function randomUserIp() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}
console.log(randomUserIp());

function randomMacAddress(){
    let hexChars = "123456789ABCDEF";
    let mac = '';
    let pair ;
    for (let i = 0 ; i < 6 ; i++){
        pair = hexChars[Math.floor(Math.random()*16)] + hexChars[Math.floor(Math.random()*16)];
        mac += pair;
    }
    return mac;
}
console.log(randomMacAddress());
