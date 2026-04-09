function outer(){
    let counter = 0;

    function inner(){
        counter++;
        console.log(counter);
        
    }
    return inner();
}

outer();
outer();
outer();

function multiOuter(){
    let number = 5;

    function plusOne(){
        number++;
        console.log(number);
    }
    function minusOne(){
        number--;
        console.log(number);
    }
    function toZero(){
        number = 0;
        console.log(number);
    }

    return{
        plusOne: plusOne(),
        minusOne: minusOne(),
        toZero: toZero
    }
}
const multiFunction = multiOuter();

multiFunction.plusOne;
multiFunction.minusOne;
multiFunction.toZero;