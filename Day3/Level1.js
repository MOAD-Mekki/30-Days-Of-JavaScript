let firstName = "Mekki";
let lastName = "Moad";
let country = "Algeria";
let city = "Oran";
let age = 18;
let isMarried = false;
let year = 2026;
console.log(typeof(firstName) , typeof(lastName) , typeof(age) , typeof(isMarried));
console.log(parseInt('9.8') === 10);
8.4 > 3 // true
4 != 4 // false (!==)
4 === '4'// false (different data type)
4 == '4'// false (===)
const string1 = 'paython';
const string2 = 'jargon';
console.log(string1.length === string2.length);
4 > 3 && 10 < 12 // true (true and true = true)
4 > 3 || 10 > 12 // true (the first statment is true)
!(false) // true
!(4 > 3 && 10 > 12) // true (the inner statment is false)
'There is no (on) in both dragon and python' // false
console.log(string1.search('on') && string2.search('on'));
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());