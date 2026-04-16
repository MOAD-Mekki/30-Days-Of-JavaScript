// Population data
const populationData = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "USA", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russia", population: 146599183 },
  { country: "Japan", population: 126960000 }
];

// Languages data
const languagesData = [
  { language: "English", count: 91 },
  { language: "French", count: 45 },
  { language: "Arabic", count: 25 },
  { language: "Spanish", count: 24 },
  { language: "Portuguese", count: 9 },
  { language: "Russian", count: 9 },
  { language: "Dutch", count: 8 },
  { language: "German", count: 7 },
  { language: "Chinese", count: 5 },
  { language: "Serbian", count: 4 }
];

function renderChart(data, labelKey, valueKey, title) {
  chartContainer.innerHTML = ""; // clear previous chart

  const heading = document.createElement("h3");
  heading.textContent = title;
  chartContainer.appendChild(heading);

  // Find max value for scaling
  const maxValue = Math.max(...data.map(item => item[valueKey]));

  data.forEach(item => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.margin = "5px 0";

    const label = document.createElement("span");
    label.textContent = item[labelKey];
    label.style.width = "150px";
    row.appendChild(label);

    const bar = document.createElement("div");
    bar.style.height = "25px";
    bar.style.backgroundColor = "orange";
    bar.style.width = `${(item[valueKey] / maxValue) * 500}px`;
    row.appendChild(bar);

    const value = document.createElement("span");
    value.textContent = item[valueKey].toLocaleString();
    value.style.marginLeft = "10px";
    row.appendChild(value);

    chartContainer.appendChild(row);
  });
}

// Style the body
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f4f4f9";
document.body.style.margin = "0";
document.body.style.padding = "20px";
document.body.style.textAlign = "center";

// Style the main heading
const h1 = document.querySelector("h1");
h1.style.color = "#333";
h1.style.fontSize = "36px";
h1.style.marginBottom = "10px";

// Style the subheading
const h2 = document.querySelector("h2");
h2.style.color = "#666";
h2.style.fontSize = "20px";
h2.style.marginBottom = "20px";

// Style the buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  btn.style.backgroundColor = "orange";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.padding = "10px 20px";
  btn.style.margin = "10px";
  btn.style.fontSize = "16px";
  btn.style.fontWeight = "bold";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  
  // Add hover effect
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#ff9933";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "orange";
  });
});


document.getElementById("populationBtn").addEventListener("click", () => {
  renderChart(populationData, "country", "population", "10 Most Populated Countries in the World");
});

document.getElementById("languagesBtn").addEventListener("click", () => {
  renderChart(languagesData, "language", "count", "10 Most Spoken Languages in the World");
});
