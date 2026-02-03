let month = prompt('Enter a month: ');
let Month = month.charAt(0).toUpperCase() + month.toLowerCase.slice(1);
switch(Month){
    case 'January' :
        console.log(Month + ' has 31 days');
        break;
    case 'February' :
        console.log(Month + ' has 28 days');
        break;
    case 'March' :
        console.log(Month + ' has 31 days');
        break;
    case 'April' :
        console.log(Month + ' has 30 days');
        break;
    case 'May' :
        console.log(Month + ' has 31 days');
        break;
    case 'June' :
        console.log(Month + ' has 30 days');
        break;
    case 'July' :
        console.log(Month + ' has 31 days');
        break;
    case 'August' :
        console.log(Month + ' has 31 days');
        break;
    case 'September' :
        console.log(Month + ' has 30 days');
        break;
    case 'October' :
        console.log(Month + ' has 31 days');
        break;
    case 'November' :
        console.log(Month + ' has 30 days');
        break;
    case 'December' :
        console.log(Month + ' has 31 days');
        break;
    default:
        console.log('Invalid month');
}

// Considering the leap year 
let year = prompt('What has the year');
let isLeap = false;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    isLeap = true;
} if(Month === 'February' && isLeap){
    console.log(Month + ' has 29 days');
}