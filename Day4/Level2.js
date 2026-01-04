let score = prompt('Enter your score');
switch (score) {
    case score>=0 && score<=49 :
        console.log('Your grade is F');
        break;
    case score>49 && score<=59 :
        console.log('Your grade is D');
        break;
    case score> 59 && score<=69 :
        console.log('Your grade is C');
        break;
    case score>69 && score<=89 :
        console.log('Your grade is B');
        break;
    case score>89 && score<=100 :
        console.log('Your grade is A');
        break;
    default:
        console.log('Invalid score');
}

let season = prompt('Enter the season:');
switch(season){
    case ['September' , 'October' , 'November']:
        console.log('The season is Autumn');
        break;
    case ['December' , 'January' , 'February']:
        console.log('The season is Winter');
        break;
    case ['March' , 'April' , 'May']:
        console.log('The season is Spring');
        break;
    case ['June' , 'July' , 'August']:
        console.log('The season is Summer');
        break;
}

let Day = prompt('What is the day today? ');
let Daylowerd = Day.charAt(0).toUpperCase() + Day.toLowerCase().slice(1);
if(Daylowerd === 'Saturday' || Daylowerd === 'Friday'){
    console.log(Daylowerd + ' is a weekend');
}else{
    console.log(Daylowerd + ' is a working day');
}