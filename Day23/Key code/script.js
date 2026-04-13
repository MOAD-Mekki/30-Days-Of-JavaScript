const display = document.getElementById("display");

// Style the display container
display.style.textAlign = "center";
display.style.marginTop = "50px";
display.style.fontFamily = "Arial, sans-serif";

// Listen for keydown events
document.addEventListener("keydown", (event) => {
  // Clear previous content
  display.innerHTML = "";

  // Create message: "You pressed Enter"
  const message = document.createElement("h1");
  message.textContent = `You pressed ${event.key}`;
  message.style.color = "green";
  display.appendChild(message);

  // Show key code number
  const codeBox = document.createElement("div");
  codeBox.textContent = event.keyCode; // numeric code
  codeBox.style.fontSize = "80px";
  codeBox.style.backgroundColor = "green";
  codeBox.style.color = "white";
  codeBox.style.display = "inline-block";
  codeBox.style.padding = "20px 40px";
  codeBox.style.borderRadius = "10px";
  display.appendChild(codeBox);
});
