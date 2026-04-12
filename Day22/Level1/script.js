const container = document.getElementById("number-container");

container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(10, 1fr)";
container.style.gap = "5px";
container.style.marginTop = "20px";
container.style.textAlign = "center";

function isPrime(number){
    if (number < 2) return false;
    for (let i = 2 ; i < Math.sqrt(number) ; i++){
        if (number % i === 0) return false;
    }

    return true;
}

for (let i = 1 ; i <= 100 ; i++){
    let numberDiv = document.createElement("div");
    numberDiv.textContent = i;
    numberDiv.style.padding = "10px";
    numberDiv.style.fontWeight = "bold";
    numberDiv.style.color = "white";

    if (isPrime(i)){
        numberDiv.style.backgroundColor = "red";
    }else if (i % 2 === 0) {
        numberDiv.style.backgroundColor = "green";
    }else {
    numberDiv.style.backgroundColor = "yellow"; 
    numberDiv.style.color = "black"; 
    }

    numberDiv.appendChild(container);
}