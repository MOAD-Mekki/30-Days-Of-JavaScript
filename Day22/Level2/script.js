import countries from "./countries.js";

document.getElementById("count").textContent = countries.length;

const container = document.getElementById("countries-container");

container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))";
container.style.gap = "10px";
container.style.marginTop = "20px";

countries.forEach(country => {
  const countryDiv = document.createElement("div");
  countryDiv.textContent = country.toUpperCase();
  
  countryDiv.style.border = "1px solid #ccc";
  countryDiv.style.padding = "15px";
  countryDiv.style.textAlign = "center";
  countryDiv.style.fontWeight = "bold";
  countryDiv.style.backgroundColor = "#f5f5f5";
  countryDiv.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.1)";
  
  container.appendChild(countryDiv);
});
