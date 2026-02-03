let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
month = month < 10 
? '0' + month
: month;
let date = now.getDate();
date = date < 10 
? '0' + date
: date;
let hours = now.getHours();
hours = hours < 10
? '0' + hours
: hours;
let minutes = now.getMinutes();
minutes = minutes < 10
? '0' + minutes
: minutes;
console.log(year + '-' + month + '-' + date + ' ' + hours + ':' + minutes);