const planetGravity = {
  Mercury: 3.7,
  Venus: 8.87,
  Earth: 9.81,
  Mars: 3.71,
  Jupiter: 24.79,
  Saturn: 10.44,
  Uranus: 8.69,
  Neptune: 11.15,
  Pluto: 0.62
};

const massInput = document.getElementById("mass");
const planetSelect = document.getElementById("planet");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const mass = parseFloat(massInput.value);
  const planet = planetSelect.value;

  resultDiv.innerHTML = ""; // clear previous result

  if (!mass || !planet) {
    resultDiv.textContent = "Please enter mass and select a planet.";
    resultDiv.style.color = "red";
    return;
  }

  const gravity = planetGravity[planet];
  const weight = (mass * gravity).toFixed(2);

  // Show result
  const message = document.createElement("h2");
  message.textContent = `The weight of the object on ${planet} is:`;
  message.style.color = "grey";
  resultDiv.appendChild(message);

  const box = document.createElement("div");
  box.textContent = `${weight} N`;
  box.style.fontSize = "40px";
  box.style.backgroundColor = "green";
  box.style.color = "white";
  box.style.display = "inline-block";
  box.style.padding = "20px 40px";
  box.style.borderRadius = "10px";
  resultDiv.appendChild(box);
});
