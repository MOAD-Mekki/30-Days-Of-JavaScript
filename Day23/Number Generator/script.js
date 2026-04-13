const inputNumber = document.getElementById("inputNumber");
const generateBtn = document.getElementById("generateBtn");
const numbersContainer = document.getElementById("numbersContainer");

// Style the container as a grid
numbersContainer.style.display = "grid";
numbersContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(80px, 1fr))";
numbersContainer.style.gap = "5px";
numbersContainer.style.marginTop = "20px";
numbersContainer.style.textAlign = "center";

// Function to check prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Generate numbers when button is clicked
generateBtn.addEventListener("click", () => {
  numbersContainer.innerHTML = ""; // clear previous numbers
  const limit = parseInt(inputNumber.value);

  for (let i = 0; i <= limit; i++) {
    const box = document.createElement("div");
    box.textContent = i;
    box.style.padding = "20px";
    box.style.fontWeight = "bold";
    box.style.fontSize = "20px";
    box.style.color = "black";

    // Color coding
    if (isPrime(i)) {
      box.style.backgroundColor = "red";   // Prime
    } else if (i % 2 === 0) {
      box.style.backgroundColor = "green"; // Even
    } else {
      box.style.backgroundColor = "yellow"; // Odd
    }

    numbersContainer.appendChild(box);
  }
});
