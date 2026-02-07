const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()

try {
    let x = 10 / 0;  
    throw new Error("Division by zero!");  
} catch (e) {
    console.log(e.message); 
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    divide(10, 0);
} catch (e) {
    console.log(e.message);  
}
