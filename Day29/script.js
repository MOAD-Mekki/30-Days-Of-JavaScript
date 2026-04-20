// Function to generate random color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Elements
const lines = [
  document.getElementById("line1"),
  document.getElementById("line2"),
  document.getElementById("line3"),
  document.getElementById("line4")
];

// Animate each line every second
let visible = true;
setInterval(() => {
  lines.forEach(line => {
    if (visible) {
      line.style.opacity = "1";
      line.style.transform = "scale(1)";
      line.style.color = randomColor();
    } else {
      line.style.opacity = "0";
      line.style.transform = "scale(0.8)";
    }
  });
  visible = !visible; // toggle state
}, 1000);
